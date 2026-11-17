---
repo: "Harry-kp/mercury"
name: "mercury"
description: "API Client for Purists. 5MB binary. 50ms startup. Keyboard-first Postman alternative built in Rust."
readmeQualityOk: true
url: "https://github.com/Harry-kp/mercury"
homepage: "https://harry-kp.github.io/mercury/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["api-client", "networking", "rest-api", "developer-tools", "http-client", "productivity", "rust", "terminal", "tui", "bruno-alternative"]
stars: 9
forks: 1
openIssues: 8
closedIssues: 134
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-12-07T18:11:14Z"
lastCommitAt: "2026-11-17T12:19:25Z"
lastReleaseAt: "2026-09-28T20:56:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 67
maintainers: ["Harry-kp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1111835787/5bff8008-d9bc-411f-9837-fae5595e4389"
discussionCount: 0
---

Instant startup. 60fps UI. $0 forever.

## Quick start

```bash
brew install --cask harry-kp/tap/mercury
```

Launch from **Applications**, or run `mercury`. Universal build — Apple Silicon and Intel.

> The first launch says the developer cannot be verified: right-click Mercury in Applications and choose **Open**. Mercury is unsigned because a Developer ID costs $99/year.

**macOS / Linux**

```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/Harry-kp/mercury/releases/latest/download/mercury-installer.sh | sh
```

**Windows (PowerShell)**

```powershell
irm https://github.com/Harry-kp/mercury/releases/latest/download/mercury-installer.ps1 | iex
```

Then run `mercury`. The installer puts the binary in `~/.cargo/bin` — if the shell can't find it, restart your terminal.

On Windows, SmartScreen says "Windows protected your PC": click **More info** → **Run anyway**.

On Linux, to get it in your app launcher:

```bash
cat > ~/.local/share/applications/mercury.desktop << 'EOF'
[Desktop Entry]
Name=Mercury
Exec=$HOME/.cargo/bin/mercury
Type=Application
Categories=Development;
EOF
```

**Manual download** — [every platform, from…
