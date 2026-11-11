---
repo: "dstein64/colortrans"
name: "colortrans"
description: "An implementation of various color transfer algorithms."
readmeQualityOk: true
url: "https://github.com/dstein64/colortrans"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["color-transfer"]
stars: 32
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-03-03T01:03:30Z"
lastCommitAt: "2026-11-11T19:48:30Z"
lastReleaseAt: "2025-04-22T20:12:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 27
maintainers: ["dstein64"]
openGraphImageUrl: "https://opengraph.githubassets.com/3373dd6f8b212b9eaa19f72030e50885b7e8eb8982034db524055aa9c41f2ff4/dstein64/colortrans"
---

# colortrans

An implementation of various algorithms for transferring the colors from a reference image to a
content image while preserving the qualitative appearance of the content image (i.e., color
transfer).

Installation
------------

#### Requirements

- Any currently supported version of Python 3 (older versions may work, but are not tested)

#### Install

```sh
$ pip3 install colortrans
```

#### Update

```sh
$ pip3 install --upgrade colortrans
```

Command-Line Usage
------------------

The program can be used from the command line.

The general command line usage is shown below.

```sh
$ colortrans [--method METHOD] [--single-precision] CONTENT REFERENCE OUTPUT
```

`CONTENT` is the path to the content image, `REFERENCE` is the path to the style image, and `OUTPUT`
is the path to save the output image.

`METHOD` specifies the color transfer algorithm. The following methods are supported:

1. `lhm` Linear Histogram Matching [1] (default)
2. `pccm` Principal Components Color Matching [2, 3]
3. `reinhard` Reinhard et al. [4]

If the optional `--single-precision` flag is present, 32-bit floats will be used instead of 64-bit floats.

If the launcher script was not installed…
