# 📦 Installation & Setup Guide

Get the CheckMark Copilot Extension running in your workspace faster than you can say "GitHub Copilot"! 🚀

## 🎯 Quick Install (Coming Soon!)

### From VS Code Marketplace

```bash
# Search for "CheckMark Copilot" in VS Code Extensions
# Or install via command line
code --install-extension checkmarkdevtools.checkmark-copilot-chat
```

### Prerequisites Check

Before installing, make sure you have:

- ✅ **VS Code** (version 1.70.0 or higher)
- ✅ **GitHub Copilot** extension installed and active
- ✅ **Active GitHub Copilot subscription**
- ✅ **Internet connection** (for AI magic)

## 🛠️ Manual Installation (For Early Adopters)

### Development Install

```bash
# Clone the repository
git clone https://github.com/CheckMarKDevTools/checkmark-copilot-chat.git
cd checkmark-copilot-chat

# Install dependencies
npm install

# Build the extension
npm run build

# Package the extension
npm run package

# Install the packaged extension
code --install-extension checkmark-copilot-chat-*.vsix
```

## ⚙️ Configuration

### Basic Setup

1. **Open VS Code Settings** (`Cmd/Ctrl + ,`)
2. **Search for "CheckMark Copilot"**
3. **Configure your preferences:**

```json
{
  "checkmarkCopilot.defaultMode": "doc-doctor",
  "checkmarkCopilot.securityLevel": "strict",
  "checkmarkCopilot.enableAllModes": true,
  "checkmarkCopilot.customPrompts": true
}
```

### Workspace-Specific Settings

Add to your `.vscode/settings.json`:

```json
{
  "checkmarkCopilot.workspaceMode": "development",
  "checkmarkCopilot.projectType": "node",
  "checkmarkCopilot.includedFiles": ["src/**/*.js", "docs/**/*.md", "*.json"],
  "checkmarkCopilot.excludedFiles": ["node_modules/**", ".git/**", "*.log"]
}
```

## 🎭 Chat Mode Configuration

### Enable Specific Modes

```json
{
  "checkmarkCopilot.modes": {
    "doc-doctor": {
      "enabled": true,
      "autoContext": true,
      "securityLevel": "strict"
    },
    "log-reviewr": {
      "enabled": true,
      "includeStackTraces": false,
      "sanitizeOutput": true
    },
    "refactor-genie": {
      "enabled": true,
      "preserveComments": true,
      "suggestTests": true
    },
    "ci-cd-wizard": {
      "enabled": true,
      "defaultPlatform": "github-actions",
      "includeSecurityScanning": true
    }
  }
}
```

### Custom Mode Templates

```json
{
  "checkmarkCopilot.customModes": {
    "my-team-mode": {
      "displayName": "🏢 Team Standards",
      "description": "Enforces our team's coding standards",
      "promptTemplate": "Follow our team guidelines: ${teamStandards}",
      "validation": "strict",
      "enabled": true
    }
  }
}
```

## 🔐 Security Configuration

### Security Levels

```json
{
  "checkmarkCopilot.security": {
    "level": "strict", // "strict" | "moderate" | "relaxed"
    "validateInput": true,
    "sanitizeOutput": true,
    "allowCodeExecution": false,
    "auditLog": true,
    "secretDetection": true
  }
}
```

### Input Validation Rules

```json
{
  "checkmarkCopilot.validation": {
    "maxPromptLength": 4000,
    "blockDangerousPatterns": true,
    "allowedFileTypes": [".js", ".ts", ".md", ".json", ".yml"],
    "blockedPatterns": ["eval\\(", "Function\\(", "<script", "javascript:"]
  }
}
```

## 🌍 Environment Setup

### Development Environment

```bash
# Set environment variables
export CHECKMARK_COPILOT_ENV=development
export CHECKMARK_COPILOT_LOG_LEVEL=debug
export CHECKMARK_COPILOT_SECURITY_STRICT=true

# For Windows PowerShell
$env:CHECKMARK_COPILOT_ENV = "development"
$env:CHECKMARK_COPILOT_LOG_LEVEL = "debug"
```

### Production Environment

