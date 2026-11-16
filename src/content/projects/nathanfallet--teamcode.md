---
repo: "nathanfallet/teamcode"
name: "teamcode"
description: "An open-source, self-hosted model gateway for teams: pooled provider accounts, fair access, predictive capacity management, a web dashboard, and a native Kotlin Multiplatform CLI."
readmeQualityOk: true
url: "https://github.com/nathanfallet/teamcode"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-18T20:02:01Z"
lastCommitAt: "2026-11-16T11:53:16Z"
lastReleaseAt: "2026-10-22T12:30:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["nathanfallet"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f2d33a5656ffcceb13df2081def2a427e49b51bb2f6fdf07583d8d7e511cf51/nathanfallet/teamcode"
---

# TeamCode

An open-source, self-hosted model gateway for teams: pooled provider accounts, fair access, predictive capacity management, a web dashboard, and a native Kotlin Multiplatform CLI.

## Install the native CLI

The release pipeline includes [one-command installers for macOS, Linux and Windows](https://github.com/nathanfallet/teamcode/blob/HEAD/docs/bootstrap.md). Install the latest stable release from its published release assets:

```sh
curl -fsSL https://github.com/nathanfallet/teamcode/releases/latest/download/install.sh | sh
```

```powershell
& { $f = Join-Path $env:TEMP ([IO.Path]::GetRandomFileName() + '.ps1'); try { Invoke-WebRequest -UseBasicParsing 'https://github.com/nathanfallet/teamcode/releases/latest/download/install.ps1' -OutFile $f; & ([scriptblock]::Create([IO.File]::ReadAllText($f))) } finally { Remove-Item $f -ErrorAction SilentlyContinue } }
```

The script is pinned to the release it comes from, so every file it downloads matches that exact version. To install a specific version, replace `releases/latest/download/` with `releases/download/<version>/`. No JVM is required. The installer makes `teamcode` available by name (a `~/.local/bin` link on…
