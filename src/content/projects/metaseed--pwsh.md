---
repo: "metaseed/pwsh"
name: "pwsh"
description: "my pwsh scripts"
readmeQualityOk: true
url: "https://github.com/metaseed/pwsh"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [79]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2020-08-24T15:02:37Z"
lastCommitAt: "2026-10-23T12:04:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 40
maintainers: ["metasong"]
openGraphImageUrl: "https://opengraph.githubassets.com/86eafb9b6981c8c45dddf99f09d55667c3b3abb7ccf431bededdb61894bc9409/metaseed/pwsh"
---

PWSH is a set of PowerShell modules/cmdlets to help automating the daily routine task.
The goal is to save us time, effort and improve efficiency.

It is created with the script-mindset(RBS): Don't Repeat Yourself - DRY, repeat by scripts - RBS.
## requirement
powershell 7 or later

## install
```powershell
iwr https://pwsh.page.link/0 |iex
```

> Then you could use its cmd-lets and modules
>>   **Install latest or update**
>> ```powershell
>> if($env:MS_PWSH) {. $env:MS_PWSH\update.ps1} else {iwr >> https://pwsh.page.link/0|iex}
>> ```
>>  **install specific version**
>> ```powershell
>> $v = 1.0.2 # default is latest
>> "&{$(iwr https://pwsh.page.link/0)} $v"|iex
>> ```

## Development

### Installation for developer
if you want to contribute to the development, and always using the latest code from the master branch.

```powershell
"& {$(iwr https://pwsh.page.link/dev)} c:\" |iex
```
> it will clone into `c:\pwsh` folder, replace `c:\` to your own folder that used to contain the source code

> note: it will clone the repo to the folder, and setup the profile.

## local config
```pwsh
Set-ExecutionPolicy Bypass -Scope Process -Force;
.\config.ps1
```

### release
> repo url:…
