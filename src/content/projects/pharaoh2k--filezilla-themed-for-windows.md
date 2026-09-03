---
repo: "Pharaoh2k/FileZilla-Themed-For-Windows"
name: "FileZilla-Themed-For-Windows"
description: "A fork of FileZilla GPL3+ sources with full Dark Mode support for Windows"
readmeQualityOk: true
url: "https://github.com/Pharaoh2k/FileZilla-Themed-For-Windows"
language: "C++"
languages: ["C++", "Makefile"]
languagePcts: [65, 24]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-06T12:50:36Z"
lastCommitAt: "2026-09-03T08:02:18Z"
lastReleaseAt: "2026-06-19T05:54:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 29
maintainers: ["Pharaoh2k"]
openGraphImageUrl: "https://opengraph.githubassets.com/698ec4bfaf6333f4a987cc44e36e9f91e60c674a64986efa44fb92b2de76dea6/Pharaoh2k/FileZilla-Themed-For-Windows"
---

# FileZilla 3.70.6 - dark-mode fork

This repository is a fork of the **FileZilla 3.70.6** source distribution with
two additions:

1. **Native Windows dark mode** - a "Color theme" dropdown in
   *Settings > Interface > Appearance* (Follow system setting / Dark / Light).
2. **A port to wxWidgets 3.3** - upstream 3.70.6 targets wxWidgets 3.2.x; dark
   mode needs `wxApp::MSWEnableDarkMode()`, which exists only in wxWidgets >= 3.3.
3. **Dark-mode rendering fixes** - fixes for wxWidgets 3.3 dark-mode bugs that
   affected this build: owner-drawn checkbox/radio labels rendering blank or
   mislabeled in dialogs, file-list rows flickering on mouse hover, group box
   titles painted black with wxWidgets 3.3.3, and the file list going blank
   behind the shell's delete dialog.

   

It is the FileZilla source tree only. The build dependencies (wxWidgets,
libfilezilla, fzssh, etc.) are **not** vendored here - they are external build
requirements, listed below.

Mirror: https://git.slowb.ro/Pharaoh2k/FileZilla-Themed-For-Windows

## License

FileZilla is licensed under the **GNU GPL, version 3 or (at your option) any
later version**. This fork keeps that license unchanged. See…
