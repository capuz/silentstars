---
repo: "jhipster/generator-jhipster-ionic"
name: "generator-jhipster-ionic"
description: "Ionic for JHipster ✨"
readmeQualityOk: true
url: "https://github.com/jhipster/generator-jhipster-ionic"
homepage: "https://developer.okta.com/blog/2022/05/12/ionic-angular-jhipster"
language: "TypeScript"
languages: ["TypeScript", "EJS"]
languagePcts: [42, 37]
topics: ["jhipster", "ionic", "entity-generator", "ionic-framework", "typescript", "javascript", "yeoman-generator", "jest", "angular", "cypress"]
stars: 195
forks: 50
openIssues: 0
closedIssues: 142
watchers: 14
contributors: 49
recentReleases: 0
createdAt: "2017-11-02T18:01:10Z"
lastCommitAt: "2026-08-12T05:15:28Z"
lastReleaseAt: "2019-06-24T18:47:28Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 45
maintainers: ["dependabot[bot]", "github-actions[bot]", "mshima"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/109300707/a32ed700-6e01-11ea-9876-70558afd019e"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/generator-jhipster", "CUSTOM:https://www.jhipster.tech/sponsors/"]
---

# Ionic for JHipster

> A JHipster Blueprint that generates an Ionic Client

## Introduction

This is a [JHipster](http://www.jhipster.tech/) blueprint. You can use it to generate an Ionic app that talks to a JHipster backend.

## Installation

To install or update this blueprint:

```bash
npm install -g generator-jhipster-ionic
```

To update this blueprint:

```bash
npm update -g generator-jhipster-ionic
```

## Usage

Create a JHipster app using `jhipster`, or a backend-only with `jhipster --skip-client`. Choose `JWT` or `OAuth 2.0` as the authentication type.

Create a directory alongside your JHipster app, and run `jhipster-ionic` in it.

```bash
- jhipster-app
- ionic-app
```

You can also create a JHipster app and an Ionic app at the same time using the following command:

```bash
jhipster jdl bug-tracker.jdl --blueprints ionic
```

For available options, you can run:

```bash
jhipster-ionic app --help
```

See your project's generated [README](https://github.com/jhipster/generator-jhipster-ionic/blob/main/generators/ionic/resources/base/README.md) for iOS, Android, OpenID Connect, and testing instructions.

## Add PWA Support

To add PWA support to your Ionic app, run:…
