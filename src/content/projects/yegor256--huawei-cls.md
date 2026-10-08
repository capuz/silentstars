---
repo: "yegor256/huawei.cls"
name: "huawei.cls"
description: "LaTeX class for documents you create when working with Huawei or maybe even inside it"
readmeQualityOk: true
url: "https://github.com/yegor256/huawei.cls"
homepage: "https://ctan.org/pkg/huawei.cls"
language: "TeX"
languages: ["TeX"]
languagePcts: [97]
topics: ["latex", "latex-style", "latex-template", "latex-class", "latex-package"]
stars: 17
forks: 5
openIssues: 1
closedIssues: 32
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-03-25T18:26:19Z"
lastCommitAt: "2026-10-08T10:51:44Z"
lastReleaseAt: "2021-06-28T08:57:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 45
maintainers: ["yegor256"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/351536500/bf6ca780-8db8-11eb-9084-fd2e4eb24afa"
---

# LaTeX Document Class

Disclaimer: This is **NOT** a product of Huawei Technologies Co., Ltd.
This package is created in order to help some people working
with Huawei or inside Huawei to render some documents in LaTeX format.
You are welcome to use it at your own risk.

First,
[install it](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages)
from [CTAN](https://ctan.org/pkg/huawei)
and then use in the preamble:

```tex
\documentclass[landscape]{huawei}
\renewcommand*\theauthor{Yegor Bugayenko}
\renewcommand*\thetitle{An Interesting Document About Something}
\begin{document}
\maketitle
Hello, world!
\end{document}
```

Otherwise, you can download
[`huawei.cls`](https://yegor256.github.io/huawei.cls/huawei.cls)
and add to your project.

Read the detailed documentation
[in PDF](http://mirrors.ctan.org/macros/latex/contrib/huawei/huawei.pdf).

If you need more formatting options,
[submit an issue](https://github.com/yegor256/huawei.cls/issues),
I'll implement them.

If you want to contribute yourself, make a fork, then create a branch,
then run `make` in the root directory.
It should compile everything without errors. If not, submit an issue and wait.
Otherwise, make your…
