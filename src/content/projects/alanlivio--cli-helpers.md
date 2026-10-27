---
repo: "alanlivio/cli-helpers"
name: "cli-helpers"
description: "cli-helpers provides an extensible library of bash and powershell scripts to easily setup and use your unix/windows environment."
readmeQualityOk: true
url: "https://github.com/alanlivio/cli-helpers"
homepage: "http://alanlivio.github.io/cli-helpers/"
language: "PowerShell"
languages: ["PowerShell", "Python"]
languagePcts: [43, 35]
topics: ["bash", "bashrc", "bash-profile", "linux", "bash-script", "bash-alias", "windows", "dotfiles", "shell", "macos"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2015-10-13T18:38:11Z"
lastCommitAt: "2026-10-27T12:39:18Z"
lastReleaseAt: "2026-10-20T14:45:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 73
maintainers: ["alanlivio"]
openGraphImageUrl: "https://opengraph.githubassets.com/3656282958898f5cf6549c9534214a9b50859ce8881a24e937814a346ba9e9fe/alanlivio/cli-helpers"
---

# cli-helpers

`cli-helpers` is a library for organizing your Bash and PowerShell helper scripts. It automatically loads scripts from the `os/` directory based on your current operating system, and from the `programs/` directory if a specific program is installed. To use the library, you need to load [`init.sh`](https://github.com/alanlivio/cli-helpers/blob/HEAD/init.sh) in your `.bashrc` and [`init.ps1`](https://github.com/alanlivio/cli-helpers/blob/HEAD/init.ps1) in your PowerShell `$PROFILE`. The diagrams below provide an overview of the library's behavior.

**From Bash:**

**From PowerShell:**

## Ubuntu Setup

You can use the Bash commands below to fetch, install, and set up `cli-helpers` to be loaded in your `.bashrc`:

```bash
git clone https://github.com/alanlivio/cli-helpers ~/src/cli-helpers
. ~/src/cli-helpers/setup_profile.sh
```

## Windows Setup

If WinGet or Git is not installed, run [`setup_winget_git.ps1`](https://github.com/alanlivio/cli-helpers/blob/HEAD/setup_winget_git.ps1) or download the [`cli-helpers` GUI](https://github.com/alanlivio/cli-helpers/releases/latest/download/cli-helpers.exe).

To set up `cli-helpers` to be loaded in your `profile.ps1` by…
