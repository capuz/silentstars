---
repo: "EvotecIT/ConsoleMonster"
name: "ConsoleMonster"
description: "Console rendering for .NET and PowerShell: tables, trees, panels, charts and live dashboards, with no package dependencies. Runs on Windows PowerShell 5.1 and PowerShell 7."
readmeQualityOk: true
url: "https://github.com/EvotecIT/ConsoleMonster"
homepage: "https://consolemonster.dev"
language: "C#"
languages: ["C#"]
languagePcts: [75]
topics: ["powershell", "charts", "console", "csharp", "dashboard", "dotnet", "native-aot", "netstandard", "powershell-module", "tables"]
stars: 30
forks: 3
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2021-06-13T07:19:56Z"
lastCommitAt: "2026-10-30T10:23:41Z"
lastReleaseAt: "2026-10-29T18:04:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["PrzemyslawKlys", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a42df9af6aa0228b3c82f0fc6ac72186c046a24fd3b3020ef8e3b39423e93e/EvotecIT/ConsoleMonster"
fundingLinks: ["GITHUB:https://github.com/PrzemyslawKlys"]
---

# ConsoleMonster

**Everyday output in one line. The monster when you need it.**

ConsoleMonster makes the output of the commands you already run readable, and draws tables, trees, charts, live
runs, dashboards, menus and forms when you need more. It is one engine for Windows PowerShell 5.1, PowerShell 7 and
.NET, with no package dependencies. A setting has one name everywhere (`-Title` in PowerShell, `Title =` and
`.Title()` in C#), and when the output goes to a file, a log or CI, it writes plain lines instead of escape codes.

[Website](https://consolemonster.dev/) · [Documentation](https://consolemonster.dev/docs/) ·
[Demos](https://consolemonster.dev/demos/) · [Widgets](https://consolemonster.dev/widgets/) ·
[.NET API](https://consolemonster.dev/api/) · [PowerShell commands](https://consolemonster.dev/powershell/commands/)

## Start in PowerShell

```powershell
Install-Module ConsoleMonster -Scope CurrentUser
Import-Module ConsoleMonster
Get-Process | Sort-Object CPU -Descending | Select-Object -First 8 | Show-ConsoleTable
```

`Show-ConsoleDemo` lists the gallery's demos, grouped by what they are for, and runs the one you pick.
`Get-Command -Module ConsoleMonster` lists every…
