---
repo: "opena2a-org/agent-identity-management"
name: "agent-identity-management"
description: "The IAM layer for AI agents: cryptographic identity, capability authorization, and audit trails for non-human identities. Open source."
readmeQualityOk: true
url: "https://github.com/opena2a-org/agent-identity-management"
homepage: "https://opena2a.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [49, 28]
topics: ["agent-security", "ai-agents", "cryptography", "ed25519", "identity-management", "mcp-servers", "agent-identity-management", "nhi", "non-human-identity", "open-source-security"]
stars: 67
forks: 23
openIssues: 13
closedIssues: 71
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2025-10-06T00:04:56Z"
lastCommitAt: "2026-09-29T08:10:15Z"
lastReleaseAt: "2026-06-08T03:41:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["thebenignhacker", "benignhacker-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0389613f3ef7196e34f8958d715a469e35c814c14f70bca8be26286ad2321f81/opena2a-org/agent-identity-management"
discussionCount: 2
---

# Agent Identity Management (AIM)

> **[OpenA2A](https://github.com/opena2a-org/opena2a)**: [CLI](https://github.com/opena2a-org/opena2a) · [HackMyAgent](https://github.com/opena2a-org/hackmyagent) · [Secretless](https://github.com/opena2a-org/secretless-ai) · [AIM](https://github.com/opena2a-org/agent-identity-management) · [Browser Guard](https://github.com/opena2a-org/AI-BrowserGuard) · [DVAA](https://github.com/opena2a-org/damn-vulnerable-ai-agent)

Cryptographic identity, capability authorization, and audit trails for AI agents. Apache 2.0.

[Website](https://opena2a.org) · [AIM Cloud](https://aim.opena2a.org/get-started)  · [Discord](https://discord.gg/uRZa3KXgEn)

## Quick start

Install the SDK and authenticate:

```bash
pip install aim-sdk
aim-sdk login                    # OAuth to aim.opena2a.org
```

Self-hosted: create the agent under Agents in your dashboard first and run the SDK with the credentials it issues; `aim-sdk login --url` and `secure(..., api_key=...)` do not yet complete against a self-hosted backend (measured 2026-09-22 on the published images; tracked for a fix).

Then protect any function with a capability grant:

```python
from aim_sdk import secure…
