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
openIssues: 18
closedIssues: 73
watchers: 4
contributors: 245
recentReleases: 0
createdAt: "2022-11-04T17:04:20Z"
lastCommitAt: "2026-08-30T09:24:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["github-actions[bot]", "nextcloud-command", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89041f55f5a7b354a67dfdadd64190becdc7eac2437c04624163e43c942d9c5/nextcloud/openapi-extractor"
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
