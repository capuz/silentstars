---
repo: "vicinaehq/numen"
name: "numen"
description: "Zero dependency calculator library with first class support for units and timezone conversions"
readmeQualityOk: true
url: "https://github.com/vicinaehq/numen"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 24
forks: 7
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-08-21T13:34:18Z"
lastCommitAt: "2026-10-27T12:39:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["aurelleb", "vMohammad24", "fifididi"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca007528aaa9ca68ee16fb0df579908fb2160bd34a5df1e51da6c90b0fe7b53/vicinaehq/numen"
---

`libnumen` is a library to evaluate mathematical expressions, with an emphasis on natural language as well as unit and date-time operations.

> [!WARNING]
> This library is primarily developed for the [Vicinae](https://github.com/vicinaehq/vicinae) launcher.
> However, it is licensed separately from the main Vicinae project, under the [BSD 3-Clause License](https://github.com/vicinaehq/numen/blob/HEAD/LICENSE), allowing its use in non-GPL projects.
> Note that the API is currently not stable, so you should treat each update as potentially breaking.

## Key features

- Dependency-free. You only need a C++23 compiler. Compiles with GCC/clang/MSVC. On Apple platforms, whose libc++ [has no `std::chrono` timezone database](https://github.com/llvm/llvm-project/pull/122010), the vendored [date](https://github.com/HowardHinnant/date) library is used instead (`-DNUMEN_USE_DATE_TZ=ON`, the default there).
- Evaluate algebraic expressions as you would expect.
- Built-in math functions
- Support for computer science operators like bitwise operators and modulo.
- Full support for units
- Date-time arithmetic and timezone conversion based on timezone name, city/region/state name.
- Currency…
