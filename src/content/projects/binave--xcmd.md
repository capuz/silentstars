---
repo: "binave/xcmd"
name: "xcmd"
description: "command-line wrapper for batch and shell"
url: "https://github.com/binave/xcmd"
language: "Batchfile"
languages: ["Batchfile", "Shell"]
languagePcts: [54, 39]
topics: ["kms-client", "md5", "office-installer", "sha1", "vhd", "wake-on-lan", "wim", "find-lan-pc"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-06-06T16:54:13Z"
lastCommitAt: "2026-06-23T23:18:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 55
undervaluedScore: 36
maintainers: ["binave"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bf74b40d90151da71c9a6e24bc5cd822d4d6e1448c98ff950dd5060fce8b9a6/binave/xcmd"
---

# eXternal Command

**eXternal Command - command-line wrapper for batch and shell**

A collection of commonly used batch and shell functions.

[简体中文](README.zh-CN.md)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Examples](#-examples)
- [Features Detail](#-features-detail)
- [License](#-license)

---

## ✨ Features

- **xlib/xlib.cmd** - Uses only first-party tools, works out of the box with dozens of practical commands
- **x3rd/x3rd.cmd** - Wraps third-party command-line tools
    - Support for Windows, macOS, and Linux
    - Built-in error handling and help system
    - Support for UNC paths (Windows SMB)
    - Easy to deploy

- **xjar** - JAR application process manager and operations tool, (for linux only)
- **qrsender.sh/qrsender.cmd** - Transfer files from Linux to Windows via `QR code`
---

## 📦 Installation

### For Windows

1. Download `xlib.cmd` and/or `x3rd.cmd`
2. Add the script directory to your PATH environment variable
3. Ensure the script uses `CRLF` line endings
4. Avoid using non-ANSI characters in the script

### For macOS/Linux

1. Download `xlib` and/or `x3rd`
2. Add execute permission: `chmod +x xlib`
3.…
