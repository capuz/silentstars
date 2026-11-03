---
repo: "leanprover-community/leanprover-community.github.io"
name: "leanprover-community.github.io"
description: "Hosts the website for mathlib and other Lean community infrastructure."
readmeQualityOk: true
url: "https://github.com/leanprover-community/leanprover-community.github.io"
homepage: "https://leanprover-community.github.io/"
language: "CSS"
languages: ["CSS", "TeX"]
languagePcts: [45, 27]
stars: 85
forks: 195
openIssues: 20
closedIssues: 26
watchers: 12
contributors: 177
recentReleases: 0
createdAt: "2019-01-20T17:06:26Z"
lastCommitAt: "2026-11-03T11:15:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 55
maintainers: ["grunweg", "bryangingechen", "YaelDillies"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b2533b636c5fbf8f8b47a1b1cddf0d6ed5b7561d16b65b4d8380e87dcbcef57/leanprover-community/leanprover-community.github.io"
---

# Lean prover community website

The deployed website lives on the `master` branch of this repository.
To make changes to the website, please fork the repository and make a PR against the
[`lean4`](https://github.com/leanprover-community/leanprover-community.github.io/tree/lean4)
branch.
Once your PR is merged, CI will automatically deploy the changes to the `master` branch.

## Dependencies

* `pip install -r requirements.txt`

Building the bibliography requires [`bibtool`](https://github.com/ge-ne/bibtool). If `bibtool` is not found, the build script will print a warning and just copy the raw `lean.bib` file to the target.

In order to rebuild the CSS from SCSS, you also need:

* [sass](https://sass-lang.com/)
* [bootstrap](https://github.com/twbs/bootstrap/archive/v4.4.1.zip)
  should be unpacked at the project root

The website relies on several components which are built in other repositories:
- [`mathlib_stats`](https://github.com/leanprover-community/mathlib_stats)
- [`lean4web`](https://github.com/leanprover-community/lean4web)
- [`mathlib4_docs`](https://github.com/leanprover-community/mathlib4_docs) (built by CI in [doc-gen4](https://github.com/leanprover/doc-gen4/))

##…
