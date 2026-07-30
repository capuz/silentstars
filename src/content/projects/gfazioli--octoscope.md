---
repo: "gfazioli/octoscope"
name: "octoscope"
description: "Terminal dashboard for GitHub — followers, stars, PRs and issues at a glance, auto-refreshed"
readmeQualityOk: true
url: "https://github.com/gfazioli/octoscope"
homepage: "https://gfazioli.github.io/octoscope"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["bubbletea", "cli", "dashboard", "github", "github-api", "go", "lipgloss", "monitoring", "stats", "terminal"]
stars: 58
forks: 0
openIssues: 31
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-21T17:12:51Z"
lastCommitAt: "2026-07-30T06:06:51Z"
lastReleaseAt: "2026-04-28T06:08:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 30
maintainers: ["gfazioli", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1217228073/99444041-7267-434d-93ab-8a896fd9b245?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061139Z&X-Amz-Expires=300&X-Amz-Signature=15d103ef4565c5a4ab4d89b24f3202d78d8add2e29f8086e9a5879869a9d5fad&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE5OSwibmJmIjoxNzg1MzkxODk5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.8sDqhP8oNXmkJtsL8UxVz-0ieHTMSmWPjWo_dmAJwz8"
---

<h1>↓</h1>

OCTOSCOPE is a terminal dashboard for **your GitHub account, or anyone else's public
profile** — profile, activity, repo health and network at a glance,
auto-refreshed in the background.

<h1>↓</h1>

</div>

## Contents

- [What it does](#what-it-does)
  - [The tabs](#the-tabs)
  - [Drill-in details](#drill-in-details)
  - [Rate-limit awareness](#rate-limit-awareness)
  - [Public-only mode](#public-only-mode)
  - [Activity tab](#activity-tab)
  - [Live feedback](#live-feedback)
  - [What octoscope can't show](#what-octoscope-cant-show)
- [Install](#install)
  - [Homebrew (macOS & Linux)](#homebrew-macos--linux)
  - [From source](#from-source)
  - [Pre-built binary](#pre-built-binary)
- [Usage](#usage)
- [Themes](#themes)
- [Configuration](#configuration)
  - [In-app settings panel](#in-app-settings-panel)
- [Authentication](#authentication)
  - [Token scopes](#token-scopes)
- [Contributing](#contributing)
- [Sponsor](#sponsor)
- [License](#license)

## What it does

octoscope is a single-binary TUI built with
[BubbleTea](https://github.com/charmbracelet/bubbletea). It pulls a focused
set of numbers from the GitHub GraphQL API in one round-trip and keeps them
current on…
