---
repo: "ShapeShifter499/joan-volte-lineage"
name: "joan-volte-lineage"
description: "VoLTE/IMS bring-up for the LG V30 (joan) on LineageOS 22 — native SIP/AKA/IPsec UA plus ImsService, packaged as a flashable zip. Port of a proven postmarketOS VoLTE path."
readmeQualityOk: true
url: "https://github.com/ShapeShifter499/joan-volte-lineage"
language: "Java"
languages: ["Java"]
languagePcts: [79]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-28T11:35:04Z"
lastCommitAt: "2026-09-19T02:43:26Z"
lastReleaseAt: "2026-09-04T18:03:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 45
maintainers: ["ShapeShifter499"]
openGraphImageUrl: "https://opengraph.githubassets.com/bff8509eefb1bb9a58d2808f55b96b1f5f0b7c79a532da0c7b2ed16a2901705b/ShapeShifter499/joan-volte-lineage"
---

# joan-volte-lineage

VoLTE for the LG V30 (`joan`: US998 / H930 / H932) on **LineageOS 22**.
Flashable recovery zip. No Magisk, no stock `Ims6` blobs, no CAF
`OpenIMSd`.

SIP, AKA, and IPsec run in a privileged `ImsService` (`org.joan.ims`)
using public `IpSecManager` APIs. There is no native daemon and no
loopback control socket.

> ### Building a ROM? Do not use the zip — use the source
>
> **This repository is the source, not just a zip.** `upstream/` is a
> drop-in module for a LineageOS build: copy it to
> `vendor/lge/joan-ims`, add one line to `device/lge/joan/device.mk`,
> and the ImsService, its RRO and its permission files are built into
> the ROM.
>
> ```
> $(call inherit-product, vendor/lge/joan-ims/joan-ims.mk)
> ```
>
> The flashable zip is a **stopgap** for people who cannot compile a
> ROM, and for testers on carriers we have no access to. It installs the
> same app into a build we do not control. Do not flash it onto a ROM
> that already inherits the module — that installs the app twice.
>
> Two things the zip *cannot* do, which a ROM build can, so they are the
> reason to prefer the source:
>
> - **The AGC declaration in `audio_effects.xml`.** joan ships
>…
