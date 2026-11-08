---
repo: "flarum-lang/german"
name: "german"
description: "German Language Pack for Flarum"
readmeQualityOk: true
url: "https://github.com/flarum-lang/german"
homepage: "https://discuss.flarum.org/d/2648"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["flarum", "flarum-extension", "flarum-language-pack"]
stars: 21
forks: 12
openIssues: 1
closedIssues: 15
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2015-11-05T10:29:19Z"
lastCommitAt: "2026-11-08T10:40:55Z"
lastReleaseAt: "2017-03-30T20:32:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 71
maintainers: ["robbot006"]
openGraphImageUrl: "https://opengraph.githubassets.com/0042e7c5324c01dc3fc208ea59f2164ea8e7b3551483aa4903c4fbc117a5d00a/flarum-lang/german"
---

# German Language Pack for [Flarum](https://flarum.org/)

Extension to localize the Flarum forum software and its official and third-party extensions into German. For support, please use the discussion thread on the [Flarum support forum](https://discuss.flarum.org/d/2648-german-language-pack), or use the issue tracker here on GitHub.

- [Installation](#installation)
- [Updating](#updating)
- [Contributing](#contributing)
- [Compatibility](#compatibility)
  - [Core](#core)
  - [Extensions](#extensions)
- [License](#license)

## Installation

Use Composer in the root directory of your forum:

```text
composer require "flarum-lang/german:*"
```

After the installation, you can change the language to formal German through your admin control panel, under this extensions settings menu. Select "Formell" in the language dropdown menu.

See also on [Packagist](https://packagist.org/packages/flarum-lang/german).

## Updating

Execute these commands in the root directory of your forum:

```text
composer update flarum-lang/german
php flarum cache:clear
```

## Contributing

All translations are managed on this [Weblate instance](https://weblate.rob006.net/engage/flarum2/de/), no coding…
