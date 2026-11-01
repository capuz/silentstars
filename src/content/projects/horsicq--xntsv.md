---
repo: "horsicq/xntsv"
name: "xntsv"
description: "XNTSV program for detailed viewing of system structures  for Windows."
readmeQualityOk: true
url: "https://github.com/horsicq/xntsv"
language: "QMake"
languages: ["QMake", "C++"]
languagePcts: [46, 42]
topics: ["peb", "teb", "nt", "structures", "debugger", "system", "info"]
stars: 469
forks: 70
openIssues: 3
closedIssues: 4
watchers: 16
contributors: 3
recentReleases: 0
createdAt: "2018-08-31T18:25:21Z"
lastCommitAt: "2026-11-01T22:58:14Z"
lastReleaseAt: "2022-04-02T10:47:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 33
maintainers: ["horsicq"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/146928675/846bd089-61b0-406f-a727-48a86861fd3f"
discussionCount: 3
---

XNTSV program for detailed viewing of system structures in Windows.

During process creation in Windows, special system structures appear in the system such as:

* [PEB](https://en.wikipedia.org/wiki/Process_Environment_Block)
* TEB *
* PEB_LDR_DATA
* LDR_DATA_TABLE_ENTRY
* RTL_USER_PROCESS_PARAMETERS
* EPROCESS etc.

The list of different structures is large and specific for each version of the operating system.

**You could easily add your own structs (Edit structs/ARCH/custom.json)**

Officially it is not fully documented and change in different Windows versions.

This program shows complete information about these structures. 
It can be useful for researchers of Windows internals, as well as creators of software protection.

The program supports now:

* Windows 7
* Windows 7 SP1
* Windows 8
* Windows 8.1
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022
* Windows 10 (all builds)
* Windows 11 (build 22000)

**The program does not support now Windows 2000,XP and Vista.** If you need structs for these OS use old versions of XNTSV.

**The program supports now kernel mode.** But you need sign driver with valid driver cert or use test cert.…
