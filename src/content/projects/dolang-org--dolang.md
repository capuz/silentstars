---
repo: "dolang-org/dolang"
name: "dolang"
description: "Do Language"
readmeQualityOk: true
url: "https://github.com/dolang-org/dolang"
homepage: "https://dolang-org.github.io/dolang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["automation", "ci-cd", "devops", "programming-language", "shell"]
stars: 5
forks: 0
openIssues: 30
closedIssues: 211
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-31T17:57:25Z"
lastCommitAt: "2026-09-10T08:20:12Z"
lastReleaseAt: "2026-07-27T22:42:57Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 97
undervaluedScore: 63
maintainers: ["bkoropoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b604529a09db26005fe34620a5c117c8ab9667d3c9ae4ad9845296f6a644708/dolang-org/dolang"
discussionCount: 0
---

</p>

Do is a scripting language for cross-platform CI/CD, DevOps, and automation. It
combines shell-like commands and indentation-oriented data declaration with
ordinary functions, structured concurrency, and remote-capable system APIs.

[Documentation](https://dolang-org.github.io/dolang/)

> **⚠️ Experimental:** Do is early and still taking shape — syntax, the
> standard library, and APIs are all subject to change, and it's not ready
> for production workloads. If the ideas below interest you, this is a good
> time to poke around, try things out, and weigh in.

## What Makes Do Different?

The interpreter stays local while a VFS context selects where system work
happens. The same function can operate on the local system, a container, an SSH
host, across WSL, or with administrator privileges. Filesystem access, external
programs, environment variables, system information, and security queries
follow the selected target — you don't write a different version of the
function for "local" versus "remote."

```
import fs sys

def inspect_target()
  echo "$(sys.os_info().os): $(fs.Path(".").canonical())"
  run hostname

inspect_target()

import ssh
ssh.with build.example.com do…