```json
{
  "checkmarkCopilot.environment": "production",
  "checkmarkCopilot.logging": {
    "level": "info",
    "enableFileLogging": false,
    "enableTelemetry": true
  }
}
```

## 🎨 UI Customization

### Theme Integration

```json
{
  "checkmarkCopilot.ui": {
    "theme": "auto", // "auto" | "light" | "dark" | "high-contrast"
    "fontSize": "medium",
    "animations": true,
    "compactMode": false
  }
}
```

### Chat Interface

```json
{
  "checkmarkCopilot.chat": {
    "showModeIndicator": true,
    "enableAutoComplete": true,
    "historySize": 50,
    "enableMarkdownPreview": true,
    "syntaxHighlighting": true
  }
}
```

## 🔌 Integration Setup

### GitHub Integration

```json
{
  "checkmarkCopilot.github": {
    "enableIssueCreation": true,
    "defaultRepository": "owner/repo",
    "autoLinkIssues": true,
    "useGitHubCLI": true
  }
}
```

### Project Integration

```json
{
  "checkmarkCopilot.project": {
    "detectFramework": true,
    "autoLoadConfig": true,
    "respectGitignore": true,
    "includeTests": true
  }
}
```

## 🚨 Troubleshooting Setup

### Common Installation Issues

#### Extension Not Loading

```bash
# Check VS Code version
code --version

# Reload VS Code window
# Command Palette: "Developer: Reload Window"

# Check extension status
# View → Extensions → CheckMark Copilot
```

#### GitHub Copilot Not Connected

1. **Verify Copilot Status:** Check Copilot icon in status bar
2. **Re-authenticate:** Command Palette → "GitHub Copilot: Sign In"
3. **Check Subscription:** Ensure active Copilot subscription

#### Configuration Issues

```bash
# Reset to defaults
# Command Palette: "CheckMark Copilot: Reset Configuration"

# Check configuration
# Command Palette: "CheckMark Copilot: Show Configuration"

# Validate settings
# Command Palette: "CheckMark Copilot: Validate Settings"
```

### Diagnostic Commands

```bash
# Run diagnostics
# Command Palette: "CheckMark Copilot: Run Diagnostics"

# Check system requirements
# Command Palette: "CheckMark Copilot: System Info"

# View logs
# Command Palette: "CheckMark Copilot: Show Logs"
```

## 🎯 Verification Steps

### Test Your Installation

1. **Open VS Code**
2. **Access Copilot Chat** (usually `Ctrl/Cmd + I`)
3. **Try a basic command:**
   ```
   /chat doc
   Help me write a README for this project
   ```
4. **Verify mode switching:**
   ```
   /chat test
   Generate unit tests for this function
   ```

### Health Check Workflow

![Health Check Workflow](./diagrams/health-check-workflow.md)

## 🆘 Getting Help

### Self-Service Resources

- **Documentation:** Check [docs folder](./README.md)
- **Troubleshooting:** See [troubleshooting guide](./troubleshooting.md)
- **FAQ:** Review [frequently asked questions](./faq.md)

### Community Support

- **GitHub Issues:** [Open an issue](https://github.com/CheckMarKDevTools/checkmark-copilot-chat/issues)
- **Discussions:** [Join the conversation](https://github.com/CheckMarKDevTools/checkmark-copilot-chat/discussions)

### Priority Support

- **Security Issues:** Email `human@checkmarkdevtools.dev`
- **Bug Reports:** Use GitHub issues with detailed reproduction steps

## 🎉 You're All Set!

Congratulations! You now have the CheckMark Copilot Extension installed and configured. Time to explore the magical world of enhanced AI assistance! 🚀

### Next Steps

1. **Explore Chat Modes:** Try each mode to see what they can do
2. **Customize Settings:** Tailor the extension to your workflow
3. **Join Community:** Share your experience and learn from others
4. **Provide Feedback:** Help us make the extension even better

---

_Installation should be fun, not frustrating. If you hit any snags, we're here to help! 🤝_

<small>Generated by GitHub Copilot Chat directed by Ashley Childress on Sun Jul 20 23:39:06 EDT 2025.</small>
