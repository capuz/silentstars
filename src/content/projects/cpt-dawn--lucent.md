---
repo: "CPT-Dawn/Lucent"
name: "Lucent"
description: "A high-performance, D-Bus activated Wayland notification daemon built in Rust with GTK4 and Layer Shell."
readmeQualityOk: true
url: "https://github.com/CPT-Dawn/Lucent"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["dbus", "gtk4", "gtk4-layer-shell", "hyprland", "linux-desktop", "notification-daemon", "rust", "sway", "tokio", "wayland"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-27T19:08:32Z"
lastCommitAt: "2026-10-28T09:58:03Z"
lastReleaseAt: "2026-03-31T23:08:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 18
maintainers: ["CPT-Dawn"]
openGraphImageUrl: "https://opengraph.githubassets.com/0330d62dadbbb3a134c74287c33bbf10565ace76b4d92e0586f3d3d3b05ae09d/CPT-Dawn/Lucent"
---

# Lucent

A D-Bus activated Wayland notification daemon in Rust with zero resident idle footprint.

## Architecture & Philosophy

Lucent implements `org.freedesktop.Notifications` as a D-Bus-activated service (`org.freedesktop.Notifications.service`) rather than a permanently running daemon.

- **Headless activation path:** no `systemd --user` unit and no compositor autostart stanza are required.
- **Zero idle residency:** when no notification is sent, Lucent is not running and consumes no resident memory.
- **Event-driven runtime:** process startup is triggered by D-Bus method calls; notification lifecycle is driven by IPC events.
- **Rust memory safety:** notification state, IPC routing, and rendering are implemented in Rust, with Wayland surfaces via `gtk4-layer-shell`.

Compared to legacy X11-era notification daemons (long-lived background services with startup orchestration), Lucent is bus-activated and compositor-native on Wayland.

> [!WARNING]
> Lucent requires a Wayland session and layer-shell support through the GTK4/layer-shell stack.

## Installation

### Arch Linux (AUR)

#### `lucent`

```bash
paru -S lucent
```

All packages install:

- `lucent` to `/usr/bin/lucent`…
