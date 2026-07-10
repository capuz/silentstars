---
repo: "Da7-Tech/mind"
name: "mind"
description: "Brain-like memory for any coding agent: spreading-activation recall, Ebbinghaus forgetting, deterministic dream consolidation. One Python file, zero dependencies, offline, EN+AR."
readmeQualityOk: true
url: "https://github.com/Da7-Tech/mind"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-memory", "ai-agents", "claude-code", "codex", "hermes-agent", "knowledge-graph", "llm-memory", "memory", "offline-first", "python"]
stars: 10
forks: 2
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T06:37:42Z"
lastCommitAt: "2026-07-10T07:00:44Z"
lastReleaseAt: "2026-07-04T03:07:29Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["Da7-Tech", "therealclvn"]
openGraphImageUrl: "https://opengraph.githubassets.com/c16aa6290d307a0f907d84f6037fd13e7e6e6a17543ea8f7d6bb373e11067f92/Da7-Tech/mind"
discussionCount: 2
---

# mind — brain-like memory for any coding agent

**One Python file. Zero dependencies. Zero API keys. Fully offline. Multilingual — engineered for EN + AR, measured on 10 languages.**

Your coding agent forgets everything between sessions. `mind` gives it a memory
that works the way yours does: a weighted concept graph that recalls by
**spreading activation** (not flat search), forgets by the **Ebbinghaus curve**
(unused memories fade, reinforced ones harden), and reorganizes itself while
you sleep through a **deterministic dream cycle** — no LLM calls, no token
bill, every decision explained in a journal you can read.

It plugs into **all your agents at once**: one memory, exported to `AGENTS.md`
(Kimi Code, Codex, Cursor, Zed, ...), `CLAUDE.md` (Claude Code) and `GEMINI.md` — and
adopted automatically by `.cursorrules`, `.windsurfrules`, `.clinerules`
and `.roo/rules/mind.md` in projects that already use those tools.

```bash
curl -fsSLO https://raw.githubusercontent.com/Da7-Tech/mind/v6.2.8/mind.py
python3 -c "import hashlib;h=hashlib.sha256(open('mind.py','rb').read()).hexdigest();assert h=='b3e944ce9103bd5e353e09a12f434721cb274bc919326361039104889c6c5e03',h;print('mind.py:…
