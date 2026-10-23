---
repo: "keepinfov/oxidom"
name: "oxidom"
description: "Native Linux desktop Xray / v2ray client built with GTK4 + libadwaita in Rust"
readmeQualityOk: true
url: "https://github.com/keepinfov/oxidom"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 2
openIssues: 4
closedIssues: 71
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-07-25T12:25:15Z"
lastCommitAt: "2026-10-23T09:32:11Z"
lastReleaseAt: "2026-10-15T17:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 61
maintainers: ["keepinfov", "nrf24l01"]
openGraphImageUrl: "https://opengraph.githubassets.com/40d8685dd5a389ac04507fc040268d2688b92d54317575abc26d5cc515d69832/keepinfov/oxidom"
---

# oxidom

*oxided freedom* — a native Linux desktop **Xray / v2ray client** built with
GTK4 + libadwaita in Rust. Inspired by [Happ] and the GNOME Files (Nautilus)
aesthetic.

oxidom manages subscriptions and standalone servers, drives an **Xray core**
child process (generating its JSON config), and exposes the tunnel as local
SOCKS5 + HTTP proxies — with an optional GNOME system-proxy toggle, optional TUN
interfaces, and per-app routing. The GUI runs fully unprivileged.

## Install it

**Debian, Ubuntu, Mint:**

```sh
curl -fsSL https://keepinfov.github.io/oxidom/KEY.gpg \
  | sudo gpg --dearmor -o /usr/share/keyrings/oxidom.gpg
echo "deb [signed-by=/usr/share/keyrings/oxidom.gpg] https://keepinfov.github.io/oxidom/deb stable main" \
  | sudo tee /etc/apt/sources.list.d/oxidom.list
sudo apt update && sudo apt install oxidom-gui
```

**Fedora, RHEL:**

```sh
sudo curl -fsSL https://keepinfov.github.io/oxidom/oxidom.repo -o /etc/yum.repos.d/oxidom.repo
sudo dnf install oxidom-gui
```

Both are the signed repository, so upgrades arrive with the rest of the system.
On a server, install `oxidom` instead — the daemon and CLI, with no GTK
dependency.

**Or one line**, which detects apt…
