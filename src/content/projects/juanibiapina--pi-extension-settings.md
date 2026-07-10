---
repo: "juanibiapina/pi-extension-settings"
name: "pi-extension-settings"
description: "Shared utilities and extensions for pi coding agent"
readmeQualityOk: true
url: "https://github.com/juanibiapina/pi-extension-settings"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 26
forks: 6
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T17:42:51Z"
lastCommitAt: "2026-07-10T07:00:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 32
maintainers: ["juanibiapina", "dependabot[bot]", "PurpleMyst"]
openGraphImageUrl: "https://opengraph.githubassets.com/c16aa6290d307a0f907d84f6037fd13e7e6e6a17543ea8f7d6bb373e11067f92/juanibiapina/pi-extension-settings"
---

# @juanibiapina/pi-extension-settings

A [pi](https://github.com/badlogic/pi-mono) extension that provides centralized settings management for all extensions.

## Features

- **`/extension-settings` command** - Interactive UI to configure global extension settings
- **`/extension-settings-local` command** - Interactive UI to configure per-project/folder settings
- **Helpers for reading/writing** - `getSetting()` and `setSetting()` functions
- **Ordered multi-select** - Settings where users pick and reorder items from a list
- **Persistent storage** - Global settings stored in `~/.pi/agent/settings-extensions.json`; local settings stored in `.pi/settings-extensions.json`

## For Users

Install the extension to get the `/extension-settings` command, which provides an interactive UI to configure settings for all extensions that support it:

```bash
pi install npm:@juanibiapina/pi-extension-settings
```

> **⚠️ Load Order:** `pi-extension-settings` must appear **before** any extension that registers settings in your `packages` array in `~/.pi/settings.json`. Extensions register via the event bus at load time, so if `pi-extension-settings` hasn't loaded yet, those registrations are…
