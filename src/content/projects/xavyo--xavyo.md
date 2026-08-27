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
stars: 10
forks: 2
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T13:40:19Z"
lastCommitAt: "2026-08-27T14:26:20Z"
lastReleaseAt: "2026-02-22T21:38:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a42f59a4999d0d157b1c70fc126ef732a8b9c0f55a84ffa0d4f12c0700cb8064/xavyo/xavyo"
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
