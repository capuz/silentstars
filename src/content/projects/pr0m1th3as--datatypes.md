---
repo: "pr0m1th3as/datatypes"
name: "datatypes"
description: "Extra data types for GNU Octave"
url: "https://github.com/pr0m1th3as/datatypes"
homepage: "https://pr0m1th3as.github.io/datatypes/"
language: "MATLAB"
languages: ["MATLAB", "C++"]
languagePcts: [60, 40]
stars: 7
forks: 9
openIssues: 3
closedIssues: 28
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-04-14T02:03:20Z"
lastCommitAt: "2026-06-23T06:41:35Z"
lastReleaseAt: "2025-10-05T20:15:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 98
undervaluedScore: 92
maintainers: ["pr0m1th3as"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51dd0a3f9656d2d5f1319b4022a3adae28d9165c75e3d69a546b68f92b94f3f/pr0m1th3as/datatypes"
---

# datatypes

Extra data types for GNU Octave

**Content:**

1. [About](#1-about)
2. [Documentation](#2-documentation)
3. [Installation](#3-installation)
4. [License](#4-license)
5. [Acknowledgements](#5-acknowledgements)

## 1. About

The **datatypes** package is a collection of [classdef Classes](https://docs.octave.org/latest/classdef-Classes.html) for providing extra data types not available in core Octave.  The package was inspired by the `tablicious` package, but it was coded almost entirely from scratch with focus on MATLAB compatibility both in terms of functionality and visual presentation in Octave's terminal. To this end, **datatypes** also overloads the `disp` and `display` methods of the `cell` class, which are responsible for printing the contents of cell arrays to the terminal, so that `cell` arrays are displayed in a MATLAB-like formatted fashion.

The **datatypes** package provides a visually appealing `table` class as well as classes for `calenderDuration`, `categorical`, `datetime`, `duration`, and `string` arrays, some of which are complete and rigorously tested while others are still a work in progress. In addition to the aforementioned classes, there are…
