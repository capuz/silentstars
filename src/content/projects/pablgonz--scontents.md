---
repo: "pablgonz/scontents"
name: "scontents"
description: "Stores LaTeX content in memory or files"
readmeQualityOk: true
url: "https://github.com/pablgonz/scontents"
language: "TeX"
languages: ["TeX", "Lua"]
languagePcts: [72, 28]
topics: ["latex", "expl3"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 11
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2019-07-29T00:37:26Z"
lastCommitAt: "2026-10-29T10:21:15Z"
lastReleaseAt: "2020-01-21T20:45:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 45
maintainers: ["pablgonz"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e7dc34f955f60c48393ecaef824614051c5975746dfd557755eccd6faad9f57/pablgonz/scontents"
---

## scontents — Stores LaTeX contents in memory or files

## Description

This package allows to store LaTeX code, including _verbatim_, in <code>&langle;sequences&rangle;</code>
using the `l3seq` module of `expl3`. The <code>&langle;stored content&rangle;</code> can be used
as many times as desired in the document, additionally you can write to <code>&langle;external files&rangle;</code>
or show it in <code>&langle;verbatim style&rangle;</code>. This package is fully compatible with _tagged_ PDF.

## Requirements

The minimum required is `LaTeX` release 2026-06-01.

## Installation

The package <code>&langle;scontents&rangle;</code> is present in `TeX Live` and `MiKTeX`, use the
package manager to install.

For manual installation, download [scontents.zip](http://mirrors.ctan.org/macros/latex/contrib/scontents.zip) and unzip it,
then run:

```
$ luatex scontents.ins
```

and move all files to appropriate locations:

```
  scontents.tex      -> TDS:tex/generic/scontents/scontents.tex
  scontents-code.tex -> TDS:tex/generic/scontents/scontents-code.tex
  scontents.sty      -> TDS:tex/latex/scontents/scontents.sty
  t-scontents.mkiv   ->…
