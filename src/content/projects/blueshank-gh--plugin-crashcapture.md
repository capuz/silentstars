---
repo: "blueshank-gh/plugin_crashcapture"
name: "plugin_crashcapture"
description: "Captures failures from garry's mod and generates reports"
url: "https://github.com/blueshank-gh/plugin_crashcapture"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-21T18:53:05Z"
lastCommitAt: "2026-06-27T00:21:02Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 69
undervaluedScore: 9
maintainers: ["blueshank-gh"]
openGraphImageUrl: "https://opengraph.githubassets.com/37c5744f4f5ccc0fd3754d1790e632526e361f1b15854e3363703a8fd03c2abe/blueshank-gh/plugin_crashcapture"
---

# plugin_crashcapture

A crash and freeze logger for Garry's Mod servers.\
Thanks to **Buildstruct** for infrastructure testing.\
Based on https://github.com/Python1320/gmsv_segfault

## What it does

When your server crashes or freezes, you normally get nothing useful... the process just dies.\
This plugin catches those failures and writes a readable report explaining what happened and where, so you can actually track down the problem.

It handles two kinds of failures:

- **Crashes** - the game hits a fatal error and would otherwise close silently.
- **Freezes (hangs)** - the server stops responding (for example, a stuck script looping forever).

Either way, you get a report file describing the failure.

## Where the reports go

Reports are saved as Markdown files in a `crashes/` folder at your GMod root (next to the game's own crash dumps).\
Each one is named for what happened and when, so they're easy to find and read.

## How to use it

The easiest and recommended way is to load it as a binary module:

1. Put the matching `.dll` for your server in `garrysmod/lua/bin/`.
2. Add `require("crashcapture")` to a server autorun script.

That's it, once loaded, it watches for crashes…
