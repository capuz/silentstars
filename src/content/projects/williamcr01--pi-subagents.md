---
repo: "williamcr01/pi-subagents"
name: "pi-subagents"
description: "Recursive, isolated, asynchronous subagents for the Pi coding agent"
readmeQualityOk: true
url: "https://github.com/williamcr01/pi-subagents"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 31]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-03T16:45:25Z"
lastCommitAt: "2026-09-04T08:11:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 14
maintainers: ["williamcr01"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7f8f8c0358ca34a47a9d0d3462196942d326c1153895782c15f6ca75e62812a/williamcr01/pi-subagents"
---

# pi-subagents

Recursive, isolated, asynchronous subagents for the [Pi coding agent](https://github.com/earendil-works/pi).

`pi-subagents` adds background delegation to Pi without external npm dependencies. Spawn several focused agents in parallel, let agents recursively delegate their own work, monitor the live tree in Pi's footer, inspect real child transcripts, and collect results when they finish.

## Features

- **Asynchronous spawning** — `spawn_agent` returns immediately while the child runs in its own Pi process and session.
- **Recursive delegation** — children can create grandchildren within the configured depth budget.
- **Parallel work** — concurrency is configurable, including unlimited mode with `maxConcurrency: -1`.
- **Live monitoring** — the footer shows a recursive status tree with provider/model, activity, and elapsed time.
- **Interactive transcripts** — open any child to read its complete Pi session from the original delegation prompt, including messages and tool calls.
- **Steering and follow-ups** — message a running child to redirect it, or message a finished child to continue its existing session.
- **Automatic delivery** — finished results are sent back…
