---
repo: "JurajNyiri/pytapo"
name: "pytapo"
description: "Python library for communication with Tapo Cameras"
readmeQualityOk: true
url: "https://github.com/JurajNyiri/pytapo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 482
forks: 99
openIssues: 23
closedIssues: 125
watchers: 11
contributors: 29
recentReleases: 0
createdAt: "2020-10-01T16:26:43Z"
lastCommitAt: "2026-10-23T12:04:50Z"
lastReleaseAt: "2026-01-31T12:55:30Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 36
maintainers: ["JurajNyiri", "freeKC", "biddisco"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4f00ab5f957b898dbf6c15b8d628531bc2b3779a1087a527b19d9cba0ce33fa/JurajNyiri/pytapo"
---

# PyTapo

Python library for communication with Tapo Cameras.

Used inside Home Assistant Integration [HomeAssistant-Tapo-Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control).

## Pre-Requirements

- Python3.13
- PIP modules installed

## Install:

```
python3 -m pip install pytapo
```

## Usage examples:

### Initiate library:

```
from pytapo import Tapo

user = "" # user you set in Advanced Settings -> Camera Account
password = "" # password you set in Advanced Settings -> Camera Account
host = "" # ip of the camera, example: 192.168.1.52

tapo = Tapo(host, user, password)

print(tapo.getBasicInfo())
```

## Authentication

Depending on your camera model and firmware version, the authentication method varies.

Normally you should be able to authenticate using the "camera account" created via the Tapo App (Settings > Advanced settings > Camera account).

In case of a similar stack trace:

```
Traceback (most recent call last):
  File "/home/user/Projects/pytapo/pytapo/__init__.py", line 41, in __init__
    self.basicInfo = self.getBasicInfo()
  File "/home/user/Projects/pytapo/pytapo/__init__.py", line 232, in getBasicInfo
    return self.performRequest(
  File…
