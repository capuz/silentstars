---
repo: "yuanjian-org/app"
name: "app"
description: "A Web app that supports mentorship programs at Visionary Education Foundation (远见教育基金会)."
readmeQualityOk: true
url: "https://github.com/yuanjian-org/app"
homepage: "http://yuanjian.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 6
openIssues: 9
closedIssues: 88
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2023-06-13T04:06:08Z"
lastCommitAt: "2026-07-04T22:20:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["google-labs-jules[bot]", "weihanwang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88db02a8dceb6f421e1ab9899dc825f9c7517c5773fc3b568c31a99160971732/yuanjian-org/app"
---

# 远图社会导师服务平台

This is a web app that supports mentorship programs at [Visionary Education
Foundation (远见教育基金会)](https://yuanjian.org) developed by VEF volunteers.

## Getting Started

1. Install `node.js` and `yarn`.
1. Install `postgresql`, start it locally, and create a database called `yuanjian`. Aternatively, use a hosted Postgres solution such as [Neon](https://neon.com).
1. Create file `.env` in the repository root with the following content:
   ```
   DATABASE_URI=postgres://localhost/yuanjian
   NEXTAUTH_SECRET=123
   ```
   Optinoally, see [`.env.template`](.env.template) for more environment
   variables you can set in `.env`.
1. Run `yarn` to install dependency packages.
   - If you run into error `"$VERCEL_ENV" was unexpected`, see this [`doc`](./docs/package.json.md).
1. Run `yarn migrate-db && yarn gen-demo-data` to initialize the database.
1. Run `yarn dev` to start local server. By default it will listen on [`localhost:3000`](http://localhost:3000).
1. Visit the local server from broswer. Sign up with email `admin@de.mo`.
   - When prompted to enter a verification code, find the `"token": "..."` string from `yarn dev`'s command-line output and enter the six-digit…
