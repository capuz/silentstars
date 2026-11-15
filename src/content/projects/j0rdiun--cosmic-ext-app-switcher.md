---
repo: "j0rdiun/cosmic-ext-app-switcher"
name: "cosmic-ext-app-switcher"
description: "macOS-style horizontal app switcher for COSMIC desktop on Pop!_OS"
readmeQualityOk: true
url: "https://github.com/j0rdiun/cosmic-ext-app-switcher"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [75, 22]
stars: 17
forks: 3
openIssues: 4
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-06-26T20:51:16Z"
lastCommitAt: "2026-11-15T11:20:57Z"
lastReleaseAt: "2026-11-08T23:43:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 23
maintainers: ["j0rdiun", "furan917", "egranata"]
openGraphImageUrl: "https://opengraph.githubassets.com/68b0b5af7fa0b9b86b162061015d72f2d58984007824e75e38c2b5383deb389f/j0rdiun/cosmic-ext-app-switcher"
---

# cosmic-ext-app-switcher

A macOS-style horizontal app switcher for the [COSMIC desktop](https://system76.com/cosmic) on Pop!_OS — replacing the default vertical Super+Tab list with a compact icon strip centered on screen.

---

## Install

**One-line (no Rust required):**

```bash
curl -fsSL https://raw.githubusercontent.com/j0rdiun/cosmic-ext-app-switcher/main/install.sh | bash
```

**Or build from source:**

```bash
# Install dependencies (one-time)
sudo apt install libxkbcommon-dev libwayland-dev pkg-config
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source ~/.cargo/env

git clone https://github.com/j0rdiun/cosmic-ext-app-switcher
cd cosmic-ext-app-switcher
make install
```

Changes take effect immediately — no logout required.

> ### Not available from the COSMIC Store
>
> A Flatpak build was listed in the COSMIC Store from August to September 2026. It never
> worked, and cannot be made to work. cosmic-comp only offers
> `zcosmic_toplevel_info_v1`, `zcosmic_toplevel_manager_v1` and `zwlr_layer_shell_v1` to
> clients without a Wayland security context, and Flatpak always attaches one, so a
> sandboxed build can neither list your windows nor draw…
