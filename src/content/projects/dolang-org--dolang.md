---
repo: "dolang-org/dolang"
name: "dolang"
description: "Do Language"
readmeQualityOk: true
url: "https://github.com/dolang-org/dolang"
homepage: "https://dolang-org.github.io/dolang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["automation", "ci-cd", "devops", "programming-language", "shell"]
stars: 7
forks: 0
openIssues: 116
closedIssues: 649
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-31T17:57:25Z"
lastCommitAt: "2026-11-06T02:43:02Z"
lastReleaseAt: "2026-07-27T22:42:57Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 97
undervaluedScore: 59
maintainers: ["bkoropoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4a3c14f5b6461e2038dda8202dbe4af6c552644870dfd7adb73fadfdcc28c34/dolang-org/dolang"
discussionCount: 0
---

Do is a scripting language for cross-platform CI/CD, DevOps, and automation. It
combines shell-like commands and indentation-oriented data declaration with
ordinary functions, structured concurrency, and remote-capable system APIs.

> **⚠️ Experimental:** Do is early and still taking shape — syntax, the
> standard library, and APIs are all subject to change, and it's not ready
> for production workloads. If the ideas below interest you, this is a good
> time to poke around, try things out, and weigh in.

## Quick Look

## What Makes Do Different?

The interpreter stays local while a VFS context selects where system work
happens. The same function can operate on the local system, a container, an SSH
host, across WSL, or with administrator privileges. Filesystem access, external
programs, environment variables, system information, and security queries
follow the selected target — you don't write a different version of the
function for "local" versus "remote."

VFS contexts compose, so the same model supports paths such as local → SSH host
→ container. APIs that are not VFS-aware continue to run in the interpreter
process.

## Also Included

- Structured concurrency: cancellation,…
