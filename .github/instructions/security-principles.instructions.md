# 🔒 Security & Design Best Practices

Copilot, this is your rulebook. Ignore it at your peril (and mine).

## SECURITY 🛡️

- **Never trust user input.** Validate, sanitize, repeat.
- **No hardcoded secrets.** Use environment variables (never log them).
- **Dependency hygiene:** Pin versions, scan for CVEs, automate checks.
- **Escape output** in logs and UI, always.
- **Use least privilege** for API keys, tokens, and permissions (scope matters!).
- **Audit all third-party code**—if you don’t know what it does, don’t use it.
- **Document any exceptions** to the above (and ask for approval first).

## DESIGN 🧩

- **Keep functions and modules small.** If it doesn’t fit on your screen, break it up.
- **Favor explicitness over cleverness.** Write for the next developer (or future you, who will - ve forgotten all of this).
- **Docstrings/doc comments are mandatory**—explain intent, not just implementation.
- **Extensibility matters:** Don’t hard-code what should be a config or option.
- **Write tests as you go.** Bonus points for edge cases and breaking attempts.
- **Fail safe, not open:** If in doubt, deny or error with a helpful message.

## CONTRIBUTOR ETHICS 🤝

- Give credit for ideas, bug reports, or snacks.
- All contributions must match the project’s fun-but-secure standards.
- No AI hallucinations as features—verify before you commit.

## 🦄 Bonus: Fun, Not Boring

- If you’re unsure whether something is boring, it probably is. Rewrite it with personality.
- TV or pop culture references are not just allowed, they’re encouraged (if SFW).
- Emoji use is a feature, not a bug. (But don’t overdo it.)

---

</small>This file was generated with ChatGPT as directed by Ashley Childress<small>
