---
repo: "spicyjpeg/ps1-ram-tester"
name: "ps1-ram-tester"
description: "PlayStation 1 RAM, VRAM and SPU RAM testing tool"
readmeQualityOk: true
url: "https://github.com/spicyjpeg/ps1-ram-tester"
language: "C"
languages: ["C"]
languagePcts: [72]
stars: 30
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-05-01T15:37:56Z"
lastCommitAt: "2026-11-03T12:47:00Z"
lastReleaseAt: "2026-09-02T00:32:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 11
maintainers: ["spicyjpeg"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1226589293/1c735c2a-ddcf-40e2-beb5-20cbd63dcfd6"
---

# PlayStation 1 RAM, VRAM and SPU RAM testing tool

This is a simple but feature-complete memory testing tool for the original Sony
PlayStation, allowing for exhaustive testing of all of the console's RAM chips:

- main RAM testing is fully supported up to 16 MB on all PS1 revisions, with
  proper handling of all configurations permitted by the CPU's DRAM controller
  (single or dual bank, 1/2/4/8 MB per bank). In order to ease testing of
  PS1-based arcade boards and "upgraded" consoles with non-standard main RAM
  geometry, a menu is provided to edit all DRAM controller options, including
  ones whose purpose is currently unknown;
- VRAM testing is supported up to 1 or 2 MB depending on GPU revision. Console
  models equipped with the 208-pin GPU (all of them except for development kits,
  the SCPH-1000 and a limited number of other SCPH-1xxx models) support
  addressing up to two 1 MB banks;
- SPU RAM testing is supported up to 512 KB or 4 MB depending on SPU revision.
  Console models equipped with the standalone 100-pin SPU (all ones prior to
  SCPH-7xxx) may address up to two banks of 2 MB each. As with main RAM, all
  configuration flags can be edited including unknown…
