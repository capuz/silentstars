---
repo: "phpstan/phpstan-src"
name: "phpstan-src"
description: "PHPStan's source code. This is where development happens. Check https://github.com/phpstan/phpstan for the distribution repository."
readmeQualityOk: true
url: "https://github.com/phpstan/phpstan-src"
homepage: "https://phpstan.org/"
language: "PHP"
languages: ["PHP"]
languagePcts: [97]
stars: 397
forks: 583
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 467
recentReleases: 0
createdAt: "2019-11-03T16:55:20Z"
lastCommitAt: "2026-07-28T14:53:43Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 42
maintainers: ["ondrejmirtes", "staabm", "phpstan-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d2ac4a75768b08260c9737283a180b0c768f726c1d8302121c0bb575a801d93/phpstan/phpstan-src"
---

# PHPStan - PHP Static Analysis Tool

---

This repository (`phpstan/phpstan-src`) is for PHPStan's development only. Head to [`phpstan/phpstan`](https://github.com/phpstan/phpstan) for the main README, or to [create an issue](https://github.com/phpstan/phpstan/issues/new/choose).

## Contributing

Any contributions are welcome.

### Installation

```bash
composer install
```

If you are using macOS and are using an older version of `patch`, you may have problems with patch application failure during `composer install`. Try using `brew install gpatch` to install a newer and supported `patch` version.

### Building

PHPStan's source code is developed on PHP 8.2. For distribution in `phpstan/phpstan` package and as a PHAR file, the source code is transformed to run on PHP 7.2 and higher.

Initially you need to run `composer install` in case you aren't working in a directory which was built before.

Afterward you can run the whole build including linting and coding standards:

```bash
make
```

### Running development version

You can also choose to run only part of the build. To analyse PHPStan by PHPStan itself, run:

```bash
make phpstan
```

### Fixing code style

To detect code…
