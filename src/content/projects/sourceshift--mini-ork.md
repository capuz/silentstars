---
repo: "SourceShift/mini-ork"
name: "mini-ork"
description: "Prove an AI-written fix actually fixes the bug. mini-ork certify reproduces the bug against your repo's own code, attacks the patch with generated invariants in a Docker sandbox, and returns PROVEN / REFUTED / UNVERIFIED with a JSON certificate. Part of a verifier-gated, multi-model agent runtime."
readmeQualityOk: true
url: "https://github.com/SourceShift/mini-ork"
homepage: "https://miniork.dev"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-framework", "ai-agents", "grpo", "llm", "llm-orchestration", "multi-agent", "self-improving", "agentic-ai", "ai-verification", "llmops"]
stars: 32
forks: 10
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2026-06-01T07:34:36Z"
lastCommitAt: "2026-11-02T11:26:29Z"
lastReleaseAt: "2026-07-30T08:04:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["amirkhakshour", "jisawru0", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/78c54ee0f4b0a58a968e4fdbe1cae7b180593ab67c504553cd2f97034b992130/SourceShift/mini-ork"
discussionCount: 0
---

mini-ork turns a goal into a planned, executed, and **verified** run across a fleet of
models: **classify → plan → execute → verify → reflect → improve**. Every verdict comes
from what the code actually did when it ran — tests, type checks, schemas, execution in
an isolated sandbox — not a model's opinion of its own output.

This page is the install guide. For the argument behind the project, see
[Why mini-ork exists](https://github.com/SourceShift/mini-ork/blob/HEAD/docs/WHY.md).

## Quick start

macOS, Linux, or WSL:

~~~bash
curl -fsSL https://raw.githubusercontent.com/SourceShift/mini-ork/main/install.sh | sh
~~~

The installer:

- clones mini-ork into `~/.local/share/mini-ork` (`MINI_ORK_INSTALL_DIR` overrides it),
- creates a checkout-local `.venv` and installs the full Python profile
  (CLI, local web sidecar, Crucible),
- puts `mini-ork` on your PATH in `~/.local/bin`,
- offers the first-run wizard when it is running on a terminal.

From an existing checkout, the same install:

~~~bash
git clone --recurse-submodules https://github.com/SourceShift/mini-ork.git
cd mini-ork
make install
mini-ork version        # open a new terminal if PATH changed
~~~

`--recurse-submodules`…
