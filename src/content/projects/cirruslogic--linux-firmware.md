---
repo: "CirrusLogic/linux-firmware"
name: "linux-firmware"
description: "Mirror of the linux-firmware repo for pull requests of Cirrus Logic firmware files. Not monitored for support purposes."
readmeQualityOk: true
url: "https://github.com/CirrusLogic/linux-firmware"
language: "C"
languages: ["C"]
languagePcts: [70]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 320
recentReleases: 0
createdAt: "2022-07-15T09:07:56Z"
lastCommitAt: "2026-11-17T06:21:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["superm1", "lumag", "jwboyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9b522d98a38c9a69410361c153c4ad149e2c8235b1cb5480cafc5e202102b5e/CirrusLogic/linux-firmware"
---

# Linux firmware

This repository contains all these firmware images which have been
extracted from older drivers, as well various new firmware images which
we were never permitted to include in a GPL'd work, but which we _have_
been permitted to redistribute under separate cover.

The upstream repository is located at <https://gitlab.com/kernel-firmware/linux-firmware.git>.

## Submitting firmware

### Licensing requirements

All firmware submitted to this repository must be redistributable to anyone,
royalty-free, without restrictions beyond those listed in
[LICENSE-CRITERIA.md](https://github.com/CirrusLogic/linux-firmware/blob/HEAD/LICENSE-CRITERIA.md). Read that document before preparing
a submission — it describes the grants a license must provide, the restrictions
the project accepts, and how new license texts are reviewed. Vendors with an
existing license file in `LICENSES/` should reuse it; new license texts require
explicit maintainer review as described in `LICENSE-CRITERIA.md` section 5.

### Submission paths

To submit firmware to this repository, please do one of the following:

* open a MR [upstream](https://gitlab.com/kernel-firmware/linux-firmware)
* send a git…
