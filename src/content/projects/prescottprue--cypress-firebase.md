---
repo: "prescottprue/cypress-firebase"
name: "cypress-firebase"
description: "Cypress plugin and custom commands for testing Firebase projects"
readmeQualityOk: true
url: "https://github.com/prescottprue/cypress-firebase"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cypress", "firebase", "firestore"]
stars: 268
forks: 49
openIssues: 14
closedIssues: 107
watchers: 3
contributors: 28
recentReleases: 0
createdAt: "2018-10-19T10:05:04Z"
lastCommitAt: "2026-10-21T21:14:39Z"
lastReleaseAt: "2019-03-22T19:39:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["renovate[bot]", "prescottprue"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ecb3984fc1f40c0e023c2bab82c4964cd0b0f17ed19da4273dd1a0793266094/prescottprue/cypress-firebase"
discussionCount: 12
---

# cypress-firebase

> Cypress plugin and custom commands for testing Firebase projects

## What?

0 dependency plugin which adds [custom cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) for interactions with Firebase:

- [cy.createUserWithClaims][createUserWClaims]
- [cy.login][login]
- [cy.loginWithEmailAndPassword][loginEmail]
- [cy.logout][logout]
- [cy.deleteAllAuthUsers][delAllUsers]
- [cy.callRtdb][callRtdb]
- [cy.callFirestore][callFirestore]
- [cy.\[authFunction\]][authFunctions]

If you are interested in what drove the need for this checkout [the why section](#why)

## Usage

### Pre-Setup

1. If you do not already have it installed, install Cypress and add it to your package file: `npm i --save-dev cypress` or `yarn add -D cypress`
1. Make sure you have a `cypress` folder containing Cypress tests

### Setup

1. Make Google Cloud project name available to cypress-firebase to pass to firebase-admin on initialization by doing one of the following:
   - _suggested_ Set `GCLOUD_PROJECT` environment variable to match the Google Project you would like to use. This needs to be on the process running cypress, so it should be before `cypress…
