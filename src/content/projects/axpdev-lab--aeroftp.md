---
repo: "axpdev-lab/aeroftp"
name: "aeroftp"
description: "AeroFTP is a Cross-platform desktop client for FTP, FTPS, SFTP, WebDAV, S3-compatible storage, GitHub, and Cloud providers, built with Rust 🦀 (Tauri) + React"
readmeQualityOk: true
url: "https://github.com/axpdev-lab/aeroftp"
homepage: "https://www.aeroftp.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 32]
topics: ["ftp", "ftp-client", "ftps", "i18n", "open-source", "react", "rust", "tauri", "typescript", "cloud-storage"]
stars: 224
forks: 10
openIssues: 13
closedIssues: 131
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2025-12-19T15:12:50Z"
lastCommitAt: "2026-08-27T14:31:23Z"
lastReleaseAt: "2026-03-10T18:44:23Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 33
maintainers: ["axpnet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ddb63fbf0517d34c95656775dde489684dd10f134da1c20510350e2c8525fe2/axpdev-lab/aeroftp"
fundingLinks: ["GITHUB:https://github.com/axpnet", "BUY_ME_A_COFFEE:https://buymeacoffee.com/axpnet"]
discussionCount: 42
---

</p>

# AeroFTP

> _Last updated: 2026-06-28_

  The modern FTP client that grew into a complete file management platform. Multi-protocol, 7 integrated product modules, 47 languages, one app.
</p>

</p>

</p>

</p>

</p>

</p>

</p>

---

## Platform Status

| Platform | Status | Packages | Notes |
|----------|--------|----------|-------|
| **Linux** | Stable | `.deb`, `.rpm`, `.snap`, `.AppImage`, AUR | GNOME, KDE Plasma, XFCE, Hyprland, Sway, i3 (X11 & Wayland) |
| **Windows** | Stable | `.msi`, `.exe`, `.zip` portable, winget | Fully tested, not Microsoft Store signed |
| **macOS (Intel & Apple Silicon)** | Stable | `.dmg` (aarch64), `.dmg` (x64) | Not Apple code-signed, requires `xattr` workaround |

> **macOS note:** The `.dmg` is not yet signed with an Apple Developer ID certificate. macOS Gatekeeper will block it. After installing, run: `sudo xattr -rd com.apple.quarantine /Applications/AeroFTP.app`

---

## FTP-First Design

AeroFTP is an FTP client first. Full encryption support with configurable TLS modes (Explicit AUTH TLS, Implicit TLS, opportunistic TLS), certificate verification control, MLSD/MLST machine-readable listings (RFC 3659), and resume transfers…
