---
repo: "ScoopInstaller/Shim"
name: "Shim"
description: "A Scoop helper program for shimming executables"
readmeQualityOk: true
url: "https://github.com/ScoopInstaller/Shim"
language: "Zig"
languages: ["Zig", "PowerShell"]
languagePcts: [26, 24]
topics: ["scoop", "scoop-helper"]
stars: 119
forks: 21
openIssues: 5
closedIssues: 4
watchers: 14
contributors: 18
recentReleases: 3
createdAt: "2019-05-06T17:13:51Z"
lastCommitAt: "2026-09-17T03:43:49Z"
lastReleaseAt: "2026-07-20T17:38:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 38
maintainers: ["niheaven", "dependabot[bot]", "infirms"]
openGraphImageUrl: "https://opengraph.githubassets.com/64691f66c088b0f64dfeef0fa046c1b8b6da1959016840cd3110265abd35482d/ScoopInstaller/Shim"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/ScoopInstaller", "CUSTOM:https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DM2SUH9EUXSKJ"]
---

# Shim

   

A small program that launches the executable specified in its paired `<name>.shim` file. A helper for [Scoop](https://scoop.sh), the Windows command-line installer.

## Shim File Format

```text
path = <path to executable>
args = <arguments>
cwd = <working directory>
elevate = true|false|1|0|yes|no
NAME = <environment variable override>
```

### Comments

Lines starting with `#`, `;`, or `//`, as well as blank lines, are ignored.

### Fields

| Field               | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `path`              | **(Required)** Path to the target executable            |
| `args`              | Arguments passed to the target                          |
| `cwd` (`workdir`)   | Working directory for the target process                |
| `elevate` (`runas`) | Request UAC elevation. Valid values: `true`, `1`, `yes` |
| Any other name      | Environment variable set for the target process         |

### Value Quoting

Values may be wrapped in double quotes (e.g. `path = "C:\Program Files\app.exe"`) or left unquoted.

### Variable Expansion

- `%ENV%` — Expands…
