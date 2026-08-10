---
repo: "vfarcic/dot-agent-deck"
name: "dot-agent-deck"
description: "A rich terminal dashboard for monitoring and controlling multiple AI coding agent sessions"
readmeQualityOk: true
url: "https://github.com/vfarcic/dot-agent-deck"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 100
forks: 18
openIssues: 123
closedIssues: 141
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-03-22T01:22:07Z"
lastCommitAt: "2026-08-10T05:06:20Z"
lastReleaseAt: "2026-04-01T10:42:41Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 29
maintainers: ["vfarcic", "prageethw", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5485b0110fd3be8eef0bb53059f605913e6bbb826334f284d72955416a21c2a8/vfarcic/dot-agent-deck"
---

# dot-agent-deck

A terminal dashboard for monitoring and controlling multiple AI coding agent sessions — with optional AI-generated ASCII art for idle sessions.

## Quick Start

```bash
brew tap vfarcic/tap && brew install dot-agent-deck
dot-agent-deck hooks install
dot-agent-deck
```

With Nix, run it without installing anything:

```bash
nix run github:vfarcic/dot-agent-deck
```

Or add it to a flake, for home-manager and NixOS users:

```nix
inputs.dot-agent-deck.url = "github:vfarcic/dot-agent-deck";
```

## Documentation

For installation guides, configuration, keyboard shortcuts, and more, visit the documentation site:

**[Agent Deck](https://agent-deck.devopstoolkit.ai)**

## License

[MIT](https://github.com/vfarcic/dot-agent-deck/blob/HEAD/LICENSE)
