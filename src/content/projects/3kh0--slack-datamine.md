---
repo: "3kh0/slack-datamine"
name: "slack-datamine"
description: "Datamining Slack changes from the webpack manifest"
readmeQualityOk: true
url: "https://github.com/3kh0/slack-datamine"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [67, 33]
topics: ["slack"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T17:25:48Z"
lastCommitAt: "2026-08-20T04:08:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["3kh0"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f186765e33718aa423884b097500564fd7435b0f90857b2493ebe51e926ab8e/3kh0/slack-datamine"
---

# slack-datamine

Tracks Slack webpack bundle changes.

The miner reads Slack's authed client HTML, extracts the current build metadata and webpack chunk list, downloads the public CDN chunks, and writes the results into `build/`. Each mined build becomes a commit and tag for your convenience.

## What It Writes

`datamine.js` dumps to `build/` on each run and dumps the following:

- API methods and method args
- feature flags and experiments
- error codes, slash commands, and OAuth scopes
- analytics events
- workflow functions and events
- notification types
- AI, MCP, and Block Kit enum values
- trace spans, icon names, shortcuts, dev commands, and UI strings
- `chunks.txt` and `meta.json`

## The Setup

This is an archaic ass setup, but the intended strategy is to have a logged-in Slack desktop client exposing the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) on port 9222.

- `bin/watch-cdp.sh` continuously peeks at the client HTML into
  `queue/html/`.
- `bin/poll.sh` mines queued snapshots in capture order, commits `build/`, tags
  the build, and optionally pushes.
- `bin/snapshot-cdp.js` captures one Slack client snapshot through CDP.
-…
