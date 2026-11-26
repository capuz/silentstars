---
repo: "luongnv89/rex-extensions"
name: "rex-extensions"
description: "Extensions for the Rex terminal multiplexer: PR/issue panel, Claude usage panel, tab locations, same-machine ssh tabs"
readmeQualityOk: true
url: "https://github.com/luongnv89/rex-extensions"
homepage: "http://luongnv.com/rex-extensions/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["extensions", "lua", "rex", "terminal", "terminal-multiplexer"]
stars: 26
forks: 1
openIssues: 0
closedIssues: 42
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-05T08:54:58Z"
lastCommitAt: "2026-11-26T23:36:33Z"
lastReleaseAt: "2026-11-25T09:30:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["luongnv89"]
openGraphImageUrl: "https://opengraph.githubassets.com/202dcaf78a352ae6e29edb43d471420cb484e0c74ac24d6d7deae0f51a826cc4/luongnv89/rex-extensions"
---

# rex-extensions

Extensions for Rex, the terminal multiplexer. Each one is a folder with a Lua file that Rex's `init.lua` loads, plus whatever the extension runs, and an `install.js` that adds it to your config.

| Extension | What it does | Default key |
| --- | --- | --- |
| [github](https://github.com/luongnv89/rex-extensions/blob/HEAD/github/README.md) | The open pull requests and issues of the repo you're in, from GitHub or GitLab, in a side pane. Resolve an issue or review a pull request with an agent, from a button on each row, with the agent profile and prompt you choose, merge a pull request from its own Merge button, close an issue from its own Close button, and run one agent on the issues you check with Auto-pilot. | `cmd+shift+g` |
