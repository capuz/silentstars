---
repo: "gparker97/beanies-family"
name: "beanies-family"
description: "family planning made easy - every bean counts"
readmeQualityOk: true
url: "https://github.com/gparker97/beanies-family"
homepage: "https://beanies.family"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["family-friendly", "family-planning", "financial-planning", "family-collaboration", "family-goals"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 104
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-04T08:37:47Z"
lastCommitAt: "2026-11-05T11:20:15Z"
lastReleaseAt: "2026-11-05T11:22:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 83
maintainers: ["gparker97", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1149548104/9b3d8f8a-149b-4c23-82c5-89a31b45b06f"
discussionCount: 0
---

# beanies.family

An awesome (in my opinion) family finance and life planner. Helps you track your family finances, share them with your life partner(s), stay on top of all your family plans, and everything in between, all without giving up your precious data to some random corporation. It all stays with you.

To learn more about beanies and why it exists, visit [beanies.family/home](https://beanies.family/home).

## Run it locally

You'll need [Node.js](https://nodejs.org/) v20+ and npm.

```bash
git clone https://github.com/gparker97/beanies-family.git
cd beanies-family
npm install
npm run dev
```

Open `http://localhost:5173` in your browser and you're good to go (to store data files locally).

Your data stays on your machine in the browser's IndexedDB or (if you set it up) on your personal cloud provider (i.e. google drive).

## Build for production

```bash
npm run build
npm run preview
```

## Run tests

```bash
npm run test:run        # unit tests (Vitest)
npm run test:e2e        # end-to-end tests (Playwright)
```

For E2E tests, you may need to install Playwright browsers first: `npx playwright install`.

## Self-hosting

beanies.family is open source and self-hostable. A…
