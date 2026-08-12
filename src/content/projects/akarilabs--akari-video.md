---
repo: "AkariLabs/akari-video"
name: "akari-video"
description: "AKARI Video — AI video editing tool (Theia-based monorepo) · Site: akari.video · Asset library: akari.video/lab"
readmeQualityOk: true
url: "https://github.com/AkariLabs/akari-video"
homepage: "https://akari.video"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [68, 27]
stars: 159
forks: 19
openIssues: 2
closedIssues: 10
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-07-15T07:07:31Z"
lastCommitAt: "2026-08-12T05:14:49Z"
lastReleaseAt: "2026-08-11T23:39:44Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 35
maintainers: ["ryoma-nakajima"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1301312343/c51f6f51-6365-43e5-81a7-bc04ecb375fb"
discussionCount: 1
---

**English** | [日本語](https://github.com/AkariLabs/akari-video/blob/HEAD/README.ja.md)

**Hand over your footage and it comes back edited. Open it, review it, fix only what matters.**

**[akari.video](https://akari.video/)** — official site · **[AKARI Video Lab](https://akari.video/lab/)** — AI-ready asset library (newly launched) · [How-to guide](https://akari.video/howto/)

</div>

AKARI Video is a video editor where an AI agent does the editing.
The app is not a place to edit — it is a place to review and fix. Give the agent your footage
and it assembles everything from analysis and cuts to captions, narration, and BGM, while you
look at the result and correct only where it drifts from your intent.

> **Intent is human. Hands are AI.**

**Status: under construction** — the desktop shell is mid-migration (the previous shell
implementation is preserved at [akari-video-tauri](https://github.com/AkariLabs/akari-video-tauri)).
The headless path (opencode + Claude Code + Cursor Agent + skills) is usable today.

## Why this exists

Throw video editing at an AI "to save time" and you get mass-produced content nobody can call
their own. Do it all yourself and cutting, transcription,…
