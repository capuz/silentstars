---
repo: "gabrielzschmitz/Tomato.C"
name: "Tomato.C"
description: "A pomodoro TUI written in pure C."
readmeQualityOk: true
url: "https://github.com/gabrielzschmitz/Tomato.C"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["pomodoro", "terminal", "c", "ncurses", "linux", "osx", "wsl", "tui"]
stars: 448
forks: 24
openIssues: 0
closedIssues: 39
watchers: 6
contributors: 1
recentReleases: 5
createdAt: "2022-07-12T23:37:32Z"
lastCommitAt: "2026-11-09T00:37:20Z"
lastReleaseAt: "2026-11-05T21:03:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 38
maintainers: ["gabrielzschmitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2319f13e8398cd486b5b66737e07aad2df498da90f810183dd68a3a385795975/gabrielzschmitz/Tomato.C"
---

# Tomato.C

**Tomato.C** is a modular, extensible, terminal-based Pomodoro timer written in
pure C. Its features dynamic UI, ASCII sprite animations, desktop
notifications, built-in notes system with Vim-like motions and comprehensive
session history logging.

---

## Installation

Choose the installation method that best fits your needs. **Homebrew** is
recommended for macOS, the **install script** is the quickest option for
Linux and macOS, and **building from source** is ideal if you want to
customize or contribute to the project.

```bash
curl -sSL https://raw.githubusercontent.com/gabrielzschmitz/Tomato.C/main/install.sh | bash
```

```bash
git clone https://github.com/gabrielzschmitz/Tomato.C.git
cd Tomato.C
./build.sh
# And/or
./install.sh
```

By default the build uses [gcc](https://gcc.gnu.org/). To use
[tcc](https://bellard.org/tcc) (Tiny C Compiler) or [zig](https://ziglang.org)
as an alternative, pass it on the command line:

```bash
CC=tcc ./build.sh
# And/or
CC=tcc ./install.sh
```

```bash
CC="zig cc" ./build.sh
# And/or
CC="zig cc" ./install.sh
```

Alternatively for a more permanent change, edit `CC = gcc` in `build/config.mk`.

From local repo:

```bash
sudo…
