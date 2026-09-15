---
repo: "alldoneapp/alldoneapp"
name: "alldoneapp"
description: "Team up with AI to get it all done. Level up our life with your personal all-in-one project management tool. Full source code available for non-commercial use."
readmeQualityOk: true
url: "https://github.com/alldoneapp/alldoneapp"
homepage: "http://alldone.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["notion", "project-management", "todo", "todo-app", "todoapp"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-15T14:00:46Z"
lastCommitAt: "2026-09-15T08:54:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 75
maintainers: ["kwkrass"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1020207056/0d38291b-2d91-46d7-bd48-a4aff07d0e4b"
---

# Alldone App

This repository contains both the frontend and backend (Google Cloud Functions) code for the **Alldone** app.

## 1. Global Dependencies

Use the repository-wide toolchain:

- **Node.js** v22 (selected through the root `.nvmrc`)
- **npm** v10 (normally installed with Node.js)
- **firebase-tools** v13.29.3 (`npm install -g firebase-tools@13.29.3`)

Run `nvm use` at the repository root before installing dependencies. The legacy Expo CLI toolchain is retired. The Cloudflare email worker is the one exception: `cloudflare/email-worker/` uses its own `.nvmrc` to pin Node 20 for Wrangler.

## 2. CI/CD

The project is configured for **GitLab CI/CD** using the `.gitlab-ci.yml` file.

If you want to use a different CI/CD platform (such as GitHub Actions, Bitbucket Pipelines, or CircleCI), you will need to create your own configuration files. You can refer to the existing setup as a starting point, but some adjustments may be necessary.

## 3. External Dependencies

> **Note:**  
> If you are contributing to the main Alldone app, you can skip this section.  
> If you plan to deploy your own instance of the app, please continue reading.

The Alldone app relies on several…
