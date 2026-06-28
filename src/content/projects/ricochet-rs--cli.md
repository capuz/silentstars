---
repo: "ricochet-rs/cli"
name: "cli"
description: "CLI for ricochet"
url: "https://github.com/ricochet-rs/cli"
homepage: "https://ricochet.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 7
forks: 1
openIssues: 4
closedIssues: 27
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2025-09-10T16:43:53Z"
lastCommitAt: "2026-06-28T02:01:45Z"
lastReleaseAt: "2026-06-10T20:13:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 76
maintainers: ["pat-s", "renovate[bot]", "ricochet-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d9c302f5eac7ba0513308332d56fb70260ca1300850b91e9375eb0804508ad5/ricochet-rs/cli"
discussionCount: 1
---

# cli

## Installation

Linux, macOS, Windows (Git Bash/WSL):

```bash
curl -fsSL https://raw.githubusercontent.com/ricochet-rs/cli/main/install.sh | sh
```

Windows (PowerShell/CMD):

```powershell
curl.exe -fsSL https://raw.githubusercontent.com/ricochet-rs/cli/main/install.ps1 -o install.ps1; .\install.ps1; Remove-Item install.ps1
```

> [!WARNING]
> The default install dir is `$HOME/bin` for your current user, which is not in `$PATH` by default.
> You need to add this directory to your `$PATH` environment variable or otherwise always use the full path to the binary.

Or using Git Bash/WSL:

```bash
curl -fsSL https://raw.githubusercontent.com/ricochet-rs/cli/main/install.sh | sh
```

> [!TIP]
> If you're on macOS, you might want to use our [homebrew tap](https://github.com/ricochet-rs/homebrew-tap) instead.

The installer will automatically detect your OS and architecture and download the appropriate binary from the release artifacts.

> [!NOTE]
> We will add support for [scoop](https://scoop.sh/) and [chocolatey](https://chocolatey.org/install) in the future.

### Customization

You can customize the installation with environment variables:

Bash/sh:

```bash
# Install a…
