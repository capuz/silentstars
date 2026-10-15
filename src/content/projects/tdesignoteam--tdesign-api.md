---
repo: "TDesignOteam/tdesign-api"
name: "tdesign-api"
description: "TDesign API management tool"
originalDescription: "TDesign API management tool"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TDesignOteam/tdesign-api"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [75, 23]
stars: 32
forks: 84
openIssues: 3
closedIssues: 12
watchers: 11
contributors: 64
recentReleases: 0
createdAt: "2022-05-05T05:10:06Z"
lastCommitAt: "2026-10-15T08:32:23Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 64
maintainers: ["renovate[bot]", "anlyyao", "liweijie0812"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d7f362c4613ca3fa3107dd0ed9b497ce23dd4a7999ac28b131770a6636599ff/TDesignOteam/tdesign-api"
---

# TDesign API Maintenance Tool

## Local Setup

Run `pnpm i` to install dependencies, then run `pnpm dev`. Once it succeeds, open http://127.0.0.1:16001/api_design locally to view the API design page.

## Features

### Main Interface

You can create, read, update, and delete component API entries in the main interface.

### Generate API

Click the "Generate API Files" button, choose the component and tech stack/framework platform, and confirm. The corresponding md documents, API definition files, and other files will be generated locally in the matching repository directory under `packages/products/`.

### Submit

After generating the files locally and modifying the data in the db, submit all changes to the repository as a PR and ask other team members to review it. Once the PR is merged, a GitHub Action will automatically use the committed content to create a branch in the corresponding TDesign component repository and commit the changed code, using the @github-actions github-actions[bot] account.

Example: https://github.com/TDesignOteam/tdesign-api/pull/12

You can open a PR yourself, or ask developers to continue the implementation on the corresponding branch.

Example:…
