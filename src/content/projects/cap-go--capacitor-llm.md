---
repo: "Cap-go/capacitor-llm"
name: "capacitor-llm"
description: "Capacitor plugin to run LLM models locally in IOS and Android, support AppleInteligence"
url: "https://github.com/Cap-go/capacitor-llm"
homepage: "https://capgo.app/docs/plugins/llm/"
language: "Swift"
languages: ["Swift"]
languagePcts: [51]
topics: ["capacitor", "ionic", "capgo", "plugin"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-06-12T03:23:26Z"
lastCommitAt: "2026-07-03T12:40:51Z"
lastReleaseAt: "2025-11-11T17:56:13Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 58
maintainers: ["riderx", "github-actions[bot]", "Codex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1000598569/b8a01300-db3b-489b-ae6f-1e8b0f973e3b"
fundingLinks: ["GITHUB:https://github.com/riderx"]
---

# @capgo/capacitor-llm

  <h2><a href="https://capgo.app/?ref=plugin_llm"> ➡️ Get Instant updates for your App with Capgo 🚀</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_llm"> Fix your annoying bug now, Hire a Capacitor expert 💪</a></h2>
</div>

On-device LLM support for Capacitor.

Current platform strategy:

- iOS: Apple Intelligence by default, plus LiteRT-LM `.litertlm` custom models when the plugin is integrated through Swift Package Manager
- Android: LiteRT-LM for `.litertlm` bundles, with a compatibility fallback for legacy MediaPipe `.task` models
- Web: Gemma 4 web models through `@mediapipe/tasks-genai`

## Documentation

The most complete plugin docs are available at [capgo.app/docs/plugins/llm](https://capgo.app/docs/plugins/llm/).

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.*.*         | v8.*.*                  | ✅         |
| v7.*.*         | v7.*.*                  | On demand  |
| v6.*.*         | v6.*.*                  | ❌         |
| v5.*.*         | v5.*.*                  | ❌         |

> **Note:** The plugin major version follows the Capacitor…
