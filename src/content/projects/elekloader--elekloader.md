---
repo: "elekloader/elekloader"
name: "elekloader"
description: "A mod loader for Elektron firmware. You pick mods and supply the stock OS file Elektron publishes for your device. elekloader builds a custom OS file on your own machine, and you flash it the way you flash any OS update."
readmeQualityOk: true
url: "https://github.com/elekloader/elekloader"
homepage: "https://elekloader.github.io/elekloader/"
language: "Python"
languages: ["Python", "C"]
languagePcts: [39, 33]
stars: 123
forks: 21
openIssues: 17
closedIssues: 17
watchers: 4
contributors: 11
recentReleases: 10
createdAt: "2026-09-26T02:50:26Z"
lastCommitAt: "2026-11-07T22:51:58Z"
lastReleaseAt: "2026-10-14T13:07:28Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 34
maintainers: ["irpina", "simonjohansson", "Iced-Cream"]
openGraphImageUrl: "https://opengraph.githubassets.com/12caf9eef2db2d7f66e9835032bfbb763fdfbb4bf43421e8305562565a259f99/elekloader/elekloader"
---

# elekloader

A mod loader for Elektron firmware. You pick mods and supply the stock OS
file Elektron publishes for your device. elekloader builds a custom OS
file on your own machine, and you flash it the way you flash any OS update.

- **Nothing from Elektron is distributed.** A mod (`.elemod`) carries only
  its author's bytes, the short instruction fragments needed to hook the OS,
  and hashes of the stock bytes it expects. Every build starts from your own
  stock file, recognised by its hash.
- **The bootloader is never touched.** Mods change the main OS, and on the
  Digitone II a SHARC mod may also change the DSP's section 7, inside fixed
  limits. Each output file is re-read and verified before it is written.
  So the stock OS file always recovers the device.
- **Mods are checked against each other before anything is built.** Two
  mods may not touch the same bytes, claim the same memory or the same
  named resource, or leave a requirement unmet.

| Device | OS | Status |
|---|---|---|
| Digitakt (mk1) | 1.53, 1.54 | supported |
| Digitakt II | 1.17 | experimental: whole builds (format-1 mods) and linkable mods with its own core (the hook bus's tick, draw, key and encoder…
