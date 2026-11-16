---
repo: "nukeratframework/nukerat"
name: "nukerat"
description: "A post exploitation framework / C2 for advanced Red Team operations"
readmeQualityOk: true
url: "https://github.com/nukeratframework/nukerat"
homepage: "https://nukerat.com"
language: "TypeScript"
languages: ["TypeScript", "Nim", "Python"]
languagePcts: [35, 34, 27]
topics: ["active-directory", "adversary-simulation", "c2", "c2-framework", "cobalt-strike", "command-and-control", "edr-bypass", "evasion", "lateral-movement", "offensive-security"]
stars: 330
forks: 84
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-11-06T15:26:42Z"
lastCommitAt: "2026-11-16T04:29:21Z"
lastReleaseAt: "2026-11-16T03:50:31Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 30
maintainers: ["loseys", "Koshmare-Blossom"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1448424893/b6a8ba10-eaaf-4f17-a8dc-f3e5d2895801"
discussionCount: 0
---

Post exploitation framework

## About

NukeRat is a post exploitation framework for advanced Red Team operations, focused on exploiting modern and complex environments. 

    <img
        src="https://raw.githubusercontent.com/nukeratframework/nukerat/HEAD/.github/banners/01.png"
        style="width: 87rem; border-radius: 11px;"
        alt="NukeRat"
        title="NukeRat">

## Features

| Item | Description |
| --- | --- |
| Armory | +550 adapted BOF and .NET utilities |
| Communication | Custom C2 with external platforms (e.g. Telegram, Discord, etc.) |
| Runtime evasion | Indirect syscalls, stack spoofing, sleep mask, AMSI/ETW patch, etc. |
| Injections | Allocation modes: VirtualAlloc, section, and module stomping |
| LOTL | Living off the Land integration with +240 native Windows binaries (LOLBAS) |
| Static evasion | PE customization |
| Implants | Cross platform: Windows, Linux, macOS (ARM support) |
| Linux | Implants compatible with Linux BOFs |
| AI | Integration with agents (DeepSeek, local, etc.) |
| Reports | Executed commands, IOCs, and compromised hosts |

## Installation

> [!TIP]
> We recommend Kali Linux for NukeRat usage.

```bash
git clone…
