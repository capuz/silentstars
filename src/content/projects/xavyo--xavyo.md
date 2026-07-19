---
repo: "xavyo/xavyo"
name: "xavyo"
description: "The Identity Platform for the AI Agent Era. Secure humans, machines, and AI agents with a unified Rust-based platform."
readmeQualityOk: true
url: "https://github.com/xavyo/xavyo"
homepage: "https://xavyo.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ai-agents", "axum", "iam", "identity", "multi-tenant", "oauth2", "oidc", "rust", "saml", "scim"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-02T13:40:19Z"
lastCommitAt: "2026-07-19T06:13:00Z"
lastReleaseAt: "2026-02-22T21:38:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 51
maintainers: ["100-tokens", "YichiZhang0613"]
openGraphImageUrl: "https://opengraph.githubassets.com/8aec01eccb6af9e7e56c5a46dec81ac0df091cdeb8c3ac3cd1029759b3666c6f/xavyo/xavyo"
discussionCount: 3
---

</p>

<h3 align="center">The Identity Platform for the AI Agent Era</h3>

  Secure your AI agents, humans, and machines with a unified identity platform.<br/>
  Built in Rust for performance. Designed for the future.
</p>

</p>

</p>

---

## The Problem

AI agents are proliferating across enterprises. Each agent needs:
- **Identity** — Who is this agent? Who owns it?
- **Credentials** — How does it authenticate to cloud services?
- **Permissions** — What tools and data can it access?
- **Audit Trail** — What actions did it take and why?

Traditional IAM solutions weren't built for this. They focus on humans, not machines. Not agents.

## The Solution

**xavyo** is a unified identity platform that secures humans, machines, and AI agents with the same robust infrastructure:

```
┌─────────────────────────────────────────────────────────────────────┐
│                           xavyo                                    │
├─────────────────────────────────────────────────────────────────────┤
│  Humans              │  AI Agents            │  Services            │
│  ─────────────────   │  ─────────────────    │  ─────────────────   │
│  • SSO (OIDC/SAML)   │  • Agent Identity     │  •…
