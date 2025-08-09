# 🛠️ Development Setup Guide

Welcome to the developer side of the CheckMark Copilot Extension! This guide will get you up and running faster than you can say "npm install". 🚀

## 🎯 Prerequisites

### Required Tools

- **Node.js** v20+ (we use v24.4.1 with Volta)
- **npm** v10+ (we use v11.4.2 with Volta)
- **VS Code** (obviously! Latest stable version recommended)
- **Git** (for version control magic)

### Recommended Tools

- **Volta** (for Node.js version management - already configured!)
- **GitHub CLI** (for seamless GitHub integration)
- **VS Code Extensions:**
  - GitHub Copilot (for the full experience)
  - ESLint (for code quality)
  - Prettier (for consistent formatting)
  - Conventional Commits (for commit message help)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/CheckMarKDevTools/checkmark-copilot-chat.git
cd checkmark-copilot-chat

# Install dependencies (Volta will handle Node.js version automatically)
npm install

# Install Husky hooks for commit quality
npm run prepare
```

### 2. Development Workflow

```bash
# Run linting
npm run lint

# Format code
npm run format

# Check spelling
npm run spellcheck

# Run all checks before committing
npm run lint && npm run format && npm run spellcheck
```

### 3. Testing (When Available)

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Project Structure Deep Dive

```
checkmark-copilot-chat/
├── 📁 .github/                   # GitHub-specific files
│   ├── 📄 copilot-instructions.md  # Custom Copilot behavior rules
│   ├── 📁 instructions/            # Development guidelines
│   ├── 📁 prompts/                 # Reusable prompt templates
│   ├── 📁 workflows/               # GitHub Actions CI/CD
│   └── 📁 ISSUE_TEMPLATES/         # Fun issue templates
├── 📁 .husky/                    # Git hooks for quality control
├── 📁 .vscode/                   # VS Code workspace settings
├── 📁 docs/                      # Documentation (you are here!)
├── 📁 src/                       # Source code (future home)
│   ├── 📁 core/                    # Core extension logic
│   ├── 📁 modes/                   # Individual chat modes
│   ├── 📁 utils/                   # Shared utilities
│   └── 📁 types/                   # TypeScript definitions
├── 📁 resources/                 # Static assets (future)
├── 📁 tests/                     # Test suites (future)
└── 📄 package.json              # Project configuration
```

## 🎭 Chat Mode Development

### Creating a New Chat Mode

1. **Define the Mode**

```javascript
// src/modes/myCustomMode.js
export const myCustomMode = {
  name: 'my-custom',
  displayName: '🎯 My Custom Mode',
  description: 'Does amazing custom things',

  // Mode-specific prompt enhancement
  enhancePrompt: (userPrompt, context) => {
    return `${userPrompt}

    Additional context: You are in custom mode.
    Follow security principles and design patterns.
    Be helpful and fun but professional.`;
  },

  // Input validation
  validateInput: (input) => {
    // Validate and sanitize input
    return sanitizedInput;
  },

  // Output processing
  processOutput: (output) => {
    // Process and validate output
    return processedOutput;
  },
};
```

2. **Register the Mode**

```javascript
// src/core/chatModeManager.js
import { myCustomMode } from '../modes/myCustomMode.js';

registerChatMode(myCustomMode);
```

3. **Add Documentation**

```markdown
## 🎯 My Custom Mode

**What it does:** Brief description of functionality
**Personality:** The mode's "voice" and approach
**Best for:** Specific use cases and scenarios
**Secret power:** What makes this mode special

**Usage:**
\`\`\`
/chat my-custom
\`\`\`
```

## 🔐 Security Development Guidelines

### Input Validation

```javascript
// Always validate and sanitize user input
function validateInput(input) {
  // Check for common injection patterns
  const dangerousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i];

  if (dangerousPatterns.some((pattern) => pattern.test(input))) {
    throw new SecurityError('Potentially dangerous input detected');
  }

  return sanitize(input);
}
```

### Output Sanitization

```javascript
// Sanitize all output before displaying
function sanitizeOutput(output) {
  return output
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
```

### Secret Management

```javascript
// NEVER do this
const apiKey = 'sk-1234567890abcdef'; // ❌ WRONG

// DO this instead
const apiKey = process.env.COPILOT_API_KEY; // ✅ CORRECT
if (!apiKey) {
  throw new Error('Missing required API key');
}
```

## 🧪 Testing Philosophy

### Test Categories

1. **Unit Tests** - Individual functions and components
2. **Integration Tests** - Chat mode interactions
3. **Security Tests** - Input validation and output sanitization
4. **E2E Tests** - Full user workflows

### Test Structure

