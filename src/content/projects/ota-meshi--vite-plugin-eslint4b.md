---
repo: "ota-meshi/vite-plugin-eslint4b"
name: "vite-plugin-eslint4b"
description: "Vite plugin for running ESLint on browser"
readmeQualityOk: true
url: "https://github.com/ota-meshi/vite-plugin-eslint4b"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 11
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-12-11T13:55:19Z"
lastCommitAt: "2026-09-19T01:16:45Z"
lastReleaseAt: "2024-04-13T09:05:11Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 59
maintainers: ["renovate[bot]", "ota-meshi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/137752874c5a4d5b39c45e58f793b214b83b315ba3a3ced0e611e3ae976083a3/ota-meshi/vite-plugin-eslint4b"
fundingLinks: ["GITHUB:https://github.com/ota-meshi"]
---

# vite-plugin-eslint4b

Vite plugin for running ESLint on browser

> **Note**  
> It is not a plugin for running ESLint during the build process.

With this plugin the following imports will work on the browser:

```js
import { Linter } from 'eslint';
```

## Usage

### Installation

```bash
npm install --save-dev vite-plugin-eslint4b eslint
```

### Configuration

```js
// vite.config.ts
import type { UserConfig } from "vite";
import eslint4b from "vite-plugin-eslint4b";

const config: UserConfig = {
  plugins: [
    eslint4b(), // <-
  ],
};
export default config;
```
