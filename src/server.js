import { Octokit } from '@octokit/core';
import express from 'express';
import { Readable } from 'node:stream';
import dotenv from 'dotenv';
import { getRandomPersona, getPersonaUUIDs } from './personas.js';

// Load environment variables
dotenv.config();

/**
 * Enhanced logging utility for debugging
 * WARNING: This logs UNSANITIZED data - for local development only!
 * Uses structured JSON logging for better monitoring and debugging
 *
 * @param {string} label - Log section label
 * @param {*} data - Data to log
 */
const debugLog = (label, data) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: 'DEBUG',
    service: 'checkmark-copilot-extension',
    label,
    data,
  };

  // Log the structured entry with full depth and coloring, preserving built-in formatting
  console.dir(logEntry, { depth: null, colors: true });
};

const app = express();

// Add request logging middleware
app.use((req, res, next) => {
  debugLog('Incoming Request', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    userAgent: req.get('User-Agent'),
    accept: req.get('Accept'),
  });
  next();
});

/**
 * Root endpoint - health check
 */
app.get('/', (req, res) => {
  res.send('🎯 CheckMark Copilot Extension is running! Ready for agent mode testing.');
});

/**
 * GitHub OAuth callback endpoint
 * Handles the OAuth callback from GitHub App installation/authorization
 */
