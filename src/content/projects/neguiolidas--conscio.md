---
repo: "Neguiolidas/Conscio"
name: "Conscio"
description: "Conscio — consciousness framework for AI agents. Modular architecture with semantic memory, world modeling, metabolic context, handoff and more."
readmeQualityOk: true
url: "https://github.com/Neguiolidas/Conscio"
homepage: "https://conscio.netlify.app/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-08T18:00:32Z"
lastCommitAt: "2026-08-28T14:31:54Z"
lastReleaseAt: "2026-08-28T14:36:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d528366365d92ac2dd37634b997720ebcc8f2e3a4a652f7e5ca00bbd85a03c12/Neguiolidas/Conscio"
---

</p>

  <b>Context-aware memory, introspection, goal generation, and an audited agency
layer that lets a model act on its own conclusions under hard safety gates.</b>
</p>

> *"The first step toward consciousness is knowing what you are and what limits you."*

Conscio runs **local-first** and **zero-dep at the core** (`numpy` + stdlib `sqlite3`,
nothing else). It is built to make small, local models punch above their size — by
giving them memory, self-judgment, and procedural skill — and to prove that claim by
measurement, not assertion.

**Latest release — `v4.4.0` "Multi-Squad":** two
orthogonal advisory squads (Experts + Opositors) alongside the Council,
8 specialised voices, a new `high` mode tier, and two MCP tool wrappers.
See [CHANGELOG](https://github.com/Neguiolidas/Conscio/blob/HEAD/CHANGELOG.md) for details.

> Full version history: [**CHANGELOG.md**](https://github.com/Neguiolidas/Conscio/blob/HEAD/CHANGELOG.md).

---

## Install

**As a Claude Code plugin** — memory, capture hooks and 14 slash commands, with no
Python toolchain to manage:

```
/plugin marketplace add Neguiolidas/Conscio
/plugin install conscio
```

**As a library or CLI:**

```bash
pip install conscio…
