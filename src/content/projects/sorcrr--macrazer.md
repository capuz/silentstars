---
repo: "SorcRR/MacRazer"
name: "MacRazer"
description: "Native macOS menu bar app to control Razer mice (battery, DPI, RGB, button remap) over USB HID, no Synapse required. Tested on Cobra HyperSpeed and Atheris."
readmeQualityOk: true
url: "https://github.com/SorcRR/MacRazer"
homepage: "https://sorcrr.github.io/MacRazer/"
language: "Swift"
languages: ["Swift"]
languagePcts: [94]
topics: ["gaming-mouse", "hid", "macos", "menubar", "openrazer", "razer", "swift"]
stars: 18
forks: 5
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-06-24T11:11:36Z"
lastCommitAt: "2026-10-03T09:21:52Z"
lastReleaseAt: "2026-09-11T17:52:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 56
maintainers: ["SorcRR", "raphaelchenouard", "joelday"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aca9b5f6f1a4b850cacbce336b9679eb9af18b4b5d905c27e87baf95addb892/SorcRR/MacRazer"
fundingLinks: ["KO_FI:https://ko-fi.com/sorcrr"]
---

# Razer mouse control for macOS

A native menu bar app to control Razer mice on macOS. Razer does ship a Synapse for Mac now,
but its [supported-device list](https://mysupport.razer.com/app/answers/detail/a_id/14809/~/razer-synapse-for-mac-supported-and-compatible-devices)
is short and doesn't include the Cobra HyperSpeed or Atheris — this fills that gap. It talks
to the mouse directly over USB HID (no kernel extension, no driver install), using a protocol
ported from [OpenRazer](https://github.com/openrazer/openrazer).

Works best with the **Razer Cobra HyperSpeed** and the **Razer Atheris**, the two devices this
has actually been tested on. It detects any Razer mouse by name and should work with other
Razer mice that use the same HID protocol family, but those are untested, so treat support as
"likely to work, not verified" until someone confirms it on real hardware.

> Unofficial. Not affiliated with, authorized by, or endorsed by Razer Inc. See [NOTICE.md](https://github.com/SorcRR/MacRazer/blob/HEAD/NOTICE.md).
> 
> <img width="324" height="624" alt="image" src="https://github.com/user-attachments/assets/a7632668-2d12-4d2f-aa84-7b234bad31dc" />
> <img width="323" height="290"…
