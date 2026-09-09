---
repo: "kamioj/spec-workflow"
name: "spec-workflow"
description: "Personal Claude Code plugin marketplace for SDD workflow (research / ask / propose / apply / verify / archive)"
readmeQualityOk: true
url: "https://github.com/kamioj/spec-workflow"
language: "Shell"
languages: ["Shell", "PowerShell"]
languagePcts: [67, 24]
stars: 20
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-27T09:25:18Z"
lastCommitAt: "2026-09-09T08:19:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 23
maintainers: ["kamioj"]
openGraphImageUrl: "https://opengraph.githubassets.com/763f3acedcf39dbb9a73c825441dcae50ed1c7d4a2fe6829974c3e12bea5e6ba/kamioj/spec-workflow"
---

# spec-workflow

**Spec-driven development plugin for Claude Code**

Large changes, kept controllable and reversible. The pipeline — research → clarify → propose → **HARD GATE** → implement → verify → archive — is re-entrant at every step, enforced by hooks, and runs its agents in parallel.

**English** | [中文](https://github.com/kamioj/spec-workflow/blob/HEAD/README_cn.md)

</div>

---

## Why

Two paradigms already dominate AI-assisted spec-driven development:

- **Fast lane** — start coding right away and let hooks catch the mistakes (hookify, or a stripped-down superpowers brainstorm).
- **Heavy lane** — spec everything up front, but down a rigid track (OpenSpec's 4 commands, superpowers brainstorm's 9 steps).

**spec-workflow takes a third path.** It keeps the discipline of thinking before acting, but breaks the process into 16 independent slash commands — each stage re-entrant, interruptible, and re-runnable on its own. Three hard gate hooks make sure the workflow stops where it has to; a Stop-event reminder makes sure implementation ends with a verification; a Stop-event driver turns `/spec:loop`'s autonomous rounds into a hard mechanism.

### Comparison

| Dimension |…
