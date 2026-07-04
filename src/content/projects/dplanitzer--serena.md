---
repo: "dplanitzer/Serena"
name: "Serena"
description: "A modern operating system for Amiga computers."
readmeQualityOk: true
url: "https://github.com/dplanitzer/Serena"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["amiga", "concurrency", "multi-user", "os", "multithreading", "retrocomputing", "c", "m68k", "m68k-assembly", "oop-principles"]
stars: 285
forks: 8
openIssues: 15
closedIssues: 7
watchers: 9
contributors: 3
recentReleases: 1
createdAt: "2022-11-15T00:44:35Z"
lastCommitAt: "2026-07-04T22:19:30Z"
lastReleaseAt: "2026-06-01T00:10:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 34
maintainers: ["dplanitzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/1de1f091f8b5c4da7e7d88d2f334f56f52d86b38b13edcd03c1cff05b2d35819/dplanitzer/Serena"
---

# About The Project

Serena OS is what you get when modern operating system design and implementation meets vintage hardware like the Amiga computers. It is based on dispatch queues rather than threads, supports multiple users, is inspired by POSIX, yet retains its own character, is strongly object-oriented in terms of design and implementation and prepared for a cross platform future.

Check out the [Wiki](https://github.com/dplanitzer/Serena/wiki) for more details on the OS, how to build it, run it and how to create apps for it.

https://github.com/user-attachments/assets/02517372-fa72-4ec9-8cda-aeeb92a4547b

Serena OS comes with a powerful shell which implements a formally defined shell language. You can find the shell documentation [here](user/cmd/shell/README.md).

## Features

The following kernel services are implemented at this time:

* Kernel and user space separation in the sense of code privilege separation (not memory space separation)
* Dispatch queues with execution priorities
* Virtual processors with priorities and pervasive preemptive scheduling
* Interrupt handling with support for direct and semaphore-based interrupt handling
* Simple memory management (no…
