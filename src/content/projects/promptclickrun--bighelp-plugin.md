---
repo: "promptclickrun/bighelp-plugin"
name: "bighelp-plugin"
description: "Hermes plugin for the bighelp iPhone app: agent boards, native cards, iPhone tools, live voice, files and wikis, and end-to-end encrypted notifications."
readmeQualityOk: true
url: "https://github.com/promptclickrun/bighelp-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 5
openIssues: 0
closedIssues: 44
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-02T03:46:05Z"
lastCommitAt: "2026-11-09T04:34:15Z"
lastReleaseAt: "2026-10-03T03:31:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["promptclickrun", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/519fb5502e825a9391fd836fcbf0baaaae5aefd4d7cd205040f9a6f2e0ad5217/promptclickrun/bighelp-plugin"
---

# bighelp plugin for Hermes

This Hermes plugin gives the [bighelp](https://github.com/promptclickrun/bighelp) app its extra features. The app
runs on iPhone, iPad, Mac and Vision Pro. On a stock Hermes host, the plugin adds agent boards, native cards, iPhone
tools, live voice, files, workflows and optional end-to-end encrypted notifications.

Hermes continues to control agents, chats, tools, approvals and scheduled tasks. The plugin runs inside the Hermes
dashboard and uses its sign-in. It opens no extra ports and needs no bighelp account or public URL.

> Hermes still knows the plugin by its first name, `loopdy`. That name is its folder, its routes under
> `/api/plugins/loopdy/…` and the `loopdy:` prefix on its skills. If we change these names, app builds that are
> already on phones stop working. Everything that agents and people read says bighelp. The older names
> (`hermes loopdy …`, the `loopdy` toolset, `LOOPDY_*` settings) continue to work.

## Requirements

- Hermes 0.21.1 or later. Hosts on Hermes 0.22 also work. CI runs compatibility tests against Hermes 0.21.1 and
  0.21.2 only.
- The bighelp app does not check the Hermes version. It reads the list of features that the…
