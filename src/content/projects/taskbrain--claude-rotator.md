---
repo: "taskbrain/claude-rotator"
name: "claude-rotator"
description: "Local OAuth proxy that auto-rotates Claude Code accounts across usage limits on macOS and Linux."
originalDescription: "Local OAuth proxy that auto-rotates Claude Code accounts across usage limits on macOS and Linux."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/taskbrain/claude-rotator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["anthropic", "claude", "claude-code", "cli", "developer-tools", "linux", "macos", "nodejs", "oauth", "proxy"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-06-05T01:12:15Z"
lastCommitAt: "2026-11-19T05:01:52Z"
lastReleaseAt: "2026-10-20T01:35:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 58
maintainers: ["Earthfreedom"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b35fafc029f10f3188f7510e9d735bfe339fc4928cd902ec3b25128d1703afa/taskbrain/claude-rotator"
---

# claude-rotator

An unofficial proxy tool that automatically switches between multiple Claude Code accounts locally, depending on the request's model and usage quota. Works on macOS and Linux.

`claude-rotator` starts an Anthropic-compatible HTTP proxy that listens only on `127.0.0.1`, and points `ANTHROPIC_BASE_URL` in Claude Code's `~/.claude/settings.json` to this proxy. After installation, Claude Code can still be launched as usual with the `claude` command.

**Zero dependencies** ([package.json](https://github.com/taskbrain/claude-rotator/blob/HEAD/package.json) has no `dependencies`; it is implemented using only the Node.js standard library). Because there is no supply chain risk from external packages, the cost of auditing the code by reading it is kept low.

It is not distributed through the npm registry (`package.json` has `"private": true`). To use it, clone this repository and install it locally with `npm install -g .`.
