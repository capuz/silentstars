---
repo: "no-faff/InstallerClean"
name: "InstallerClean"
description: "Open source tool to safely clean orphaned Windows Installer files and reclaim disk space"
readmeQualityOk: true
url: "https://github.com/no-faff/InstallerClean"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [75, 21]
topics: ["disk-cleanup", "msi", "patchcleaner", "windows", "disk-space", "open-source", "windows-installer", "cleanup-tool", "cli", "csharp"]
stars: 404
forks: 19
openIssues: 1
closedIssues: 8
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2026-02-19T04:21:33Z"
lastCommitAt: "2026-10-26T17:58:42Z"
lastReleaseAt: "2026-04-18T05:43:54Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 28
maintainers: ["FarmLox"]
openGraphImageUrl: "https://opengraph.githubassets.com/1647eb5752a989fc9721fde1cba0dcb630d81f8e5687bae87fb0d62e24eb46c2/no-faff/InstallerClean"
fundingLinks: ["KO_FI:https://ko-fi.com/nofaff"]
discussionCount: 4
---

- **What:** InstallerClean does one thing: it removes unneeded files from `C:\Windows\Installer`, a hidden folder that fills up as you install and update software. After a quick scan it tells you whether you have any, shows more detail for the curious, and lets you move them somewhere else or delete them to free up space on your C: drive.
- **You might be here because:** You used [WinDirStat](https://github.com/windirstat/windirstat), WizTree or TreeSize, saw `C:\Windows\Installer` taking up a lot of space and didn't know what was in there. In that case, InstallerClean is just what you need. It knows what's in those files with random-looking names like `9f05cba.msi` and quickly tells you which ones you can safely remove.
- **How much space:** The chart above shows the results of the optional reports that have been steadily trickling in since v1.8.0. (Thank you to everyone who's sent one. Without you, the chart above wouldn't exist.) Of the 61% that freed space, the median freed is 2.2 GB. One machine reclaimed a whopping 791 GB. The other 39% freed nothing, so it depends on the machine: a clean Windows 11 install with no extra software has nothing to remove. The ones that will…
