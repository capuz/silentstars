---
repo: "chenrui333/homebrew-tap"
name: "homebrew-tap"
description: "Expand homebrew-core/homebrew-cask"
readmeQualityOk: true
url: "https://github.com/chenrui333/homebrew-tap"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["formulae", "homebrew", "tap", "cli", "tui", "hacktoberfest"]
stars: 11
forks: 4
openIssues: 85
closedIssues: 25
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2022-05-21T21:29:08Z"
lastCommitAt: "2026-11-09T12:00:00Z"
lastReleaseAt: "2025-03-02T17:55:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 65
maintainers: ["chenrui333", "BrewTestBot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e18e503704acf75db574d40245492ce942d29dcef5cea6fdc3871b122d30c16b/chenrui333/homebrew-tap"
---

# homebrew-tap

This tap is setup for several reasons:

- Formulae cannot be included into core for license (`BSL` for example), notability or stable release reasons
- The tap is also well suited to test the upstream patches, as it is using same formula build/test process as homebrew-core.
- Better alias support

## Contributing

Issues and PRs are welcome! Whether you’ve found a bug, have a feature request, or want to contribute code, please feel free to open an issue or submit a pull request. Your contributions help improve this tap for everyone.

Cask maintenance PRs change one cask. Token-only renames add one `cask_renames.json`
entry; Core migrations remove one cask and add one `tap_migrations.json` entry,
without redirecting an existing formula or alias. Both require current-head
`cask-route-verification` for native old-name/upstream checks. Renames require full
cask CI, not `CI-syntax-only`.

## Installation

```bash
# tap the repo
brew tap chenrui333/tap

# formula
brew install <tool>

# cask
brew install --cask <tool>
```

## package list

### Formulae

- `a2a-handler`
- `abc`
- `abtop`
- `act3`
- `actionbook`
- `adbtuifm`
- `adsb-tui`
- `agent-deck`
- `agent-pd`
-…
