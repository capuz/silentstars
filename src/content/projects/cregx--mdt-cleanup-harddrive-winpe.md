---
repo: "cregx/mdt-cleanup-harddrive-winpe"
name: "mdt-cleanup-harddrive-winpe"
description: "Win32-based UI application to erase the primary hard disk as part of a Lite Touch installation (WinPE / Microsoft Deployment Toolkit (MDT))."
readmeQualityOk: true
url: "https://github.com/cregx/mdt-cleanup-harddrive-winpe"
homepage: "https://www.cregx.de/docs/mdt-cleanup-harddrive-winpe/"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["mdt", "winpe", "adk", "c", "deployment", "deployment-automation", "mecm", "sccm", "win32", "win32api"]
stars: 39
forks: 3
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2022-05-22T13:53:28Z"
lastCommitAt: "2026-08-27T14:32:41Z"
lastReleaseAt: "2026-08-26T23:09:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 38
maintainers: ["cregx"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/495074421/6097843c-22d7-4857-9fcb-6d6b0befaeb6"
discussionCount: 2
---

# Cleanup

The WinPE UI application "Cleanup" provides the ability to easily wipe the primary hard disk before a Microsoft Deployment Toolkit (MDT) based Lite Touch installation begins, i.e. before the LTI Wizard starts.

</p>

Cleanup is a Win32 application created in (Microsoft) C and Visual Studio 2010. Of course, you can also compile the project using a newer version of Visual Studio, such as 2019, or you can use an already compiled release version.

Cleanup can be used for **offline** installations, such as deployment without using services like WDS (Windows Deployment Services), as well as for **PXE-based** installations (WDS-based). This versatility allows it to integrate seamlessly into different deployment scenarios and ensures that disk cleanup tasks can be performed efficiently regardless of the deployment method used.

## The origin of my problem
I noticed in an MDT project to deploy an offline based Windows 10 installation that it sometimes interrupted with an error.
This happened somewhere in the task sequence after the step: "Format and Partition Disk (BIOS) / ... (UEFI)", i.e. relatively early, at the beginning of the installation process. 

I was able to trace…
