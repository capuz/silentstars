---
repo: "SomeoneWithOptions/n8n-cli"
name: "n8n-cli"
description: "Command-line tools for working with n8n"
readmeQualityOk: true
url: "https://github.com/SomeoneWithOptions/n8n-cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-09-17T13:09:01Z"
lastCommitAt: "2026-10-21T17:31:44Z"
lastReleaseAt: "2026-09-30T01:12:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["SomeoneWithOptions"]
openGraphImageUrl: "https://opengraph.githubassets.com/8775e7c776ee4c0befdc6961b5c28d2b518374f11cd334c57e260e94bdd75701/SomeoneWithOptions/n8n-cli"
---

# n8n CLI

Command-line client for the n8n public API.

## Install

macOS and Linux, into `~/.local/bin`:

```sh
curl -fsSL https://raw.githubusercontent.com/SomeoneWithOptions/n8n-cli/main/install.sh | sh
```

Windows (PowerShell), into `%LOCALAPPDATA%\n8n-cli\bin`:

```powershell
irm https://raw.githubusercontent.com/SomeoneWithOptions/n8n-cli/main/install.ps1 | iex
```

If PowerShell blocks the pipe, bypass the policy for that one command:

```powershell
powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/SomeoneWithOptions/n8n-cli/main/install.ps1 | iex"
```

Both scripts install the binary and nothing else. Neither creates or edits
contexts or credentials; `n8n auth login` owns that state. The Unix script warns
when the install directory is not on `PATH`; the Windows script appends it to
the user `PATH` and never touches the machine `PATH`.

Environment overrides, same names on both platforms:

| Variable | Effect |
|---|---|
| `N8N_CLI_VERSION` | Install this tag instead of the latest release |
| `N8N_CLI_INSTALL_DIR` | Install into this directory instead of the default |

With a Go toolchain:

```sh
go install…
