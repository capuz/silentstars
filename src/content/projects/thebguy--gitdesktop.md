---
repo: "theBGuy/GitDesktop"
name: "GitDesktop"
description: "AI-native, keyboard-first Git desktop client combining GitHub Desktop's ease with advanced Git, PR, issue, discussion, Actions, and notification management; integrates GitLab, Bitbucket, Jira, agentic workflows, multi-provider AI, CLI-first privacy, and self-updating via Tauri + React"
readmeQualityOk: true
url: "https://github.com/theBGuy/GitDesktop"
homepage: "https://gitdesktop.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [48, 36]
topics: ["ai", "git", "react", "tauri", "bitbucket", "desktop-client", "github", "github-cli", "gitlab"]
stars: 252
forks: 33
openIssues: 11
closedIssues: 34
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-19T07:24:46Z"
lastCommitAt: "2026-11-25T03:18:02Z"
lastReleaseAt: "2026-07-23T06:22:30Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 28
maintainers: ["theBGuy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4788097869af29e71861d4672c0b55709152068de9692e4095fd194b9fbf0a2e/theBGuy/GitDesktop"
fundingLinks: ["GITHUB:https://github.com/theBGuy", "BUY_ME_A_COFFEE:https://buymeacoffee.com/theBGuy"]
discussionCount: 1
---

GitDesktop is a free, open-source (Apache-2.0) Git client for Windows, macOS,
and Linux, built with Tauri 2 and React 19. It keeps GitHub
Desktop's approachable model and goes further: staging, diffs, branches, and
history for any remote, plus the whole pull-request loop (code review and
CI) on GitHub, GitLab, and Bitbucket, with issues in-app on GitHub and
GitLab or via Jira on Bitbucket. That includes things GitHub Desktop
doesn't do at all, like offline "local" pull requests and a GitHub Actions
cockpit.

AI runs through commits, reviews, and CI debugging, with the provider you
choose (local models included). It's also optional: one switch hides every AI
surface, leaving a keyboard-first Git client.

All GitHub access goes through the **GitHub CLI (`gh`)**: no OAuth app, and
the app never stores your tokens. Core git runs against any remote via system
`git`. Because `gh` detects each repo's host from its remote, **GitHub
Enterprise** servers work the same as github.com once you've run
`gh auth login --hostname <host>`, and Settings → Accounts switches the
active account per host.
