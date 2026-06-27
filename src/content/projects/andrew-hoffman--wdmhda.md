---
repo: "andrew-hoffman/WDMHDA"
name: "WDMHDA"
description: "HD Audio driver for Windows 98SE / ME"
url: "https://github.com/andrew-hoffman/WDMHDA"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 130
forks: 3
openIssues: 16
closedIssues: 33
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-06-11T21:40:52Z"
lastCommitAt: "2026-06-27T00:49:09Z"
lastReleaseAt: "2025-12-11T22:04:52Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 91
undervaluedScore: 35
maintainers: ["andrew-hoffman"]
openGraphImageUrl: "https://opengraph.githubassets.com/23e95eb978a41acfdc644d774f7ea6575b440cdf088cd2df0346392f8f52fd97/andrew-hoffman/WDMHDA"
discussionCount: 5
---

# WDMHDA
HD Audio driver for Windows 98SE / ME

This project is a High Definition Audio aka Azalia codec and controller driver. It supports the motherboard onboard audio for Intel 915 and later chipsets as well as other manufacturers that conform to the HD Audio standard.

It is designed for all versions of Windows with Windows Driver Model (WDM) support which is Windows 98(se)/Me/2000/XP, but only Windows 98 SE and ME are officially supported. The driver may load on Windows 98 First Edition but this is not supported due to known issues with sample rate and but depth conversion not working. Microsoft doesn't recommend the use of WDM audio drivers for this version of Windows. 

As Windows 2000/XP already has official HD Audio support through the KB888111 HDA Bus driver update, these versions of Windows will be supported but are not the intended primary target.

Current status of this driver is an Alpha. It is known to function well in VMware, VirtualBox, Intel, Nvidia, AMD & VIA chipset HD Audio controllers with Realtek and VIA codecs; IDT, Analog Devices, Cirrus Logic and VIA codecs are not well supported yet. Further testing is needed to improve support on all real…
