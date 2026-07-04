---
repo: "eugenioenko/ttt"
name: "ttt"
description: "TTT Editor - Terminal Text Tool: a terminal text editor IDE. A real alternative to VS Code, Zed, and Sublime that runs in your terminal. Single binary, zero config."
readmeQualityOk: true
url: "https://github.com/eugenioenko/ttt"
homepage: "http://tttedit.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["cli", "code-editor", "go", "golang", "lsp", "terminal", "terminal-emulator", "text-editor", "tui", "vscode-alternative"]
stars: 85
forks: 3
openIssues: 46
closedIssues: 73
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-01-16T06:21:11Z"
lastCommitAt: "2026-07-04T22:20:20Z"
lastReleaseAt: "2026-06-15T00:57:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["eugenioenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a76aa21c98b47cfae61d893c7bf936208a4b74dde1f98c6b61d2a09410f7b6c/eugenioenko/ttt"
---

# TTT Editor: Terminal Text Tool

The IDE that lives in your terminal. Not a simplified terminal editor — a real alternative to VS Code, Zed, and Sublime that happens to run in your terminal. Single Go binary, zero config.

## Installation

### Prerequisites

- [Git](https://git-scm.com/) — required for source control features
- [ripgrep](https://github.com/BurntSushi/ripgrep) (`rg`) — required for workspace search

### Quick Install MacOS (brew)
```sh
brew tap eugenioenko/ttt
brew install ttt
```

### Quick Install Linux
```sh
curl -sSfL https://raw.githubusercontent.com/eugenioenko/ttt/main/install.sh | sh
```

### [Arch Linux (AUR)](https://aur.archlinux.org/packages/ttt)

Thanks to [@Dominiquini](https://github.com/Dominiquini) for maintaining the AUR package.

```sh
yay -S ttt
```

### NixOS

> **Note:** Always install from a tagged release. The `main` branch is unstable and may contain work-in-progress features.

Try it without installing:
```sh
nix run github:eugenioenko/ttt/v0.3.5
```

Add to your `flake.nix` inputs:
```nix
{
  inputs.ttt.url = "github:eugenioenko/ttt/v0.3.5";
}
```

Then add `inputs.ttt.packages.${system}.default` to your `environment.systemPackages` or…
