---
repo: "edxi/Poshbot.VMware"
name: "Poshbot.VMware"
description: "A PoshBot plugin for permission-gated VMware operations through ChatOps."
readmeQualityOk: true
url: "https://github.com/edxi/Poshbot.VMware"
homepage: "https://www.powershellgallery.com/packages/Poshbot.VMware"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-03-13T11:18:26Z"
lastCommitAt: "2026-08-24T04:23:38Z"
lastReleaseAt: "2018-03-18T06:52:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 37
maintainers: ["edxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff1b34c43a0ba239624629b6ad82a967f91a479f98dd777b60a443fd613d879/edxi/Poshbot.VMware"
---

# PoshBot.VMware

A PoshBot plugin that brings common VMware PowerCLI operations into a
ChatOps workflow.

The module was built to make routine snapshot work accessible from a team
chat while keeping vCenter credentials encrypted on the PowerShell host. It
is retained as an example of connecting operational automation, credential
handling, and a human collaboration interface.

## Capabilities

- Store vCenter credentials in an encrypted local configuration.
- Run permission-gated PowerCLI operations through a PoshBot command.
- Get, create, and remove snapshots for one or more virtual machines.

## Security note

The generic `!powercli` command evaluates administrator-supplied PowerShell.
Restrict its `vmwarepluginadmin` permission to trusted operators. Snapshot
commands use the narrower `snapshot` permission.

## Install the module

```powershell
Install-Module -Name PoshBot.VMware -Repository PSGallery
&("$(Split-Path (Get-Module PoshBot.VMware -ListAvailable).Path -Parent)\\Set-VIServer.ps1")
```

PowerCLI must already be installed on the PowerShell host.

## Install the PoshBot plugin

```text
!install-plugin -name poshbot.vmware
```

The vCenter connection is configured from…
