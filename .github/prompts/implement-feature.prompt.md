# 🚀 Implement Feature Prompt Template

Use this template when asking Copilot to implement new features for the CheckMark Copilot Extension. This ensures consistent, secure, and well-documented implementations! ✨

## 📋 Template Format

```
Implement [feature description] for the [specific chat mode or area].

**Context:**
- Target chat mode: [mode name, e.g., "Doc Doctor" or "Security Sentinel"]
- Feature scope: [brief description of what it should do]
- Integration points: [what it connects to]

**Requirements:**
- Follow all project best practices for security, openness, and maintainability
- Add doc comments that explain *why* as well as *what*
- Use a fun tone, but the code must be bulletproof
- Include comprehensive input validation and output sanitization
- Reference the relevant chat mode's intended purpose

**Security Considerations:**
- Follow modular design patterns (hexagonal architecture) as outlined in [Design Principles](../.github/instructions/design-principles.instructions.md)
- Validate all user input according to [Security Principles](../.github/instructions/security-principles.instructions.md)
- Never trust external data sources
- Implement proper error handling with safe defaults
- Log security-relevant events appropriately

**Testing Requirements:**
- Include unit tests for core functionality
- Add integration tests for chat mode interactions
- Test security edge cases and failure scenarios
- Verify accessibility and usability

**Documentation:**
- Update relevant chat mode documentation
- Add inline code comments explaining complex logic
- Include usage examples in docstrings
- Update FAQ if introducing new concepts
```

## 🎯 Example Implementations

### Feature Request Example 1: Documentation Generation

```
Implement a "generate README" command for the Doc Doctor mode.

**Context:**
- Target chat mode: Doc Doctor 🩺
- Feature scope: Auto-generate README files from project structure and package.json
- Integration points: VS Code file system, workspace analysis, package.json parsing

**Requirements:**
- Follow all project best practices for security, openness, and maintainability
- Add doc comments that explain *why* as well as *what*
- Use a fun tone, but the code must be bulletproof
- Generate README sections: description, installation, usage, contributing
- Support multiple project types: Node.js, Python, generic
- Reference the Doc Doctor's professional but friendly personality

**Security Considerations:**
- Validate package.json structure before parsing
- Sanitize all extracted text before including in README
- Never execute code from package.json scripts
- Prevent path traversal when analyzing project structure

**Testing Requirements:**
- Test with various package.json formats
- Verify handling of missing or malformed files
- Test README generation for different project types
- Security test with malicious package.json content

**Documentation:**
- Add README generation to Doc Doctor mode documentation
- Include examples of generated READMEs
- Document configuration options for customization
```

### Feature Request Example 2: Security Validation

```
Implement input validation for the Logging Reviewr so logs can't be abused for injection attacks.

**Context:**
- Target chat mode: Logging Reviewr 🔎
- Feature scope: Comprehensive input validation for log analysis requests
- Integration points: Security layer, log parsing utilities, validation framework

**Requirements:**
- Follow all project best practices for security, openness, and maintainability
- Add doc comments that explain *why* as well as *what*
- Use a fun tone, but the code must be bulletproof
- Detect and block log injection patterns
- Validate log file paths and content
- Reference the Logging Reviewr's detective personality

**Security Considerations:**
- Block common injection patterns: eval(), Function(), script tags
- Validate file paths to prevent directory traversal
- Sanitize log content before processing
- Rate limit log analysis requests
- Log all security violations for audit

**Testing Requirements:**
- Test with various log injection attempts
- Verify path traversal prevention
- Test rate limiting functionality
- Security fuzz testing with malformed inputs

**Documentation:**
- Document security validation rules
- Add troubleshooting guide for blocked requests
- Include examples of safe vs. unsafe log patterns
```

## 🛡️ Security Checklist

Before implementing any feature, ensure:

