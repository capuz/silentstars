---
repo: "caic-xyz/md"
name: "md"
description: "My Development container"
readmeQualityOk: true
url: "https://github.com/caic-xyz/md"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-25T13:53:41Z"
lastCommitAt: "2026-07-04T22:50:32Z"
lastReleaseAt: "2026-02-08T00:54:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["maruel"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa2544387554d9b7ee3634f7a4dce6dec75d988874c6bd8fbe98b8d905db1c9/caic-xyz/md"
---

# md: My Development containers

Each container is locked to a repository-branch pair. No confusion. Safe parallel work.

**Safe parallel work with multiple AI coding agents.** Run Claude Code, Codex,
Amp CLI, Gemini CLI, Kilo CLI, Pi, and other tools in isolated containers
without branch conflicts, file interference, or environmental headaches.

## Installation

```bash
curl caic.xyz/install.sh | bash
```

### From source

```bash
go install github.com/caic-xyz/md/cmd/md@latest
```

**Recommended:** Also install [git-maruel](https://github.com/maruel/git-maruel) for the `git squash` and `git rb` helpers.

## Quick Start

```bash
# Start container for your current branch; this automatically ssh in.
git checkout -b wip origin/main
md start

# You are now inside the container
cd ~/src/<repo-name>
claude
exit

# Check pending changes
md diff

# Pull changes back when done
md pull
```

## Documentation

🔥 Full documentation is at [docs.caic.xyz](https://docs.caic.xyz/md/) 🔥

## Contributing

Made with ❤️  by [Marc-Antoine Ruel](https://maruel.ca). Contributions are very appreciated! Thanks in advance! 🙏
