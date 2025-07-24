# ❓ Frequently Asked Questions

All the questions you're thinking but haven't asked yet! And some you probably weren't thinking but should be. 😄

## 🚀 Getting Started

### Q: What exactly is the CheckMark Copilot Extension?

**A:** It's a VS Code extension that adds specialized "chat modes" to GitHub Copilot. Instead of generic AI assistance, you get expert personas like Doc Doctor (for documentation), Logging Reviewr (for log optimization), and Refactor Genie (for code cleanup). Think of it as giving Copilot multiple personalities, each with their own expertise! 🎭

### Q: Do I need a GitHub Copilot subscription?

**A:** Yes! This extension enhances GitHub Copilot, so you need an active Copilot subscription. We're like the awesome seasoning that makes your Copilot steak even better. 🧂

### Q: Is it free?

**A:** Absolutely! The extension itself is 100% free. You just need your existing GitHub Copilot subscription. 💰

### Q: How do I know if it's working?

**A:** Right now, you can't! We're still in the foundation-building phase. Once we have the first working version, you'll be able to try typing `/chat doc` in your Copilot chat and get documentation-focused responses. But we're not there yet! ✨

**Follow the project** to know when the first beta is ready for testing.

---

## 🎭 Chat Modes

### Q: How many chat modes are there?

**A:** We're designing 10+ specialized modes including:

- 🩺 Doc Doctor (documentation)
- 🔎 Logging Reviewr (log optimization)
- 🧞 Refactor Genie (code cleanup)
- 🪄 CI/CD Wizard (automation)
- 🛡️ Security Sentinel (security review)
- And more! Check the [chat modes guide](./chat-modes.md) for the full planned list.

**Current Status:** We're in early development - the foundation is being built first!

### Q: Can I create custom modes?

**A:** Not yet, but it's on the roadmap! For now, you can request new modes via GitHub issues. 🎯

### Q: What if I forget the mode commands?

**A:** Type `/chat help` or check the [chat modes reference](./chat-modes.md). We also plan to add auto-completion! 📚

### Q: Do modes remember context between conversations?

**A:** Each chat session maintains context, but switching modes starts fresh. This is intentional to prevent mode "bleeding" where one mode's personality affects another. 🧠

---

## 🔐 Security & Privacy

### Q: Is my code being stored somewhere?

**A:** Nope! We follow GitHub Copilot's privacy model. Code snippets are sent to the AI service for processing but aren't stored. Check GitHub's Copilot privacy policy for full details. 🔒

### Q: What about security validation?

**A:** We have multiple security layers:

- Input validation prevents injection attacks
- Output sanitization protects against malicious responses
- Security mode specifically reviews code for vulnerabilities
- All configurable based on your security needs 🛡️

### Q: Can I disable security features?

**A:** You can adjust security levels (strict/moderate/relaxed), but we don't recommend disabling them entirely. Security is like wearing pants - technically optional, but generally a good idea. 👖

### Q: Do you collect analytics?

**A:** Minimal, anonymized usage data to improve the extension (like which modes are most popular). No code, no personal info, no tracking. You can opt out in settings. 📊

---

## 🛠️ Technical Questions

### Q: Why isn't my favorite language/framework supported?

**A:** The extension is language-agnostic! Chat modes work with any language that GitHub Copilot supports. If you're having issues with a specific technology, let us know! 🌐

### Q: Can I use this in my company's VS Code?

**A:** Yes, if your company allows GitHub Copilot and VS Code extensions. Check your IT policies first. Most enterprise configurations work fine. 🏢

### Q: Does it work with VS Code forks (like VSCodium)?

**A:** It should work with most VS Code-compatible editors, but we primarily test with official VS Code. Your mileage may vary! 🚗

### Q: What about performance impact?

**A:** Minimal! Modes are loaded on-demand, and we optimize API calls. The biggest factor is your GitHub Copilot performance, which we don't control. ⚡

---

## 🤝 Community & Support

### Q: How do I report bugs?

**A:** Open a GitHub issue with:

- Clear description of the problem
- Steps to reproduce
- Your VS Code and extension versions
- Any relevant error messages

We read every issue! 🐛

### Q: Can I contribute code?

**A:** Not right now - it's a solo project while I get everything stable and secure. But bug reports, feature ideas, and feedback are gold! When contributor gates open, you'll know. 🎪

