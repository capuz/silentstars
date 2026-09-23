---
repo: "phpstan/turbo-ext"
name: "turbo-ext"
description: "[READ ONLY] Split of turbo-ext directory from phpstan-src repository. phpstan_turbo is a native acceleration extension for PHPStan."
readmeQualityOk: true
url: "https://github.com/phpstan/turbo-ext"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 32
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 9
createdAt: "2026-07-13T21:16:25Z"
lastCommitAt: "2026-09-23T08:45:52Z"
lastReleaseAt: "2026-09-12T21:40:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["ondrejmirtes"]
openGraphImageUrl: "https://opengraph.githubassets.com/061933f3e15d48776a7a385df78611257ba9dfa9305434261cdf44e8adf468c8/phpstan/turbo-ext"
---

# phpstan_turbo — native acceleration extension for PHPStan

Native PHP extension that reimplements PHPStan's hottest
code paths in C++. It is entirely optional: PHPStan behaves identically
without it, just slower. With the extension loaded, analysis output is
bit-for-bit identical — only faster (~25% on PHPStan's own single-threaded
self-analysis).

## Installation

**Most users do not need to install anything.** The
[phpstan/phpstan](https://github.com/phpstan/phpstan) Composer package ships
prebuilt binaries for the most common platforms — Linux (glibc and musl,
x86_64 and arm64), macOS (arm64), and Windows (x86_64), for PHP 8.3 and newer — and
PHPStan automatically loads the one matching your runtime into its worker
processes.

Installing the extension with [PIE](https://github.com/php/pie) is only
needed when you download and run `phpstan.phar` manually, outside of
Composer (the prebuilt binaries ship next to the phar in the Composer
package, not inside it):

```bash
pie install phpstan/turbo
```

Useful to know:

- `vendor/bin/phpstan diagnose` reports the extension's status.
- There is no switch to turn it off — an installed, matching extension is
  always used.
- The…
