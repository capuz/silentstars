---
repo: "basetenlabs/baseten-cli"
name: "baseten-cli"
description: "CLI for Baseten"
readmeQualityOk: true
url: "https://github.com/basetenlabs/baseten-cli"
homepage: "https://docs.baseten.co/reference/cli/baseten/overview"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 32
forks: 5
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 31
recentReleases: 7
createdAt: "2026-03-26T15:17:58Z"
lastCommitAt: "2026-11-03T19:05:19Z"
lastReleaseAt: "2026-10-22T14:01:35Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 50
maintainers: ["cretz", "ShivainVij", "yunzou-baseten"]
openGraphImageUrl: "https://opengraph.githubassets.com/173902077764754a86499d58b7d439a08714681a922983b30e4d240b1c9a0f5d/basetenlabs/baseten-cli"
---

# Baseten CLI

CLI for [Baseten](https://baseten.co).

[CLI Reference Docs](https://docs.baseten.co/reference/cli/baseten/overview)

## Installation

### Homebrew (macOS and Linux)

```bash
# Add and trust the tap
brew tap basetenlabs/baseten
brew trust basetenlabs/baseten

# Install the CLI
brew install baseten

# Upgrade to the latest release
brew update
brew upgrade baseten
```

### Prebuilt binaries

Download the [latest release](https://github.com/basetenlabs/baseten-cli/releases/latest) for Windows, macOS, or Linux, extract the archive, and place the `baseten` executable on your `PATH`.

#### Windows (x64)

PowerShell:

    Invoke-WebRequest `
      https://github.com/basetenlabs/baseten-cli/releases/download/v1.6.0/baseten_1.6.0_windows_amd64.zip `
      -OutFile baseten.zip; Expand-Archive -Force baseten.zip .

Then move `baseten.exe` to a directory on your `PATH`.

#### macOS (arm64)

    curl -sL https://github.com/basetenlabs/baseten-cli/releases/download/v1.6.0/baseten_1.6.0_darwin_arm64.tar.gz \
      | sudo tar xz -C /usr/local/bin baseten

#### Linux (x64)

    curl -sL…
