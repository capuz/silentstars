---
repo: "simplesamlphp/simplesamlphp-module-expirycheck"
name: "simplesamlphp-module-expirycheck"
description: "The expirycheck module validates user's expiry date"
url: "https://github.com/simplesamlphp/simplesamlphp-module-expirycheck"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
stars: 5
forks: 3
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2019-05-28T11:47:09Z"
lastCommitAt: "2026-06-29T07:23:57Z"
lastReleaseAt: "2019-12-03T09:18:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 53
maintainers: ["dependabot[bot]", "tvdijen"]
openGraphImageUrl: "https://opengraph.githubassets.com/90e14b144b9fad62b6b9ce21637c4ee903647b68e26c1c744622006d8f550a5a/simplesamlphp/simplesamlphp-module-expirycheck"
---

# SimpleSAMLphp Expiry check module

## Install

Install with composer

```bash
vendor/bin/composer require simplesamlphp/simplesamlphp-module-expirycheck
```

## Configuration

Next thing you need to do is to enable the module:

in `config.php`, search for the `module.enable` key and set `expirycheck` to true:

```php
    'module.enable' => [ 'expirycheck' => true, … ],
```
