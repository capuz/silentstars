---
repo: "neutrinoceros/inifix"
name: "inifix"
description: "A lightweight Python library to read, write, validate and format configuration files in the style of plutocode."
url: "https://github.com/neutrinoceros/inifix"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["configuration-files", "configuration", "formatter", "hydrodynamics", "simulation-modeling", "python-library", "decoding", "encoding"]
stars: 8
forks: 4
openIssues: 2
closedIssues: 43
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-03-13T04:43:46Z"
lastCommitAt: "2026-07-03T06:24:27Z"
lastReleaseAt: "2022-01-29T23:45:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 80
maintainers: ["neutrinoceros", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e984e156046c37bf87d1e484b82ce63eeb7d11e919e1c2ea93fbf6168993b5e/neutrinoceros/inifix"
---

# `inifix`

`inifix` is a small Python library offering a `load/dump` interface similar to
standard library modules `json` or `tomllib` (together with `tomli_w`) for ini
configuration files in the style of [Pluto](http://plutocode.ph.unito.it) and
[Idefix](https://github.com/idefix-code/idefix).

While its primary goal is to follow Idefix's 'ini' format specification, it
supports a small superset of it.

The key differences are:
- `inifix` supports section-free definitions. This means configuration files
  from [FARGO 3D](https://fargo3d.bitbucket.io) are also supported.
- in `inifix`, strings can be escaped using `'` or `"`. This allows to have
  whitespaces in string values and to force string type decoding where numeric
  and boolean types would work.

In rare cases where Idefix's 'ini' format doesn't match Pluto's, `inifix` takes
the path of least resistance to support both.

Known differences are:
- Idefix allows booleans to be written as `yes` and `no`, as so does `inifix`,
  but these are not valid in Pluto (as of version 4.4).
  Note that in contrast to Idefix, which is truly case-insensitive about
  these special strings, `inifix` (from version 5.0.0) only parse a…
