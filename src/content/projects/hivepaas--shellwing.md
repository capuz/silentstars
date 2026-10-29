---
repo: "hivepaas/shellwing"
name: "shellwing"
description: "Fast, native SSH client for macOS, Windows and Linux (Rust, GPUI, libghostty-vt)"
readmeQualityOk: true
url: "https://github.com/hivepaas/shellwing"
homepage: "https://shellwing.app"
language: "Rust"
languages: ["Rust", "Fluent"]
languagePcts: [57, 33]
topics: ["openssh", "port-forwarding", "sftp", "sftp-client", "ssh", "ssh-agent", "ssh-client", "ssh-keys", "terminal"]
stars: 76
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-18T06:58:23Z"
lastCommitAt: "2026-10-29T10:37:05Z"
lastReleaseAt: "2026-10-21T16:59:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["tiendc"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb1758d7cec042a61422cdf9bbcb193666f96f73fb4615bcc8787e35164aa4a6/hivepaas/shellwing"
---

# shellwing

**A fast, native SSH client for macOS, Windows and Linux.**

Tabs, split panes, SFTP, port forwarding and an encrypted vault that syncs between your devices, in a GPU-rendered terminal built in Rust.

[Features](#-key-features) • [Getting Started](#-getting-started) • [Configuration](#-configuration) • [Architecture](#-architecture) • [License](#-license)

---

## 🌟 Key Features

* **Native and fast:** a GPU-rendered terminal on [libghostty-vt](https://ghostty.org), parsing on its own thread; the display's full refresh rate under heavy output, sharp text at any HiDPI scale, and input methods (IME) with the composing text at the cursor.
* **SSH the way OpenSSH does it:** `~/.ssh/config` (aliases, `ProxyJump`, forwards, identity files), `known_hosts` checks, agent keys, key files, certificates, keyboard-interactive and two-factor codes, and agent forwarding.
* **Tabs and panes:** split a tab to the same host, move between panes, type into every pane at once, reorder tabs by dragging; tabs follow the shell's title.
* **Files over SFTP:** browse, upload and download (drag and drop too), rename, delete, and edit remote files in your own editor.
* **Port forwarding:**…
