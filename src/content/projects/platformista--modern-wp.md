---
repo: "platformista/modern-wp"
name: "modern-wp"
description: "Modern WordPress development and deployment workflow with Upsun"
readmeQualityOk: true
url: "https://github.com/platformista/modern-wp"
language: "PHP"
languages: ["PHP"]
languagePcts: [88]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-08-12T14:09:23Z"
lastCommitAt: "2026-07-10T07:01:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 67
maintainers: ["dependabot[bot]", "vincenzo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c769aea36d5b0baba5104d8c21c90d25453749dd049d2b7fd497d9cb48a72a4/platformista/modern-wp"
---

## WordPress on Upsun

Upsun provide an incredibly flexible and powerful PaaS. As they once called it, it is the Idea-to-Cloud PaaS. With a GitHub integration, you can have a preview environment cloned from your a parent environment (the root of the tree is usually the production environment) for each pull request, and a Status Check that runs a build on Upsun out of the new branch, so to verify that the changes do not break anything. Upon merging a PR, the code is deployed straight to the parent environment. And you can change the infrastructure in code, too.

To deploy this repository on Upsun: 

1. make a copy or a fork of it
1. [create a new project](https://console.upsun.com/vinnie-1/create-project) on Upsun (requires an account)
1. select 'Sync your GitHub repository with Upsun'
1. select the repository as per #1

# Modern WordPress development and deployment workflow

This repository hosts the codebase for two sites, both

- are built using [WordPress.org](https://wordpress.org)
- are deployed on [Upsun](https://upsun.com) in [Multi-App setup](https://docs.upsun.com/create-apps/multi-app.html)
- have their codebase managed via [Composer](https://getcomposer.org), thanks to…
