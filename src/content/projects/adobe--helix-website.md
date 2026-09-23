---
repo: "adobe/helix-website"
name: "helix-website"
description: "The Helix website https://www.aem.live/"
readmeQualityOk: true
url: "https://github.com/adobe/helix-website"
homepage: "https://www.aem.live"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [68, 25]
topics: ["helix", "documentation"]
stars: 45
forks: 59
openIssues: 27
closedIssues: 120
watchers: 32
contributors: 291
recentReleases: 0
createdAt: "2021-10-22T17:42:23Z"
lastCommitAt: "2026-09-23T08:47:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 60
maintainers: ["trieloff", "gribbletog", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb405a031b64fa1270ca22c8e5c214936f80fd8946953c9796ce1b6ec75b0db4/adobe/helix-website"
discussionCount: 1
---

# Project Helix Website
[www.aem.live](https://www.aem.live)

## Introduction
This repo is what powers the helix website.

## Developing
Install the Helix CLI:

    sudo npm install -g @adobe/aem-cli
    
Run it in this repo:

    aem up

While site preview is authenticated, run below command for local development:

    npx @adobe/aem-cli up --url https://main--helix-website--adobe.aem.live/

    
## Testing
### Install dependencies:

    npm install
### Run tests:

    npm test
### Watch tests:

    npm test:watch
    
This will run through all your tests, but then only run against any changed tests.
