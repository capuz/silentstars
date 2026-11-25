---
repo: "Yohann0617/oci-helper-serverless-cf"
name: "oci-helper-serverless-cf"
description: "Original project oci-helper, fully refactored security-hardened edition, based on Cloudflare Workers + D1, zero server cost, deployable with one button click"
originalDescription: "原项目 oci-helper 全新重构安全加固版，基于 Cloudflare Workers + D1，零服务器成本，点一下按钮即可部署"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yohann0617/oci-helper-serverless-cf"
homepage: "https://check.oci-helper.de5.net"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 11
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-22T10:42:30Z"
lastCommitAt: "2026-11-25T13:22:07Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 50
maintainers: ["Yohann0617"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a2223045f1bcca5434a133ec15f6affd8a931fda181030c39011e1de326ae2e/Yohann0617/oci-helper-serverless-cf"
---

# OCI Helper Serverless (deployed to Cloudflare Workers)
> Original project: https://github.com/Yohann0617/oci-helper

One-click deploy the **OCI instance grabber / instance management panel** to your own Cloudflare account.

## Features

- **One-click deployment**: The Deploy button automatically forks the repository. In the wizard, just click "Create new database" to create D1, with no need to create the database in the console beforehand.
- The database schema is **automatically created by the Worker on the first request**, so no SQL commands need to be run.
- Only one Worker and one D1 database are needed. Once deployed, it can be used through a browser.