```javascript
// tests/modes/docDoctor.test.js
describe('Doc Doctor Mode', () => {
  describe('Input Validation', () => {
    it('should reject malicious input', () => {
      const maliciousInput = '<script>alert("xss")</script>';
      expect(() => docDoctor.validateInput(maliciousInput)).toThrow(
        'Potentially dangerous input detected',
      );
    });
  });

  describe('Prompt Enhancement', () => {
    it('should enhance prompts with doc-specific context', () => {
      const basePrompt = 'Write documentation for this function';
      const enhanced = docDoctor.enhancePrompt(basePrompt, context);
      expect(enhanced).toContain('documentation');
      expect(enhanced).toContain('security principles');
    });
  });
});
```

## 🎨 Code Style Guidelines

### General Principles

- **Explicit over implicit** - Make intentions clear
- **Security by default** - Validate everything
- **Fun but professional** - Code should be enjoyable to read
- **Documentation mandatory** - Every function needs a purpose

### Naming Conventions

```javascript
// Variables: camelCase
const userInput = 'example';
const chatModeManager = new ChatModeManager();

// Functions: camelCase with descriptive verbs
function validateUserInput(input) {}
function enhancePromptWithContext(prompt, context) {}

// Classes: PascalCase
class ChatModeManager {}
class SecurityValidator {}

// Constants: SCREAMING_SNAKE_CASE
const MAX_PROMPT_LENGTH = 4000;
const DEFAULT_CHAT_MODE = 'doc-doctor';

// Chat modes: kebab-case
const CHAT_MODES = {
  'doc-doctor': docDoctorMode,
  'the-logfather': logFatherMode,
  'refactor-genie': refactorGenieMode,
};
```

### Documentation Standards

```javascript
/**
 * Validates and sanitizes user input for chat modes
 *
 * This function is critical for security - it prevents injection attacks
 * and ensures all user input is safe to process. Never bypass this validation!
 *
 * @param {string} input - Raw user input from chat interface
 * @param {Object} context - Current workspace context
 * @returns {string} Sanitized input safe for processing
 * @throws {SecurityError} When input contains dangerous patterns
 *
 * @example
 * const safeInput = validateUserInput('Write docs for my API', context);
 *
 * @security This function prevents XSS and injection attacks
 */
function validateUserInput(input, context) {
  // Implementation here
}
```

## 🔧 Configuration Management

### Environment Variables

```bash
# .env.sample (commit this)
COPILOT_API_KEY=your_api_key_here
LOG_LEVEL=info
SECURITY_ENABLED=true

# .env.local (DO NOT COMMIT)
COPILOT_API_KEY=sk-real-api-key-here
LOG_LEVEL=debug
```

### VS Code Settings

```json
// .vscode/settings.json
{
  "prettier.documentSelectors": ["!**/*.md"],
  "eslint.workingDirectories": ["./src"],
  "github.copilot.enable": {
    "*": true,
    "markdown": true
  }
}
```

## 🚨 Debugging and Troubleshooting

### Common Issues

#### "Cannot find module" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Husky hooks not working

```bash
# Reinstall Husky
npm run prepare
# Or manually
npx husky install
```

#### Linting errors

```bash
# Auto-fix what can be fixed
npm run lint
# Manual check
npx eslint . --fix
```

#### Spell check failures

```bash
# Add words to dictionary
echo "myCustomWord" >> .vscode/project-dict.txt
# Or run spell check to see suggestions
npm run spellcheck
```

### Debug Mode Setup

```bash
# Enable debug logging
export LOG_LEVEL=debug
export NODE_ENV=development

# Run with enhanced logging
npm run dev:debug
```

## 🎯 Contributing Guidelines

### Branch Strategy

- `main` - Production ready code
- `develop` - Integration branch (when we have contributors)
- `feature/*` - New features
- `hotfix/*` - Emergency fixes

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(chat-modes): add new custom mode for API documentation

Add support for automatically generating API documentation
from code comments and OpenAPI specifications.

- Validates input for security issues
- Integrates with existing doc-doctor mode
- Includes comprehensive tests

Closes #123
```

### Pull Request Process

1. Create feature branch
2. Make changes with tests
3. Run all quality checks
4. Create PR with clear description
5. Address review feedback
6. Celebrate when merged! 🎉

## 🦄 Fun Development Tips

### Easter Eggs

- Add TV show references in comments (but keep them professional)
- Use emoji in commit messages (sparingly)
- Create fun error messages that help debugging

### Quality of Life Improvements

```bash
# Alias for common commands
alias ccc="npm run lint && npm run format && npm run spellcheck"
alias cccp="ccc && git push"

# VS Code tasks for common operations
# (Add to .vscode/tasks.json)
```

### Productivity Hacks

- Use VS Code snippets for common patterns
- Set up live reload for rapid development
- Create templates for new chat modes

---

## 🚀 Ready to Contribute?

Remember:

- Security first, always
- Test your changes
- Have fun but be professional
- Ask questions when in doubt
- Credit others for their ideas

Happy coding! 🎉

_Generated by GitHub Copilot Chat directed by Ashley Childress on Sun Jul 20 23:39:06 EDT 2025._
