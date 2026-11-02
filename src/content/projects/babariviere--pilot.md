---
repo: "babariviere/pilot"
name: "pilot"
description: "A native macOS app for background pi coding agents, with durable chats, isolated workspaces, and reviewable pull requests."
readmeQualityOk: true
url: "https://github.com/babariviere/pilot"
language: "Rust"
languages: ["Rust", "TypeScript", "Swift"]
languagePcts: [38, 35, 23]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-07T08:45:37Z"
lastCommitAt: "2026-11-02T11:36:53Z"
lastReleaseAt: "2026-10-07T13:52:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["babariviere", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/034c43396f5fd17435e1b457b757dcdfd819febe2669fc35350ddb7cda549366/babariviere/pilot"
---

# Pilot

**Background coding agents. A native macOS app. You stay in control.**

Pilot runs [pi](https://github.com/earendil-works/pi) agents in the background, with durable chats and
isolated Build workspaces. Start a task, steer it when needed, and review the result as a
code diff, pull request or artifact. Agents keep working when you close the app.

Pilot is local-first. It uses your existing pi models, authentication and configuration, with a local
daemon managing sessions independently of the SwiftUI app.

Chat uses the SwiftUI transcript. The AppKit transcript transition has been reverted.

[Get started](#get-started) · [Working with Pilot](#working-with-pilot) · [Development](#development)

*Screenshots are rendered from native views with demo data, not live conversations. Chat captures use a
stand-in window header; Build and mission captures are cropped to their working areas.
See [screenshot notes](https://github.com/babariviere/pilot/blob/HEAD/docs/screenshots/README.md) to regenerate them.*

## What you can do

Critical code review is not available yet. The disabled [review foundation](https://github.com/babariviere/pilot/blob/HEAD/docs/critical-review-foundation.md)…
