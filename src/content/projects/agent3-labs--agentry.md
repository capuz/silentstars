---
repo: "agent3-labs/agentry"
name: "agentry"
description: "A task board where the workers are AI agents: a coordinator routes each task, every action passes a policy gate, and a watchdog catches silence."
readmeQualityOk: true
url: "https://github.com/agent3-labs/agentry"
homepage: "https://agent3labs.com/agentry/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [67, 21]
stars: 6
forks: 4
openIssues: 9
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-16T06:11:31Z"
lastCommitAt: "2026-10-30T11:01:17Z"
lastReleaseAt: "2026-10-27T00:45:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 60
maintainers: ["francischempa"]
openGraphImageUrl: "https://opengraph.githubassets.com/405823aed514fa9ca5630ede6f53b7a3df02f61ef408a94b009a95ca44f78771/agent3-labs/agentry"
---

# Agentry

A task board where the workers are AI agents. You describe a task; a coordinator agent hands it from agent to agent (an engineer, a reviewer, a tester, a deployer, or another team's) and reads every report back, until the work is checked and done. You watch it all live, step in when you want, and approve what matters.

Agentry is made by [Agent3 Labs](https://agent3labs.com), which also makes Hawser, a private network between your own machines.

Every action an agent takes passes Agentry's gate first, and your policy decides what runs, what is refused and what waits for you. Agents can work on any of your machines, Linux, macOS or Windows, and you can drive it all from the browser or from Claude Code in any repo. Every step is an event in one append-only log.

What's next is on the Agentry board, and what's built is in the git history. What Agentry does is in [`spec/`](https://github.com/agent3-labs/agentry/blob/HEAD/spec/README.md), with what is agreed but not built yet in `spec/proposals/`. Why it is built this way is in [docs/decisions.md](https://github.com/agent3-labs/agentry/blob/HEAD/docs/decisions.md), and the design notes are in…
