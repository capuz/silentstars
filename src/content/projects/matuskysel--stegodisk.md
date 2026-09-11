---
repo: "MatusKysel/StegoDisk"
name: "StegoDisk"
description: "StegoDisk is cross platform steganographic file system"
readmeQualityOk: true
url: "https://github.com/MatusKysel/StegoDisk"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["steganography", "library", "jpeg", "png", "bmp", "secret"]
stars: 8
forks: 14
openIssues: 6
closedIssues: 25
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2015-09-13T18:07:37Z"
lastCommitAt: "2026-09-11T08:15:00Z"
lastReleaseAt: "2016-10-10T13:38:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 71
undervaluedScore: 60
maintainers: ["MatusKysel", "xmikula", "miska1"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b6c84516261e8988e48f12a10a1fcfc49da26a53028113244aacbf8b271949c/MatusKysel/StegoDisk"
---

# StegoDisk

Linux/macOS/Windows [](https://github.com/MatusKysel/StegoDisk/actions/workflows/ci.yml)

### Overview
StegoDisk is cross platform steganographic library with a support of BMP, JPEG and PNG files. This library is using steganographic techniques for embedding data into carrier files. This libarary aslo comes with new interface for the Python programming language.

### Download
[Source code](https://github.com/MatusKysel/StegoDisk/releases/latest)

### Building
The build requires CMake 3.25 or newer and a compiler with C++17 support. CI uses CMake 4.4.3 on Linux, macOS, and Windows. Initialize the bundled dependencies before configuring:
```Bash
git submodule update --init --recursive
cmake -S . -B out -DCMAKE_BUILD_TYPE=Release
cmake --build out --config Release --parallel 4
```
No command-line policy override is needed for the bundled JPEG library. Use `-DCMAKE_BUILD_TYPE=Debug` for a Debug build with Makefiles or Ninja. With a multi-configuration generator such as Visual Studio or Ninja Multi-Config, select the configuration using `--config Debug` when building.
#### Running unit test
Build and run the project test suite with:
```Bash
cmake --build out --config…
