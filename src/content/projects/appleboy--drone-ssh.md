---
repo: "appleboy/drone-ssh"
name: "drone-ssh"
description: "Drone plugin for executing remote ssh commands"
readmeQualityOk: true
url: "https://github.com/appleboy/drone-ssh"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["drone-plugin", "ssh", "drone", "docker-image", "docker-container", "cli"]
stars: 320
forks: 79
openIssues: 9
closedIssues: 131
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2015-10-20T18:05:53Z"
lastCommitAt: "2026-11-08T10:41:00Z"
lastReleaseAt: "2019-11-21T01:23:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 26
maintainers: ["appleboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2176157589fc8b29179b522951be0ed6d6cedceb0871ffe0fd2049859d5ae69/appleboy/drone-ssh"
fundingLinks: ["CUSTOM:https://www.paypal.me/appleboy46"]
---

# drone-ssh

> **English** | [繁體中文](https://github.com/appleboy/drone-ssh/blob/HEAD/README.zh-tw.md) | [简体中文](https://github.com/appleboy/drone-ssh/blob/HEAD/README.zh-cn.md)

A Drone plugin for executing commands on remote hosts via SSH. For usage instructions and a list of available options, please refer to [the documentation](https://plugins.drone.io/plugins/ssh).

**Note: Please update your Drone image config path to `appleboy/drone-ssh`. The `plugins/ssh` image is no longer maintained.**

## Table of Contents

- [drone-ssh](#drone-ssh)
  - [Table of Contents](#table-of-contents)
  - [Breaking Changes](#breaking-changes)
  - [Build or Download a Binary](#build-or-download-a-binary)
  - [Docker](#docker)
  - [Usage](#usage)
  - [Mount Key from File Path](#mount-key-from-file-path)
  - [Configuration](#configuration)

## Breaking Changes

As of `v1.5.0`, the command timeout flag has changed to use the `Duration` format. See the following example:

```diff
pipeline:
  scp:
    image: ghcr.io/appleboy/drone-ssh
    settings:
      host:
        - example1.com
        - example2.com
      username: ubuntu
      password:
        from_secret: ssh_password
      port: 22
-…
