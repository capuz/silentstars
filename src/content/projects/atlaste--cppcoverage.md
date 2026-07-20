---
repo: "atlaste/CPPCoverage"
name: "CPPCoverage"
description: "Visual Studio Extension for measuring C++ Code Coverage and profiling data"
readmeQualityOk: true
url: "https://github.com/atlaste/CPPCoverage"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 98
forks: 20
openIssues: 6
closedIssues: 38
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2016-06-08T13:21:30Z"
lastCommitAt: "2026-07-20T06:33:58Z"
lastReleaseAt: "2025-11-14T11:32:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 30
maintainers: ["atlaste", "MAntoniak"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c9e00fa1e081da90a7827475c2e24b815bef08dcd4261fe93c84f7af09fa9f2/atlaste/CPPCoverage"
---

# Free C++ Code Coverage

CPPCoverage is a Visual Studio extension that calculates code coverage and profile data for C++ applications and Visual Studio C++ native tests. Basically it provides 
you with an easy-to-use, light-weight C++ code coverage and profiler, right from Visual Studio and with the features you expect from tools like these. 

# Installation

Prerequisites: 

- For VS2013 or VS2015 grab version 1 from the releases tab. 
- For VS2022 grab version 2 from the releases tab.
- Any edition should work (so pro, enterprise, community, or whatever they made up).

Just install the VISX and start using it.

# Getting started

Working with CPPCoverage is a breeze. Basically install and use, there's nothing more to it:

- Either create a standard C++ / MS Test application, or run a simple C++ / console application. Note that OpenCppCoverage assumes that there is no user input during the test run.
- Build your solution in Debug mode. Make sure to compile with '/DEBUG'; '/DEBUG:FastLink' is currently unsupported .
- Right-click in solution explorer on the test or application project, click "Run code coverage".
- Open a file that you want to show coverage info for. If the file…
