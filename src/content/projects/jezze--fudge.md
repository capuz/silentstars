---
repo: "jezze/fudge"
name: "fudge"
description: "A concurrent-focused message-based operating system."
readmeQualityOk: true
url: "https://github.com/jezze/fudge"
homepage: "http://www.fudgeos.com/"
language: "C"
languages: ["C", "C++"]
languagePcts: [52, 45]
topics: ["c", "operating-system"]
stars: 97
forks: 11
openIssues: 0
closedIssues: 72
watchers: 10
contributors: 5
recentReleases: 0
createdAt: "2009-06-16T22:24:23Z"
lastCommitAt: "2026-11-02T15:16:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 49
maintainers: ["jezze"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fd6997d7593509a4260e41f7236ad409b7e5feaa7f8bd80a7047995a82156e/jezze/fudge"
---

# Fudge Operating System

http://www.fudgeos.com/

## Overview

Fudge is a concurrent-focused operating system. Fudge is different from most
other operating systems in that it adheres strongly to the actor model. The
kernel and every task in the system communicates by posting messages to each
other's mailboxes.

The way this is implemented makes concurrency feel like a natural part of your
programs especially in comparison to the asynchronous programming models used in
file-centric operating systems.

Fudge tries to keep as little state as possible inside the kernel itself to
avoid complexity. There is for instance no out-of-the-box support for dynamic
memory allocation. Drivers are implemented as loadable kernel modules but they
are typically only big enough to support only the most basic of functionality,
leaving the higher level logic to be done in userspace because there is no best
solution to every use case so a user can choose to implement things differently
if they wish.

Each program has a channel which it uses to read messages from it's mailbox. For
each type of message a program can register a callback that will be run when a
message of a certain type appears. Messages…
