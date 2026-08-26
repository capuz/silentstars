---
repo: "ezntek/beancode"
name: "beancode"
description: "a feature-rich and portable IGCSE/O-Level (0478/2210) pseudocode interpreter written in Python with extension features."
readmeQualityOk: true
url: "https://github.com/ezntek/beancode"
homepage: "https://beancode-web.pages.dev"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["0478", "2210", "cambridge", "igcse", "igcse-cs", "programming", "pseudocode", "pseudocode-interpreter", "beancode", "interpreter"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-09T00:19:39Z"
lastCommitAt: "2026-08-26T04:16:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 41
maintainers: ["ezntek"]
openGraphImageUrl: "https://opengraph.githubassets.com/88053a3ae25a606a340c4fa4d5af0d3ded955f605bc845bf261981f4744d4b7c/ezntek/beancode"
---

## Introduction

This is a fully syllabus-compliant (optimizing) interpreter for IGCSE Computer Science (0478, 0984, 2210) pseudocode, as shown in the [2026-2028 syllabus](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf) and is compatible with all later versions. It is written in Python, and is compatible with all versions above and including version 3.10.

## Installation

If you want to enjoy actually good performance, ***please use PyPy!*** It is a [Python JIT (Just-in-time) compiler](https://pypy.org), making it far faster than the usual Python implementation CPython. I would recommend you use PyPy even if you werent using this project for running serious work, but it works really well for this project.

Check the appendix for some stats.

### Installing from PyPI (pip)

* `pip install --break-system-packages beancode` ***Since this package does not actually have dependencies, you can pass `--break-system-packages` safely. Your system will not in fact break.***
* `pipx install beancode` (this is the safer way, but you need `pipx` on your system first.)

To upgrade:

* `pip install --break-system-packages --force --upgrade beancode`
* `pipx install…
