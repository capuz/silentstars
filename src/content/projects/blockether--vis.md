---
repo: "Blockether/vis"
name: "vis"
description: "Vis is a coding agent that combines tools into Python programs. It can chain operations, run them in parallel, and inspect results before deciding what belongs in the conversation."
readmeQualityOk: true
url: "https://github.com/Blockether/vis"
homepage: "https://vis.blockether.com/"
language: "Clojure"
languages: ["Clojure", "TypeScript"]
languagePcts: [67, 20]
topics: ["vis", "agent", "anthropic", "openai", "coding-agent", "sandbox"]
stars: 14
forks: 3
openIssues: 4
closedIssues: 415
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-10T21:53:51Z"
lastCommitAt: "2026-10-29T12:25:02Z"
lastReleaseAt: "2026-07-27T09:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["kwojcik-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff28d66622703f5338463e1244053b153bfdf66b3d90c74753a78d697fec5718/Blockether/vis"
---

# Vis

Vis is a coding agent you can adapt to your tools and workflow.
Ask it to explore a project, make a change or investigate a failure. Follow the
work from your terminal, desktop or phone, with the same sessions on each.

## Rationale

A capable model can write code, but it does not know how your team works. It does not know which
tests matter, how changes get reviewed or what to check before a release. You do. Vis lets you put
that knowledge into tools the agent can use, instead of a growing list of reminders.

For example, a function can select and run the right tests for a change. A hook
can check the code after an edit and report problems. You define the operations
and checks. The model decides how to combine them. Your instructions explain the
process, while your code carries out its repeatable parts.

Python connects those steps. Models already use it to work with code and data.
Vis lets them use the same language to compose your tools, inspect results and
reuse useful helper functions. You can start with the built-in tools and add
[extensions](https://github.com/Blockether/vis/blob/HEAD/resources/vis-docs/extending.md) as you need them.

You can also see how the answer…
