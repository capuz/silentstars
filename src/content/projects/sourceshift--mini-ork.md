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
lastCommitAt: "2026-11-09T00:50:06Z"
lastReleaseAt: "2026-07-30T08:04:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["amirkhakshour"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bb27736aa55d520bae477f2175e37ac9c2c070f8ab5411e82a2501b31c52a2c/SourceShift/mini-ork"
discussionCount: 0
---

mini-ork turns a goal into a planned, executed, and **verified** run across a fleet of
models: **classify → plan → execute → verify → reflect → improve**. Every verdict comes
from what the code actually did when it ran — tests, type checks, schemas, execution in
an isolated sandbox — not a model's opinion of its own output.

This page is the install guide. For the argument behind the project, see
[Why mini-ork exists](https://github.com/SourceShift/mini-ork/blob/HEAD/docs/WHY.md).

**Handing the setup to a coding agent?** Give it [SETUP.md](https://github.com/SourceShift/mini-ork/blob/HEAD/SETUP.md) instead of
this page. It states its own attention budget — at most six questions, one plan,
one confirmation, and no secret ever typed into the conversation — and it is
checked by `tests/unit/test_setup_doc_py.py`, so every command it names exists.

## Quick start

macOS, Linux, or WSL:

~~~bash
curl -fsSL https://raw.githubusercontent.com/SourceShift/mini-ork/main/install.sh | sh
~~~

The installer:

- clones mini-ork into `~/.local/share/mini-ork` (`MINI_ORK_INSTALL_DIR` overrides it),
- creates a checkout-local `.venv` and installs the full Python profile
  (CLI, local web sidecar,…
