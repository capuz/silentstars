---
repo: "lazy-fortran/fortplot"
name: "fortplot"
description: "Native plotting in modern Fortran"
readmeQualityOk: true
url: "https://github.com/lazy-fortran/fortplot"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [95]
stars: 33
forks: 3
openIssues: 0
closedIssues: 1124
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-21T06:51:18Z"
lastCommitAt: "2026-11-13T10:49:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["krystophny"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca6b77bcfa99a977d1c22b3c2f12cdd625be0eddf7de19632533634bf2ee73d7/lazy-fortran/fortplot"
---

# fortplot

Fortran plotting with PNG, PDF, SVG and text output. The plotting core has
no external graphics dependencies. Text output uses ASCII by default.

## Install

**fpm:**
```toml
[dependencies]
fortplot = { git = "https://github.com/lazy-fortran/fortplot" }
```

**CMake:** ([full template](https://github.com/lazy-fortran/fortplot/tree/main/example/user_compilation_examples/cmake_project_template))
```cmake
include(FetchContent)
FetchContent_Declare(fortplot
    GIT_REPOSITORY https://github.com/lazy-fortran/fortplot
    GIT_TAG main)
FetchContent_MakeAvailable(fortplot)
target_link_libraries(your_target PRIVATE fortplot::fortplot)
```

The optional `fortplot::fortarray` target adapts labeled `data_array_t` values
without adding plotting methods or state to fortarray:

```fortran
use fortarray,          only: data_array_t, data_array
use fortplot,           only: figure_t, wp
use fortplot_fortarray, only: plot

type(data_array_t) :: field
type(figure_t) :: fig

field = data_array([2.0_wp, 3.0_wp, 5.0_wp], ["radius"], name="samples")
call fig%initialize()
call plot(fig, field)
```

CMake users can omit that dependency with
`-DFORTPLOT_BUILD_FORTARRAY_ADAPTER=OFF`. fpm…
