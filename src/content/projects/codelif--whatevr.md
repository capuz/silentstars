---
repo: "codelif/whatevr"
name: "whatevr"
description: "A Linux-first native WhatsApp Client"
url: "https://github.com/codelif/whatevr"
language: "Go"
languages: ["Go", "QML", "C++"]
languagePcts: [36, 28, 22]
topics: ["chat", "chat-application", "messaging", "whatsapp", "whatsapp-chat", "gtk4", "kde", "kirigami", "libadwaita", "qt6"]
stars: 11
forks: 0
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-05-01T14:46:28Z"
lastCommitAt: "2026-07-03T12:33:56Z"
lastReleaseAt: "2026-06-17T15:37:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["codelif"]
openGraphImageUrl: "https://opengraph.githubassets.com/73134b472aa3ce96e273e2fdb8b108ee3e7396b0834b1fa467942d8865fb2d2d/codelif/whatevr"
---

> _This project is not affiliated with WhatsApp or Meta._
# Whatevr
A Linux-first native client for WhatsApp. It uses [whatsmeow](https://github.com/tulir/whatsmeow) to access the WhatsApp web multidevice API.

## Frontends

### WhatKevr

<details>
    <summary>Other Frontends</summary>
    
### WhatGevr

</details>

## Getting it
On Arch-based systems, Whatevr is available on the AUR:
```sh
yay -S whatevr-bin
```
Note: You can install the `whatevr` or `whatevr-git` packages also if you want to build yourself

For other systems, for now you can follow the build instructions below:

## Building
<details>
    <summary>Build Instructions</summary>
    
whatevr builds through a single top-level `justfile` that compiles **both** the
daemon (`whatevrd`) and the Qt/Kirigami frontend (`whatkevr`). The daemon must be
running for any frontend to work.

#### 1. Install dependencies

**Daemon:** Go 1.25+, just, a C compiler, SQLite dev files, pkg-config.
**Frontend:** C++20 compiler, CMake 3.21+, Ninja, Qt 6.8+, KDE Frameworks 6.5+
(KCoreAddons, KDBusAddons, KI18n, Kirigami, Prison, QQC2 Desktop Style),
Kirigami Addons 1.0+, rlottie, Vulkan headers.

```sh
# Arch
sudo pacman -S --needed…
