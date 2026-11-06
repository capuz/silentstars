---
repo: "wodby/nginx"
name: "nginx"
description: "Nginx docker container image"
readmeQualityOk: true
url: "https://github.com/wodby/nginx"
homepage: "https://wodby.com/services/nginx"
language: "Go Template"
languages: ["Go Template", "Shell"]
languagePcts: [62, 28]
topics: ["nginx", "docker", "alpine"]
stars: 77
forks: 56
openIssues: 20
closedIssues: 54
watchers: 6
contributors: 15
recentReleases: 10
createdAt: "2017-01-19T09:08:03Z"
lastCommitAt: "2026-11-06T02:44:06Z"
lastReleaseAt: "2026-10-20T03:14:16Z"
status: "thriving"
tags: ["legacy_hero", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 61
maintainers: ["wodbot", "csandanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f4cd9296698df964b1c41c6d8fa46c415b8c733f8bef39ef3293b720626010a/wodby/nginx"
---

# Nginx Docker Container Images

- [Docker images](#docker-images)
- [Environment variables](#environment-variables)
- [Build arguments](#build-arguments)
- [Nginx modules](#nginx-modules)
- [Default behaviour](#default-behavior)
- [Customization](#customization)
- [Virtual hosts presets](#virtual-hosts-presets)
    - [HTML](#html)
    - [HTTP proxy (application server)](#http-proxy-application-server)
    - [Django](#django)
    - [PHP-based (FastCGI)](#PHP-based-fastcgi)
        - [PHP](#php)
        - [Laravel](#laravel)
        - [WordPress](#wordpress)
        - [Drupal](#drupal)
        - [Matomo](#matomo)
    - [Custom preset](#custom-preset)
    - [No preset](#no-preset)
- [Orchestration actions](#orchestration-actions)

## Docker Images

Use image revision tags such as `wodby/nginx:1.31-rN` to select a Wodby image revision.
Major and minor tags use the repository release number, starting at `r0`. Full-version tags such as
`wodby/nginx:1.31.6-r0` start at `r0` for each exact upstream version.
Every published versioned revision tag has a matching annotated Git tag pointing to its release commit.
Existing tags remain available after support for their major or minor version…
