---
repo: "Wayne6530/smooth-scroll-linux"
name: "smooth-scroll-linux"
description: "A lightweight tool to enhance mouse wheel scrolling, adding inertia and high-resolution precision for buttery-smooth navigation on Linux desktops. "
readmeQualityOk: true
url: "https://github.com/Wayne6530/smooth-scroll-linux"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["fedora", "linux", "mouse", "scroll", "smooth-scrolling", "ubuntu"]
stars: 45
forks: 2
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-28T01:10:42Z"
lastCommitAt: "2026-09-01T08:50:23Z"
lastReleaseAt: "2026-05-17T12:41:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 49
maintainers: ["Wayne6530", "JonPC4"]
openGraphImageUrl: "https://opengraph.githubassets.com/070b9149fd838fa1f7e92b28e3f22b8c31a1be8614be43ccf5afac8144ff7e5b/Wayne6530/smooth-scroll-linux"
discussionCount: 3
---

# Smooth Scroll Linux

[](https://github.com/user-attachments/assets/9398989b-ec77-4d03-ab3d-4967d37600db)

  ·
  ·
  ·
</p>

## Installation

1. Go to the [Releases](https://github.com/Wayne6530/smooth-scroll-linux/releases) page.
2. Download the package matching your distribution:

**Ubuntu / Linux Mint:**

```bash
cd ~/Downloads
sudo apt install ./smooth-scroll_*.deb
```

**Fedora:**

```bash
cd ~/Downloads
sudo dnf install ./smooth-scroll-*.rpm
```

> **Note:** If a pre-built package is not available for your distribution (e.g., Arch Linux, older distros), please refer to the [Build from Source](#build-from-source) section.

After installation, **smooth-scroll.service** will start automatically and enable itself at boot.

## Build from Source

### DEB

1. Install dependencies:

   ```bash
   sudo apt install build-essential cmake libspdlog-dev libevdev-dev libudev-dev
   ```

2. Clone and build:

   ```bash
   git clone https://github.com/Wayne6530/smooth-scroll-linux.git
   cd smooth-scroll-linux
   cmake -B build -DCMAKE_BUILD_TYPE=Release -DCPACK_GENERATOR="DEB"
   cd build
   make package
   ```

### RPM

1. Install dependencies:

   ```bash
   sudo dnf install gcc-c++…
