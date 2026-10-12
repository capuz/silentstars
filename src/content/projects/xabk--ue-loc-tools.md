---
repo: "xabk/ue-loc-tools"
name: "ue-loc-tools"
description: "Localization Tools for Unreal, plus UE and Crowdin API integration"
readmeQualityOk: true
url: "https://github.com/xabk/ue-loc-tools"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["crowdin", "crowdin-api", "localization", "unreal", "unreal-engine"]
stars: 8
forks: 1
openIssues: 11
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-19T05:51:49Z"
lastCommitAt: "2026-10-12T11:15:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 67
maintainers: ["xabk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba09cd35f8f2b44a43e9f5a731aabc220d61895d17f52d4d88dec0e3be20d463/xabk/ue-loc-tools"
---

# ueloctools library
## Localization tools for Unreal, plus UE and Crowdin API integration

This pack of scripts aims to help with automating gather/export/import/compile and sync process for Unreal and Crowdin. On top of that, it adds a bunch of improvements and convenience features: it sorts and annotates the source files to help translators, creates a debug ID and 'hash' pseudolocalized locales, and lets you manipulate localization targets to avoid tedious manual tasks in Loc Dashboard (e.g., adding or deleting one or more languages to one or more targets and copying languages from one target to another).

## Requirements

### uv

"An extremely fast Python package and project manager, written in Rust", as they put it.

`update-loc-tools.bat` installs it if it is missing, so you normally do not
need to do this by hand. If you want to: `winget install --id=astral-sh.uv -e`.

uv also takes care of Python itself and every package, so there is nothing
else to install.

See https://docs.astral.sh/uv/getting-started/installation/ for other options.

### Crowdin CLI

Used to upload source files to Crowdin.

`update-loc-tools.bat` installs the version these tools are tested against, so…
