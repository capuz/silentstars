---
repo: "dmitry-valyukov/wxl"
name: "wxl"
description: "WXL (WinUI Xaml-Less): A modern C++23 library for declarative, Flutter-style WinUI 3 development. Powered by C++ modules and stripped of heavy winrt bloat, it brings simplicity and control back to native C++ GUI apps."
originalDescription: "WXL (WinUI Xaml-Less): A modern C++23 library for declarative, Flutter-style WinUI 3 development. Powered by C++ modules and stripped of heavy winrt bloat, it brings simplicity and control back to native C++ GUI apps."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/dmitry-valyukov/wxl"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T13:37:42Z"
lastCommitAt: "2026-10-05T10:46:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["dmitry-valyukov"]
openGraphImageUrl: "https://opengraph.githubassets.com/686c87b69d91a7a414cb0ef0fc720f216803574bc3da4b1449e08d976187cb22/dmitry-valyukov/wxl"
---

# WXL - WinUI Xaml-Less

Infrastructure for developing Windows applications using WinUI 3 without XAML.

## Build

The project uses [vcpkg](https://github.com/microsoft/vcpkg) for installing dependencies and `CMakePresets.json` for configuration.

### Requirements

1. **Visual Studio with a toolchain that supports `import std;`** — as of now, this is Visual Studio Insiders. The entire library is built from C++20 modules, and the modular standard library requires both a fresh toolset and the Ninja generator: Visual Studio generators do not build BMI for imported targets. The `ninja` and `cmake` themselves also come from there — CMake version 4.3 to 4.4 is required, because the experimental `import std;` flag changes the UUID with each release (see `cmake/wxl_import_std_gate.cmake`).

2. Installed [vcpkg](https://github.com/microsoft/vcpkg), run at least once: the build finds it via `vcpkg.path.txt`, which vcpkg writes itself. If this file is missing, the root can be specified with a cache variable during configuration: `cmake --preset x64 -DVCPKG_ROOT=M:\vcpkg`. The `VCPKG_ROOT` environment variable is intentionally not read on Windows — vcvars64.bat replaces it with vcpkg from…
