---
repo: "yiisoft/yii-bulma"
name: "yii-bulma"
description: "Yii Framework Bulma Integration"
readmeQualityOk: true
url: "https://github.com/yiisoft/yii-bulma"
homepage: "https://www.yiiframework.com/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["yii3", "bulma", "hacktoberfest"]
stars: 25
forks: 7
openIssues: 1
closedIssues: 8
watchers: 13
contributors: 22
recentReleases: 0
createdAt: "2020-06-23T14:23:04Z"
lastCommitAt: "2026-07-15T05:52:55Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 45
maintainers: ["vjik", "dependabot[bot]", "samdark"]
openGraphImageUrl: "https://opengraph.githubassets.com/54bc742c15e30bd00b8c04278b8235982ec6d419cbb2f874e1872c840136d318/yiisoft/yii-bulma"
fundingLinks: ["GITHUB:https://github.com/yiisoft", "OPEN_COLLECTIVE:https://opencollective.com/yiisoft"]
---

</a>
    </a>
    <h1 align="center">Yii Framework Bulma Integration</h1>
    <br>
</p>

This [Yii Framework](https://www.yiiframework.com/) package encapsulates [Bulma](https://bulma.io) components
and plugins in terms of Yii widgets, and thus makes using Bulma components/plugins in Yii applications convenient.

## Requirements

- PHP 8.1 - 8.5.

## Installation

The package could be installed with [Composer](https://getcomposer.org):

```shell
composer require yiisoft/yii-bulma
```

## Install assets

There are several ways to install the assets, they are:

1. Using the [AssetPackagist](https://asset-packagist.org/) package manager.

Add to composer.json file the following:

```json
{
    "require": {
        "npm-asset/bulma": "^0.9.3",
        "npm-asset/bulma-helpers": "^0.4.2",
        "npm-asset/vizuaalog--bulmajs": "^0.12.1",
        "oomphinc/composer-installers-extender": "^2.0.0",
    },
    "extra": {
        "installer-types": [
            "npm-asset"
        ],
        "installer-paths": {
            "./node_modules/{$name}": [
                "type:npm-asset"
            ]
        }
    },
    "repositories": [
        {
            "type": "composer",…
