---
repo: "Ryu0118/my-swift-linter"
name: "my-swift-linter"
description: "😎 General-purpose Swift lint rules built on swift-ast-lint"
readmeQualityOk: true
url: "https://github.com/Ryu0118/my-swift-linter"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-26T04:34:59Z"
lastCommitAt: "2026-09-20T08:45:28Z"
lastReleaseAt: "2026-05-02T02:55:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["Ryu0118", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12628c409258d156511fc87d1a2de42e870388b32e488e5d7208f22e921adb09/Ryu0118/my-swift-linter"
---

# my-swift-linter

A collection of general-purpose Swift lint rules built on [swift-ast-lint](https://github.com/Ryu0118/swift-ast-lint).

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/Ryu0118/my-swift-linter/main/install.sh | bash
```

### Nest ([mtj0928/nest](https://github.com/mtj0928/nest))

```bash
nest install Ryu0118/my-swift-linter
```

### Mise ([jdx/mise](https://github.com/jdx/mise))

```bash
mise use -g github:Ryu0118/my-swift-linter
```

### Agent skills / plugins

These commands install the agent skill/plugin metadata, not the `my-swift-linter`
binary. Install the binary separately with `curl`, Nest, mise, or from source.

#### Claude Code

```sh
/plugin marketplace add Ryu0118/my-swift-linter
/plugin install my-swift-linter@my-swift-linter
```

#### Codex

Add the marketplace, then install the plugin:

```sh
codex plugin marketplace add Ryu0118/my-swift-linter
codex plugin add my-swift-linter@my-swift-linter
```

To develop against a local clone instead, point the marketplace at the checkout:

```sh
git clone https://github.com/Ryu0118/my-swift-linter
codex plugin marketplace add ./my-swift-linter
codex plugin add…
