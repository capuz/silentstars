---
repo: "cyanwell/dsh-agent-soul"
name: "dsh-agent-soul"
description: "A set of \"soul architecture\" for agents: a five-layer model, four criteria, a capability list, and one self-check. It delivers the questions and criteria, not the answers."
originalDescription: "一套给 agent 用的「灵魂架构」—— 五层模型、四条判据、一份能力清单、一次自检。交付的是问法和判据，不是答案。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cyanwell/dsh-agent-soul"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 90
forks: 4
openIssues: 17
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-10-16T16:15:51Z"
lastCommitAt: "2026-11-21T11:38:49Z"
lastReleaseAt: "2026-11-21T08:09:39Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 32
maintainers: ["cyanwell"]
openGraphImageUrl: "https://opengraph.githubassets.com/61945919acf4ca0bb01dfd5effc7eab9127a5630e444ba4137c104e7ed4465dd/cyanwell/dsh-agent-soul"
---

# agent-soul

A **soul-layer runtime** decoupled from DSH. Sessions, events, memory, and persona are built in, and any harness can plug into it.

> ## ⚠️ Check the branch first
> 
> | Branch | What it is | Status |
> |---|---|---|
> | **`v4`** | **Current mainline**: standalone process, standalone UI, standalone storage | **Under active development, use this one** |
> | `main` | v3 history: plugin form, embedded in DSH | No longer maintained |
> 
> **`git clone` defaults to `main`, which is old code.** Run `git checkout v4` first.
> 
> v4 is not compatible with v3. It is not an upgrade; it is a different thing.

---

# ★★★ Read this whole section before installing (do not install until you have read it)

## 1. What it depends on

### 1. Embedded LLM (**a core dependency, not optional**)

```
Without an LLM, it can still ingest raw text, build indexes, record commitments, and decide whether to act. These are pure computation.
Without an LLM, it cannot run context-breath diagnosis (finding context-pollution points), perform semantic memory retrieval, or run any organ that requires judgment.
```

**You must configure an API key.** The default is the official DeepSeek service:
