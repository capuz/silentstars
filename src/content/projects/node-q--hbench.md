---
repo: "node-q/hbench"
name: "hbench"
description: "Benchmark runner for coding-agent harnesses, the engine behind Harness Playground"
readmeQualityOk: true
url: "https://github.com/node-q/hbench"
homepage: "https://nodeq.tech"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 17
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-19T13:42:40Z"
lastCommitAt: "2026-11-17T14:35:11Z"
lastReleaseAt: "2026-10-23T14:06:28Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 43
maintainers: ["luiyen", "rzonyx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac0846465671972b3fcb9b6b844fdae54dd8727ed09ac9cb0bd98ae85a3e2fc5/node-q/hbench"
---

```text
▝▜█▄▗▟█▀ ▗▟█  ██╗  ██╗██████╗ ███████╗███╗   ██╗ ██████╗██╗  ██╗
▙▖▝▜█▀ ▗▟█▀   ██║  ██║██╔══██╗██╔════╝████╗  ██║██╔════╝██║  ██║
▀█▙▖ ▗▟██▙    ███████║██████╔╝█████╗  ██╔██╗ ██║██║     ███████║
  ▀███▀ ▝▜█▄  ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║██║     ██╔══██║
 ▗▟█▀ ▄█▙▖▝▜  ██║  ██║██████╔╝███████╗██║ ╚████║╚██████╗██║  ██║
▟█▀ ▄█▛▘▀█▙▖  ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝
```

# hbench

hbench is the benchmark engine behind [Harness Playground](https://nodeq.tech), by node-q.

Run coding agents (Claude Code, Codex, Gemini CLI and more) on benchmark tasks, and see how many they solve.

- [Installation](#installation)
- [Quick start](#quick-start)
- [Docs](#docs)
- [Usage](#usage)
- [Agents](#agents)
- [License](#license)
- [Contributors and contact](#contributors-and-contact)

## Installation

You need Docker, on Linux, macOS or Windows.

```bash
curl -fsSL https://github.com/node-q/hbench/releases/latest/download/install.sh | sh
```

Later, `hbench update` installs the newest release.

On Windows (experimental), download `hbench-<version>-x86_64-pc-windows-msvc.zip` from the
[latest release](https://github.com/node-q/hbench/releases/latest) and put…
