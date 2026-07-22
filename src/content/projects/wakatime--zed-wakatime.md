---
repo: "wakatime/zed-wakatime"
name: "zed-wakatime"
description: "Zed plugin for automatic time tracking and metrics generated from your programming activity."
readmeQualityOk: true
url: "https://github.com/wakatime/zed-wakatime"
homepage: "https://wakatime.com/zed"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["extension", "wakatime", "zed", "zed-editor", "zed-extension"]
stars: 202
forks: 29
openIssues: 19
closedIssues: 24
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2024-08-27T10:31:46Z"
lastCommitAt: "2026-07-22T06:11:00Z"
lastReleaseAt: "2025-05-06T03:31:48Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 75
undervaluedScore: 31
maintainers: ["bestgopher", "dependabot[bot]", "alanhamlett"]
openGraphImageUrl: "https://opengraph.githubassets.com/700a32d29260134f84c2983331ac790b0f2a85764f0d8097424e15d2b667985c/wakatime/zed-wakatime"
---

# zed-wakatime

A [WakaTime](https://wakatime.com/) extension for [Zed](https://zed.dev/).

Uses the [wakatime-ls](https://github.com/wakatime/zed-wakatime/tree/master/wakatime-ls) to receive edit events from Zed and send heartbeats to WakaTime by [wakatime-cli](https://github.com/wakatime/wakatime-cli).

## Install
Search for "wakatime" in the "Extensions" page and click "Install".

## Configuration
In order to authenticate with the wakatime-cli, the language server needs to know your API token.
Here are two ways to set the lsp.

### WakaTime configuration file
Create a file named `.wakatime.cfg` in your $HOME directory.
```toml
[settings]
api_key = your-api-key
```
Go through up [wakatime-cli](https://github.com/wakatime/wakatime-cli/blob/develop/USAGE.md)'s documentation for more options.

### Zed settings file
Open Zed's settings file, then add your api key.
```json
"lsp": {
  "wakatime": {
    "initialization_options": {
      "api-key": "Your api key"
    }
  }
}
```

## Note
This plugin has been thoroughly tested only on macOS. If you encounter any issues on other systems, please submit an issue or a pull request.
