---
repo: "opena2a-org/agent-identity-management"
name: "agent-identity-management"
description: "The IAM layer for AI agents: cryptographic identity, capability authorization, and audit trails for non-human identities. Open source."
readmeQualityOk: true
url: "https://github.com/opena2a-org/agent-identity-management"
homepage: "https://opena2a.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [50, 27]
topics: ["agent-security", "ai-agents", "cryptography", "ed25519", "identity-management", "mcp-servers", "agent-identity-management", "nhi", "non-human-identity", "open-source-security"]
stars: 57
forks: 18
openIssues: 19
closedIssues: 61
watchers: 3
contributors: 8
recentReleases: 3
createdAt: "2025-10-06T00:04:56Z"
lastCommitAt: "2026-08-30T00:45:13Z"
lastReleaseAt: "2026-06-08T03:41:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["thebenignhacker", "opena2a-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c62bb669d1014619211d480a4e6bc42be817c3d5af39551b9455a8e736a900/opena2a-org/agent-identity-management"
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
aim-sdk login                    # OAuth to aim.opena2a.org, or --url for self-hosted
```

Then protect any function with a capability grant:

```python
from aim_sdk import secure

agent = secure("my-first-agent")

@agent.perform_action(capability="db:read")
def get_customer(customer_id):
    return db.query("SELECT * FROM customers WHERE id = ?", customer_id)
```

`secure()` generates an Ed25519 keypair, registers the agent with the…
