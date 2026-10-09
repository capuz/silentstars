---
repo: "mpyw/FILTER_VALIDATE_EMAIL.js"
name: "FILTER_VALIDATE_EMAIL.js"
description: "TypeScript/JavaScript Email validation compatible with PHP's filter_var($value, FILTER_VALIDATE_EMAIL)"
readmeQualityOk: true
url: "https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["javascript", "php", "regex", "email", "email-validation", "typescript"]
stars: 26
forks: 1
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 2
createdAt: "2018-07-22T03:48:05Z"
lastCommitAt: "2026-10-09T10:50:17Z"
lastReleaseAt: "2026-10-09T01:30:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 47
maintainers: ["dependabot[bot]", "mpyw"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e1b3365e83e943e84cf4c7a60fbe56b926ecca5b87bb067d0f856de5fe0e731/mpyw/FILTER_VALIDATE_EMAIL.js"
---

# FILTER_VALIDATE_EMAIL.js [](https://badge.fury.io/js/filter-validate-email) [](https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/actions) [](https://coveralls.io/github/mpyw/FILTER_VALIDATE_EMAIL.js?branch=master)

Email validation compatible with PHP's `filter_var($value, FILTER_VALIDATE_EMAIL)`

> [!IMPORTANT]
> **v2 ships as a single ES module.** Breaking changes from v1:
>
> - **ESM package** — there is no separate CommonJS build. `import` works everywhere; `require()` works on Node.js >= 22.12 via native `require(ESM)`.
> - **Node.js >= 22** required.
> - Only the package root is exported; deep imports (e.g. `filter-validate-email/es/...`) are no longer available.
> - In the browser, load it as an ES module from a CDN (`<script type="module">`, see below); there is no bundled browser global / UMD / IIFE build.
>
> If you need a real CommonJS build, a browser global, or older runtimes, stay on [v1](https://www.npmjs.com/package/filter-validate-email/v/1.1.3).

# Installing

## NPM

```
npm install filter-validate-email
```

## CDN

Load it as an ES module from any npm CDN:

```html
<script type="module">
  import validateEmail from 'https://esm.sh/filter-validate-email';…
