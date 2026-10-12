---
repo: "hmcts/rpx-xui-manage-organisations"
name: "rpx-xui-manage-organisations"
description: "pui manage web app"
readmeQualityOk: true
url: "https://github.com/hmcts/rpx-xui-manage-organisations"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["jenkins-cft", "jenkins-cft-j-z"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 8
contributors: 95
recentReleases: 0
createdAt: "2019-01-21T11:53:29Z"
lastCommitAt: "2026-10-12T11:14:37Z"
lastReleaseAt: "2020-06-24T15:55:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 69
maintainers: ["RiteshHMCTS", "Josh-HMCTS", "andyg-cgi"]
openGraphImageUrl: "https://opengraph.githubassets.com/05e78962f2b21269cd74c1958b38130f6245c33f60cccb0a8e007fb9147b1683/hmcts/rpx-xui-manage-organisations"
---

# RPX XUI Manage Organisations

This repo contains the Manage Organisations Angular frontend and Node API.

## Prerequisites

- Connect to the HMCTS VPN before calling shared environments.
- Use the Node version declared in `package.json`.
- Populate local secrets before running the full local stack.

## Repository Map

This is a single application repo with an Angular frontend, an Express/Node API, Helm chart deployment config, and Playwright validation suites.

```mermaid
flowchart TB
  Repo["rpx-xui-manage-organisations"]
  Frontend["src/\nAngular frontend"]
  Api["api/\nExpress API and backend proxy"]
  Config["config/\nNode config"]
  Charts["charts/xui-mo-webapp/\nHelm values and chart"]
  Pw["playwright_tests_new/\nPlaywright validation"]
  Scripts["scripts/\nreporting, guards, browser checks"]
  Jenkins["Jenkinsfile_CNP\nJenkinsfile_nightly\nJenkinsfile_parameterized"]

  Repo --> Frontend
  Repo --> Api
  Repo --> Config
  Repo --> Charts
  Repo --> Pw
  Repo --> Scripts
  Repo --> Jenkins

  Pw --> PwApi["api/\nAPI-functional and internal guard tests"]
  Pw --> PwIntegration["integration/\nmock-backed browser specs"]
  Pw --> PwE2E["E2E/\ndeployed browser journeys"]
  Pw…
