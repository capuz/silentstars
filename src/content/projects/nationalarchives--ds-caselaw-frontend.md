---
repo: "nationalarchives/ds-caselaw-frontend"
name: "ds-caselaw-frontend"
description: "Frontend styles for the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-frontend"
language: "SCSS"
languages: ["SCSS"]
languagePcts: [97]
topics: ["caselaw", "find-caselaw", "national-archives", "scss"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2023-08-11T14:16:25Z"
lastCommitAt: "2026-10-23T08:46:32Z"
lastReleaseAt: "2024-10-23T12:49:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/188448535b0a2478fb855769e40782c3484aa17796f2c743022285f33998b996/nationalarchives/ds-caselaw-frontend"
---

# The National Archives: Find Case Law

## Introduction

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# Frontend CSS

This repository contains shared SASS and JS for the Find Case Law service. It's used across the [Editor UI](https://github.com/nationalarchives/ds-caselaw-editor-ui) and the [Public UI](https://github.com/nationalarchives/ds-caselaw-public-ui).

## Usage

This repository is _not_ listed on npm, and you will need to add the full git repository path to your `package.json`:

```json
"dependencies": {
  "@nationalarchives/ds-caselaw-frontend": "git://github.com/nationalarchives/ds-caselaw-frontend#v1.1.0",
  "sass": "^1.58.3"
}
```

Once installed, import from the correct location in your SCSS, checking that relative paths are correct:

```scss
@import "../../node_modules/@nationalarchives/ds-caselaw-frontend/src/main";
```

## Development

Check out this repo, as well as the [Editor…
