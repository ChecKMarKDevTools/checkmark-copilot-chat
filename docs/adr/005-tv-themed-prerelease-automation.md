# ADR-005: TV-Themed Pre-Release Automation

## Status

Accepted

## Date

2025-07-25

## Context

While ADR-002 established TV-themed release automation for final releases (seasons), we need a systematic approach for pre-release versions that:

- Provides clear development stage visibility
- Maintains engagement and fun factor throughout development
- Integrates seamlessly with existing Release Please automation
- Supports status badges and README indicators
- Follows SemVer compatibility while being more descriptive than `alpha`/`beta`

Traditional pre-release identifiers (`alpha`, `beta`, `rc`) are technical and don't convey the actual development state. Our development team needs pre-release automation that mirrors TV production stages, making the development lifecycle more intuitive and engaging.

## Decision

Implement TV production-themed pre-release automation with the following stages:

### Pre-Release Production Stages

| Stage | Development State | Example Version | Badge Status |
| - | - | - | - |
| `pilot` | Initial concept proof | `v0.1.0-pilot` | `📺 building the set` |
| `table-read` | Early drafts, initial feedback | `v0.1.1-table-read` | `📝 script review` |
| `storyboarding` | Architecture planning | `v0.1.2-storyboarding` | `🎨 planning scenes` |
| `scripting` | Core development beginning | `v0.1.3-scripting` | `✍️ writing the story` |
| `blocking` | Component positioning/testing | `v0.1.4-blocking` | `🎭 rehearsing` |
| `filming` | Active feature development | `v0.1.5-filming` | `📸 filming now` |
| `post` | Testing, documentation, polish | `v0.1.6-post` | `📦 in post` |
| `greenroom` | Ready for release, final staging | `v0.1.7-greenroom` | `🎬 premiere ready` |

### Automation Implementation

1. **Release Please Configuration**: Use `prerelease: true` and `prerelease-type` to control stage
2. **Stage Transitions**: Update `release-please-config.json` to advance production stages
3. **Badge Integration**: Automatic README badge updates based on current stage
4. **SemVer Compatibility**: Full semantic versioning support with descriptive pre-release identifiers

### Developer Workflow

```bash
# Normal development - conventional commits handle version bumps
git commit -m "feat: add new chat mode"  # -> v0.1.0-pilot.1

# Stage advancement - update config, then merge
# release-please-config.json: "prerelease-type": "filming"
# Next commit: v0.2.0-filming.0
```

### Badge System

README badges automatically reflect current production stage:

- Development stages: `📺 building the set`, `📸 filming now`, `📦 in post`
- Release readiness: `🎬 premiere ready`
- Final release: `🎉 Season X streaming now`

## Consequences

### Positive

- **Clear Development Visibility**: Stakeholders understand development stage at a glance
- **Engaging Pre-Release Process**: Maintains team enthusiasm throughout development
- **Intuitive Stage Names**: TV production stages are more descriptive than `alpha`/`beta`
- **Flexible Progression**: Teams can skip stages or customize based on project needs
- **Automated Badge Updates**: README status reflects current development state
- **SemVer Compliance**: Fully compatible with semantic versioning standards
- **Professional Fun**: Balances engagement with professional development practices

### Negative

- **Learning Curve**: New developers need to understand the TV production metaphor
- **Configuration Complexity**: Requires manual updates to `release-please-config.json` for stage transitions
- **Cultural Context**: TV production terms may not resonate with all global developers
- **Template Maintenance**: Need to maintain badge templates and documentation

### Trade-offs

- Chose descriptive stages over standard pre-release terminology
- Chose manual stage transitions over automatic progression for better control
- Chose entertainment metaphor over technical precision for better engagement
- Chose README integration over separate status tracking for visibility

## Implementation Details

### Release Please Configuration

```json
{
  "release-type": "node",
  "prerelease": true,
  "prerelease-type": "pilot",
  "bump-minor-pre-major": true,
  "bump-patch-for-minor-pre-major": true
}
```

### Badge Template

```markdown
![Pre-Release Status](https://img.shields.io/badge/status-📺%20building%20the%20set-blue)
```

### Stage Transition Process

1. Team decides to advance production stage
2. PR updates `prerelease-type` in `release-please-config.json`
3. Merge triggers next release with new stage identifier
4. Badge and documentation automatically update

## Alternatives Considered

1. **Standard SemVer Pre-Release** (`alpha`, `beta`, `rc`): Too technical, less engaging
2. **Numeric Pre-Release Only** (`v0.1.0-0`, `v0.1.0-1`): No semantic meaning
3. **Automatic Stage Progression**: Less control over development flow
4. **Game/Fantasy Themes**: Less universal than TV production
5. **No Pre-Release Theming**: Missed opportunity for development engagement

## Integration Points

- **ADR-002**: Builds on TV-themed release automation for final releases
- **Release Please**: Leverages existing automation infrastructure
- **GitHub Actions**: Integrates with CI/CD workflows
- **README Badges**: Provides visual development status
- **Documentation**: Links to comprehensive pre-release lifecycle guide

## References

- [ADR-002: TV-Themed Release Automation](./002-tv-themed-release-automation.md)
- [Pre-Release Lifecycle Documentation](../prerelease-lifecycle.md)
- [Release Please Pre-Release Documentation](https://github.com/googleapis/release-please#pre-release-versions)
- [Semantic Versioning Pre-Release Specification](https://semver.org/#spec-item-9)
- [GitHub Actions Workflow Documentation](../github-actions-workflow.md)

---

_Generated by GitHub Copilot Chat directed by Ashley Childress on Fri Jul 25 2025_
