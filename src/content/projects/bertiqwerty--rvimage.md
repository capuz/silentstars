---
repo: "bertiqwerty/rvimage"
name: "rvimage"
description: "Remote image viewer and annotation tool in Rust"
readmeQualityOk: true
url: "https://github.com/bertiqwerty/rvimage"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["image", "viewer", "ssh", "rust", "azure-storage", "annotation-tool"]
stars: 8
forks: 2
openIssues: 10
closedIssues: 24
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-30T10:23:50Z"
lastCommitAt: "2026-10-26T09:17:20Z"
lastReleaseAt: "2024-01-12T23:14:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 68
maintainers: ["bertiqwerty"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1e08f74f77a6ce466dfbe518aca836eb86d7c8d5f83bbadd4b2072e73990ddc/bertiqwerty/rvimage"
---

# RV Image

RV Image is a **r**emote **v**iewer for **image**s written in Rust. You can view images, e.g., on remote SSH servers or Azure blob storages. Further, RV Image comes with a bounding box, polygon, and brush labeling tool supporting import and export of the [Coco-format](https://cocodataset.org/#home). So far tested on Windows 11 and Mac OS. RV Image is mainly based on [`egui`](https://crates.io/crates/egui) and [`image`](https://crates.io/crates/image).

## Installation

### Windows with Scoop

[Scoop](https://scoop.sh/) is a command-line installer for Windows. If you have Scoop installed you can run 

```
scoop bucket add rvimage https://github.com/bertiqwerty/rvimage-scoop-bucket
scoop install rvimage
```
and start RV Image with the command
```
rvimage
```

#### Update RV Image

With
```
scoop update
scoop update rvimage
```
you get the latest released version.

#### Install Scoop

Scoop can be installed with Powershell 5.1 or later via
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
from the prompt `PS C:\>`. Scoop does not need administration rights. See the [Scoop…
