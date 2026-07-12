---
repo: "SamsungDS/unvme-cli"
name: "unvme-cli"
description: "Configure NVMe by CLI, and test it with fio!"
readmeQualityOk: true
url: "https://github.com/SamsungDS/unvme-cli"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["nvme"]
stars: 17
forks: 6
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2024-07-19T07:54:41Z"
lastCommitAt: "2026-07-12T06:19:58Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 60
maintainers: ["minwooim", "JongKang-Kim", "hanee-kim"]
openGraphImageUrl: "https://opengraph.githubassets.com/34750aa6a535e3b5712852750a5519041431d5f7a88339da1a8cab9256e6b540/SamsungDS/unvme-cli"
---

# *unvme-cli*: Configure NVMe by CLI, and test it with *fio*!

`unvme-cli` is a command line interface to control NVMe controller without
kernel NVMe driver on the user-space.  It also provides I/O benchmarking test
by `fio` with `libunvmed` ioengine which is bundled within this program.

## Why unvme-cli?
- Users can setup user-defined configurations (e.g., IO queues) without kernel driver intervention
- Users can run *fio* with various testing features based on the
  user-defined configurations
- Users can introduce user-defined scenarios (e.g., doorbell update) to test NVMe controller
- Educational purpose to understand NVMe spec.
- Do all these with a simple portable program `unvme`

## How to build

**Requirements**
  - libvfn (>= 5.1.0)
  - libnvme (>= 1.8.0)
  - fio (>= 3.40)

Provide *fio* path with `-Dwith-fio=` option to enable `unvme fio` command,
otherwise, `unvme fio` command will not be bundled inside of `unvme` executable.

### FIO
`unvme-cli` provides an exteranl `libunvmed` I/O engine for `fio`.  Device
configurations (e.g., controller enable, queue creations, ...) can be done by
CLI commands and I/O benchmarking cna be done with **unmodified** fio, but only
just…
