---
repo: "fredluz/cvecondor"
name: "cvecondor"
description: "Tells you when something you run becomes vulnerable, rates it for you, and has your own agent CLI fix it or work around it."
readmeQualityOk: true
url: "https://github.com/fredluz/cvecondor"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-23T21:52:24Z"
lastCommitAt: "2026-11-13T11:23:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 25
maintainers: ["fredluz"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d248c0725175937b35af488cf436ec12d8bb674a55801664c5be5c9f99d6cc3/fredluz/cvecondor"
---

# CVECondor

CVECondor will inventory the apps and packages you’re running, and watch for released vulnerabilities so you don’t have to doomscroll twitter. When it finds a vulnerability, it will dispatch an agent running on your local CLI (i.e. Codex, Claude Code) and have that agent evaluate if you are vulnerable and if so fix it. It can either update the apps and packages or code a workaround fix while there is no patch.

You can install CVECondor by pointing your agent at this repo. Just send it the link https://github.com/fredluz/cvecondor and it will read the context we have prepared for it. CVECondor is made to be highly customizable and adaptable to your own workflow.

TRACK_RECORD.md is a file containing what CVECondor has done on my Mac + VPS since I’ve built it, you can point your agent to it and it’ll tell you if it’s worth installing or not.

Below this is a long description of the program that Claude wrote. I haven’t read it, I don’t think you need to either. Just ask your agent to go through it and tell you the important parts.

**This is a work in progress, and there’s still a lot we want to do.** What’s planned is in the…