- [ ] **Input Validation**: All user input is validated and sanitized
- [ ] **Output Sanitization**: All output is escaped appropriately
- [ ] **Error Handling**: Graceful failure with safe defaults
- [ ] **Logging**: Security events are logged appropriately
- [ ] **Permissions**: Principle of least privilege applied
- [ ] **Dependencies**: No new dependencies without security review
- [ ] **Secrets**: No hardcoded secrets or credentials
- [ ] **Injection Prevention**: Protection against code/command injection

## 🧪 Testing Strategy

### Test Categories

1. **Unit Tests**: Individual function testing
2. **Integration Tests**: Chat mode interaction testing
3. **Security Tests**: Input validation and attack prevention
4. **Usability Tests**: User experience validation
5. **Performance Tests**: Response time and resource usage

### Test Examples

```javascript
// Security test example
describe('Input Validation', () => {
  it('should block script injection attempts', () => {
    const maliciousInput = '<script>alert("xss")</script>';
    expect(() => validateInput(maliciousInput)).toThrow('Potentially dangerous input detected');
  });
});

// Integration test example
describe('Chat Mode Integration', () => {
  it('should enhance prompts with mode-specific context', () => {
    const basePrompt = 'Help me with documentation';
    const enhanced = docDoctor.enhancePrompt(basePrompt);
    expect(enhanced).toContain('documentation best practices');
  });
});
```

## 📚 Documentation Requirements

### Code Documentation

```javascript
/**
 * Validates user input for chat mode processing
 *
 * This is a critical security function that prevents injection attacks
 * and ensures all user input is safe for AI processing. The validation
 * rules are based on OWASP guidelines and project security policies.
 *
 * @param {string} input - Raw user input from chat interface
 * @param {string} mode - Target chat mode for context-specific validation
 * @returns {string} Sanitized input safe for processing
 * @throws {SecurityError} When input contains dangerous patterns
 *
 * @example
 * const safeInput = validateInput('Write docs for my API', 'doc-doctor');
 *
 * @security This function is the primary defense against injection attacks
 * @see https://owasp.org/www-project-top-ten/2017/A1_2017-Injection
 */
```

### User Documentation

- Update relevant chat mode guide
- Add usage examples
- Include troubleshooting tips
- Document configuration options

## 🎭 Mode-Specific Guidelines

### Doc Doctor 🩺

- Professional but friendly tone
- Focus on clarity and comprehensiveness
- Include best practices and examples
- Consider different skill levels

### Logging Reviewr 🔎

- Detective-like analysis approach
- Security-first mindset
- Performance considerations
- Structured logging emphasis

### Refactor Genie 🧞

- Clean code principles
- Maintainability focus
- Performance optimization
- Test-friendly improvements

### CI/CD Wizard 🪄

- Automation best practices
- Security scanning integration
- Cross-platform considerations
- Deployment safety

## 🚀 Implementation Workflow

1. **Design Phase**
   - Review requirements and security implications
   - Plan implementation approach
   - Identify integration points

2. **Development Phase**
   - Implement core functionality
   - Add comprehensive validation
   - Write thorough tests
   - Document code and behavior

3. **Review Phase**
   - Security review
   - Code review
   - Documentation review
   - Test coverage verification

4. **Integration Phase**
   - Integration testing
   - User acceptance testing
   - Performance validation
   - Documentation updates

## 🎯 Success Criteria

A feature implementation is complete when:

- [ ] **Functionality**: Core feature works as specified
- [ ] **Security**: All security requirements met
- [ ] **Testing**: Comprehensive test coverage
- [ ] **Documentation**: User and developer docs updated
- [ ] **Integration**: Seamless chat mode integration
- [ ] **Performance**: Acceptable response times
- [ ] **Usability**: Intuitive user experience
- [ ] **Maintainability**: Clean, well-documented code

---

## 💡 Pro Tips

- **Start with security**: Think about what could go wrong first
- **Test early and often**: Don't wait until the end to test
- **Document as you go**: Future you will thank present you
- **Keep it simple**: Complexity is the enemy of security
- **Ask questions**: When in doubt, ask for clarification

Remember: It's better to ask for guidance than to implement something incorrectly! 🤝

<!-- Generated by GitHub Copilot Chat directed by Ashley Childress -->
