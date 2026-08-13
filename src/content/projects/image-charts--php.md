---
repo: "image-charts/php"
name: "php"
description: "⚡️Official Image-charts PHP library"
readmeQualityOk: true
url: "https://github.com/image-charts/php"
homepage: "https://www.image-charts.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php-charts", "php-charting-library", "chart-api", "api-chart", "chart-image", "chart-library", "image-charts"]
stars: 28
forks: 6
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-05-09T14:23:45Z"
lastCommitAt: "2026-08-13T05:18:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["FGRibreau"]
openGraphImageUrl: "https://opengraph.githubassets.com/06a56cd8639a4f3e7307a9d784b3c261c6dbdc73e94c3b96849d9dd5ca58488c/image-charts/php"
---

Official [Image Charts](https://image-charts.com/) API client.
Generate URLs of static image charts.
Embed them everywhere in emails, pdf reports, chat bots...!

### Getting started

#### 1. Install Image-Charts package with [Composer](https://getcomposer.org/)

```bash
composer require image-charts/image-charts
```

#### 2. Call Image-Charts constructor

```php
<?php
$chart = new \ImageCharts();
```

#### 3. Generate a chart image

```php
<?php

$pie = $chart->cht('p')->chd('a:2.5,5,8.3')->chs('100x100');

$pie->toURL(); // https://image-charts.com/chart?chd=a%3A2.5%2C5%2C8.3&chs=600x300&cht=p
$pie->toFile('/path/to/chart.png'); //
$pie->toDataURI(); // data:image/png;base64,iVBORw0KGgo...
$pie->toBinary(); // {image content}
```

    </a>
</p>

-----------------------------------------------------------------------

### Table of Contents

- __[Enterprise support](#enterprise-support)__
- __[On-Premise support](#on-premise-support)__
- __[Constructor](#constructor)__
    - __[Options](#options)__
- __[Methods](#methods)__
    - __[toURL()](#tourl)__
    - __[toFile()](#tofile)__
    - __[toBuffer()](#tobuffer)__
    - __[toDataURI()](#todatauri)__
    - __[cht(value) - Chart…
