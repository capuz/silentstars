---
repo: "simonmar/haskell-buck2"
name: "haskell-buck2"
description: "Buck2 build system for Haskell projects"
readmeQualityOk: true
url: "https://github.com/simonmar/haskell-buck2"
language: "Starlark"
languages: ["Starlark", "Java"]
languagePcts: [43, 35]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-09T14:42:26Z"
lastCommitAt: "2026-10-02T10:00:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["simonmar", "philderbeast"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5e182c43f52df2d3c15fb47a9c826d6de1274a03dbdbc7710e74c4e22c96f85/simonmar/haskell-buck2"
---

# Buck2 build system for Haskell projects

Short summary: you can use [Buck2](https://buck2.build) as the build system for your Cabal
project. There is support for auto-generating the `BUCK` files from
the `.cabal` files for a complete Cabal project, and once generated
you can use `buck2` to build, rebuild, and run the tests for the whole
project or individual components.

# Why?

(skip this section if you know why you want buck2)

Why might you want to use `buck2` as the build system compared with
just using `cabal`? Well, first off let me be clear that you *still
need Cabal*, because the Buck2 support doesn't know how to solve
package dependencies or build them. So the workflow consists of first
running `cabal buck2` to solve and build the dependencies, but once you've
done that you can switch to `buck2` for building. The idea is that
`buck2` is a more pleasant experience because:

* It's [faster than Cabal, particularly for rebuilds](#performance).

* It supports different build modes out of the box: the default is to
  build in `dev` mode (unoptimised with dynamic linking) but adding
  `-m opt` gives you optimisation and static linking. Note that Cabal
  doesn't have a purely…
