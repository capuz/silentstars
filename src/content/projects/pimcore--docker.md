---
repo: "pimcore/docker"
name: "docker"
description: "PHP docker images optimized for running Pimcore"
readmeQualityOk: true
url: "https://github.com/pimcore/docker"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [84]
topics: ["docker", "docker-image", "pimcore"]
stars: 85
forks: 52
openIssues: 6
closedIssues: 73
watchers: 17
contributors: 47
recentReleases: 0
createdAt: "2019-12-09T10:28:44Z"
lastCommitAt: "2026-07-21T06:11:34Z"
lastReleaseAt: "2024-08-28T06:41:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["bluvulture", "berfinyuksel", "astapc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/226845032/f4931a80-7e31-11ea-8343-d2cae1e64298"
---

# Pimcore PHP Docker Image

This is are customized PHP Docker images specifically optimized for running [Pimcore](https://github.com/pimcore/pimcore).
It doesn't include the Pimcore software itself, it just provides an environment that fulfills all system requirements
of Pimcore, so that you can leverage the full functionality.

You can either use this image directly by mounting Pimcore into the container, or as a template for your customized 
ready-to-deploy images.   

## Usage  
As a starting point please see [example docker-compose configuration](https://github.com/pimcore/skeleton/blob/HEAD/docker-compose.yaml).

## Image flavors
We're providing different image flavors: 
- [`min`] PHP image for FPM and CLI with minimum requirements (e.g. `php8.2-min-latest`)
- [`default`] PHP image for FPM and CLI incl. all optional dependencies (e.g. `php8.2-latest` or `php8.2-default-latest`)
- [`max`] PHP image for FPM and CLI incl. all optional dependencies and additional extensions and software (e.g. `php8.2-max-latest`)
- [`debug`] PHP debug image based on the `default` flavor, including preconfigured Xdebug for FPM and CLI (e.g.  `php8.2-debug-latest`)
- [`supervisord`] Supervisord…
