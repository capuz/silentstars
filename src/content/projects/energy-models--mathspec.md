---
repo: "energy-models/mathspec"
name: "mathspec"
description: "YAML math specification for multi-dimensional optimization problems"
readmeQualityOk: true
url: "https://github.com/energy-models/mathspec"
homepage: "https://mathspec.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 62
closedIssues: 102
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T10:46:03Z"
lastCommitAt: "2026-10-20T08:49:11Z"
lastReleaseAt: "2026-08-24T12:40:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 55
maintainers: ["FBumann", "FabianHofmann", "energy-models-release-please[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6d0b67854013ca0d90cd61d5346f7314383674da8a379133135b042ad97bf06/energy-models/mathspec"
---

# mathspec

**Write the specification (spec) of an optimisation model as a YAML file. Check it and print it
as math, with no data and no solver.**

A spec declares four things: the dimensions it runs over, such as `snapshot`
and `generator`; the data it expects, such as `load` and `cost`; the decisions
the solver makes, such as `dispatch`; and the rules those decisions obey, such
as `sum(dispatch, over=generator) == load`. The file [below](#example) is a
complete spec.

- **Check specs in CI, with no data.** A wrong name or
  dimension fails when the file loads, and the error names the fix.
  [Errors →](https://mathspec.readthedocs.io/en/latest/reference/language/errors/)
- **Publish the math you solve.** The equations in the paper
  print from the file the solver reads.
  [Typeset →](https://mathspec.readthedocs.io/en/latest/reference/typeset/)
- **One spec, many tools.** Engines, renderers and analysers read the spec
  through one public API, so no two of them can read the file differently.
  [Program API →](https://mathspec.readthedocs.io/en/latest/reference/program/)
- **Write full-size specs.** The spec of PyPSA's `n.optimize()` model is
  one file, with stochastic,…
