---
repo: "MemNixFS/MemNixFS"
name: "MemNixFS"
description: "Linux Memory Forensics Framework That Transforms Memory Dumps Into a Navigable Filesystem"
url: "https://github.com/MemNixFS/MemNixFS"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 76
forks: 5
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-06-22T00:27:27Z"
lastCommitAt: "2026-06-25T01:30:45Z"
lastReleaseAt: "2026-06-24T22:59:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 23
maintainers: ["ELJoOker2004", "Immortal-ibr", "Tokeii0"]
openGraphImageUrl: "https://opengraph.githubassets.com/3da1dd75001141801bfa2fdb43812a7d3702335913ce9defdc6a8ce9c256907c/MemNixFS/MemNixFS"
---

# MemNixFS

![Language: C++17](https://img.shields.io/badge/C%2B%2B-17-00599C.svg)
![Platform: Windows · Linux](https://img.shields.io/badge/platform-Windows%20%C2%B7%20Linux-lightgrey.svg)

**Mount a Linux memory dump as a filesystem and investigate it with the tools you already use.**

Point MemNixFS at an AVML / LiME / raw / kdump image and the live kernel state at the
moment of capture — processes, open files, sockets, loaded modules, the page cache,
threat-hunt findings, a forensic timeline — shows up as ordinary files and folders. Then
you `cd`, `ls`, `grep`, `cat`, open it in your editor, or feed it to any script. It's the
[MemProcFS](https://github.com/ufrisk/MemProcFS) idea — *memory as a filesystem* — brought
to **Linux** dumps, running natively on **Windows** and **Linux**.

       alt="A Linux memory dump mounted as a Windows drive (M:) and browsed in File Explorer, showing the proc, sys, fs, forensic, search and mem folders">
</p>

```console
$ memnixfs --dump memory.lime mount M:
$ cat M:/sys/findevil/triage.txt        # one-shot "is this box owned?" verdict
$ cat M:/forensic/timeline.txt          # everything that happened, on one UTC axis
$ rg -i 'password|BEGIN…
