---
repo: "mailpoet/mailpoet"
name: "mailpoet"
description: "A free newsletter plugin for WordPress"
readmeQualityOk: true
url: "https://github.com/mailpoet/mailpoet"
homepage: "https://wordpress.org/plugins/mailpoet/"
language: "PHP"
languages: ["PHP"]
languagePcts: [75]
topics: ["wordpress-plugin", "mailpoet", "newsletters", "emails", "wordpress"]
stars: 159
forks: 74
openIssues: 0
closedIssues: 471
watchers: 11
contributors: 61
recentReleases: 0
createdAt: "2015-07-08T12:47:37Z"
lastCommitAt: "2026-09-15T08:54:52Z"
lastReleaseAt: "2016-01-08T17:51:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 48
maintainers: ["triple0t", "pavel-mailpoet", "lysyjan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/38753514/23f33180-deb8-11e9-9b5d-24c9f60fb77a"
---

### Table of Contents

1. [MailPoet](#mailpoet)
2. [Initial setup](#initial-setup)
   1. [Required tools](#required-tools)
3. [Commands](#commands)
   1. [Environment lifecycle](#environment-lifecycle)
   2. [Build and watch](#build-and-watch)
   3. [Release build](#release-build)
   4. [Quality assurance](#quality-assurance)
   5. [Tests](#tests)
   6. [Migrations, templates, wp-cli](#migrations-templates-wp-cli)
4. [Xdebug](#xdebug)
   1. [PhpStorm setup](#phpstorm-setup)
   2. [VS Code setup](#vs-code-setup)
   3. [Xdebug for integration tests](#xdebug-for-integration-tests)
5. [Husky hooks](#husky-hooks)
6. [Code formatting](#code-formatting)

## MailPoet

The **MailPoet** plugin monorepo.

If you have **any questions or need help or support**, please see the [Support](https://github.com/mailpoet/mailpoet/blob/HEAD/SUPPORT.md) document.

The development environment is built on [`@wordpress/env`](https://www.npmjs.com/package/@wordpress/env) (wp-env) plus [Mailpit](https://mailpit.axllent.org/) for email capture. Continue with the steps below to set it up. If you'd like to use the plugin code directly without wp-env, see [the plugin's…
