---
repo: "nimaltd/stm32-installer"
name: "stm32-installer"
description: "One command installs STM32 libraries into CMake, STM32CubeIDE, Keil, IAR and Makefile projects"
readmeQualityOk: true
url: "https://github.com/nimaltd/stm32-installer"
homepage: "https://pypi.org/project/stm32-installer/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cmake", "embedded", "embedded-c", "embedded-systems", "iar", "installer", "keil", "pip", "stm32", "library-management"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-19T09:20:47Z"
lastCommitAt: "2026-10-21T21:15:48Z"
lastReleaseAt: "2026-10-06T15:50:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 48
maintainers: ["nimaltd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca37dc8edcfc6d1271fae4d0a177b9bee69a1334fd86e0f3e8e8bbb7b678bb0d/nimaltd/stm32-installer"
fundingLinks: ["GITHUB:https://github.com/nimaltd", "KO_FI:https://ko-fi.com/nimaltd"]
---

# stm32-installer is now lib-installer

stm32-installer, together with the four installers beside it, is one installer now: [lib-installer](https://github.com/nimaltd/lib-installer). It installs embedded C libraries into STM32, Zephyr, ESP-IDF, Arduino and PlatformIO projects, with the commands stm32-installer had.

```bash
pip uninstall stm32-installer
pip install lib-installer
lib-installer owner/example
```

Every option you used is there: `stm32-installer owner/example --dir Libs/example` is `lib-installer owner/example --dir Libs/example`.

**Your projects move over by themselves.** An STM32 project stm32-installer installed into moves over the first time lib-installer installs into it or uninstalls from it. Its record, `.stm32-installer.json`, becomes `.lib-installer.json`, and the lines that mark its blocks in your files name lib-installer. Each file is saved first, as a `.bak`.

**Your libraries install as they did.** lib-installer reads every key of an `installer.yml` written for stm32-installer, `requires.stm32_installer` among them. A library written for lib-installer 3.0.0 names its platform under `platform`, as [its…
