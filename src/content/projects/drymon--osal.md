---
repo: "drymon/osal"
name: "osal"
description: "OSAL - OS Abstraction Layer for Embedded Systems"
readmeQualityOk: true
url: "https://github.com/drymon/osal"
homepage: "https://github.com/drymon/osal"
language: "C"
languages: ["C"]
languagePcts: [83]
topics: ["osal", "lightweight", "linux", "os", "rtos"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-30T06:58:52Z"
lastCommitAt: "2026-10-24T08:08:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 61
maintainers: ["drymon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/737203121/5229cc86-b08d-4cca-a4d1-892d1ed40893"
---

# dmosal: OS Abstraction Layer

A small, portable C abstraction layer for tasks, mutexes, semaphores, queues,
timers and time, with the same semantics on every supported OS.

All resources are statically allocated up front, so there is no `malloc` on
any hot path and worst-case memory use is known in advance. New backends can
be added behind the same API without breaking existing callers.

## Supported backends

| Backend  | Source                          | Tested on                          | Details                                |
|----------|---------------------------------|------------------------------------|----------------------------------------|
| Linux    | [source/linux/](https://github.com/drymon/osal/blob/HEAD/source/linux/)  | Native Linux (pthreads, POSIX IPC) | Quick start                                |
| Zephyr   | [source/zephyr/](https://github.com/drymon/osal/blob/HEAD/source/zephyr/) | `native_sim` virtual board (Docker) | [zephyr/README.md](https://github.com/drymon/osal/blob/HEAD/zephyr/README.md)   |
| FreeRTOS | [source/freertos/](https://github.com/drymon/osal/blob/HEAD/source/freertos/) | POSIX/Linux simulator (Docker) |…
