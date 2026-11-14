---
repo: "version-fox/vfox-python"
name: "vfox-python"
description: "🐍Python plugin for vfox."
readmeQualityOk: true
url: "https://github.com/version-fox/vfox-python"
homepage: "https://vfox.dev"
language: "Lua"
languages: ["Lua"]
languagePcts: [84]
topics: ["pyenv", "python", "vfox-plugin"]
stars: 11
forks: 6
openIssues: 3
closedIssues: 25
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2024-04-01T03:28:18Z"
lastCommitAt: "2026-11-14T10:50:45Z"
lastReleaseAt: "2026-09-12T06:34:28Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 67
maintainers: ["linghengqian", "github-actions[bot]", "aooohan"]
openGraphImageUrl: "https://opengraph.githubassets.com/135909bb21ceda559abf4379048e814b2d7fd13a7ec666013f8d6dfdbb0667e3/version-fox/vfox-python"
---

# vfox-python

[中文](https://github.com/version-fox/vfox-python/blob/HEAD/README_CN.md) | [English](https://github.com/version-fox/vfox-python/blob/HEAD/README.md)

Python plugin for [vfox](https://vfox.dev/).

It installs CPython from python.org on Windows. On Linux and macOS it downloads a
prebuilt uv-build archive when one exists, and compiles CPython from source
otherwise. GraalPy comes from Oracle's
release archives on every supported platform. It also adopts the Pythons
already on the machine — system packages, uv, pyenv, Conda and others — and
reads a project's `.python-version`, so pyenv and uv projects open on the
version they name.

## Install

After installing [vfox](https://github.com/version-fox/vfox), install the plugin
and a Python, and select it:

```bash
vfox add python
vfox install python@3.12.2
vfox use --global python@3.12.2
python -V
```

`vfox search python` lists the available versions. For the newest one use
`latest`:

```bash
vfox install python@latest
```

`python -V` shows the selected interpreter. For `python` to be on the `PATH`,
vfox has to be hooked into your shell; see its
[quick start](https://vfox.dev/guides/quick-start.html).

## Versions

A…
