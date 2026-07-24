---
repo: "owncloud-docker/php"
name: "php"
description: "Base image for a general PHP stack"
readmeQualityOk: true
url: "https://github.com/owncloud-docker/php"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker", "php", "apache", "base"]
stars: 5
forks: 7
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2018-09-25T07:12:38Z"
lastCommitAt: "2026-07-24T06:09:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 87
maintainers: ["renovate[bot]", "DeepDiver1975"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d116dfd08345adccac9f539edd9b491d3f4280059243b2825e2376e15f5d31c/owncloud-docker/php"
---

# ownCloud: PHP

ownCloud Docker PHP and webserver base image.

## Quick reference

- **Where to file issues:**\
  [owncloud-docker/php](https://github.com/owncloud-docker/php/issues)

- **Supported architectures:**\
  `amd64`, `arm64v8`

- **Inherited environments:**\
  [owncloud/ubuntu](https://github.com/owncloud-docker/ubuntu#environment-variables)

- **Build & maintenance:**\
  [How these images are built, scanned, updated and published](https://github.com/owncloud-docker/.github/blob/master/docs/IMAGE-LIFECYCLE.md)

## Docker Tags and respective Dockerfile links

- [`24.04`](https://github.com/owncloud-docker/php/blob/master/v24.04/Dockerfile.multiarch) available as `owncloud/php:24.04`
- [`22.04`](https://github.com/owncloud-docker/php/blob/master/v22.04/Dockerfile.multiarch) available as `owncloud/php:22.04`

## Default volumes

None

## Exposed ports

- 8080

## Environment variables

```Shell
HOME /var/www/html
LANG C
APACHE_RUN_USER www-data
APACHE_RUN_GROUP www-data
APACHE_RUN_DIR /var/run/apache2
APACHE_PID_FILE ${APACHE_RUN_DIR}/apache2.pid
APACHE_LOCK_DIR /var/lock/apache2
APACHE_ERROR_LOG /dev/stderr
APACHE_ACCESS_LOG /dev/stdout
APACHE_LOG_FORMAT combined…
