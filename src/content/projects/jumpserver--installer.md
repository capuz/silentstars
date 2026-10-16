---
repo: "jumpserver/installer"
name: "installer"
description: "Installer is a tool for managing the installation of JumpServer, enabling users to conveniently install, deploy, update, and manage JumpServer."
originalDescription: "Installer is a tool for managing the installation of JumpServer, enabling users to conveniently install, deploy, update, and manage JumpServer."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jumpserver/installer"
homepage: "http://www.jumpserver.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker-compose", "release", "install", "quickstart"]
stars: 133
forks: 89
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2020-10-13T11:22:30Z"
lastCommitAt: "2026-10-16T08:27:05Z"
lastReleaseAt: "2021-04-14T03:47:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 48
maintainers: ["ibuler", "feng626", "Aaron3S"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ceaaf090e91e76ee7a4b7d1f2447555aec8b5d78584cbac10a30b0417f7c59c/jumpserver/installer"
---

# JumpServer Installer

JumpServer Installer is used to install and manage JumpServer.

## Environment Requirements
  - Linux x86_64
  - Kernel greater than 4.0

## Docker / Compose Download and OSS Sync

Binary download addresses are defined directly in `scripts/const.sh`. Setting the environment variable `DOCKER_IMAGE_MIRROR=1` switches the download domain for Docker and Compose to `https://download.jumpserver.org`; when this switch is not enabled, you can specify another download domain via the environment variable `DOCKER_BIN_HOST`. The installer always verifies downloaded content using the SHA-256 values fixed in `scripts/const.sh`.

The GitHub Actions workflow **Sync Docker Binaries to OSS** automatically reads the version number from this file and the SHA-256 values for both architectures (`x86_64`, `aarch64`), downloads all files from the official source and verifies them, then uploads the binaries along with the `.sha256` and `.md5` files to the `jms-pkg` bucket in the Beijing region. Object paths keep the part of the official URL after removing the domain:

```text
oss://jms-pkg/linux/static/stable/<arch>/docker-<version>.tgz…
