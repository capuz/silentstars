---
repo: "jetstreamapp/jetstream"
name: "jetstream"
description: "A better way to build on Salesforce"
readmeQualityOk: true
url: "https://github.com/jetstreamapp/jetstream"
homepage: "https://getjetstream.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["admin", "code-editor", "data-loader", "salesforce", "salesforce-apex", "salesforce-api", "salesforce-developers", "salesforce-marketing-cloud", "salesforce-metadata", "salesforce-rest-api"]
stars: 127
forks: 29
openIssues: 87
closedIssues: 896
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2022-06-02T12:54:44Z"
lastCommitAt: "2026-10-23T09:32:15Z"
lastReleaseAt: "2023-02-12T04:38:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 98
undervaluedScore: 48
maintainers: ["paustint", "jetstream-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/499134828/7a59e3c0-0c5e-4ecd-935e-a4e83d65e796"
fundingLinks: ["GITHUB:https://github.com/jetstreamapp"]
discussionCount: 16
---

# Jetstream

**A better way to work on Salesforce**

The Jetstream platform makes managing your Salesforce instances a breeze. Use Jetstream to work with your data and metadata to get your work done faster.

Learn more by [reading the docs](https://docs.getjetstream.app/).

**JETSTREAM IS SOURCE-AVAILABLE AND FREE TO USE. IF YOUR COMPANY IS GETTING VALUE, CONSIDER SPONSORING THE PROJECT ❤️**

Jetstream wouldn't be possible without your contributions.

There are multiple ways to use Jetstream.

1. Use the hosted version at https://getjetstream.app
2. Run locally
   1. Using nodejs
      1. Building yourself (recommended if you want to contribute to the Jetstream codebase)
   2. Using Docker
3. Want to self-host behind your company firewall? Reach out to the team for assistance.

# Overview of the codebase structure

This project was generated using [Nx](https://nx.dev) - This repository is considered a mono-repo and has multiple applications

```
├── app (This is used in the generation of the desktop application)
├── apps (Application)
│   ├── api (BACKEND NODE SERVER)
│   ├── cron-tasks
│   ├── docs (DOCS WEBSITE)
│   ├── jetstream (FRONTEND REACT APPLICATION)
│   ├──…
