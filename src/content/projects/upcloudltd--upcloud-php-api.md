---
repo: "UpCloudLtd/upcloud-php-api"
name: "upcloud-php-api"
description: "PHP client for UpCloud's API"
readmeQualityOk: true
url: "https://github.com/UpCloudLtd/upcloud-php-api"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["api", "php", "upcloud", "api-client", "packagist"]
stars: 23
forks: 17
openIssues: 2
closedIssues: 25
watchers: 13
contributors: 22
recentReleases: 3
createdAt: "2017-08-15T09:58:21Z"
lastCommitAt: "2026-11-18T12:04:36Z"
lastReleaseAt: "2026-11-05T10:58:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["paketeserrano", "github-actions[bot]", "uc-shared"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc96a40a6320ee525de036313dbf8418504679cf17654a36fb15a5ba176775b5/UpCloudLtd/upcloud-php-api"
---

# UpCloud PHP SDK

The **UpCloud PHP SDK** provides a convenient, strongly-typed way to interact with the **UpCloud API** from PHP applications.

It is automatically generated from UpCloud’s official OpenAPI specification and kept up to date through an automated release process, ensuring alignment with the latest publicly released API versions.

---

## ✨ Features

- Official UpCloud SDK for PHP
- Generated from the public OpenAPI specification
- Fully typed API client
- Automatically updated as the API evolves
- Versioned releases matching API changes
- Open-source and MIT licensed

---

## 📦 Installation

# UpCloud PHP SDK

The UpCloud PHP SDK is a typed PHP client for the UpCloud API. Its clients and
API reference are generated from UpCloud's public OpenAPI specification.

## Requirements

- PHP `^8.1`
- Composer

Composer installs the SDK's HTTP and JSON dependencies automatically.

## Installation

```sh
composer require upcloudltd/upcloud-php-api
```

## Authentication

Create an API token for your UpCloud account and provide it to the client. Keep
the token outside source control; the example reads it from an environment
variable.
