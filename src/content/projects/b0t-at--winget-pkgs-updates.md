---
repo: "b0t-at/winget-pkgs-updates"
name: "winget-pkgs-updates"
description: "keeps software in winget up to date"
readmeQualityOk: true
url: "https://github.com/b0t-at/winget-pkgs-updates"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-01-15T10:41:47Z"
lastCommitAt: "2026-11-03T12:47:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 85
maintainers: ["github-actions[bot]", "Utesgui", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9794a69f821f19262e7dea2d76de3d1ba9eaa448bac25807902853ca414b880/b0t-at/winget-pkgs-updates"
---

# winget-pkgs-updates
**PR repo:** [winget-pkgs](https://github.com/microsoft/winget-pkgs.git)
**Fork repo:** [damn-good-b0t/winget-pkgs](https://github.com/damn-good-b0t/winget-pkgs)

### Pull requests:
- [**all open PRs**](https://github.com/microsoft/winget-pkgs/pulls/damn-good-b0t)
- [**need attention**](https://github.com/microsoft/winget-pkgs/pulls?q=is%3Aopen+is%3Apr+author%3Adamn-good-b0t)

| Package Version Handling| Count|
|----------------------------|---------------------------------------------------------------|
| Script based     |  |
| GitHub Release based     |  |

## Package-specific WinMatsch overrides

Keep safety questions enabled by default. When a package has reviewed, stable
exceptions, add a WinMatsch override-pack YAML file to the repository and set
its matrix entry's `overridePack` field to that repository-relative path:

```yaml
- id: Publisher.App
  repo: publisher/app
  url: https://github.com/publisher/app/releases/download/v{VERSION}/setup.exe
  overridePack: overrides/Publisher.App.yaml
```

The single-package workflow exposes the same path as `overridePack`. The wrapper
rejects missing files and rejects override packs with Komac or WinGetCreate,…
