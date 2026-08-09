---
repo: "nextcloud/openapi-extractor"
name: "openapi-extractor"
description: "A tool for extracting OpenAPI specifications from Nextcloud source code"
readmeQualityOk: true
url: "https://github.com/nextcloud/openapi-extractor"
homepage: "https://docs.nextcloud.com/server/latest/developer_manual/client_apis/OCS/ocs-openapi.html"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["nextcloud", "openapi", "php"]
stars: 11
forks: 4
openIssues: 17
closedIssues: 73
watchers: 4
contributors: 244
recentReleases: 0
createdAt: "2022-11-04T17:04:20Z"
lastCommitAt: "2026-08-09T04:46:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["github-actions[bot]", "nextcloud-command", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02ae13fbd265b9fab95c8741dee64a3ae0c4c4e87814b5cf87e07aef57a802ab/nextcloud/openapi-extractor"
---

# openapi-extractor

## Installation

```sh
composer require --dev nextcloud/openapi-extractor
```

To avoid dependency and PHP version conflicts it is best to install the package to vendor-bin using https://github.com/bamarni/composer-bin-plugin instead.

## Create a CI workflow to check the specifications are up-to-date

The Workflow template repository has a template available: https://github.com/nextcloud/.github/blob/master/workflow-templates/openapi.yml

Afterward in your repository settings set the OpenAPI workflow to be required for merging pull requests.

## Usage

Checkout the OpenAPI tutorial at https://docs.nextcloud.com/server/latest/developer_manual/client_apis/OCS/ocs-openapi.html to see how you can use openapi-extractor.

### 🐢 Performance

Make sure that you have xdebug turned off when generating OpenAPI specs, otherwise it can take multiple minutes instead of seconds.
