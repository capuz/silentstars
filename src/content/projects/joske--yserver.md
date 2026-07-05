---
repo: "joske/yserver"
name: "yserver"
description: "A modern X11 server written from scratch in Rust."
readmeQualityOk: true
url: "https://github.com/joske/yserver"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 470
forks: 24
openIssues: 6
closedIssues: 21
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2026-04-27T13:46:20Z"
lastCommitAt: "2026-07-05T21:00:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 23
maintainers: ["joske", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8c9e4869b4ded62ed3808a3636d25f9b7ad337a3ed0ac5e77d77308bc2a5c61/joske/yserver"
discussionCount: 8
---

# yserver

A modern X11 server written from scratch in Rust.

The goal is not to clone Xorg. It is to provide a practical X11 server that
runs real desktop environments, window managers, and applications on modern
Linux while dropping legacy baggage (non-TrueColor visuals,
indirect GLX, the DDX driver ABI, endian-swapped clients, and so on).

See [`docs/high-level-design.md`](https://github.com/joske/yserver/blob/HEAD/docs/high-level-design.md) for the full design and scope.

## Name

The `yserver` name is the 'working' name as it was the first idea that popped into my head when
starting the project. But there are multiple projects on GitHub with this name (but none for X11 servers),
the name is subject to change. Not a priority now.

## Status

`yserver` (standalone DRM/KMS) can now run full MATE/XFCE/Cinnamon desktops.
Other tested window managers include FVWM3, e16 and wmaker.

We support the following extensions:
- BIG-REQUESTS
- Composite
- DAMAGE
- DPMS
- DRI3
- GLX
- Generic Event Extension
- MIT-SCREEN-SAVER
- MIT-SHM
- Present
- RANDR
- RENDER
- SHAPE
- SYNC
- X-Resource
- XFIXES
- XINERAMA
- XInputExtension
- XC-MISC
- XKEYBOARD
- XTEST

### GLX_EXT_texture_from_pixmap…