app.get('/checkmarkchat/callback', async (req, res) => {
  try {
    debugLog('OAuth Callback Request', {
      query: req.query,
      headers: req.headers,
    });

    const { code, state, error, error_description } = req.query;

    // Handle OAuth errors
    if (error) {
      debugLog('OAuth Error', { error, error_description });

      const userAgent = req.get('User-Agent') || '';
      const acceptHeader = req.get('Accept') || '';

      if (acceptHeader.includes('text/html') || userAgent.includes('Mozilla')) {
        return res.status(400).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Authorization Failed</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
              <h1>GitHub Authorization Failed</h1>
              <p>Error: ${error_description || error}</p>
              <p>You can close this window and try again.</p>
            </body>
          </html>
        `);
      }

      return res.status(400).json({
        success: false,
        error,
        error_description,
        timestamp: new Date().toISOString(),
      });
    }

    // Validate required parameters
    if (!code) {
      debugLog('OAuth Missing Code', req.query);

      const userAgent = req.get('User-Agent') || '';
      const acceptHeader = req.get('Accept') || '';

      if (acceptHeader.includes('text/html') || userAgent.includes('Mozilla')) {
        return res.status(400).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Authorization Error</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
              <h1>GitHub Authorization Error</h1>
              <p>Missing authorization code from GitHub.</p>
              <p>You can close this window and try the authorization again.</p>
            </body>
          </html>
        `);
      }

      return res.status(400).json({
        success: false,
        error: 'missing_code',
        error_description: 'Missing authorization code from GitHub',
        timestamp: new Date().toISOString(),
      });
    }

    // Initialize Octokit for token exchange
    const octokit = new Octokit();

    const tokenResponse = await octokit.request('POST /login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
      state: state,
      headers: {
        Accept: 'application/json',
      },
    });

    debugLog('Token Exchange Response', tokenResponse.data);

    if (tokenResponse.data.error) {
      debugLog('Token Exchange Error', tokenResponse.data);

      const userAgent = req.get('User-Agent') || '';
      const acceptHeader = req.get('Accept') || '';

      if (acceptHeader.includes('text/html') || userAgent.includes('Mozilla')) {
        return res.status(400).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Authorization Failed</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
              <h1>GitHub Authorization Failed</h1>
              <p>Error: ${tokenResponse.data.error_description || tokenResponse.data.error}</p>
              <p>You can close this window and try again.</p>
            </body>
          </html>
        `);
      }

      return res.status(400).json({
        success: false,
        error: tokenResponse.data.error,
        error_description: tokenResponse.data.error_description,
        timestamp: new Date().toISOString(),
      });
    }

    // Success response - handle different client types
    const userAgent = req.get('User-Agent') || '';
    const acceptHeader = req.get('Accept') || '';

    debugLog('Client Detection', {
      userAgent,
      acceptHeader,
      isBrowser: userAgent.includes('Mozilla'),
      acceptsHTML: acceptHeader.includes('text/html'),
      acceptsJSON: acceptHeader.includes('application/json'),
    });

    // If client prefers HTML or is a browser, send HTML response
    if (acceptHeader.includes('text/html') || userAgent.includes('Mozilla')) {
      return res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authorization Successful</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              /* cspell:disable-next-line */
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; margin: 40px; text-align: center; }
              .success { color: #28a745; }
              .container { max-width: 600px; margin: 0 auto; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1 class="success">🎉 GitHub App Authorized Successfully!</h1>
              <p>You can now close this window and return to your application.</p>
              <p>The CheckMark Copilot extension is ready to use!</p>
            </div>
          </body>
        </html>
      `);
    }

    // For API clients, mobile apps, etc. - send JSON response
    res.json({
      success: true,
      message: 'GitHub App authorized successfully!',
      timestamp: new Date().toISOString(),
      // Don't send the actual token in response for security
      tokenReceived: !!tokenResponse.data.access_token,
    });
  } catch (error) {
    debugLog('OAuth Callback Error', {
      message: error.message,
      stack: error.stack,
    });

    const userAgent = req.get('User-Agent') || '';
    const acceptHeader = req.get('Accept') || '';

    if (acceptHeader.includes('text/html') || userAgent.includes('Mozilla')) {
      return res.status(500).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authorization Error</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <h1>GitHub Authorization Error</h1>
            <p>An internal server error occurred during authorization.</p>
            <p>You can close this window and try again.</p>
            <details>
              <summary>Technical Details</summary>
              <p>${error.message}</p>
            </details>
          </body>
        </html>
      `);
    }

    res.status(500).json({
      success: false,
      error: 'internal_server_error',
      error_description: 'An internal server error occurred during authorization',
      timestamp: new Date().toISOString(),
      details: error.message,
    });
  }
});

/**
 * CheckMark Chat endpoint - main Copilot extension endpoint
 * Handles POST requests from GitHub Copilot at /checkmarkchat
 */
app.post('/checkmarkchat/completions', express.json(), async (req, res) => {
  try {
    // Log raw request for debugging
    // debugLog('Raw Request Headers', req.headers);
    // debugLog('Raw Request Body', req.body);

    // Extract GitHub token from headers
    const tokenForUser = req.get('X-GitHub-Token');
    if (!tokenForUser) {
      debugLog('ERROR', 'No X-GitHub-Token header found');
      return res.status(401).json({ error: 'Missing authentication token' });
    }

    // debugLog('Token Present', `Token length: ${tokenForUser.length} characters`);

    // Validate user identity with octokit (removed unused variable to fix lint error)

    // Log the complete payload for debugging
    const payload = req.body;
    // debugLog('Complete Payload', payload);

    // // Parse and log the payload
    // debugLog('Copilot Payload Structure', {
    //   hasMessages: !!payload.messages,
    //   messageCount: payload.messages?.length || 0,
    //   hasContext: !!payload.context,
    //   contextKeys: payload.context ? Object.keys(payload.context) : [],
    //   contextFileCount: payload.context?.files?.length || 0,
    //   contextFiles: payload.context?.files?.map(file => file.name || file.path || 'unnamed') || [],
    //   contextTools: payload.context?.tools?.map(tool => tool.name || tool.type || 'unnamed') || [],
    //   otherKeys: Object.keys(payload).filter(key => !['messages', 'context'].includes(key))
    // });

    // if (payload.messages) {
    // debugLog('Messages Detail', payload.messages.map((msg, index) => ({
    //   index,
    //   role: msg.role,
    //   contentLength: msg.content?.length || 0,
    //   contentPreview: msg.content?.substring(0, 100) + (msg.content?.length > 100 ? '...' : ''),
    //   otherProps: Object.keys(msg).filter(key => !['role', 'content'].includes(key))
    // })));
    // }

    // Clone messages array to avoid mutation
    const messages = [...payload.messages];
    // Log the raw messages array to inspect content (e.g., '@checkmarkchat' mention)
    debugLog('Initial Messages Array', messages);

    // Get persona data
    const selectedPersona = getRandomPersona();
    const personaUUIDs = getPersonaUUIDs();

    // Remove any existing persona messages - simple loop
    const originalLength = messages.length;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (
        messages[i].role === 'system' &&
        messages[i].content &&
        personaUUIDs.some((uuid) => messages[i].content.includes(uuid))
      ) {
        messages.splice(i, 1);
      }
    }
    const removedAny = originalLength !== messages.length;

    debugLog('Persona Cleanup', { removedAny });

    // Add the new persona at the beginning
    messages.unshift({
      role: 'system',
      content: `${selectedPersona.systemMessage} [UUID: ${selectedPersona.id}]`,
    });
    // Log the messages array after persona injection to verify final content
    debugLog('Final Messages Array', messages);

    // debugLog('Persona Selection', {
    //   selectedPersona: selectedPersona.title,
    //   personaId: selectedPersona.id
    // });

    // debugLog('Enhanced Messages Array', {
    //   totalMessages: messages.length,
    //   systemMessages: messages.filter(m => m.role === 'system').length,
    //   userMessages: messages.filter(m => m.role === 'user').length,
    //   assistantMessages: messages.filter(m => m.role === 'assistant').length
    // });

    // Prepare request to Copilot LLM
    const copilotRequest = {
      messages,
      stream: true,
    };

    debugLog('Copilot LLM Request', copilotRequest);

    // Call Copilot's LLM API
    const copilotLLMResponse = await fetch('https://api.githubcopilot.com/chat/completions', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${tokenForUser}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(copilotRequest),
    });

    // debugLog('Copilot LLM Response Status', {
    //   status: copilotLLMResponse.status,
    //   statusText: copilotLLMResponse.statusText,
    //   headers: Object.fromEntries(copilotLLMResponse.headers.entries())
    // });

    if (!copilotLLMResponse.ok) {
      const errorText = await copilotLLMResponse.text();
      debugLog('Copilot API Error', errorText);
      return res.status(copilotLLMResponse.status).json({
        error: 'Failed to get response from Copilot API',
        details: errorText,
      });
    }

    // Stream the response back to the user
    debugLog('Streaming Response', 'Starting to pipe response back to client');
    Readable.from(copilotLLMResponse.body).pipe(res);
  } catch (error) {
    debugLog('Unhandled Error', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal server error',
        message: error.message,
      });
    }
  }
});

// Start the server
const port = Number(process.env.PORT || '3000');
const host = process.env.HOST || '0.0.0.0'; // Bind to all interfaces for tunnel access

app.listen(port, host, () => {
  const startupLog = {
    timestamp: new Date().toISOString(),
    level: 'INFO',
    service: 'checkmark-copilot-extension',
    event: 'server_started',
    data: {
      port,
      host,
      localUrl: `http://localhost:${port}`,
      chatEndpoint: `/checkmarkchat/completions`,
      callbackEndpoint: `/checkmarkchat/callback`,
      githubClientId: process.env.GITHUB_CLIENT_ID ? 'configured' : 'missing',
      githubClientSecret: process.env.GITHUB_CLIENT_SECRET ? 'configured' : 'missing',
    },
  };

  console.log(startupLog);
});
