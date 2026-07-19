---
repo: "eliashaeussler/version-bumper"
name: "version-bumper"
description: "🗣️ Composer plugin to bump project versions during release preparations"
readmeQualityOk: true
url: "https://github.com/eliashaeussler/version-bumper"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["bump", "composer-plugin", "release", "semver", "version"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-09-22T15:33:44Z"
lastCommitAt: "2026-07-19T00:57:26Z"
lastReleaseAt: "2025-01-14T16:01:44Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 74
maintainers: ["renovate[bot]", "eliashaeussler", "konradmichalik"]
openGraphImageUrl: "https://opengraph.githubassets.com/9316605c57ce10854741d4b7e6a7d11c766a436604db40d13b7ede0f107ca36a/eliashaeussler/version-bumper"
fundingLinks: ["GITHUB:https://github.com/eliashaeussler", "CUSTOM:https://paypal.me/eliashaeussler"]
---

# Version Bumper

</div>

A Composer plugin to bump project versions during release preparations.
Provides a Composer command `bump-version` and offers an easy-to-use PHP
API for integration in other frameworks.

## 🔥 Installation

```bash
composer require --dev eliashaeussler/version-bumper
```

## ⚡ Quickstart

Add a `version-bumper.yaml` config file:

```yaml
# version-bumper.yaml

presets:
  - composer-package

releaseOptions:
  commitMessage: '[RELEASE] Release of my-fancy-library {%version%}'
```

Bump next major/minor/patch version:

```bash
composer bump-version [major|minor|patch] --release
```

## 📝 Documentation

* Usage
  - [Console command](https://github.com/eliashaeussler/version-bumper/blob/HEAD/docs/cli.md)
  - [PHP API](https://github.com/eliashaeussler/version-bumper/blob/HEAD/docs/api.md)
  - [Version range](https://github.com/eliashaeussler/version-bumper/blob/HEAD/docs/version-range.md)
* Configuration
  - [Config file](https://github.com/eliashaeussler/version-bumper/blob/HEAD/docs/config-file.md)
  - [Presets](https://github.com/eliashaeussler/version-bumper/blob/HEAD/docs/presets.md)
  -…
