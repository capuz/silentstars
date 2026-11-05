---
repo: "MarcoDotIO/Ycode"
name: "Ycode"
description: "An independent, open-source IDE for Apple-platform projects on macOS and Linux. Opens real projects and writes compatible files. Clean-room, no Apple code. Public beta."
readmeQualityOk: true
url: "https://github.com/MarcoDotIO/Ycode"
language: "Swift"
languages: ["Swift"]
languagePcts: [89]
topics: ["clean-room", "developer-tools", "flatpak", "ide", "kvm", "linux", "macos", "pbxproj", "simulator", "sourcekit-lsp"]
stars: 10
forks: 1
openIssues: 39
closedIssues: 27
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-10-13T20:38:39Z"
lastCommitAt: "2026-11-05T00:22:50Z"
lastReleaseAt: "2026-11-04T08:49:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 44
maintainers: ["MarcoDotIO"]
openGraphImageUrl: "https://opengraph.githubassets.com/a76a58cabfc20e5fe3e5acbdcc9c261808158f4f6f61a1d983f728e3d47ea6e3/MarcoDotIO/Ycode"
---

It opens real projects, builds them, and writes files that stay compatible.

> [!NOTE]
> **This is a public beta (1.0.0-beta.1).** The project file formats and command-line tools are the most
> mature part. The IDE is usable and still has rough edges, and the Linux IDE is well behind the macOS one.
> Keep your projects under version control, and please [report what you find](https://github.com/MarcoDotIO/Ycode/issues/new/choose).

## What is Ycode?

Ycode is a desktop IDE for projects that target Apple platforms. It reads and writes the same files as
Apple's Xcode (`.xcodeproj`, `.xcworkspace`, `.xcscheme`, `.xcconfig`, Swift packages), so you can move a
project between the two tools and keep your colleagues' diffs small.

It is written from scratch in Swift under a [clean-room protocol](#clean-room): **it contains no Apple
code.** It builds with the compilers and SDKs you have installed, and it ships none of Apple's.

**Ycode may suit you if** you want to edit, build and run Swift projects on Linux, you need `xcodebuild`-style
tooling or project-file handling you can read and change, or you want to take part in an open IDE.

**It won't suit you yet if** you need a drop-in…
