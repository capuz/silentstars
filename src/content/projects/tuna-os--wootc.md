---
repo: "tuna-os/wootc"
name: "wootc"
description: "Windows bootc installer — install bootc-based Linux images from Windows without repartitioning"
readmeQualityOk: true
url: "https://github.com/tuna-os/wootc"
language: "Shell"
languages: ["Shell"]
languagePcts: [59]
stars: 7
forks: 0
openIssues: 10
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T15:55:39Z"
lastCommitAt: "2026-07-21T06:12:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 37
maintainers: ["hanthor", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d78871f828420ec3186ff54bb3a02eee30149e3c673feec35f0aa68957dbc42/tuna-os/wootc"
---

# wootc — Windows-hosted bootc Linux

         alt="wootc end-to-end walkthrough — Windows 11 → wootc deployer → native Linux → Windows 11"
         width="760">
  </a>
  <br>
  <em>▶ Latest end-to-end run (sped-up): Windows 11 → wootc deployer → native Linux from <code>root.disk</code> → Windows 11. <a href="https://tuna-os.github.io/wootc/e2e/latest/">Click to play the full timelapse.</a></em>
</p>

  <strong>Install a real, image-based Linux desktop from inside Windows — no repartitioning, no data loss, fully reversible.</strong>
</p>

---

wootc is a Windows-hosted installer for [bootc](https://github.com/containers/bootc)
Linux images. It writes a complete Linux system into `root.disk`, a single
sparse file on your existing Windows NTFS volume, and adds a one-shot Windows
Boot Manager entry that boots into it. There is **no repartitioning of the
Windows disk**, and uninstalling is deleting a folder and a boot entry.

It's a modern, Secure-Boot-friendly take on the classic [Wubi](https://en.wikipedia.org/wiki/Wubi_(software))
idea, built for container-native (OCI/ostree) Linux images and for people who
have never touched a partition editor.

## Why

> **North Star** — make it…
