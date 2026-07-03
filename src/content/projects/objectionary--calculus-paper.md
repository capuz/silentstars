---
repo: "objectionary/calculus-paper"
name: "calculus-paper"
description: "The Original Paper on the EO Programming Language and the Underlying 𝜑-Calculus"
url: "https://github.com/objectionary/calculus-paper"
homepage: "https://arxiv.org/abs/2111.13384"
language: "TeX"
languages: ["TeX"]
languagePcts: [94]
topics: ["eolang", "latex", "oop", "oop-principles", "research-paper"]
stars: 10
forks: 4
openIssues: 7
closedIssues: 6
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2024-04-09T15:44:53Z"
lastCommitAt: "2026-07-03T06:24:57Z"
lastReleaseAt: "2026-01-07T13:13:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 87
undervaluedScore: 75
maintainers: ["yegor256", "morphqdd", "edmoffo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6240f91c10279f95d7e416c3a7959796775b2bfef82f83320ddcdb3af100376/objectionary/calculus-paper"
---

# Paper About φ-Calculus

This is the first paper about 𝜑-calculus ([read in PDF][pdf]).

The reference interpreter is [phino].

To build it, just run:

```bash
make
```

You need to have [LaTeX], [GNU Aspell], [jq], [texsc], and [texqc] installed.

You may also want to check whether your LaTeX installation has
  all the packages required in the `DEPENDS.txt` file.
If you miss any of them, install, for example, with the help of [tlmgr].

Once compiled and packaged, upload zip archive
to [arXiv](https://arxiv.org/abs/2111.13384).

[phino]: https://github.com/objectionary/phino
[LaTeX]: https://www.latex-project.org/get/
[GNU Aspell]: http://aspell.net/
[jq]: https://stedolan.github.io/jq/
[texsc]: https://rubygems.org/gems/texsc
[texqc]: https://rubygems.org/gems/texqc
[tlmgr]: https://tug.org/texlive/tlmgr.html
[pdf]: https://github.com/objectionary/calculus-paper/blob/gh-pages/paper.pdf
