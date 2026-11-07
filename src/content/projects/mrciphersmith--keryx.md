---
repo: "MrCipherSmith/keryx"
name: "keryx"
description: "CLI-first metaproject toolkit — a versioned .metaproject/ workspace giving AI agents and developers one shared, structured project context."
readmeQualityOk: true
url: "https://github.com/MrCipherSmith/keryx"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-07-06T08:41:09Z"
lastCommitAt: "2026-11-07T10:34:36Z"
lastReleaseAt: "2026-08-11T08:08:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["MrCipherSmith"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9dc677f78de15b3eeeff384f124deaab948b273b456451a92a4a710bea6a3fa/MrCipherSmith/keryx"
---

Version-controlled repository context for Codex, Claude, Cursor,<br>
  and any other AI coding agent.

`keryx` turns what agents keep rediscovering about your repository into durable
Markdown and JSON under `.metaproject/`: code relationships, architecture,
project memory, relevant tests, quality signals, agent skills, and task state.
Every agent and every teammate reads the same context, and it is reviewed in a
diff like the rest of the code.

The core is deterministic, local, offline, and has no required runtime
dependencies. keryx does not take your coding agent away and does not make
engineering decisions for you — it gives every agent the same project context
instead of letting each one reconstruct the repository from scratch.

It also ships **an agent runtime of its own**, built directly on that context:
durable sessions, an allow/ask/deny policy engine, kernel-enforced sandboxing,
child agents and evidence-gated completion. Keep using Codex, Claude or Cursor,
run `keryx shell`, or do both — they all read the same project brain.
You can delegate the work, not the responsibility: a managed flow freezes its
acceptance criteria before the work starts, lets them change only…
