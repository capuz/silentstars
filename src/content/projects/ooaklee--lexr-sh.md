---
repo: "ooaklee/lexr.sh"
name: "lexr.sh"
description: "Lexr [Linux Exchanger] simplifies ARM64 Linux on Snapdragon X devices like the Surface Pro 11. Build, manage, and audit images, kernels, and device support in one place for fast, reliable setup and top hardware compatibility."
readmeQualityOk: true
url: "https://github.com/ooaklee/lexr.sh"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 7
forks: 0
openIssues: 3
closedIssues: 24
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-30T17:11:55Z"
lastCommitAt: "2026-11-08T10:40:28Z"
lastReleaseAt: "2026-09-04T01:21:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 59
maintainers: ["ooaklee", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69a4baa139b211d2661b800c8007c7ba6b3df5ba4f8f274556ac34e13e9a7c5f/ooaklee/lexr.sh"
---

# Lexr.sh

Lexr (Linux Exchanger) makes it easy to run ARM64 Linux on Qualcomm Snapdragon X Devices (initially focusing on Microsoft Surface Pro 11). It is a centralised tool that lets you manage and create ready-to-use images, tailored kernels, and essential device libraries to maximise your device's functionality when using Linux. With auditability as a core principle, it helps you track and manage what's implemented out of the box. Fast, auditable, and Qualcomm Snapdragon X-focused.

Build a repeatable ARM64 Linux kernel + installer for your Snapdragon X Device.

On Linux or macOS, the install script verifies the latest release checksum and,
when GitHub CLI supports it, the manifest's build provenance. It installs the
matching binary atomically and puts `lexr` on your `PATH`:

```sh
curl -fsSL https://raw.githubusercontent.com/ooaklee/lexr.sh/refs/heads/main/install.sh | sh
```

Re-running the command compares the installed bytes with the release manifest
without executing them and skips the binary download when they already match.
Pass `--force` to reinstall the latest release.

[Download Lexr](https://github.com/ooaklee/lexr.sh/releases) ·
[Get…
