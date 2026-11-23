---
repo: "AriaCast/AriaCast-Client-CrossPlatform"
name: "AriaCast-Client-CrossPlatform"
description: "AriaCast Client implementation in go to be compiled for desktop"
readmeQualityOk: true
url: "https://github.com/AriaCast/AriaCast-Client-CrossPlatform"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [64, 36]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-01T21:29:40Z"
lastCommitAt: "2026-11-23T10:16:11Z"
lastReleaseAt: "2026-03-01T21:36:12Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 39
maintainers: ["meiser79", "AirPlr", "arthurbre"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9e46a10daa3391038189973779cbc54f153c17fc77d6f01b88c50e39d085ba2/AriaCast/AriaCast-Client-CrossPlatform"
---

# AriaCast Client

A modern, cross-platform client for AriaCast built with Go and Webview.

## Dependencies

- Go 1.25+
- **Windows**: `gcc` (MinGW-w64 via MSYS2 recommended)
- **Linux**: `libgtk-3-dev`, `libwebkit2gtk-4.1-dev`
- **macOS**: Xcode Command Line Tools

## Building

### Windows

1.  **Install MinGW-w64**: Ensure `gcc` is in your PATH.
    ```powershell
    # Verify GCC
    gcc --version
    ```
2.  **Generate Icon Resource** (Optional):
    ```powershell
    # Requires 'rsrc' tool: go install github.com/akavel/rsrc@latest
    rsrc -ico icon.ico -o rsrc.syso
    ```
3.  **Build**:
    ```powershell
    go build -tags "cgo" -ldflags="-H windowsgui" -o AriaCastClient.exe .
    ```

### Linux

1.  **Install Dependencies**:
    ```bash
    sudo apt install libgtk-3-dev libwebkit2gtk-4.1-dev
    ```
    > Modern distros (Ubuntu 24.04+, Debian 13+, Fedora 40+, Arch, etc.) only ship `webkit2gtk-4.1`; the older `webkit2gtk-4.0` package has been removed upstream.
