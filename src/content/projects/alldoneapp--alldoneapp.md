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
lastCommitAt: "2026-10-29T10:19:35Z"
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

## Local development

Run `nvm use`, then `npm run dev`. This starts the full Firebase emulator suite
before starting the web server and keeps both running together. Open
**https://localhost:19006**; the Emulator UI is at **http://127.0.0.1:4000**.
Java 11+ and the root, `functions/`, and `web-bundler/` npm dependencies are required.

Browser localhost automatically uses local Auth, Firestore, Functions, Storage
(including note content), and Realtime Database. No `?emulator=true` is needed.
The `alldonestaging` project ID is only the local emulator namespace; localhost
does not fall back…
