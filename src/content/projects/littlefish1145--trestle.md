---
repo: "littlefish1145/trestle"
name: "trestle"
description: "A lightweight build workspace for C, C++, CUDA, and Vulkan projects"
originalDescription: "A lightweight build workspace for C, C++, CUDA, and Vulkan projects"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/littlefish1145/trestle"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["c", "cmake", "conan2", "golang-application", "tui", "vcpkg"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-26T09:15:47Z"
lastCommitAt: "2026-10-31T07:43:30Z"
lastReleaseAt: "2026-10-16T23:10:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["littlefish1145"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ce0927fc568f7fe40be75ed8a2f3896db811f664575f3b7ebf4fe952212ff1/littlefish1145/trestle"
discussionCount: 1
---

A lightweight build workbench for C, C++, CUDA, and Vulkan projects

# Trestle

Trestle brings compiler discovery, dependency resolution, project import, Ninja builds, testing, and release packaging together in a single CLI and TUI. It uses `trestle.toml` as the source of truth for the project and generates inspectable `build.ninja`, `compile_commands.json`, and command metadata, without hiding the actual compile and link process.

## Key Features

- Supports C17, C++20, and static library, shared library, executable, test, and Vulkan shader targets.
- Automatically discovers MSVC, Clang, clang-cl, GCC, MinGW, CUDA, Vulkan SDK, and WSL compilers.
- When using clang-cl, automatically finds and loads the matching Visual Studio ABI environment. Supports an explicit `vcvars64.bat`, deriving the environment from tool paths, and `vswhere`.
- Toolchains are selected by version range. `msvc = "14.30~14.50"` and `cuda = "12.0~12.9"` only declare the required versions, so a committed `trestle.toml` does not record machine-specific absolute paths. Schema 6 files are automatically rewritten the first time they are loaded, and the original file is kept as `.schema-v6.*.bak`.
- Probe results…
