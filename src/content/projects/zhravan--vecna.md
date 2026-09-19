---
repo: "zhravan/vecna"
name: "vecna"
description: "simplifying ssh mgmt via minimalism"
readmeQualityOk: true
url: "https://github.com/zhravan/vecna"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cobra", "cobra-cli", "golang", "minimalism", "minimalistic", "server", "ssh", "ssh-client", "ssh-keys", "ssh-tui"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T11:31:56Z"
lastCommitAt: "2026-09-19T08:13:43Z"
lastReleaseAt: "2026-03-16T19:44:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 44
maintainers: ["zhravan", "github-actions[bot]", "lunargon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a4c2bdfa0ac555873e9ab2bd83b16e4105968c5339bd503eed0c35c1716cbcc/zhravan/vecna"
---

<samp>

</p>

<h2 align="center">Minimalistic TUI for SSH mgmt</h2>

<br>
<br>
<br>

| | |
|:---:|:---:|
| <img src="assets/screenshot-1.png" alt="Screenshot 1" width="600"/> | <img src="assets/screenshot-2.png" alt="Screenshot 2" width="600"/> |

## Install

**Linux / macOS:**

```bash
curl -fsSL https://raw.githubusercontent.com/zhravan/vecna/main/scripts/install.sh | sh
```

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/zhravan/vecna/main/scripts/install.ps1 | iex
```

- **Go:** `go install github.com/zhravan/vecna@latest`
- **From source:**

```bash
make build
./bin/vecna   # or bin\vecna.exe on Windows
```

  `make install` installs the binary; config is created on first run with default run commands.

**Windows:** Config lives at `%USERPROFILE%\.config\vecna\config.yaml`. File transfer and “Open SFTP in new terminal” work when the [OpenSSH client](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) is installed (default on Windows 10/11).

## Usage

```bash
vecna          # Launch TUI
vecna version  # Print version
```

## Config

**Path:** `~/.config/vecna/config.yaml`

Created on first run with…
