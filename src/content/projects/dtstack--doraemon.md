---
repo: "DTStack/doraemon"
name: "doraemon"
description: "A management tool to help you organize your daily development"
readmeQualityOk: true
url: "https://github.com/DTStack/doraemon"
homepage: "https://dtstack.github.io/doraemon/docsify/#/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 38]
topics: ["frontend-tools", "configuration-management", "proxy-servi", "hosts-manage", "nodejs", "eggjs"]
stars: 40
forks: 13
openIssues: 3
closedIssues: 26
watchers: 10
contributors: 18
recentReleases: 0
createdAt: "2021-05-21T03:23:33Z"
lastCommitAt: "2026-10-29T05:49:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 55
maintainers: ["liuxy0551", "TreeTreeDi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e0b5193cca3699d298d422b00a00ad3e41c5d7eb5f020a98dd811b910ef9f8d/DTStack/doraemon"
---

# 哆啦 A 梦 (Doraemon)  Here, you can find everything you need

English | [简体中文](https://github.com/DTStack/doraemon/blob/HEAD/README-zh_CN.md) 

A management tool to help you organize your daily development, configuration, proxy services, host resources, etc.

## Features

- Change the traditional front-end and back-end joint mode. There is no need for front-end and back-end restarts of local services during API tuning.
- Support to receive, share commonly used, easy to use application links.
- Support multi-environment Host account and password and other information maintenance.
- Supports configuration file modifications on remote service hosts.
- Support unified maintenance of local hosts files

## Environment Support

- node >= 14

## Quick Start

### Install

```bash
git clone git@github.com:DTStack/doraemon.git

cd doraemon
```

#### Installation dependencies
We recommend using yarn for dependency installation.

```bash
yarn install
```

#### Import MySQL Database

1. Please create the database under the service first.
2. Find the `sql` folder in the directory and import the `doraemon.sql` file in the folder into the database created just now.
3. Refer to Configure…
