---
repo: "UWPR/Comet"
name: "Comet"
description: "An tandem mass spectrometry (MS/MS) sequence database search tool."
readmeQualityOk: true
url: "https://github.com/UWPR/Comet"
homepage: "https://uwpr.github.io/Comet/"
language: "C"
languages: ["C", "C++"]
languagePcts: [46, 45]
stars: 56
forks: 22
openIssues: 3
closedIssues: 60
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2021-09-17T17:15:42Z"
lastCommitAt: "2026-10-26T18:06:44Z"
lastReleaseAt: "2024-10-16T23:35:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 58
maintainers: ["jke000", "mammmals", "mhoopmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b6aacadf7625534d9e297e9ea521814f59828dcc456f72c246db6bf86490d8/UWPR/Comet"
---

# Comet MS/MS

Comet is an open source tandem mass spectrometry (MS/MS) sequence database search tool written primarily in C/C++. The original Comet repository lived on [SourceForge](https://sourceforge.net/projects/comet-ms/) since 2012. It was migrated to GitHub on September 2021.

The project website [can be found here](https://uwpr.github.io/Comet/). This includes release notes and search parameters documentation.

To compile on linux and macOS:

- Type 'make'.  This will generate a binary "comet.exe".

To compile with Microsoft Visual Studio:

- We current use build tools v143 with Microsoft Visual Studio 2022.

- Load "Comet.sln" in Visual Studio.

- Set the build to "Release" and "x64".

- Right-mouse-click on the "Comet" project and choose "Build". This should generate a binary "Comet.exe" in x64/Release.

Comet integrates:
- Mike Hoopmann's [MSToolkit library](https://github.com/mhoopmann/mstoolkit) for reading various file formats.
- Matthew Belmonte's C implementation of the [Twiddle algorithm](https://www.netlib.org/toms-2014-06-10/382) used in generating modification permutations.
- C++ port of Gygi Lab's [AScorePro](https://github.com/gygilab/MPToolkit/) for…
