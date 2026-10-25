---
repo: "AndreMiras/pycaw"
name: "pycaw"
description: "Python Core Audio Windows Library"
readmeQualityOk: true
url: "https://github.com/AndreMiras/pycaw"
homepage: "https://andremiras.github.io/pycaw/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 444
forks: 71
openIssues: 4
closedIssues: 71
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2016-04-23T23:16:03Z"
lastCommitAt: "2026-10-25T08:40:17Z"
lastReleaseAt: "2023-04-07T21:39:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 38
maintainers: ["AndreMiras", "dependabot[bot]", "ahmetberber"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd14582f6017e614009614669df484f5b85d94702b0e310388bf63079731c4a5/AndreMiras/pycaw"
---

# Pycaw (Python Core Audio Windows)

Pycaw is a Python library designed exclusively for controlling audio devices on **Windows** systems.
It allows programmatic access to audio sessions, volume control, and sound device management on the Windows platform.

> Note: Pycaw does not support macOS or Linux.
> It is built specifically for Windows using Core Audio APIs.
> If you're looking for similar functionality on other platforms, you'll need alternative libraries.

Pycaw currently supports Python 3.10 through 3.14 on Windows. Supported
Python versions are stable, non-EOL releases that have passed the project's
Windows test matrix; newer Python releases are added after compatibility
validation.

## Install

Latest stable release:
```bat
pip install pycaw
```

Development branch:
```bat
pip install https://github.com/AndreMiras/pycaw/archive/main.zip
```

System requirements:
```bat
choco install visualcpp-build-tools
```

## Usage

```Python
from pycaw.pycaw import AudioUtilities
device = AudioUtilities.GetSpeakers()
volume = device.EndpointVolume
print(f"Audio output: {device.FriendlyName}")
print(f"- Muted: {bool(volume.GetMute())}")
print(f"- Volume level:…
