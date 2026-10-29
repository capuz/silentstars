---
repo: "jsnjack/wakeci"
name: "wakeci"
description: "Task automation"
readmeQualityOk: true
url: "https://github.com/jsnjack/wakeci"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [56, 24]
topics: ["continuous-integration", "build-automation", "ci", "task-runner", "go", "automation", "hacktoberfest", "cron", "cronscheduler", "golang"]
stars: 114
forks: 9
openIssues: 9
closedIssues: 8
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2019-06-16T21:34:13Z"
lastCommitAt: "2026-10-29T12:24:55Z"
lastReleaseAt: "2019-08-15T07:59:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 30
maintainers: ["jsnjack", "Vamxi", "DimaIT"]
openGraphImageUrl: "https://opengraph.githubassets.com/f003694fdaeab9186196d19be2fbf88c0bc54796d34bfcedec6f27fd06638e81/jsnjack/wakeci"
---

# wakeci

### What is it?

wakeci is an automation tool which helps to execute repetitive tasks

### Features

-   simple job configuration using YAML files with Ansible inspired syntax
-   easy to install - just download a binary file from Releases
-   automatic Let's Encrypt SSL certificates
-   parameterized builds, artifacts, intervals and timeouts - see job configuration example below
-   no plugins, no extensive configuration - focus on your project instead!

### Job configuration example

> See full description [here](https://github.com/jsnjack/wakeci/blob/master/src/frontend/src/assets/configDescription.yaml)

```yaml
desc: Build and release wake application
params:
    - VERSION: master

tasks:
    - name: Clone repository
      run: git clone git@github.com:jsnjack/wakeci.git --recursive

    - name: Checkout version
      run: sh ${WAKE_CONFIG_DIR}utils/checkout.sh wakeci ${VERSION}

    - name: Install npm dependencies
      run: cd wakeci/src/frontend && npm install

    - name: Build application
      run: cd wakeci && make build

    - name: Create a release on github
      run: python ${WAKE_CONFIG_DIR}utils/release_on_github.py -f wakeci/bin/wakeci -r…
