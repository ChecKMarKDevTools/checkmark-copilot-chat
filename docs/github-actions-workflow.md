# 🔁 GitHub Actions Workflow Guide

This document outlines the GitHub Actions workflows that power the CheckMark Copilot Extension's CI/CD pipeline. Because who doesn't love a good YAML automation story? 🎭

> **📊 Complete Scenario Coverage:** See [Workflow Scenarios Documentation](./workflow-scenarios.md) for comprehensive coverage of all 31 workflow scenarios, including development, quality control, security, release, emergency, monitoring, and infrastructure scenarios.

## 🎬 Current Workflows

### 🕵️ Quality Control Department

**File:** `.github/workflows/quality-control.yml`
**Triggers:** PR events, pushes to main, weekly schedule, manual dispatch
**Theme:** Patrick Jane (The Mentalist) psychological analysis

Our primary quality assurance workflow featuring Patrick Jane's mentalist approach to code analysis:

- **🔍 Code Quality & Linting:** Jane's initial code "mind reading"
- **🛡️ Security Vulnerability Scanning:** Psychological profiling of security patterns
- **🫆 Advanced Static Analysis:** Pattern recognition and behavioral analysis
- **🏛️ Final Quality Assessment:** CBI consultation and final verdict

**Scheduled Run:** Weekly Friday at 03:37 UTC for maintenance
**Quality Gates:** Multi-layered validation with fail-fast on critical errors
**Coverage:** Changed files only for PRs, full codebase for scheduled runs

---

### 🛰️ Full Body Scan (Chaos-style)

**File:** `.github/workflows/full-body-scan.yml`
**Triggers:** 4 rotating weekly schedules, manual dispatch
**Theme:** "Righteous Gemstones" episode rotation with security focus

Weekly comprehensive security scanning with rotating episode themes:

- **Week 1:** Thursday 04:13 UTC - "💋 Judy's Backup Failed Again"
- **Week 2:** Monday 02:42 UTC - "🎿 Billy Went Skiing With No Helmet"
- **Week 3:** Friday 06:29 UTC - "💰 Kelvin Charged It to the Church Card"
- **Week 4:** Sunday 03:57 UTC - "🙏 Jesse Baptized a Branch in Production"

**Manual Trigger:** "🎬 On-Demand Special: The One Where We Scan Everything"
**Security Tools:** Semgrep with SARIF upload to GitHub Security
**Music Recommendation:** Includes YouTube soundtrack links for enhanced experience

---

### 🍾 Release Please

**File:** `.github/workflows/release-please.yml`
**Triggers:** Push to main branch, manual dispatch
**Theme:** TV show-themed changelog sections and prerelease management

Automated release management with comprehensive build and deployment:

- **🔧 Build & Test:** Node.js setup with Volta version management
- **📦 Artifact Creation:** Git archive packaging with integrity verification
- **✍️ Attestation:** Build provenance generation for security
- **🎬 TV Changelog:** Themed release notes with personality

[Release Workflow Diagram](./diagrams/release-workflow.mmd)

```mermaid src="./diagrams/release-workflow.mmd"
```

#### Changelog Sections (TV Show Style)

- **🎬 Pilot Episode: New & Shiny** - New features (`feat`)
- **🔧 CSI: Bug Unit** - Bug fixes (`fix`)
- **⚡ Fast & the Curious** - Performance improvements (`perf`)
- **🧽 The Maintenance Diaries** - Chores (hidden in changelog)
- **📖 Previously On...** - Documentation updates (hidden)
- **💅 Makeover Montage** - Style changes (hidden)
- **🔄 Extreme Code Makeover: Backend Edition** - Refactoring (hidden)
- **🧪 Trial by Unit** - Test updates (hidden)

---

---

## 🛠️ Potential Future Workflows

Here are workflows we could add as the project grows:

### 🧪 Continuous Integration Workflow

[CI Workflow Diagram](./diagrams/ci-workflow.mmd)

```mermaid src="./diagrams/ci-workflow.mmd"
```

### 🔒 Security Workflow

[Security Workflow Diagram](./diagrams/security-workflow.mmd)

```mermaid src="./diagrams/security-workflow.mmd"
```

### 📦 Extension Publishing Workflow

[Publishing Workflow Diagram](./diagrams/publishing-workflow.mmd)

```mermaid src="./diagrams/publishing-workflow.mmd"
```

## 🎯 Workflow Best Practices

### Security Considerations

- All secrets stored in GitHub Secrets
- Minimal permission principle for tokens
- Dependency scanning on every PR
- No hardcoded credentials in workflows

### Performance Optimization

- Cache dependencies between runs
- Use matrix builds for multiple environments
- Fail fast on critical errors
- Parallel job execution where possible

### Maintainability

- Clear job names and descriptions
- Comprehensive error reporting
- Environment-specific configurations
- Automated cleanup of old artifacts

## 🚨 Emergency Workflows

### 🔥 Hotfix Deployment

[Hotfix Workflow Diagram](./diagrams/hotfix-workflow.mmd)

```mermaid src="./diagrams/hotfix-workflow.mmd"
```

### 🛡️ Security Incident Response

[Security Incident Response Diagram](./diagrams/security-incident-response.mmd)

```mermaid src="./diagrams/security-incident-response.mmd"
```

---

## 📊 Workflow Monitoring

### Metrics to Track

- Build success/failure rates
- Average build times
- Deployment frequency
- Time to recovery
- Test coverage trends

### Alerting Strategy

- Slack notifications for failures
- Email alerts for security issues
- Dashboard updates for metrics
- GitHub status checks

---

## 🎭 Fun Workflow Features

### Easter Eggs in Actions

- TV show references in job names
- Emoji progress indicators
- Motivational failure messages
- Achievement unlocks for milestones

### Community Engagement

- Contributor recognition in releases
- Automatic thank you messages
- Progress celebrations
- Meme integration (where appropriate)

---

## 🚦 Getting Started with Workflows

### For Maintainers

1. Review the [Security Principles](../.github/instructions/security-principles.instructions.md) and [Design Principles](../.github/instructions/design-principles.instructions.md)
2. Understand the branching strategy
3. Set up required GitHub Secrets
4. Test workflows in a fork first

### For Contributors

1. All PRs trigger automated checks
2. Fix any failing checks before review
3. Include tests for new features
4. Follow conventional commit format

---

> 🦄 This workflow guide is as dynamic as our CI/CD pipeline - it evolves with the project!

<small>Generated by GitHub Copilot Chat directed by Ashley Childress on Sun Jul 20 23:39:06 EDT 2025.</small>
