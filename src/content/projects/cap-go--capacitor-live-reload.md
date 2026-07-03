---
repo: "Cap-go/capacitor-live-reload"
name: "capacitor-live-reload"
description: "Capcitor plugin to live reload Capacitor apps from a remote Vite dev server."
url: "https://github.com/Cap-go/capacitor-live-reload"
homepage: "https://capgo.app/docs/plugins/live-reload/"
language: "Swift"
languages: ["Swift", "Java", "JavaScript"]
languagePcts: [31, 27, 26]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-10-16T06:31:46Z"
lastCommitAt: "2026-07-03T12:40:45Z"
lastReleaseAt: "2026-06-19T13:09:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 59
maintainers: ["riderx", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1077358602/854aa0fc-aec8-47a6-a710-a3b4d80223cf"
fundingLinks: ["GITHUB:https://github.com/riderx"]
---

# @capgo/capacitor-live-reload

  <h2><a href="https://capgo.app/?ref=plugin_live_reload"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_live_reload"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>

WIP: Live reload your Capacitor app from a remote Vite (or compatible) dev server.

> **Note**
> Configure your Vite dev server to disable the built-in HMR client and forward reload events (e.g. JSON payloads `{ "type": "full-reload" }` or `{ "type": "file-update", "path": "..." }`) over a dedicated WebSocket endpoint such as `/capgo-livereload`.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/live-reload/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use…
