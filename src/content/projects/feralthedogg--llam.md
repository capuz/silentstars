---
repo: "Feralthedogg/LLAM"
name: "LLAM"
description: "Low Level Asynchronous Machine"
readmeQualityOk: true
url: "https://github.com/Feralthedogg/LLAM"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-05T19:05:24Z"
lastCommitAt: "2026-11-03T11:14:55Z"
lastReleaseAt: "2026-08-01T06:58:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 47
maintainers: ["Feralthedogg"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1230189541/6630977e-a758-4bcd-beb6-45efd509993f"
---

# LLAM

[Documentation](https://feralthedogg.github.io/LLAM/) starts with install,
quickstart examples, platform support, CLI/tool options, and operations guides.

LLAM is a stackful user-thread runtime for C applications. It lets C code express concurrency with task-oriented APIs such as `spawn`, `join`, `sleep`, channels, `read`, `write`, `accept`, `connect`, and `poll`, while the runtime schedules many user tasks over a smaller set of OS worker threads.

The Linux backend uses io_uring/liburing, macOS/Darwin uses kqueue-based
watch and completion paths, and the native Windows
10/11 backend uses IOCP for overlapped Winsock `read`/`write`/`accept`/`connect`
plus generic HANDLE `ReadFile`/`WriteFile` requests.

## 3.0.0 at a glance

- Compiler-qualified managed C and asynchronous preemption, with loaded-image
  admission, native-thread probes, and requested/effective policy reporting.
- Explicit-runtime object creation, stop, diagnostics, resource limits and
  deadline-bounded drain.
- Common I/O deadline/cancellation options, partial-transfer helpers, linked
  group cancellation, task results and task-local cleanup callbacks.
- Linux, macOS and Windows runtime packages. BSD…
