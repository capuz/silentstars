---
repo: "AMagicPear/pichamber"
name: "pichamber"
description: "A lightweight GUI for your Pi Agent."
readmeQualityOk: true
url: "https://github.com/AMagicPear/pichamber"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [48, 46]
topics: ["agent", "bun", "vue3", "webapp"]
stars: 63
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-20T02:19:58Z"
lastCommitAt: "2026-08-17T04:19:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 32
maintainers: ["AMagicPear"]
openGraphImageUrl: "https://opengraph.githubassets.com/96ff37418e763a9662654fe87d4b293c510736a800756fdab4b2baecc64fc93e/AMagicPear/pichamber"
---

# pichamber

A browser-based workspace for the Pi Coding Agent. Vue 3 + Bun thin shell wrapping `pi` with a real shell terminal.

## Install from npm

Requires [Bun](https://bun.sh) (the backend runs on it).

```sh
npm i -g @amagicpear/pichamber
cd your-project
pichamber
```

The command starts a local background server when needed, creates a session for
the current directory, and opens it in your browser. Later invocations reuse the
same server.

```sh
pichamber ../another-project  # open another workspace
pichamber --no-open           # print the session URL only
pichamber status              # inspect the background server
pichamber logs -f             # follow server logs
pichamber stop                # stop it cleanly

# Foreground mode for debugging, containers, or an SSH tunnel
pichamber serve --host 127.0.0.1 --port 3000
```

Run `pichamber --help` for all options. State and logs are stored under
`~/Library/Application Support/pichamber` on macOS,
`$XDG_STATE_HOME/pichamber` on Linux, and `%LOCALAPPDATA%\\pichamber` on
Windows. Set `PICHAMBER_STATE_DIR` to override that location or
`PICHAMBER_PORT` to change the default port.

## Develop

A monorepo workspace using…
