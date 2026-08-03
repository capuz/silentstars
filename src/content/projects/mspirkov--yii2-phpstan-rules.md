---
repo: "mspirkov/yii2-phpstan-rules"
name: "yii2-phpstan-rules"
description: "A set of PHPStan rules for Yii2 projects."
readmeQualityOk: true
url: "https://github.com/mspirkov/yii2-phpstan-rules"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "php7", "php8", "phpstan-extension", "yii", "yii2", "yii2-extension", "static-analysis"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T12:00:12Z"
lastCommitAt: "2026-08-03T06:45:39Z"
lastReleaseAt: "2026-07-16T15:41:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["mspirkov", "staabm"]
openGraphImageUrl: "https://opengraph.githubassets.com/386fe10f745fa8ca1a123921575482d618e611fa9ac31bd4966d8f7dd5c4d014/mspirkov/yii2-phpstan-rules"
discussionCount: 0
---

</a>
    <h1 align="center">Yii2 PHPStan rules</h1>
</p>

A set of PHPStan rules for Yii2 projects that I put together for my own day-to-day work. Yii2 leans heavily on loosely-typed config arrays and magic properties/methods that PHPStan can't see through on its own, and on conventions — like keeping business logic and database access out of controllers and views — that are easy to drift from without anyone noticing. These rules catch both: they validate Yii2-specific config and structure statically, and they enforce the architectural boundaries and other code-quality checks I try to keep in a codebase. In my experience they help keep a Yii2 codebase a bit cleaner and more maintainable, but they're just my opinions turned into checks, not a universal standard — use what's useful, ignore or disable the rest.

## Support

If you like this project, give it a ⭐ on [GitHub](https://github.com/mspirkov/yii2-phpstan-rules) — it helps others
discover it.

## Installation

> [!IMPORTANT]
>
> It works better with the latest versions of [PHP](https://www.php.net), [Yii2](https://www.yiiframework.com),
> and [PHPStan](https://phpstan.org). The more up-to-date the versions are, the more…
