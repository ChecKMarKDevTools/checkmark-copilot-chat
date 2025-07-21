# 🩺 Troubleshooting Guide

When things go sideways with the CheckMark Copilot Extension, this guide has your back! We've seen it all, fixed it all, and documented it all. 🛠️

## 🚨 Common Issues & Solutions

### Extension Not Loading

#### Symptoms

- Extension appears in list but doesn't activate
- No chat modes available
- Error messages on startup

#### Solutions

```bash
# 1. Check VS Code version compatibility
code --version
# Minimum required: 1.70.0

# 2. Reload VS Code window
# Command Palette → "Developer: Reload Window"

# 3. Reinstall extension
# Extensions panel → CheckMark Copilot → Uninstall → Reinstall

# 4. Reset VS Code extension cache
rm -rf ~/.vscode/extensions/.obsolete
# Restart VS Code
```

### GitHub Copilot Integration Issues

#### Symptoms

- "Copilot not available" errors
- Chat modes don't respond
- Authentication failures

#### Solutions

```bash
# 1. Verify Copilot status
# Check status bar for Copilot icon

# 2. Re-authenticate with GitHub
# Command Palette → "GitHub Copilot: Sign In"

# 3. Check subscription status
# Visit: https://github.com/settings/copilot

# 4. Restart Copilot service
# Command Palette → "GitHub Copilot: Restart Service"
```

### Chat Mode Not Working

#### Symptoms

- `/chat` commands not recognized
- Mode switching fails
- Responses are generic (not mode-specific)

#### Solutions

```json
// 1. Check mode configuration in settings.json
{
  "checkmarkCopilot.modes": {
    "doc-doctor": {
      "enabled": true
    }
  }
}

// 2. Reset mode configuration
// Command Palette → "CheckMark Copilot: Reset Mode Configuration"

// 3. Verify command syntax
// Correct: /chat doc
// Incorrect: /chatdoc or /chat-doc
```

### Performance Issues

#### Symptoms

- Slow response times
- VS Code freezing
- High CPU/memory usage

#### Solutions

```json
// 1. Adjust performance settings
{
  "checkmarkCopilot.performance": {
    "maxConcurrentRequests": 2,
    "requestTimeout": 30000,
    "enableCaching": true,
    "cacheSize": 100
  }
}

// 2. Reduce context size
{
  "checkmarkCopilot.context": {
    "maxFileSize": 50000,
    "maxFiles": 10,
    "includeNodeModules": false
  }
}
```

### Security Validation Errors

#### Symptoms

- "Input validation failed" messages
- Blocked prompts
- Security warnings

#### Solutions

```json
// 1. Adjust security level (temporarily)
{
  "checkmarkCopilot.security": {
    "level": "moderate" // from "strict"
  }
}

// 2. Review blocked patterns
{
  "checkmarkCopilot.validation": {
    "customPatterns": [
      // Add exceptions here
    ]
  }
}

// 3. Check for false positives
// Command Palette → "CheckMark Copilot: Review Security Log"
```

## 🔍 Diagnostic Tools

### Built-in Diagnostics

```bash
# Run comprehensive system check
# Command Palette → "CheckMark Copilot: Run Diagnostics"

# Check configuration validity
# Command Palette → "CheckMark Copilot: Validate Configuration"

# View extension health
# Command Palette → "CheckMark Copilot: Health Check"
```

### Log Analysis

```bash
# View extension logs
# Command Palette → "CheckMark Copilot: Show Logs"

# Enable debug logging
{
  "checkmarkCopilot.logging": {
    "level": "debug",
    "enableFileLogging": true
  }
}

# Check VS Code developer console
# Help → Toggle Developer Tools → Console
```

### System Information

```bash
# Get system info
# Command Palette → "CheckMark Copilot: System Information"

# Check extension dependencies
# Command Palette → "CheckMark Copilot: Dependency Check"
```

## 🛠️ Advanced Troubleshooting

### Clean Reinstall Process

```bash
# 1. Backup your settings
cp ~/.vscode/settings.json ~/settings-backup.json

# 2. Uninstall extension completely
# Extensions panel → CheckMark Copilot → Uninstall

# 3. Clear extension data
rm -rf ~/.vscode/extensions/checkmarkdevtools.checkmark-copilot-chat-*

# 4. Clear VS Code cache
rm -rf ~/.vscode/CachedExtensions
rm -rf ~/.vscode/logs

# 5. Restart VS Code
# 6. Reinstall extension
# 7. Restore settings if needed
```

### Configuration Reset

```bash
# Reset all CheckMark Copilot settings
# Command Palette → "CheckMark Copilot: Reset All Settings"

# Or manually remove from settings.json
{
  // Remove all entries starting with "checkmarkCopilot"
}
```

### Network Connectivity Issues

