---
repo: "hu3rror/scoop-muggle"
name: "scoop-muggle"
description: "🪣 A bucket with lots of cool and unique applications 🌟"
readmeQualityOk: true
url: "https://github.com/hu3rror/scoop-muggle"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["scoop", "scoop-apps", "scoop-bucket"]
stars: 23
forks: 2
openIssues: 0
closedIssues: 49
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-03-17T02:30:30Z"
lastCommitAt: "2026-08-16T04:09:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 63
maintainers: ["github-actions[bot]", "hu3rror"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d1ab8b9ec767523d8678174c9dc7c70fd1321dc90e475791bc3b1836f32b566/hu3rror/scoop-muggle"
---

# Scoop Muggle Bucket [](https://ci.appveyor.com/project/hu3rror/scoop-muggle/branch/master)

A [Scoop](https://scoop.sh/) bucket of Windows applications not commonly found in other buckets: reading/document tools, media players, network utilities, AI clients, and system utilities.

[简体中文](https://github.com/hu3rror/scoop-muggle/blob/HEAD/README.zh-cn.md)

## Installation

```pwsh
scoop bucket add muggle 'https://github.com/hu3rror/scoop-muggle.git'
scoop install muggle/<app_name>
```

Example:

```pwsh
scoop install muggle/keepassxc
```

Update all installed apps:

```pwsh
scoop update *
```

## Post-Reinstall Recovery

If you reinstall Windows while preserving your Scoop installation directory, run these two commands to restore standard Scoop apps and re-link all `persist_external` directories:

```pwsh
# 1. Restore standard Scoop apps (shims, shortcuts, environment variables)
scoop reset *

# 2. Restore external persistence links and re-register the 'persist-external-reset' alias
. "$HOME\scoop\buckets\muggle\scripts\persist-external.ps1"; Invoke-PersistExternalReset
```

> Note: If Scoop is installed in a custom directory, replace $HOME\scoop with your $env:SCOOP path.

After…
