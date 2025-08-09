# 🎨 Diagrams Directory

This folder contains all the Mermaid diagrams for the CheckMark Copilot Extension project, organized by category. 📊

> **📊 Complete Workflow Coverage:** See [Workflow Scenarios Documentation](../workflow-scenarios.md) for comprehensive documentation of GitHub Actions workflows.

> **Guidelines**: All diagrams follow [Design Principles](../../.github/instructions/design-principles.instructions.md) and [Security Principles](../../.github/instructions/security-principles.instructions.md).

## 🏗️ Architecture Diagrams

| Diagram | Description | File |
| - | - | - |
| **System Architecture** | Complete extension architecture with VS Code integration | [system-architecture.mmd](./system-architecture.mmd) |
| **Data Flow Sequence** | User interaction flow through the system | [data-flow-sequence.mmd](./data-flow-sequence.mmd) |
| **Security Architecture** | Multi-layer security approach | [security-architecture.mmd](./security-architecture.mmd) |

## 🚀 Workflow Diagrams

| Diagram | Description | File |
| - | - | - |
| **Release Workflow** | Current GitHub Actions release process | [release-workflow.mmd](./release-workflow.mmd) |
| **CI Workflow** | Planned continuous integration pipeline | [ci-workflow.mmd](./ci-workflow.mmd) |
| **Security Workflow** | Automated security scanning process | [security-workflow.mmd](./security-workflow.mmd) |
| **Publishing Workflow** | Extension marketplace deployment | [publishing-workflow.mmd](./publishing-workflow.mmd) |

## 🚨 Emergency Workflows

| Diagram | Description | File |
| - | - | - |
| **Hotfix Workflow** | Emergency deployment process | [hotfix-workflow.mmd](./hotfix-workflow.mmd) |
| **Security Incident Response** | Security issue handling process | [security-incident-response.mmd](./security-incident-response.mmd) |

## 🛠️ User Experience Diagrams

| Diagram | Description | File |
| - | - | - |
| **Health Check Workflow** | Installation verification process | [health-check-workflow.mmd](./health-check-workflow.mmd) |

## 🌍 Ecosystem Diagrams

| Diagram | Description | File |
| - | - | - |
| **Project Ecosystem** | Complete project ecosystem overview | [project-ecosystem.mmd](./project-ecosystem.mmd) |
| **Ecosystem Data Flow** | Data flow through the entire ecosystem | [ecosystem-data-flow.mmd](./ecosystem-data-flow.mmd) |

## 📝 How to Use These Diagrams

### In Documentation

Reference diagrams in documentation using relative links:

```markdown
![System Architecture](./diagrams/system-architecture.mmd)
```

### In GitHub

GitHub automatically renders Mermaid diagrams in `.mmd` files, so you can link directly to them or embed them in issues and discussions.

### Local Development

Most Markdown editors and VS Code extensions support Mermaid rendering for local development.

## 🎯 Diagram Standards

### Style Guidelines

- **Consistent Colors**: Each diagram category uses consistent color schemes
- **Clear Labels**: All nodes and connections are clearly labeled
- **Logical Flow**: Diagrams follow natural reading patterns (left-to-right, top-to-bottom)
- **Appropriate Complexity**: Each diagram focuses on one main concept

### Color Coding

- **🔵 Core Components**: Blue (#e1f5fe / #0277bd)
- **🟣 Chat Modes**: Purple (#f3e5f5 / #7b1fa2)
- **🟢 External Services**: Green (#e8f5e8 / #2e7d32)
- **🟠 VS Code/User Elements**: Orange (#fff3e0 / #f57c00)
- **🔴 Security/Critical**: Red (#ffebee / #c62828)

### Maintenance

- Update diagrams when architecture changes
- Keep diagrams synchronized with implementation
- Review diagram accuracy during releases
- Add new diagrams for new major features

---

_These diagrams are living documents that evolve with the project! 🚀_
