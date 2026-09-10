---
repo: "wdes/tab-atelier"
name: "tab-atelier"
description: "The TabAtelier app"
readmeQualityOk: true
url: "https://github.com/wdes/tab-atelier"
homepage: "https://deb.tab-atelier.wdes.eu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["alacritty", "gpui", "guake-terminal"]
stars: 5
forks: 1
openIssues: 8
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-14T22:05:19Z"
lastCommitAt: "2026-09-10T07:36:30Z"
lastReleaseAt: "2026-05-15T22:16:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 49
maintainers: ["williamdes", "a-biskoazh", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/845ac20006f3c7f940bcc2bf654fcc5b7480e6f7dd3d13cd55331b4e69439b0c/wdes/tab-atelier"
---

# Tab Atelier

A Guake-style drop-down terminal emulator for Linux (X11), built with Rust using [alacritty_terminal](https://crates.io/crates/alacritty_terminal), [gpui](https://crates.io/crates/gpui) (Zed's GPU-accelerated UI framework), and [wattaouille](https://crates.io/crates/wattaouille) for power monitoring.

## Installation

### Debian / Ubuntu — apt repo (recommended)

```sh
curl -fsSL https://deb.tab-atelier.wdes.eu/tab-atelier.gpg \
    | sudo tee /usr/share/keyrings/tab-atelier.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/tab-atelier.gpg] https://deb.tab-atelier.wdes.eu stable main" \
    | sudo tee /etc/apt/sources.list.d/tab-atelier.list > /dev/null
sudo apt update
sudo apt install tab-atelier            # desktop / GUI
# or:
sudo apt install tab-atelier-headless   # display-less server variant
```

Replace `stable` with `nightly` to track `main`. Snapshot versions look like `0.5.0~nightly20260715082716.9f3ab21-1`, following [Debian Versioning](https://wiki.debian.org/Versioning): `0.5.0` is the release being headed towards, `~` sorts it strictly **before** that release (so apt steps up onto stable when it lands), the timestamp orders one snapshot against…
