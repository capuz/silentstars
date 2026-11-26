---
repo: "sawyerthemiller/cocaine"
name: "cocaine"
description: "Run Mac OS X 10.5 PowerPC and 32-bit Intel apps on Apple Silicon"
readmeQualityOk: true
url: "https://github.com/sawyerthemiller/cocaine"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 13
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-11-18T21:38:43Z"
lastCommitAt: "2026-11-26T13:02:33Z"
lastReleaseAt: "2026-11-24T20:41:52Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["sawyerthemiller", "kfkaplan"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dbcc160abfd666acb83280204fc723c14debcf3a01e5c974ba168ee3f5f377b/sawyerthemiller/cocaine"
---

Runs old Mac programs on Apple Silicon Macs - PowerPC apps - the kind Rosetta 1
used to run - and 32 bit Intel apps (the kind macOS dropped in Catalina)

IT IS NOT a virtual machine, and there's no old system to boot... Cocaine loads
the program into an ordinary Mac process, translates its old CPU's code to
ARM64 as it goes, runs Apple's own Mac OS X 10.5 Leopard libraries and system
daemons alongside it, and answers their requests to the old kernel itself.
The guest system's screen appears in a window on your Mac.
