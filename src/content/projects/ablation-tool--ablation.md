---
repo: "Ablation-Tool/ablation"
name: "ablation"
description: "Ablation is an autonomous reverse engineering system."
readmeQualityOk: true
url: "https://github.com/Ablation-Tool/ablation"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["reverse-engineering"]
stars: 214
forks: 26
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 10
createdAt: "2026-09-23T21:44:35Z"
lastCommitAt: "2026-10-17T07:59:49Z"
lastReleaseAt: "2026-09-30T21:52:18Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/df6e493b91f971be76fff94070507b3631571aae0164250f1b5bb94e0854dbe2/Ablation-Tool/ablation"
---

[](docs/standards-ablation.md) [](docs/standards-ablation.md) [](docs/standards-ablation.md) [](docs/SPONSORS.md)

Ablation is a self-contained reverse engineering framework.

It depends on neither legacy tools nor an MCP server, which removes the attack surface associated with MCP.

When used with Codex or Claude Code, it operates as an autonomous reverse engineering system.

---

### Quick Start

#### 1. Launch Session
```bash
cd ~/ablation && claude
```

#### 2. Set Model
```text
/model claude-sonnet-4-6
```
or
```text
/model claude-sonnet-4-5
```

#### 3. Define Objective
```text
/goal reverse engineer [whatever you want]
```

#### 4. Check Effort Level
Not sure what effort level to be set on? Ask inline without interrupting the main context:
```text
/btw What effort level should we be set on right now?
```

---

### Recommended Configuration (`/config`)

```text
Auto-compact                             true
Continue automatically at usage limit    true
Switch models when a message is flagged  Switch automatically
Show tips                                false
Claude-drafted feedback                  off
Reduce motion                            false
Thinking mode…
