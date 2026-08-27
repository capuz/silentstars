---
repo: "Jorji49/streamtop"
name: "streamtop"
description: "HLS/DASH/IPTV stream diagnostics TUI · v0.3.3"
readmeQualityOk: true
url: "https://github.com/Jorji49/streamtop"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cdn", "hls", "iptv", "ll-hls", "mpeg-dash", "ratatui", "rust", "scte-35", "tui", "video"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-08-25T14:20:11Z"
lastCommitAt: "2026-08-27T14:32:33Z"
lastReleaseAt: "2026-08-27T14:23:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Jorji49"]
openGraphImageUrl: "https://opengraph.githubassets.com/179fcf103d12714c57155284407e30616c3e71f47ad408693f0b392055de0ec7/Jorji49/streamtop"
fundingLinks: ["GITHUB:https://github.com/Jorji49", "BUY_ME_A_COFFEE:https://buymeacoffee.com/ahmetkayrakama"]
---

# streamtop

Live HLS, DASH, and IPTV stream diagnostics in the terminal. Current release: **v0.3.4**.

</p>

## Installation

Verify after install: `streamtop --version` → `streamtop 0.3.4`.

### Rust

```bash
cargo install streamtop
# or
cargo install cargo-binstall && cargo binstall streamtop
```

### Windows (Scoop)

```powershell
scoop bucket add streamtop https://github.com/Jorji49/streamtop
scoop install streamtop/streamtop
scoop update streamtop   # if an older copy was cached
```

### Windows (Winget)

Package **0.3.4** winget PR is submitted after each release (see microsoft/winget-pkgs). After merge:

```powershell
winget install streamtop
```

### macOS / Linux (Homebrew)

```bash
brew tap Jorji49/tap
brew install streamtop
brew upgrade streamtop   # if previously installed
```

```bash
brew install --formula https://raw.githubusercontent.com/Jorji49/streamtop/main/Formula/streamtop.rb
```

### Arch Linux

Official AUR listing is pending. Build **0.3.4** from the packaging mirror:

```bash
git clone https://github.com/Jorji49/streamtop-bin.git
cd streamtop-bin
makepkg -si
```

`PKGBUILD` also lives at `dist/aur/PKGBUILD` in this repo.

### Docker

```bash
docker run…
