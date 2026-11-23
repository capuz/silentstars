---
repo: "crypt0rr/kb"
name: "kb"
description: "kb=$(cat sillynotes.txt)"
readmeQualityOk: true
url: "https://github.com/crypt0rr/kb"
homepage: "https://kb.offsec.nl"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
topics: ["hugo", "knowledge-base", "security", "infosec", "offsensive-security", "hacktoberfest"]
stars: 50
forks: 18
openIssues: 1
closedIssues: 19
watchers: 6
contributors: 7
recentReleases: 7
createdAt: "2021-11-30T13:18:19Z"
lastCommitAt: "2026-11-23T10:21:59Z"
lastReleaseAt: "2026-11-23T10:22:11Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 64
maintainers: ["renovate[bot]", "crypt0rr", "hack-ita"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3749d075d4468226dc04f265cfc6819f457a6d10d31982bb03e0fe960894376/crypt0rr/kb"
---

# Knowledge Base (kb)

Just some silly notes digitalized, have fun and feel free to open PR.

Live version of the site is available on [kb.offsec.nl](https://kb.offsec.nl).

## Run Locally?

```plain
git clone https://github.com/crypt0rr/kb
cd kb
npm ci
npm run dev -- --host 127.0.0.1
```

Use the Node.js version in `.node-version`.

## Checks

```plain
npm run check
npm run check:assets
npm run check:content
npm run check:links
npm run check:external-links
npm run audit:known
npm run check:outdated
npm run sysinternals:check
npm run content:review
npm run content:graph
npm run content:health
npm test
npm run doctor
npm run build
npm run smoke
npm run test:a11y
npm run validate
```
