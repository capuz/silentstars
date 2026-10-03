---
repo: "unixwin/niubash"
name: "niubash"
description: "AI-native Bash shell for Windows: bash syntax, native Windows paths, Unix commands, direct execution of real Windows binaries. No WSL, no emulation - for humans and AI agents."
readmeQualityOk: true
url: "https://github.com/unixwin/niubash"
homepage: "https://dl.caomengxuan666.com/en/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["cli", "command-line", "command-line-interface", "repl", "rust", "shell", "terminal", "unix", "windows", "windows-terminal"]
stars: 142
forks: 6
openIssues: 3
closedIssues: 105
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-03-28T14:05:55Z"
lastCommitAt: "2026-10-03T22:05:03Z"
lastReleaseAt: "2026-08-01T07:26:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 37
maintainers: ["caomengxuan666"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d0f9920fb8cbc5570b9bcf2274cd08274264d2715159cb38f227aad9e0b95f2/unixwin/niubash"
discussionCount: 0
---

> **Bash, native on Windows.** No WSL. No VM. No `/mnt/c`. No cmdlet dialect.
> One `niu.exe`: the shell your fingers already know — and the one your AI
> agent actually speaks.

[English](https://github.com/unixwin/niubash/blob/HEAD/README.md) · [中文](https://github.com/unixwin/niubash/blob/HEAD/README-zh.md)

**niubash** is a native Windows shell that runs real Bash — no Linux VM, no
emulation layer, no path roulette. One `niu.exe` bundles the
[rubash](https://github.com/unixwin/rubash) language engine, real Unix
commands from [winuxcmd](https://github.com/unixwin/winuxcmd), a git-aware
prompt, and a permission-modeled plugin system.

**What it is — and is not.** niubash is a bash-compatible shell implemented
natively in Rust for Windows: the language engine
([rubash](https://github.com/unixwin/rubash)) is a from-scratch Bash
interpreter, and the bundled Unix commands are native Windows executables.
It is **not MSYS2, not Cygwin, not Git Bash, and not WSL** — there is no
POSIX emulation layer, no `cygwin1.dll` / `msys-2.0.dll`, and no
path-translation machinery anywhere in the stack. Every process niubash
starts is an ordinary Win32 process, and niubash itself has **no runtime…
