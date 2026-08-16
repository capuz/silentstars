---
repo: "nushell-prophet/dotnu"
name: "dotnu"
description: "dotnu - tools for Nushell module developers 🛠️"
readmeQualityOk: true
url: "https://github.com/nushell-prophet/dotnu"
language: "Nushell"
languages: ["Nushell", "Nu"]
languagePcts: [75, 25]
topics: ["developer-tools", "nushell", "terminal"]
stars: 32
forks: 2
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-29T16:12:38Z"
lastCommitAt: "2026-07-24T01:07:20Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 49
maintainers: ["claude", "maxim-uvarov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/765281183/57131e5e-d208-40a7-ad44-dc28062b8614"
---

<h1 align="center">dotnu - tools for Nushell module developers 🛠️</h1>

## Video demo

</a>

## Quickstart

### `git`

```nushell no-run
git clone https://github.com/nushell-prophet/dotnu; cd dotnu
use dotnu
```

### [`nupm`](https://github.com/nushell/nupm)

```nushell no-run
nupm install https://github.com/nushell-prophet/dotnu --git
# if nupm modules are not in  `NU_LIB_DIRS`:
$env.NU_LIB_DIRS ++= [ ($env.NUPM_HOME | path join "modules") ]

use dotnu
```

## Embeds — Literate Programming

`dotnu` lets you write **literate Nushell**: ordinary Nushell scripts that include the real command output right after each pipeline ending in `| print $in`.

The `| print $in` suffix acts as a simple `print` in native Nushell and as a capture marker for dotnu, so scripts remain valid and functional even when run without loading the `dotnu` module.

### `dotnu embeds-update`

Inserts captured output back into the script at capture points

The main command of the embeds family: takes a script, rewrites every `print $in` line so its output is easy to parse, runs the modified script, captures what each marked line prints, and then replaces the old `# =>` blocks in the original file with the…
