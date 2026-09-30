---
repo: "Talend/ui"
name: "ui"
description: "Talend's unified web UI repository."
readmeQualityOk: true
url: "https://github.com/Talend/ui"
homepage: "https://talend.github.io/ui/main/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 24]
topics: ["talend", "lerna", "react", "bootstrap3-theme", "javascript", "reactjs", "react-redux", "react-components", "design-system", "design-tokens"]
stars: 159
forks: 53
openIssues: 1
closedIssues: 168
watchers: 40
contributors: 97
recentReleases: 0
createdAt: "2017-01-18T13:45:58Z"
lastCommitAt: "2026-09-30T09:56:25Z"
lastReleaseAt: "2017-03-08T15:47:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["dependabot[bot]", "jmfrancois", "build-travis-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6d4ed18c53d6dbd112a3ef45e03c4faae3c8e9cca875b764e4661bd4208ab31/Talend/ui"
---

# UI

That repository was created in an effort to simplify the development of Talend's front-end stack.

## Goals

- Single code repository / Multiple packages
- Global (cross package) test and review tools
- Easy cross packages development
- Share and love open source.

## The stack

- [react-cmf](https://github.com/Talend/ui/tree/master/packages/cmf)
- [react-talend-containers](https://github.com/Talend/ui/tree/master/packages/containers)
- [react-talend-components](https://github.com/Talend/ui/tree/master/packages/components)
- [react-talend-forms](https://github.com/Talend/ui/tree/master/packages/forms)
- [talend-icons](https://github.com/Talend/ui/tree/master/packages/icons)
- [bootstrap-talend-theme](https://github.com/Talend/ui/tree/master/packages/theme)

## Tools (dev environment)

We have quick access from the root to the following npm scripts:

- postinstall (trigger build of every package)
- pre-release (trigger build of UMD of supported package)
- start (start the playground)
- test
- lint

The CI will ensure on each PR that test and lint are OK before you can merge your pull request. It will also provide you a demo so reviewers can play with your change and try to…