```bash
# 1. Check internet connection
ping github.com

# 2. Test GitHub API access
curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user

# 3. Check corporate firewall/proxy
# Contact IT for GitHub Copilot domain whitelist:
# - copilot-proxy.githubusercontent.com
# - api.githubcopilot.com

# 4. Configure proxy if needed
{
  "http.proxy": "http://your-proxy:port",
  "http.proxyStrictSSL": false
}
```

---

## 🐛 Error Code Reference

### Common Error Codes

#### CE-001: Extension Initialization Failed

```
Cause: Extension failed to start properly
Solution:
1. Check VS Code version compatibility
2. Restart VS Code
3. Reinstall extension
```

#### CE-002: Copilot Service Unavailable

```
Cause: GitHub Copilot service is not responding
Solution:
1. Check internet connection
2. Verify Copilot subscription
3. Restart Copilot service
```

#### CE-003: Mode Configuration Invalid

```
Cause: Chat mode settings are malformed
Solution:
1. Validate JSON syntax in settings
2. Reset mode configuration
3. Check mode name spelling
```

#### CE-004: Security Validation Failed

```
Cause: Input blocked by security filters
Solution:
1. Review input for dangerous patterns
2. Adjust security level if appropriate
3. Check security logs for details
```

#### CE-005: Context Loading Error

```
Cause: Failed to load workspace context
Solution:
1. Check file permissions
2. Verify workspace folder access
3. Reduce context scope
```

---

## 🔧 Debug Mode Setup

### Enable Debug Mode

```json
{
  "checkmarkCopilot.debug": {
    "enabled": true,
    "verboseLogging": true,
    "showInternalEvents": true,
    "logApiCalls": true
  }
}
```

### Debug Commands

```bash
# Start debug session
# Command Palette → "CheckMark Copilot: Start Debug Session"

# Monitor real-time events
# Command Palette → "CheckMark Copilot: Event Monitor"

# Inspect mode state
# Command Palette → "CheckMark Copilot: Inspect Mode State"
```

## 📊 Performance Monitoring

### Performance Metrics

```bash
# View performance dashboard
# Command Palette → "CheckMark Copilot: Performance Dashboard"

# Check response times
# Command Palette → "CheckMark Copilot: Response Time Analysis"

# Monitor memory usage
# Command Palette → "CheckMark Copilot: Memory Usage"
```

### Optimization Tips

```json
{
  "checkmarkCopilot.optimization": {
    "preloadModes": false,
    "lazyLoadContext": true,
    "compressRequests": true,
    "batchProcessing": true
  }
}
```

---

## 🆘 Getting Help

### Self-Help Checklist

- [ ] Checked this troubleshooting guide
- [ ] Ran built-in diagnostics
- [ ] Reviewed extension logs
- [ ] Tried clean reinstall
- [ ] Verified GitHub Copilot is working

### Reporting Issues

#### Bug Report Template

```markdown
**Issue Description:**
Brief description of the problem

**Steps to Reproduce:**

1. Step one
2. Step two
3. Step three

**Expected Behavior:**
What should have happened

**Actual Behavior:**
What actually happened

**Environment:**

- VS Code Version:
- Extension Version:
- Operating System:
- GitHub Copilot Status:

**Logs:**
(Paste relevant log entries)

**Configuration:**
(Share relevant settings)
```

#### Information to Include

- Extension version number
- VS Code version
- Operating system
- GitHub Copilot status
- Relevant configuration
- Log entries (sanitized)
- Steps to reproduce

### Priority Support Channels

#### Security Issues

```
Email: human@checkmarkdevtools.dev
Subject: [SECURITY] Brief description
Priority: Immediate response within 24 hours
```

#### General Issues

```
GitHub Issues: https://github.com/CheckMarKDevTools/checkmark-copilot-chat/issues
Response Time: 2-3 business days
```

#### Feature Requests

```
GitHub Discussions: https://github.com/CheckMarKDevTools/checkmark-copilot-chat/discussions
Category: Ideas
```

---

## 🎯 Prevention Tips

### Best Practices

- Keep extension updated
- Regular VS Code updates
- Monitor GitHub Copilot status
- Backup important configurations
- Test changes in development first

### Health Monitoring

```json
{
  "checkmarkCopilot.healthChecks": {
    "enabled": true,
    "frequency": "daily",
    "autoReport": false,
    "notifications": true
  }
}
```

---

## 🚀 Recovery Scenarios

### Emergency Recovery

```bash
# If extension is completely broken:
1. Disable extension temporarily
2. Restart VS Code in safe mode: code --disable-extensions
3. Re-enable only essential extensions
4. Test GitHub Copilot directly
5. Gradually re-enable features
```

### Data Recovery

```bash
# If settings are corrupted:
1. Check backup: ~/settings-backup.json
2. Reset to defaults
3. Gradually restore custom settings
4. Test each change
```

---

> Remember: When in doubt, restart everything! Sometimes the classic "turn it off and on again" works wonders. 🔄

_Generated by GitHub Copilot Chat directed by Ashley Childress on Sun Jul 20 23:39:06 EDT 2025._
