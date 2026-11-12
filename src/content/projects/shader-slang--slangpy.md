---
repo: "shader-slang/slangpy"
name: "slangpy"
description: "Making it easier to work with slang in python"
readmeQualityOk: true
url: "https://github.com/shader-slang/slangpy"
homepage: "https://slangpy.shader-slang.org"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 33]
stars: 157
forks: 51
openIssues: 122
closedIssues: 250
watchers: 8
contributors: 48
recentReleases: 0
createdAt: "2025-01-06T12:20:32Z"
lastCommitAt: "2026-11-12T11:41:11Z"
lastReleaseAt: "2026-07-16T01:21:17Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 45
maintainers: ["skallweitNV", "tdavidovicNV", "nv-slang-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eedf7b71a331036c260c95aa1852603b61aa0a1d5ca136395cc0561174f68834/shader-slang/slangpy"
---

# SlangPy

[1]: https://readthedocs.org/projects/slangpy/badge/?version=latest
[2]: https://slangpy.readthedocs.io/en/latest/
[3]: https://github.com/shader-slang/slangpy/actions/workflows/ci.yml/badge.svg
[4]: https://github.com/shader-slang/slangpy/actions/workflows/ci.yml
[5]: https://img.shields.io/pypi/v/slangpy.svg?color=green
[6]: https://pypi.org/pypi/slangpy

## Introduction

SlangPy is a cross-platform library designed to make calling GPU code written in Slang extremely simple and easy. It's core objectives are to:
- Make it quick and simple to call Slang functions on the GPU from Python
- Eradicate the boilerplate and bugs associated with writing compute kernels
- Grant easy access to Slang's auto-diff features
- Provide optional PyTorch support out of the box

## Documentation

See the [documentation][2] for more detailed information and examples.

More information about Slang in general can be found [here](https://shader-slang.com).

## Installation

SlangPy is available as pre-compiled wheels via PyPi. Installing SlangPy is as simple as running:

```bash
pip install slangpy
```

To enable PyTorch integration, simply ``pip install pytorch`` as usual and it will be…