### Q: How do I request a new chat mode?

**A:** Open a GitHub issue with the "enhancement" label. Describe:

- What the mode would do
- What expertise it would have
- Example use cases
- Why it would be awesome 💡

### Q: Is there a Discord/Slack community?

**A:** Not yet, but if the extension gets popular enough, we'll consider it! For now, GitHub Discussions is the place to hang out. 💬

---

## 🎯 Use Cases & Best Practices

### Q: When should I use different modes?

**A:** Here's the quick guide:

- **Writing docs?** → Doc Doctor
- **Fixing logs?** → Logging Reviewr
- **Cleaning code?** → Refactor Genie
- **Setting up CI/CD?** → CI/CD Wizard
- **Security review?** → Security Sentinel
- **Not sure?** → Start with Doc Doctor! 🎯

### Q: Can I use multiple modes in one session?

**A:** You can switch modes mid-conversation, but each switch starts a new context. For complex tasks needing multiple perspectives, try the Mode Mixer (experimental)! 🎛️

### Q: What's the best way to get good results?

**A:**

- Be specific about what you want
- Provide context about your project
- Use the right mode for the task
- Ask follow-up questions
- Remember: garbage in, garbage out! 🗑️➡️✨

### Q: Does it work with large codebases?

**A:** Yes, but we're smart about context. We analyze your workspace and include relevant files without overwhelming the AI. You can adjust context size in settings. 📁

---

## 🚨 Troubleshooting

### Q: The extension installed but doesn't work. What now?

**A:** Check the [troubleshooting guide](./troubleshooting.md)! Most issues are:

1. GitHub Copilot not active
2. VS Code version too old
3. Configuration problems
4. The classic "have you tried restarting VS Code?" 🔄

### Q: Chat modes aren't responding correctly

**A:**

- Verify you're using correct syntax: `/chat [mode]`
- Check that the mode is enabled in settings
- Try refreshing the chat session
- Run diagnostics: Command Palette → "CheckMark Copilot: Run Diagnostics" 🔧

### Q: Performance is slow

**A:**

- Check your internet connection
- Verify GitHub Copilot performance separately
- Adjust context size in settings
- Close unnecessary VS Code extensions 🐌➡️🚀

---

## 🔮 Future Plans

### Q: What features are coming next?

**A:** The roadmap includes:

- More specialized chat modes
- Custom mode creation
- Better VS Code integration
- Team/workspace templates
- Enhanced security features
- Maybe some surprise easter eggs! 🎁

### Q: Will it always be free?

**A:** The core extension will always be free! We might add premium features for enterprises or power users, but the essential functionality stays free forever. 💎

### Q: When will you accept contributors?

**A:** Soon! I'm focusing on security, stability, and documentation first. When the contributor gates open, there will be clear guidelines, good issues for newcomers, and probably some celebration memes. 🎉

### Q: Any plans for other editors?

**A:** VS Code first, but if there's enough demand and the extension proves successful, we might explore other editors that support similar AI integration. 🌍

---

## 🎭 Fun Questions

### Q: Why all the TV show references?

**A:** Because coding should be fun! Plus, TV shows have great examples of specialized teams working together - just like our chat modes. 📺

### Q: What's with the emoji obsession?

**A:** Emoji make everything better! They help with visual scanning, add personality, and honestly, who doesn't love a good 🦄? Plus, our users seem to love them! 😄

### Q: Is the founder actually this enthusiastic in real life?

**A:** Ashley (that's me!) really is this excited about making developer tools that don't suck. Coffee may be involved. Lots of coffee. ☕

### Q: Can I send you snacks?

**A:** While I appreciate the thought, please don't send physical snacks! But if you want to show appreciation, star the repo, share it with friends, or buy me a virtual coffee! 🍕➡️⭐

---

## 🤔 Didn't Find Your Question?

- **Check the [troubleshooting guide](./troubleshooting.md)** for technical issues
- **Browse [GitHub Discussions](https://github.com/CheckMarKDevTools/checkmark-copilot-chat/discussions)** for community Q\&A
- **Open a GitHub issue** if you found a bug
- **Start a discussion** for general questions

Remember: There are no stupid questions, only questions that haven't been asked yet! 🧠

_Generated by GitHub Copilot Chat directed by Ashley Childress on Sun Jul 20 23:39:06 EDT 2025._
