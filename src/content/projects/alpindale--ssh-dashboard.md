---
repo: "AlpinDale/ssh-dashboard"
name: "ssh-dashboard"
description: "Monitor GPU/CPU Usage on SSH servers, with NVIDIA and AMD support."
readmeQualityOk: true
url: "https://github.com/AlpinDale/ssh-dashboard"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 153
forks: 18
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-10-12T13:09:29Z"
lastCommitAt: "2026-07-10T06:59:57Z"
lastReleaseAt: "2026-07-10T06:08:43Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 16
maintainers: ["AlpinDale"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c492c79056e160c4495c74b857f399d921d3ffaef1f381f7b2ffc556f50f92a/AlpinDale/ssh-dashboard"
---

# SSH Dashboard

Monitor CPU, GPU, RAM, and disk usage on your remote servers with a live-updating terminal dashboard.

### Single-host monitoring:
</div>

### Multi-host monitoring:
</div>

## Installation

### Pre-built Binaries

Download the latest release for your platform from the [Releases page](https://github.com/AlpinDale/ssh-dashboard/releases).

**Quick install (Linux/macOS):**
```bash
# Download the binary for your platform
# Example for Linux AMD64:
curl -L -o ssh-dashboard https://github.com/AlpinDale/ssh-dashboard/releases/download/v0.0.1/ssh-dashboard-v0.0.1-linux-amd64

# Make it executable and move to PATH
chmod +x ssh-dashboard
sudo mv ssh-dashboard /usr/local/bin/
```

**Supported platforms:**
- `linux-amd64`, `linux-arm64`
- `darwin-amd64` (Intel Mac), `darwin-arm64` (Apple Silicon)
- `windows-amd64.exe`, `windows-arm64.exe`

### From Source

#### AUR
```bash
yay -S ssh-dashboard-git
```

#### Manual

```bash
git clone https://github.com/AlpinDale/ssh-dashboard.git
cd ssh-dashboard
make install
```

This will install to `~/.local/bin`. Make sure this directory is in your PATH (it usually is):

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### Prerequisites…
