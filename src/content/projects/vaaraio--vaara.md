---
repo: "vaaraio/vaara"
name: "vaara"
description: "Accountable Autonomy: open-source evidence layer that gates every AI agent tool call against your policy and writes a hash-chained record an auditor verifies offline, without trusting you. Root-agnostic; binds to TPM 2.0 / SEV-SNP when present. Your environment, no SaaS, no telemetry. AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/vaaraio/vaara"
homepage: "https://vaara.io"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agent-governance", "agent-security", "ai-act", "ai-agents", "ai-governance", "attestation", "audit-trail", "compliance", "eu-ai-act", "llm-security"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-20T10:49:20Z"
lastCommitAt: "2026-10-11T10:15:05Z"
lastReleaseAt: "2026-05-09T23:51:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 50
maintainers: ["vaaraio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a15088fc10f11fb9b442069c76b09d19e28eb242b73f36eeb6937acc2ff311f7/vaaraio/vaara"
fundingLinks: ["GITHUB:https://github.com/vaaraio"]
discussionCount: 2
---

Your AI agent transferred the funds, wrote the file, called the tool. Later, someone who does not trust you asks you to prove exactly what it did and why: a regulator, an auditor, a customer after an incident. Your own logs will not settle it, because you could have edited them.

## Quick start

```bash
pip install vaara                            # Python: CLI, MCP proxy, server
brew tap vaaraio/tap && brew install vaara   # macOS: CLI + menu-bar app (built from source)
npm install @vaara/client                    # TypeScript client for the HTTP API
```

```python
import vaara

@vaara.govern
def transfer_funds(to: str, amount: float) -> str:
    ...
```

That is the whole thing. Every call to a governed function is risk-scored and decided against your policy before the body runs. An allowed call runs, and the decision, the call, and the outcome land in a hash-chained, tamper-evident record anyone can verify offline, with a signed receipt beside it. Sign the whole trail at export (`vaara trail export`) for third-party proof. Records persist to `~/.vaara/trail/audit.db` by default, so evidence survives restarts. Python 3.10+. The base install carries three runtime dependencies,…
