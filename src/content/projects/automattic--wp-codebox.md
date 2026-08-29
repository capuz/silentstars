---
repo: "Automattic/wp-codebox"
name: "wp-codebox"
description: "Disposable WordPress Playground sandboxes for securely isolated agentic workflows. "
readmeQualityOk: true
url: "https://github.com/Automattic/wp-codebox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 14
forks: 3
openIssues: 63
closedIssues: 696
watchers: 0
contributors: 139
recentReleases: 4
createdAt: "2026-05-16T21:20:30Z"
lastCommitAt: "2026-08-29T17:28:20Z"
lastReleaseAt: "2026-06-04T19:46:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/600da3164a08195bc8854e4adea33c03b37187701f7cbb37cb74af37d3fdd23b/Automattic/wp-codebox"
---

# WP Codebox

Adversarial campaign, transport fault, service disruption, browser oracle, and
sealed replay contracts are documented in
[`docs/adversarial-runtime.md`](https://github.com/Automattic/wp-codebox/blob/HEAD/docs/adversarial-runtime.md).

**WP Codebox unlocks secure WordPress code execution from anywhere.** Run agents, accept untrusted patches, evaluate plugins, reproduce bugs, or experiment freely - every sandbox is a disposable contained WordPress runtime that can't touch its caller. Your host can be a CLI, CI job, mobile app, Node service, WordPress plugin, or anything else that can shell out or hit an API.

WordPress has historically lacked a clean scratch space for code execution. Modern dev workflows assume one - Node has `npm install` per project, Python has venvs, containers have ephemeral filesystems. WP Codebox provides that primitive as a usable runtime contract: real WordPress, fully ephemeral, no host filesystem access except via declared mounts. Any product - WordPress or not - can offer code execution against a real WordPress instance without risking the caller.

WP Codebox is the runtime boundary for agent-built or workflow-built outputs. It is not the…
