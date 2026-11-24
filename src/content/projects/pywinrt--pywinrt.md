---
repo: "pywinrt/pywinrt"
name: "pywinrt"
description: "Python projection of Windows runtime (WinRT) types."
readmeQualityOk: true
url: "https://github.com/pywinrt/pywinrt"
homepage: "https://pywinrt.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 204
forks: 18
openIssues: 4
closedIssues: 69
watchers: 4
contributors: 40
recentReleases: 0
createdAt: "2022-01-27T03:23:51Z"
lastCommitAt: "2026-11-24T01:48:20Z"
lastReleaseAt: "2023-08-11T16:41:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 43
maintainers: ["dlech", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d43730c46ab14846ffbb636ac59800f1b24d574cc0f231ca4c6d806e0dcb641/pywinrt/pywinrt"
discussionCount: 11
---

# PyWinRT

PyWinRT lets Python call Windows Runtime (WinRT) APIs: Bluetooth, USB and
serial devices, cameras, notifications, screen capture, speech and many other
APIs that Windows offers apps.

- **A projection:** it is generated from the WinRT metadata, so every WinRT API
  in the Windows SDK is there, and the Windows App SDK's too.
- **Pythonic:** `snake_case` names, collections that are sequences and
  mappings, async operations you `await` and any bytes-like object where WinRT
  takes a buffer, as [the WinRT type system](https://pywinrt.readthedocs.io/en/latest/types/)
  describes.
- **Fully typed:** every package ships type hints, so editors complete your
  code and type checkers check it.

## Installing

Each part of the WinRT API is a package of its own on PyPI. Install the ones
your code uses, and each brings the runtime with it:

```console
pip install winrt-Windows.Media.SpeechSynthesis
```

PyWinRT needs CPython 3.11 or later on Windows.
[Installing](https://pywinrt.readthedocs.io/en/latest/installing/) says which
packages to choose.
