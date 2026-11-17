---
repo: "NanoTurtle1145/root-my-s24"
name: "root-my-s24"
description: "Using CVE-2026-43499/CVE-2026-98260 to root your Galaxy S24 Series(SM-S92X0 ,(China / Hong Kong SAR / Taiwan))"
originalDescription: "Using CVE-2026-43499/CVE-2026-98260 to root your Galaxy S24 Series(SM-S92X0 ,(China / Hong Kong SAR / Taiwan))"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NanoTurtle1145/root-my-s24"
homepage: "https://blog.nanoturtle.cn/index.php/rootmys24/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [81]
topics: ["android-root", "android-security", "cve-2026-43499", "exploit", "galaxy-s24", "galaxy-s24-ultra", "ghostlock", "kernelsu", "kotlin", "magisk"]
stars: 137
forks: 15
openIssues: 18
closedIssues: 17
watchers: 2
contributors: 5
recentReleases: 8
createdAt: "2026-08-16T14:37:06Z"
lastCommitAt: "2026-11-17T14:35:51Z"
lastReleaseAt: "2026-08-27T12:51:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 33
maintainers: ["NanoTurtle1145", "Reallyliked21", "pentalogos"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7078be22715050d2dd904823540270dc168de579f1dc812db07845abb0b3aba/NanoTurtle1145/root-my-s24"
discussionCount: 1
---

Temporary root for Samsung devices without unlocking the bootloader · root lasts only until reboot, does not write boot, does not blow KNOX<br>
  Dual engine: <strong>CVE-2026-98260</strong> (98260 UAF, One UI 9.0 / 6.1.162) ·

  &nbsp;|&nbsp; <a href="docs/README.md">Documentation Center</a> · <a href="CONTRIBUTING.md">Contributing Guide</a> · <a href="docs/PRIVACY.md">Privacy Policy</a>

> **Disclaimer**: For security research and maintenance of your own devices only. Using kernel exploits for privilege escalation carries risks of system crashes, data loss, and device bricking; use at your own risk. Do not use for illegal purposes.
> Sharing run logs is optional. How reporting works, and how device identifiers and IP addresses are handled, is described in the [Privacy Policy](https://github.com/NanoTurtle1145/root-my-s24/blob/HEAD/docs/PRIVACY.md).

---

## 1. What this is

A **temporary root** tool that runs on Samsung Galaxy devices (mainly the S24 series and foldables):

- **No unlock required**: does not flash BL or write boot; `ro.boot.flash.locked` stays 1
- **No fuse blowing**: KNOX e-fuse unchanged (`warranty_bit` stays 0)
- **Semi-persistent**: after each reboot, run…
