---
repo: "gaoyia/ffrm"
name: "ffrm"
description: "A Windows file force-unlock and delete tool, written by AI"
originalDescription: "一个windows下的文件强制解锁删除工具，AI写的"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gaoyia/ffrm"
homepage: "https://gaoyia.github.io/ffrm/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-10-03T14:23:44Z"
lastCommitAt: "2026-11-02T11:35:55Z"
lastReleaseAt: "2026-10-09T14:37:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 47
maintainers: ["gaoyia"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd9eea14c3f1b0bd0f5c1ac7eb48976c4ee99e27ca577174fb5c85247a1da734/gaoyia/ffrm"
---

# ffrm

ffrm is short for "file force rm," meaning forcibly delete a file.

A Windows and macOS tool. It shows which process is holding a local file or folder, releases that hold, and then deletes it.

Run it with no arguments, or pass a path directly, to open the desktop window. `status`, `unlock`, and `delete` are command-line commands. `mcp` starts a service for editor integrations. The desktop app, the command line, and MCP are the same program.

## Download

Installers are published on [GitHub Releases](https://github.com/gaoyia/ffrm/releases). The download page is [gaoyia.github.io/ffrm](https://gaoyia.github.io/ffrm/). The Windows installer is `ffrm-setup.exe` and installs to the current user's directory. The macOS installer is `ffrm.dmg`, built for Apple silicon. After opening it, drag `ffrm.app` into Applications. Portable builds are still published: `ffrm.exe` for Windows and `ffrm` for macOS. In-app updates replace the running program file; they do not download an installer.

If Rust is already installed, you can run:

```text
cargo install ffrm
```

After installing, run `ffrm` in the command line.

## License and Donations

This repository is released under the MIT…
