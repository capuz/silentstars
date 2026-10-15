---
repo: "City-of-Helsinki/drupal-hdbt"
name: "drupal-hdbt"
description: "Helsinki Drupal Base theme"
readmeQualityOk: true
url: "https://github.com/City-of-Helsinki/drupal-hdbt"
language: "TypeScript"
languages: ["TypeScript", "SCSS", "Twig"]
languagePcts: [42, 23, 22]
stars: 7
forks: 3
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 27
recentReleases: 0
createdAt: "2020-10-20T06:16:52Z"
lastCommitAt: "2026-10-15T08:32:04Z"
lastReleaseAt: "2021-01-15T06:59:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 61
maintainers: ["khalima", "sundflux", "jeremysteerio"]
openGraphImageUrl: "https://opengraph.githubassets.com/252a81aca129d99c036f5196fb9db81127159c4baf704722b560c3c55229cf18/City-of-Helsinki/drupal-hdbt"
---

# HDBT-theme
## Introduction

HDBT theme is a base theme for the City of Helsinki. It is based on the core theme stable9. The abbreviation comes from
the words Helsinki Drupal Base Theme. Style follows the [BEM methodology](http://getbem.com/) and javascript is written
as ES6. The JS and SCSS files are compiled and minified with custom theme builder.

## Requirements

This theme requires Drupal core >= 10.5.

Requirements for developing:
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://npmjs.com/)
- [Docker](https://www.docker.com/), used to sandbox the build tools (see [Sandbox](#sandbox))
- optional [NVM](https://github.com/nvm-sh/nvm)

## Commands

| Command       | Description                                                                       |
|---------------|-----------------------------------------------------------------------------------|
| nvm use       | Uses correct Node version chosen for the theme compiler.                          |
| npm i         | Install dependencies and link local packages.                                     |
| npm ci        | Install a project with a clean slate. Use especially in travis like environments. |
| npm run dev   | Compile…
