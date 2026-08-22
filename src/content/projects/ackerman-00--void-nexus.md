---
repo: "Ackerman-00/void-nexus"
name: "void-nexus"
description: "Pre-compiled packages for void linux not found in the official repositories."
readmeQualityOk: true
url: "https://github.com/Ackerman-00/void-nexus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["auto-update", "void-linux", "wayland", "custom-void-packages", "niri-git-void-template", "void-packages"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-30T09:43:37Z"
lastCommitAt: "2026-08-22T04:05:54Z"
lastReleaseAt: "2026-04-04T18:17:01Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 62
maintainers: ["github-actions[bot]", "Ackerman-00"]
openGraphImageUrl: "https://opengraph.githubassets.com/95c3218746d0ce020de928923f5d606c1ec7afbf305ca96520fafde5b0b96fab/Ackerman-00/void-nexus"
---

<h1>void-nexus</h1>

<p>A cryptographically signed, self-updating package repository for Void Linux.</p>

&nbsp;

<p><sup>Packages built on-demand · Signed & indexed automatically · Drop-in native xbps repo</sup></p>

</div>

---

## ⚡ Quick Setup

**① Add the repository**

```bash
echo 'repository=https://github.com/Ackerman-00/void-nexus/releases/download/rolling' \
  | sudo tee /etc/xbps.d/10-nexus.conf
```

**② Sync and install**

```bash
sudo xbps-install -S    # press y when prompted to trust the signing key
sudo xbps-install <package-name>
```

---

## 📦 Packages

<details>
<summary>Click to expand — 19 packages</summary>

<br />

| Package | Description | Type |
|---------|-------------|:----:|
| `blender-bin` | 3D graphics creation suite (binary build) | Stable |
| `brave-browser` | Secure, fast and private web browser with ad blocker | Stable |
| `brave-origin-bin` | Minimalist browser from the makers of Brave (binary release) | Stable |
| `faugus-launcher` | Simple and lightweight app for running Windows games using UMU-Launcher | Stable |
| `msnap` | Screenshot and screencast utility for mango | Stable |
| `gcc16` | GNU Compiler Collection 16 (parallel install) |…
