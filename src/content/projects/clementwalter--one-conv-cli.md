---
repo: "ClementWalter/one-conv-cli"
name: "one-conv-cli"
description: "All your LLM providers, one shared history"
readmeQualityOk: true
url: "https://github.com/ClementWalter/one-conv-cli"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-21T08:13:58Z"
lastCommitAt: "2026-10-23T09:33:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["ClementWalter"]
openGraphImageUrl: "https://opengraph.githubassets.com/4725754aa9d21e267b552b1c5d9cccf414df6126418f7d54b8e0d5c1dca4e76f/ClementWalter/one-conv-cli"
---

# one-conv

Read and search your AI conversations from one CLI. Pull cloud conversations
into a local history, or read sessions already saved by your coding tools.

Work with live teammates from a Slack-style workspace, including human messages
and a paired iPhone app. See [the mobile workspace guide](https://github.com/ClementWalter/one-conv-cli/blob/HEAD/MOBILE_WORKSPACE.md)
for cloud hosting, shared worker boxes and team accounting.

| Namespace | Sources |
| --- | --- |
| `cloud` | ChatGPT, Claude Chat, Codex cloud, Cowork cloud |
| `local` | Claude Code, Codex CLI, Cursor (IDE and CLI), Oh My Pi, shared corpus files |
| `live` | Agent messaging, topics, spawning, hub and mobile workspace |
| `hr` | Shared or local rate cards, usage evidence and expected ask costs |

Cloud conversations are addressed by ID or title. Local sessions are grouped
by the project where the agent ran.

## Install

You need Python 3.11+ and [uv](https://docs.astral.sh/uv/). The launcher declares
its dependencies inline; uv resolves them on first use.

Clone this repository and run `./bin/one-conv --help`. The executable is…
