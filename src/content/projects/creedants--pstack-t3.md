---
repo: "creedants/pstack-t3"
name: "pstack-t3"
description: "Lauren Tan's pstack agent skills, ported to T3 Code so any model can lead and other models can review the work. Adds brigade, a standing coordinator per project that runs each unit of work in its own git worktree, has another model family review the commit when one can run, and lands it through a queue that is the only writer to trunk."
readmeQualityOk: true
url: "https://github.com/creedants/pstack-t3"
homepage: "https://github.com/creedants/pstack-t3#quick-start"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-skills", "ai-agents", "claude-code", "code-review", "codex", "developer-tools", "multi-agent", "pstack", "skills", "t3-code"]
stars: 15
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-10-03T14:52:54Z"
lastCommitAt: "2026-10-24T00:15:32Z"
lastReleaseAt: "2026-10-23T13:40:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["creedants"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1403310270/4641ebcc-eeec-4504-bec0-83609f5ac9f2"
---

**pstack-t3 makes any model in T3 Code do careful engineering, and gives each project a standing coordinator that turns your requests into reviewed, landed changes.**

## What it is

pstack is Lauren Tan's (poteto) set of skills, playbooks, and principles for careful agent engineering, written for Cursor. pstack-t3 brings that set to T3 Code so the same workflows run on any provider T3 Code drives. It ships upstream files unchanged where it can and swaps each Cursor mechanism for its T3 Code equivalent. It adds a standing project coordinator.

### Staying current

The maintainers keep a byte-identical copy of the pinned upstream commit and re-port each file the port changes when upstream moves. pstack-t3 tracks upstream's `pstack/` path only and lists excluded upstream paths in `upstream.json`. pstack-t3's runtime and setup text name the T3 Code releases they need. Setup needs T3 Code 0.1.2 or later. See [How it works](https://github.com/creedants/pstack-t3/blob/HEAD/docs/how-it-works.md) for the layers.

## What it does

- **Picks the right workflow for your request.** `$poteto-mode` matches your task to one of its playbooks, such as bug fix, feature, refactor, or investigation.…
