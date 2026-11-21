---
repo: "Agentboxx-dev/Agentboxx"
name: "Agentboxx"
description: "A tamper-evident flight recorder for AI agents. Sandboxed execution, cryptographic signing (HMAC & Ed25519), loop detection, and audit reports. pip install agentboxx"
readmeQualityOk: true
url: "https://github.com/Agentboxx-dev/Agentboxx"
homepage: "https://pypi.org/project/agentboxx/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["accountability", "agents", "ai", "ai-safty", "audit", "cryptography", "flight-recorder", "python", "sandbox", "security"]
stars: 6
forks: 3
openIssues: 17
closedIssues: 29
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-10-22T03:11:08Z"
lastCommitAt: "2026-11-21T13:31:30Z"
lastReleaseAt: "2026-11-16T17:48:08Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 67
maintainers: ["Prathmesh010190", "YogirajXD", "johnw1ck-7678"]
openGraphImageUrl: "https://opengraph.githubassets.com/4797ee3ed023e0ce7154388ce37ca264898bb755abc1e5263914c282969a4ae0/Agentboxx-dev/Agentboxx"
---

> **Demo:** `agentbox demo` runs a scripted stuck-agent scenario locally (no Docker, no API key). To re-record the terminal GIF, see [`docs/RECORDING.md`](https://github.com/Agentboxx-dev/Agentboxx/blob/HEAD/docs/RECORDING.md).

> **Note**
>
> **v0.3.1.** Live on [PyPI](https://pypi.org/project/agentboxx/) (`pip install agentboxx`). Validated end-to-end with sandboxed execution, cryptographic signing, loop detection, and live model execution. Interfaces may evolve before v1.0. Known gaps are listed under [Limitations](#limitations).

---

## Why agentboxx

Most agent tooling records what the agent *says* it did, from inside the agent's own process. agentbox observes from the outside.
