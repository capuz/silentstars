---
repo: "vomitselfie/NekoPhoto"
name: "NekoPhoto"
description: "NekoPhoto, An Open-source image editor with PSD interoperability, Photoshop/Clip Studio/Procreate brush support, native vectors, smart selections and more."
readmeQualityOk: true
url: "https://github.com/vomitselfie/NekoPhoto"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["editor", "linux-app", "photoshop", "brushes", "creative-tools", "graphics-editor", "image-editing", "image-editor", "linux", "mcp"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-19T05:16:52Z"
lastCommitAt: "2026-10-09T18:53:04Z"
lastReleaseAt: "2026-09-24T17:02:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["vomitselfie"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1376759217/2d7982d0-3442-49de-b60b-59411e4f3575"
---

# NekoPhoto

**English** · [日本語](#日本語)

**Bring your work with you.** NekoPhoto is a photo editor and painting app for Linux and Windows that opens
your Photoshop and Clip Studio files with their layers, masks and text intact, paints with your Photoshop,
Clip Studio and Procreate brushes, and saves back to layered PSD.

**[Download for Linux (AppImage)](https://github.com/vomitselfie/nekophoto/releases/latest)** ·
**[Download for Windows (portable zip)](https://github.com/vomitselfie/nekophoto/releases/latest)**<br>
Linux: any x86_64 distribution from 2022 on, Wayland or X11. Windows: 10 version 1903 or later, x86_64.

**Your PSDs come back as you sent them.** All 117 PSD and PSB test files in our round-trip corpus (nearly all saved
by Photoshop 2026, covering text, smart objects and Smart Filters, layer styles, shapes, masks and PSB) open, export and
reopen with nothing lost: 3,675 blocks NekoPhoto does not edit go back byte for byte. What PSD cannot carry is
listed before you export. The counts, the known gaps and how to rerun the checks are in
[Compatibility & correctness](https://github.com/vomitselfie/NekoPhoto/blob/HEAD/docs/compatibility.md).

| Open a PSD, edit, save it as…
