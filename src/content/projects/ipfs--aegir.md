---
repo: "ipfs/aegir"
name: "aegir"
description: "AEgir - Automated JavaScript project building"
url: "https://github.com/ipfs/aegir"
homepage: "https://ipfs.github.io/aegir"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["aegir", "typescript", "coverage", "testing", "linting", "esbuild"]
stars: 104
forks: 62
openIssues: 39
closedIssues: 239
watchers: 18
contributors: 59
recentReleases: 0
createdAt: "2016-03-20T21:21:17Z"
lastCommitAt: "2026-07-03T12:22:43Z"
lastReleaseAt: "2016-10-31T08:29:31Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 51
maintainers: ["achingbrain", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbe48c2475c16ec746ef2044597dab8bca34c58ee929ce7ffd39761f08ca304/ipfs/aegir"
---

# aegir

> JavaScript project management

Aegir is an opinionated tool for TypeScript/JavaScript project management, testing and release. You should use it if you just want to ship working code and have few strongly held opinions on linting, project layout and testing frameworks.

It bundles config for standard tools such as eslint, mocha, etc and lets you concentrate on writing code instead of formatting whitespace.

 ## Project Structure

 The project structure when using this is quite strict, to ease replication and configuration overhead.

 All source code should be placed under `src`, with the main entry point being `src/index.js` or `src/index.ts`.

 All test files should be placed under `test`. Individual test files should end in `.spec.js` or `.spec.ts` and will be ran in all environments (node, browser, webworker, electron-main and electron-renderer).

 To run node specific tests a file named `test/node.js` or `test/node.ts` should be used to require all node test files and the same thing for the other environments with a file named `test/browser.js`, `test/browser.ts`, `test/deno.js` or `test/deno.ts`.

 Your `package.json` should have the following entries and should…
