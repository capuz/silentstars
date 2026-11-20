---
repo: "tuna-os/wootc"
name: "wootc"
description: "Windows bootc installer — install bootc-based Linux images from Windows without repartitioning"
readmeQualityOk: true
url: "https://github.com/tuna-os/wootc"
language: "Go"
languages: ["Go", "Python", "Shell"]
languagePcts: [27, 27, 26]
stars: 14
forks: 1
openIssues: 57
closedIssues: 190
watchers: 1
contributors: 6
recentReleases: 9
createdAt: "2026-07-13T15:55:39Z"
lastCommitAt: "2026-11-20T11:22:29Z"
lastReleaseAt: "2026-08-25T08:38:56Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 51
maintainers: ["hanthor", "renovate[bot]", "hanthor-hive-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5df05e3769ee1dd052cabd14594e5fa8c99fbaeaae35df4ad31e55f8dba96adf/tuna-os/wootc"
---

alt="wootc walkthrough — Windows 11 → deployer → native Linux → native graduation"
         width="760">

---

wootc installs a real Linux desktop from a [bootc](https://github.com/containers/bootc)
image into `root.disk`, a file beside your Windows files. The latest full release,
`v0.1.0-alpha.1`, uses Wails. Native WinUI packaging is implemented on `main`,
but a released native setup and its acceptance evidence remain outstanding.
[Verification status](https://github.com/tuna-os/wootc/blob/HEAD/docs/status.md) distinguishes these builds and their limits.

The setup form asks for **a password**. The app suggests your username and
computer name from your PC. It sizes the disk from available space and selects TPM encryption by default.
Advanced lets you change those choices. Supported migration helpers can carry files,
Wi-Fi networks, wallpaper, and taskbar choices. Results depend on the image and helper.
