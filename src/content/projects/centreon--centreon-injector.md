---
repo: "centreon/centreon-injector"
name: "centreon-injector"
description: "Inject centreon objects directly in database"
readmeQualityOk: true
url: "https://github.com/centreon/centreon-injector"
language: "PHP"
languages: ["PHP", "Python"]
languagePcts: [56, 42]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 10
recentReleases: 0
createdAt: "2020-12-23T14:57:33Z"
lastCommitAt: "2026-09-29T10:04:05Z"
lastReleaseAt: "2024-01-02T10:26:35Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 70
undervaluedScore: 35
maintainers: ["centreon-opentofu[bot]", "opentofu-githook-pipeline[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ebaca75042e51ba892515cec5003a7247c2ad74d5c906b76379c18d9adea5cb/centreon/centreon-injector"
---

# centreon-injector

Inject centreon objects directly in database

## Prerequisites

* git
* php >=8.0
* php-yaml module
* composer
* docker (optional)

> :warning: **If you are not using docker**, you need to clone
centreon-plugins repository on your virtual machine :
> ```
> git clone https://github.com/centreon/centreon-plugins.git
> cp -R centreon-plugins/src/* /usr/lib/centreon/plugins/
> chmod +x /usr/lib/centreon/plugins/centreon_plugins.pl
> ```
> Note that this step is not necessary to inject data in database.

## Dependencies installation

Install PHP dependencies :

```bash
composer install
```

## Configuration

If you want to change the data in the following file `data.yaml`, you
need to create a new file named `data.override.yml` with the same structure
with data changed and pass it as an argument.

If you are not using docker and you want to change the DATABASE_URL, you
can create a `.env.local` file with the following content for example :

```dotenv
DATABASE_URL=mysql://<user>:<password>@<ip_address>:<port>/<database_name>
```

This file will be charged automatically by the command.

## Usage

### Basic usage

Without custom configuration :

```shell
./bin/console…
