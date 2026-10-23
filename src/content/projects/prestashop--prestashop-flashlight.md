---
repo: "PrestaShop/prestashop-flashlight"
name: "prestashop-flashlight"
description: "A docker based testing utility for PrestaShop"
readmeQualityOk: true
url: "https://github.com/PrestaShop/prestashop-flashlight"
homepage: "https://hub.docker.com/r/prestashop/prestashop-flashlight"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
topics: ["arm64", "docker", "prestashop", "testing", "hacktoberfest", "flashlight", "performance"]
stars: 40
forks: 21
openIssues: 14
closedIssues: 38
watchers: 11
contributors: 26
recentReleases: 0
createdAt: "2023-08-22T13:40:00Z"
lastCommitAt: "2026-10-23T08:46:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 82
undervaluedScore: 51
maintainers: ["Alexandre-Lematre", "gaelreyrol", "PrestaEdit"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/681661053/9086898e-0e99-45d9-ba80-7814e1a6537f"
---

Spin up a PrestaShop testing instance in seconds!

PrestaShop Flashlight is fast: the PrestaShop installation wizard is run at build time, compiling the result to a single database dump. You will get all the content (catalog, orders...) of the usual PrestaShop development seed.

Supported architectures:

- linux/amd64 (aka `x86_64`)
- linux/arm64/v8 (aka `arm64`)

> **⚡ Disclaimer**: this tool is provided with the sole purpose of bootstrapping a **development or testing environment** and is **unsuitable for production**.  
> If you're looking for a production grade image, please refer to https://github.com/PrestaShop/docker.

# How to get PrestaShop Flashlight?

This project can [be built locally](#build) anytime, but it's easier to use our pre-built Docker image available on the [Docker Hub](https://hub.docker.com/r/prestashop/prestashop-flashlight).

You may browse a wide variety of tags, including:

- `latest`
- `nightly`
- `1.7.8.11` if you want PrestaShop 1.7.8.11 with its recommended PHP version and tools
- `1.7.8.11-debian` same as above, but shipped with Debian Linux (_Alpine Linux_ is the default)
- `1.7.8.11-7.4` PrestaShop version 1.7.8.11 with PHP 7.4 and Alpine Linux…
