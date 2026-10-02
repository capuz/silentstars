---
repo: "rubidus-api/rubrapack"
name: "rubrapack"
description: "A command-line tool that builds and signs Windows installer packages - Windows Installer (.msi) and MSIX (.msix, .msixbundle) - on Windows and on Linux."
readmeQualityOk: true
url: "https://github.com/rubidus-api/rubrapack"
homepage: "https://github.com/rubidus-api/rubrapack"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["c", "c23", "winapi", "window", "windows-11"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-25T10:23:37Z"
lastCommitAt: "2026-10-02T10:00:59Z"
lastReleaseAt: "2026-09-30T09:54:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["rubidus-api"]
openGraphImageUrl: "https://opengraph.githubassets.com/2888b02103029b1f3cd966ade1f1263f403f63056e847b15157a201c73253973/rubidus-api/rubrapack"
---

[한국어](https://github.com/rubidus-api/rubrapack/blob/HEAD/README-ko.md) | **English** — **rubrapack v0.32.0** — [Linux(x64)](https://github.com/rubidus-api/rubrapack/releases/download/v0.32.0/rubrapack-0.32.0-linux-x86_64) · [EXE(x64)](https://github.com/rubidus-api/rubrapack/releases/download/v0.32.0/rubrapack-0.32.0-windows-x64.exe) · [PDF(ko)](https://github.com/rubidus-api/rubrapack/releases/download/v0.32.0/rubrapack-manual-0.32.0-ko.pdf) · [PDF(en)](https://github.com/rubidus-api/rubrapack/releases/download/v0.32.0/rubrapack-manual-0.32.0-en.pdf) · [HTML(ko)](https://rubidus-api.github.io/rubrapack/ko/) · [HTML(en)](https://rubidus-api.github.io/rubrapack/en/)

# rubrapack

**Windows installers from one small text file.** rubrapack turns a short, readable description
of your program into a Windows Installer package (`.msi`) or an MSIX package (`.msix`,
`.msixbundle`), signs it, and checks it - on Windows or on Linux, with one self-contained program
and nothing else to install.

```sh
rubrapack new app.toml                    # asks a few questions, writes app.toml and checks it
rubrapack build app.toml -o app.msi       # a real installer: uninstall entry, upgrades, repair
```…
