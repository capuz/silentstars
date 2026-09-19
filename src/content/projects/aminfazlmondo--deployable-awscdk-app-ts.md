---
repo: "AminFazlMondo/deployable-awscdk-app-ts"
name: "deployable-awscdk-app-ts"
description: "Projen Project for deployable CDK Typescript Applications"
readmeQualityOk: true
url: "https://github.com/AminFazlMondo/deployable-awscdk-app-ts"
homepage: "https://aminfazlmondo.github.io/deployable-awscdk-app-ts/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["typescript", "projen", "aws-cdk", "github-actions", "hacktoberfest", "deployment"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-11-23T03:48:08Z"
lastCommitAt: "2026-09-19T02:46:08Z"
lastReleaseAt: "2021-12-09T00:54:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 77
maintainers: ["AminFazlMondo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a90c504d341b668d355f276e3372e22386e06149cf35844b14022df1b961076/AminFazlMondo/deployable-awscdk-app-ts"
---

# Deployable Typescript AWS CDK App Projen Project

Inspired by [projen](https://github.com/projen/projen)
This is a projen project for typescript AWS CDK Applications deployed via github actions.

## Getting started

To create a new project, run the following command and follow the instructions:

### Typescript

```console
$ mkdir my-project
$ cd my-project
$ git init
$ npx projen new --from deployable-awscdk-app-ts --projenrc-ts
🤖 Synthesizing project...
...
```

This will initialize a projen project and will create `.projenrc.ts` file for capturing the project details and options. Below is an example of the contents in this file

### Javascript

```console
$ mkdir my-project
$ cd my-project
$ git init
$ npx projen new --from deployable-awscdk-app-ts
🤖 Synthesizing project...
...
```

This will initialize a projen project and will create `.projenrc.js` file for capturing the project details and options. Below is an example of the contents in this file

### Example
```javascript
const { DeployableAwsCdkTypeScriptApp } = require('deployable-awscdk-app-ts');

const project = new DeployableAwsCdkTypeScriptApp({
  name: 'my-test-app',
  defaultReleaseBranch: 'main',
  cdkVersion:…
