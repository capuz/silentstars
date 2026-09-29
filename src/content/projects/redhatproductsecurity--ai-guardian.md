---
repo: "RedHatProductSecurity/ai-guardian"
name: "ai-guardian"
description: "AI IDE security hook: blocks directories, scans secrets, and protects AI interactions"
readmeQualityOk: true
url: "https://github.com/RedHatProductSecurity/ai-guardian"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 14
forks: 8
openIssues: 80
closedIssues: 1225
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-23T16:55:42Z"
lastCommitAt: "2026-09-29T08:10:38Z"
lastReleaseAt: "2026-05-12T00:23:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 55
maintainers: ["itdove", "aknochow"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1189779265/1dbcdf9a-b020-4f4a-995e-2da108201b27"
discussionCount: 1
---

# AI Guardian

</p>

> AI IDE security hook: controls MCP/skill permissions, blocks directories, detects prompt injection, scans secrets

AI Guardian provides comprehensive protection for AI IDE interactions through multiple security layers.

## Security Disclaimer

**AI Guardian is not a silver bullet** and cannot guarantee detection of all security threats.

- **Prompt injection detection** may miss novel or obfuscated attacks
- **Secret scanning** depends on scanner patterns and may miss custom secret formats
- **Attackers evolve continuously** — new bypass techniques emerge constantly
- **Fail-open by design** — prioritizes availability over security (errors allow operations)

**Use AI Guardian as ONE layer in a defense-in-depth security strategy, not as your only protection.**

Combine with:
- Code review processes
- CI/CD security scanning
- Network security (firewalls, egress rules)
- Secret management (Vault, AWS Secrets Manager)

See [Security Design](https://github.com/RedHatProductSecurity/ai-guardian/blob/main/docs/SECURITY_DESIGN.md) for limitations and architecture.

## Quick Start

### 1. Install

```bash
uv tool install ai-guardian        # recommended
# or: pip…
