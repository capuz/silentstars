---
repo: "diegopetrucci/the-last-harness"
name: "the-last-harness"
description: "The last harness you'll ever need."
url: "https://github.com/diegopetrucci/the-last-harness"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [71, 21]
topics: ["agent-orchestration", "cli", "coding-agent", "developer-tools", "llm", "pi", "pi-package", "terminal", "typescript"]
stars: 18
forks: 3
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-09T10:16:20Z"
lastCommitAt: "2026-06-30T06:50:54Z"
lastReleaseAt: "2026-05-19T15:00:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["diegopetrucci", "basiliskav"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca9d0d068eb56e3def13837c94e10cfcbed19b593f1883ece2ed3a1c4559b2c1/diegopetrucci/the-last-harness"
---

# The last harness you'll ever need.

`tlh` (The Last Harness) is an opinionated harness built on top of [Pi](https://github.com/earendil-works/pi).

Two core ideas drive it:
- _"you can outsource your thinking, but not your understanding"_: LLMs can, and should, provide options, help out with discovery and exploration, filling the gaps in your understanding and technical knowledge — they should not, however, be used as a replacement for understanding. [Beware of cognitive debt](https://simonwillison.net/2026/Feb/15/cognitive-debt/).
- _you should not be babysitting your agents_: if you need to manually call tools, run commands, and so on, the harness has failed you.

It achieves this [via a custom orchestration workflow](https://www.stavros.io/posts/how-i-write-software-with-llms/) — you only interface with an architect, whom you engage as a senior peer, and once you're satisfied with the discussion and plan, it takes over until everything is done. Work is pre-reviewed too, often multiple times, so that your time is not wasted in minutiae, freeing you to focus on the bigger picture.

You're also not asked to manually run commands, manage context, or anything like that. This is…
