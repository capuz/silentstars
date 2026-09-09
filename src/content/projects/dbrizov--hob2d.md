---
repo: "dbrizov/hob2d"
name: "hob2d"
description: "A 2D game engine written in C++"
readmeQualityOk: true
url: "https://github.com/dbrizov/hob2d"
homepage: "http://hob2d.com/"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["2d-game-engine", "box2d", "cpp", "imgui", "lua", "rmlui", "sdl3", "game-development", "game-engine", "linux"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-27T17:23:42Z"
lastCommitAt: "2026-09-09T08:17:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 49
maintainers: ["dbrizov"]
openGraphImageUrl: "https://opengraph.githubassets.com/60af9c56f504adab09b5958135bc38fb6e972edd8202a814e0ec281b9ee8f620/dbrizov/hob2d"
---

# Hob2D
A 2D game engine written in C++.

# Requirements
Project dependencies are downloaded and linked automatically via `vcpkg` and `CMake`.<br>
A C/C++ compiler with C++20 support (e.g. MSVC, GCC, or Clang)

## Windows
### vcpkg
1. Clone the `vcpkg` git repository.
```
git clone https://github.com/microsoft/vcpkg.git $HOME\.vcpkg
```
2. Run the `vcpkg` boostrap script.
```
cd $HOME\.vcpkg
.\bootstrap-vcpkg.bat
```
3. Set the `VCPKG_ROOT` environment variable and add it to `PATH`.
```
$env:VCPKG_ROOT = "$HOME\.vcpkg"
$env:PATH = "$env:VCPKG_ROOT;$env:PATH"
```
> [!NOTE]
> Setting environment variables in this manner only affects the current terminal session. To make these changes permanent across all sessions, set them through the Windows System Environment Variables panel.

4. Open a new terminal and verify.
```
vcpkg --version
```

### CMake
Go to [cmake.org](https://cmake.org/) and download the `x86-x64` Windows installer.<br>
The `cmake` environment variable will be configured automatically.

## GNU/Linux
1. Install prerequisites.
```
sudo apt update
sudo apt install build-essential cmake ninja-build pkgconf curl zip unzip tar
```
2. Install dependencies for building `SDL3`…
