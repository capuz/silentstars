---
repo: "xms0g/cube13h"
name: "cube13h"
description: "Spinning 3D cube in VGA Mode 13h"
readmeQualityOk: true
url: "https://github.com/xms0g/cube13h"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["16bit", "demoscene", "dos", "dosbox", "msdos", "retrocomputing", "8086", "retrogaming", "x86", "vga"]
stars: 60
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-10T20:56:07Z"
lastCommitAt: "2026-08-28T15:32:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 22
maintainers: ["xms0g"]
openGraphImageUrl: "https://opengraph.githubassets.com/a19f3f6d8b25b32c524fd9cdb1ff8340c0da928840b9901631a9c40ad6aae63d/xms0g/cube13h"
---

# cube13h

cube13h is a simple 3D graphics demonstration program written in Turbo C and x86 assembly for PC DOS. It demonstrates basic graphics programming techniques to render and animate a 3D cube on the screen, in mode 13h (320x200) colors.
You can download the `EXE` file from [itch.io](https://xms0g.itch.io/cube13h).

## Features
- **Triangle rasterization:** Fills triangle faces on the cube
- **3D vertex transformations:** Applies rotation and movement
- **Perspective projection:** Simulates depth perception
- **Backface culling:** Hides faces pointing away from the camera
- **Bresenham's line algorithm:** Draws cube edges pixel by pixel
- **Double buffering:** Prevents flickering and tearing

## Controls
| Key  | Description |
|------|-------------|
|`WASD`|Move         |
|`↑ ↓` |Fly up/down  |
|`ESC` |Exit         |

## Building
If you want to build `cube13h` from source, you'll need Turbo C++ and the related [build tools](https://github.com/ms0g/breakout/tree/main/TOOLS/tcpp). 

## License
This project is licensed under the BSD 3-Clause License. See the LICENSE file for details.
