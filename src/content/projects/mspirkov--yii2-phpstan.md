---
repo: "mspirkov/yii2-phpstan"
name: "yii2-phpstan"
description: "A set of PHPStan rules and extensions for Yii2 projects."
readmeQualityOk: true
url: "https://github.com/mspirkov/yii2-phpstan"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "php7", "php8", "phpstan-extension", "yii", "yii2", "yii2-extension", "static-analysis"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-04T12:00:12Z"
lastCommitAt: "2026-10-25T08:40:42Z"
lastReleaseAt: "2026-07-16T15:41:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 38
maintainers: ["mspirkov", "staabm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1289163290/209d9a8e-450c-4809-8e6d-10908861aa4f"
discussionCount: 0
---

[PHPStan](https://phpstan.org) rules and type extensions for [Yii2](https://github.com/yiisoft/yii2). The rules check the config arrays and names that Yii2 only resolves at runtime, and keep business logic and database access out of controllers and views. The type extensions resolve types that Yii only knows at runtime, such as the class behind a DI container ID or the methods of an attached behavior. The rules are my own conventions, not a standard: use what's useful and disable the rest.

## Support

If you like this project, give it a ⭐ on [GitHub](https://github.com/mspirkov/yii2-phpstan) — it helps others
discover it.

## Installation

> [!IMPORTANT]
>
> The newer your [PHP](https://www.php.net), [Yii2](https://www.yiiframework.com) and [PHPStan](https://phpstan.org), the more accurate the analysis.

```bash
php composer.phar require --dev mspirkov/yii2-phpstan
```

With [`phpstan/extension-installer`](https://github.com/phpstan/extension-installer), the package is enabled automatically. Otherwise, include it in `phpstan.neon`:

```neon
includes:
    - vendor/mspirkov/yii2-phpstan/extension.neon
```

### Upgrading

See…
