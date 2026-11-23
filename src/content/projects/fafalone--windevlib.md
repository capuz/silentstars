---
repo: "fafalone/WinDevLib"
name: "WinDevLib"
description: "Windows Development Library for twinBASIC"
readmeQualityOk: true
url: "https://github.com/fafalone/WinDevLib"
language: "Visual Basic 6.0"
languages: ["Visual Basic 6.0", "C++"]
languagePcts: [77, 23]
topics: ["twinbasic", "vb6", "windows-shell", "com-api", "shell-sdks", "com", "windows-api", "windows-com", "windows-sdk"]
stars: 52
forks: 11
openIssues: 5
closedIssues: 43
watchers: 10
contributors: 1
recentReleases: 0
createdAt: "2022-09-29T19:25:40Z"
lastCommitAt: "2026-11-23T12:25:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["fafalone"]
openGraphImageUrl: "https://opengraph.githubassets.com/adeeddca5ed00e47852965f1252aa3b8c9b053ea9bb8fc0180be6a37d1454446/fafalone/WinDevLib"
---

# Windows Development Library for twinBASIC
## WinDevLib 

**Current Version: 9.5.7708 (November 23rd, 2026)**

(c) 2022-2026 Jon Johnson (fafalone)

> **Important**
>
> **Version 9.2.634 and higher now requires twinBASIC Beta 954 or newer.** The project is now using twinBASIC's new `Alias` syntax support, which is impractical to version-gate. 

WinDevLib is a project to make all common Windows API COM interfaces, DLL declares, and related Types/Enums/Consts available while programming in twinBASIC.\
Included are definitions of 3800+ common COM interfaces and 15,000+ APIs from all the common system modules, a level of coverage which makes WDL an entirely different experience than any VBx library, the largest of which offer at most 1/10th as much with huge gaps.\
This makes working with WDL similar to working in C++ with `#include <Windows.h>` and a number of other headers for commonly used features. These have all been redone by hand from the original headers, in order to restore 64bit type info lost in VB6 versions, avoid the errors of automated conversion tools (e.g.
