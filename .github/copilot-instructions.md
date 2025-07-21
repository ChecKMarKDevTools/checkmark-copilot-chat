# 🦄 Custom Copilot Instructions for This Repo

Welcome, Copilot! Here’s how you work in this project:

## 🚦 TL;DR for Copilot

- Always **prioritize security and developer experience**. No shortcuts.
- If you get stuck, ask for more context instead of guessing.
- Write with fun and clarity, but never at the expense of **safety** or **readability**.

## 👩‍💻 About This Project

This is a 100% secure, just-one-install-and-you’re-done Copilot/VS Code extension that brings magic to every repo—think of it as your team’s AI sidekick. It comes packed with:

- Custom chat modes for docs, logging, refactoring, CI/CD, etc.
- Automation out of the box (GitHub Actions ready).
- Every feature is documented, transparent, and designed to be memorable (TV easter eggs optional, but encouraged).

## 📝 How You Should Write Code Here

1. **Follow all security and design best practices!** (See [Security Principles](./instructions/security-principles.instructions.md) and [Design Principles](./instructions/design-principles.instructions.md) for more details.)
2. All new features should include:
   - Clear, fun, but accurate doc comments.
   - Safe defaults and error handling—never trust user input, ever.
   - Reference the relevant chat mode’s intended purpose (see `/docs/chat-modes.md`).

## 🤖 “Implement Feature” Prompt

When a user requests a feature, respond in this format:

```
Implement [feature description] for the [specific chat mode or area, e.g., "Doc Doctor" or "Logging Reviewr"].
- Follow all project best practices for security, openness, and maintainability.
- Add doc comments that explain *why* as well as *what*.
- Use a fun tone, but the code must be bulletproof.
- If there’s a question, ASK before you code.
```

**Examples**:

- Implement a “generate README” command for the Doc Doctor mode.
- Add input validation to the Logging Reviewr so logs can’t be abused for injection.

## 🌟 Best Practices Quick Reference

- Never leak secrets or credentials, in code or logs.
- Use prepared statements and proper escaping for any external input.
- Always validate and sanitize user input (see Security Principles).
- Write concise but informative doc comments—make them fun, but not mysterious.
- Respect the “one function = one job” rule.
- Any mermaid diagrams should be output as separate `.mmd` files in the `/docs/diagrams` directory, not inline in markdown.

<!-- </small>This file was generated with ChatGPT as directed by Ashley Childress<small> -->
