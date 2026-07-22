---
repo: "Darianopolis/Roc"
name: "Roc"
description: "A Simple Graphical Shell"
readmeQualityOk: true
url: "https://github.com/Darianopolis/Roc"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-08T23:00:51Z"
lastCommitAt: "2026-07-22T06:07:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 56
maintainers: ["Darianopolis"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e2f6c7522ea5009a8b519e9108c7872af4deef9c53535971d1da398be8ae8ca/Darianopolis/Roc"
---

# Roc

An experiment in writing a simple, independent desktop environment for personal and educational use.

- Protocol-independent core components
- Thin Wayland client adapter built on `libwayland`

## Dependencies

The following packages must be discoverable by PkgConfig:

- libevdev
- libdrm
- libudev
- libcap
- libseat
- libinput
- freetype2
- xkbcommon
- xcursor
- wayland-server
- wayland-client

The following executables must be available on the environment path:

- python
- cmake
- wayland-scanner
- gcc/clang (C++26 reflection capable)
- glslang

The following packages must also be discoverable by CMake:

- ninja
- mold (optional)

## Build

Build in release mode and install to `~/.local/bin/roc`

```
$ python build.py -BRI
```

### Global Queue Priority

Roc can take advantage of higher queue scheduling priority when given the NICE system capability.

```
# setcap cap_sys_nice+ep ~/.local/bin/roc
```

### Options

Pass `-h` or `--help` to see build options

Build artifacts are placed into `.build` (E.g. `.build/roc`)
