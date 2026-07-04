---
repo: "kovyrin/agent-secret"
name: "agent-secret"
description: "A simple MacOS helper for safer exposure of secrets to your agents"
url: "https://github.com/kovyrin/agent-secret"
homepage: "https://agent-secret.sh/"
language: "Go"
languages: ["Go"]
languagePcts: [72]
topics: ["1password-integration", "agents", "secrets", "secrets-management", "macos"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 137
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-28T20:56:30Z"
lastCommitAt: "2026-07-04T19:20:31Z"
lastReleaseAt: "2026-05-11T12:32:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["kovyrin"]
openGraphImageUrl: "https://opengraph.githubassets.com/76ffbca6d887be7fee0bf01d16fd1621e945528ecae8ff5376c19439943d51af/kovyrin/agent-secret"
---

# Agent Secret

Agent Secret is a local macOS approval broker for coding-agent secrets. It lets
an agent request exact secret references, shows you a native approval
prompt with the command and reason, then injects approved values only into that
child process.

Website: <https://agent-secret.sh>

## Install

Requirements:

- macOS on Apple Silicon.
- At least one supported secret provider:
  - 1Password desktop app signed in, unlocked, and with Developer Tools
    integration enabled.
  - Bitwarden Secrets Manager with the official Bitwarden-signed `bws` CLI
    installed at `/opt/homebrew/bin/bws` or `/usr/local/bin/bws`, plus a local
    access token alias stored with Agent Secret.

Install the latest signed and notarized release with Homebrew:

```bash
brew tap kovyrin/agent-secret https://github.com/kovyrin/agent-secret
brew install --cask agent-secret
agent-secret skill-install
agent-secret doctor
```

Upgrade later with:

```bash
brew update
brew upgrade --cask agent-secret
```

The Homebrew cask installs `Agent Secret.app` into `/Applications` and links the
bundled `agent-secret` command into Homebrew's `bin` directory. `skill-install`
adds or repairs the bundled Codex…
