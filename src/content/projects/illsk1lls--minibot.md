---
repo: "illsk1lls/MiniBot"
name: "MiniBot"
description: "An OpenAI compatible Powershell console client "
readmeQualityOk: true
url: "https://github.com/illsk1lls/MiniBot"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T03:18:10Z"
lastCommitAt: "2026-07-19T06:12:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["illsk1lls", "ByronScottJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ba91900644f288651f8dc79e79d06cdeda3170d718161638f05e9d8e269846/illsk1lls/MiniBot"
---

# MiniBot
OpenAI-compatible PowerShell agent client for local models (Windows PowerShell 5.1 + WPF UI).


## Setup
1. Edit the defaults at the top of `MiniBot.ps1` (`BaseUrl`, `Model`, `ApiKey`, etc).
2. Run it.

```
powershell -NoProfile -ExecutionPolicy Bypass -File .\MiniBot.ps1
```

Or rename to `.cmd` and double-click (hybrid launcher at the top of the file).

```
irm https://YOUR_HOST/MiniBot.ps1 | iex
```

## Useful params
Set them in the `param` block or pass on the command line:

| Param | Default | Notes |
| --- | --- | --- |
| `BaseUrl` | your host | OpenAI-compatible base (chat/completions) |
| `Model` | model id | API model name |
| `ModelAlias` | same as model | Sticky "PoweredBy" label (empty = hide) |
| `ApiKey` | `none` | Or store with `-StoreCredentials` / login checkbox |
| `AgentName` | agent name | Branding in UI |
| `HideConsole` | `$true` | `$false` keeps the PS/Terminal window open |
| `AutoApproveEnabled` | `$false` | Skip Y/N prompts for mutating tools |
| `ToolProfile` | `core` | `full` enables all tool groups at start |
| `SpeechEnabled` | `$false` | Right-Ctrl push-to-talk + optional TTS |
| `DebugLog` | `$false` |…
