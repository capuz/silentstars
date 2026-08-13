---
repo: "lokeshgovindu/AltTab"
name: "AltTab"
description: "AltTab is a small application created in C++, Win32, is an alternative for windows native task switcher (Alt+Tab / Alt+Shift+Tab)."
readmeQualityOk: true
url: "https://github.com/lokeshgovindu/AltTab"
homepage: "https://lokeshgovindu.github.io/AltTab/"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [47, 45]
topics: ["alttab"]
stars: 29
forks: 7
openIssues: 11
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-12-08T04:46:13Z"
lastCommitAt: "2026-08-13T05:17:11Z"
lastReleaseAt: "2026-01-03T11:07:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 59
maintainers: ["lokeshgovindu", "kerryland"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc45713ca8c4a28eac37abe561f3fd876240e1eb5727dac4ba0da89b7d1900fe/lokeshgovindu/AltTab"
discussionCount: 1
---

# AltTab
AltTab is a small application created in C++, Win32, is an alternative for windows native task switcher (Alt+Tab / Alt+Shift+Tab). 

# Features
* Find the right window faster (filter windows using search string), uses fuzzy string matching algorithm (no need to type the exact search string).
* Switch between windows of the same application using Alt + \` (Grave Accent / Backtick, the key right above the Tab on a US English keyboard layout).
* Terminate a process or all processes either normally or forcefully using keyboard shortcuts.
Hide / Un-hide windows.
* Provided configuration/setting INI file & UI to change font style, background color, window transparency, width and height.

## Building from source

Requires Visual Studio with the C++ workload (the project targets the **v145**
toolset), CMake 3.20+, and Python 3 for packaging.

Clone and build — open `AltTab.sln` in Visual Studio, or:

```
python Scripts\BuildAltTab.py --configs Release
```

AltTab links a static log4cpp, which is compiled from
`libraries\log4cpp-1.1.4.tar.gz` rather than committed as a binary (see
[SIGNING.md](https://github.com/lokeshgovindu/AltTab/blob/HEAD/SIGNING.md)). The first build of each…
