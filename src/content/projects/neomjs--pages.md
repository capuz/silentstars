---
repo: "neomjs/pages"
name: "pages"
description: "Online examples for the neo.mjs framework"
readmeQualityOk: true
url: "https://github.com/neomjs/pages"
homepage: "https://neomjs.github.io/pages/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [58, 42]
topics: ["hacktoberfest"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2019-11-18T23:07:16Z"
lastCommitAt: "2026-08-10T05:04:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 92
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfe6216da8427536ed4d18098fb89c6b19b64f03e88d1a0527870d6632ed836c/neomjs/pages"
---

# How to update the gh-pages:

To update the `neo.mjs` version and prepare the gh-pages for deployment, simply run the following command:

```bash
npm run update-neo-version
```

This script will automatically perform all the necessary steps, including:
- Fetching the latest `neo.mjs` version.
- Updating `package.json`.
- Installing dependencies.
- Building `neo.mjs`.
- Applying required configurations for the pages environment.
- Staging the new `neo.mjs` module.
- Enhancing SEO by preparing the root `index.html`.

After the script finishes, you can review the changes with `git status`, then commit and push them.
