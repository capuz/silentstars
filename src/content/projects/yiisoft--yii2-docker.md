---
repo: "yiisoft/yii2-docker"
name: "yii2-docker"
description: "Official Docker images suitable for Yii 2.0"
readmeQualityOk: true
url: "https://github.com/yiisoft/yii2-docker"
homepage: "https://www.yiiframework.com/"
language: "PHP"
languages: ["PHP"]
languagePcts: [82]
topics: ["yii", "php", "docker-image", "yii2", "hacktoberfest"]
stars: 400
forks: 197
openIssues: 8
closedIssues: 106
watchers: 37
contributors: 37
recentReleases: 0
createdAt: "2017-03-08T11:14:09Z"
lastCommitAt: "2026-10-21T20:01:15Z"
lastReleaseAt: "2023-04-13T09:38:20Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 32
maintainers: ["schmunk42", "eluhr", "marcovtwout"]
openGraphImageUrl: "https://opengraph.githubassets.com/6db44875186e1c508827340684016024502fc10ea587b0b5ea9631e80d304c13/yiisoft/yii2-docker"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/yiisoft"]
---

This is the repo of the official [Yii 2.0 Framework](http://www.yiiframework.com/) image on [DockerHub](https://hub.docker.com/r/yiisoftware/yii2-php/) for PHP.

## About

These Docker images are built on top of the official PHP Docker image, they contain additional PHP extensions required to run Yii 2.0 framework, but no code of the framework itself.
The `Dockerfile`(s) of this repository are designed to build from different PHP-versions by using *build arguments*.

### Available versions for `yiisoftware/yii2-php`

The following images are built on a *weekly* basis for **arm64** and **amd64**. For regular commits on **master** we only build images for **amd64** suffixed with `-latest`/`-latest-min`.

Minimal images

```
8.5-apache-min, 8.5-fpm-min, 8.5-fpm-nginx-min
8.4-apache-min, 8.4-fpm-min, 8.4-fpm-nginx-min
8.3-apache-min, 8.3-fpm-min, 8.3-fpm-nginx-min
8.2-apache-min, 8.2-fpm-min, 8.2-fpm-nginx-min
8.1-apache-min, 8.1-fpm-min, 8.1-fpm-nginx-min
```

Development images

```
8.5-apache, 8.5-fpm, 8.5-fpm-nginx
8.4-apache, 8.4-fpm, 8.4-fpm-nginx
8.3-apache, 8.3-fpm, 8.3-fpm-nginx
8.2-apache, 8.2-fpm, 8.2-fpm-nginx
8.1-apache, 8.1-fpm, 8.1-fpm-nginx
```

> **Warning:** PHP 8.1…
