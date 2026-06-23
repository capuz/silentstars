---
repo: "confluentinc/ksql-images"
name: "ksql-images"
description: "KSQL platform docker images"
url: "https://github.com/confluentinc/ksql-images"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [74, 26]
stars: 11
forks: 20
openIssues: 7
closedIssues: 7
watchers: 139
contributors: 1848
recentReleases: 0
createdAt: "2018-10-12T17:20:10Z"
lastCommitAt: "2026-06-23T23:29:31Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 48
maintainers: ["semaphore-agent-production[bot]", "renovatebot-confluentinc[bot]"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/9439498?s=400&v=4"
---

# Docker images for KSQL

This repo provides build files for [KSQL](https://www.confluent.io/product/ksql/) Docker images.

## Properties

Properties are inherited from a top-level POM. Properties may be overridden on the command line (`-Ddocker.registry=testing.example.com:8080/`), or in a subproject's POM.

- *docker.skip-build*: (Optional) Set to `false` to include Docker images as part of build. Default is 'false'.
- *docker.skip-test*: (Optional) Set to `false` to include Docker image integration tests as part of the build. Requires Python 2.7, `tox`. Default is 'true'.
- *docker.registry*: (Optional) Specify a registry other than `placeholder/`. Used as `DOCKER_REGISTRY` during `docker build` and testing. Trailing `/` is required. Defaults to `placeholder/`.
- *docker.tag*: (Optional) Tag for built images. Used as `DOCKER_TAG` during `docker build` and testing. Defaults to the value of `project.version`.
- *docker.upstream-registry*: (Optional) Registry to pull base images from. Trailing `/` is required. Used as `DOCKER_UPSTREAM_REGISTRY` during `docker build`. Defaults to the value of `docker.registry`.
- *docker.upstream-tag*: (Optional) Use the given tag when pulling base…
