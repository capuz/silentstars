---
repo: "adobe/helix-website"
name: "helix-website"
description: "The Helix website https://www.aem.live/"
url: "https://github.com/adobe/helix-website"
homepage: "https://www.aem.live"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [68, 24]
topics: ["helix", "documentation"]
stars: 44
forks: 57
openIssues: 28
closedIssues: 107
watchers: 32
contributors: 287
recentReleases: 0
createdAt: "2021-10-22T17:42:23Z"
lastCommitAt: "2026-06-23T23:17:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 60
maintainers: ["shsteimer", "asthabh23", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/988a24691baee22cdc8cfd960bee7accdbde153ea5da32405cf9e927d500343a/adobe/helix-website"
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
