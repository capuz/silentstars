---
repo: "quiris11/epubQTools"
name: "epubQTools"
description: "Tools for checking, correcting and hyphenating epub files"
readmeQualityOk: true
url: "https://github.com/quiris11/epubQTools"
homepage: "https://blog.blaut.biz"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 17
forks: 7
openIssues: 0
closedIssues: 1
watchers: 8
contributors: 4
recentReleases: 1
createdAt: "2014-01-22T16:20:50Z"
lastCommitAt: "2026-11-07T16:08:29Z"
lastReleaseAt: "2026-09-20T12:19:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 72
maintainers: ["quiris11"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee3c08f914331b20e92bbdd144b9e049b42782a96406d619af48194fc1fb8467/quiris11/epubQTools"
---

epubQTools [](https://github.com/quiris11/epubqtools/releases/latest)
==========

Tools for checking, correcting and hyphenating EPUB files.

#### External apps used by this tool available for download:
* **kindlegen** (only unpacked binary is needed): http://www.amazon.com/kindleformat/kindlegen
* **epubcheck (zip file)** (Java installed is required for run it): https://github.com/IDPF/epubcheck/releases

Put both into the per-user tools folder (or point to another folder with `--tools DIR`):
* Linux/macOS: `~/.local/share/epubQTools/` (`$XDG_DATA_HOME/epubQTools/` if set)
* Windows: `%LOCALAPPDATA%\epubQTools\`

If this folder does not exist, the folder next to the program is used (as in older versions).
kindlegen is also looked up in `PATH`.

```
usage: epubQTools [-h] [-V] [--tools [DIR]] [-l [DIR]] [-i [NR]] [--author [Surname, First Name]] [--title [Title]]
                                                        [--font-dir [DIR]] [--replace-font-family [old,new]] [-a] [-n] [-t] [-q] [-p] [-w] [-u] [--list-fonts] [-m] [-e] [-s]
                                                        [-r] [--skip-page-list] [-c] [--skip-justify] [--left] [--replace-font-files]…
