---
repo: "eslint/code-explorer"
name: "code-explorer"
description: "ESLint Code Explorer"
url: "https://github.com/eslint/code-explorer"
homepage: "https://explorer.eslint.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 56
forks: 21
openIssues: 2
closedIssues: 37
watchers: 10
contributors: 20
recentReleases: 0
createdAt: "2024-04-02T18:54:31Z"
lastCommitAt: "2026-06-28T06:55:22Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 57
maintainers: ["renovate[bot]", "Pixel998", "lumirlumir"]
openGraphImageUrl: "https://opengraph.githubassets.com/d216a4da4a9158b5451c4b0702047e7b3884221b903525039fa1e5a598975ae6/eslint/code-explorer"
fundingLinks: ["GITHUB:https://github.com/eslint", "OPEN_COLLECTIVE:https://opencollective.com/eslint", "TIDELIFT:https://tidelift.com/funding/github/npm/eslint"]
discussionCount: 0
---

# ESLint Code Explorer

## Overview

This repository contains the source code for the ESLint [Code Explorer](https://explorer.eslint.org). Code Explorer is designed to help developers explore and understand source code to aid in the creation of custom ESLint rules. Each language supported by Code Explorer exposes the same information that ESLint rules have access to.

At a minimum, each language displays the AST for any code that is entered into the editor. You can toggle different parser settings for each language to see how that affects the AST. For JavaScript, you also get to see scope and code path information.

## Installation

To install and set up the project, follow these steps:

1. Ensure you have Node.js v24 or later installed. You can download it from the [official Node.js website](https://nodejs.org/).
2. Clone the repository to your local machine.
3. Install the project dependencies using npm - `npm install`.
4. Install Playwright browsers if you plan to run the E2E tests: `npx playwright install --with-deps`.

This will install all the necessary packages and dependencies required to run the project.

Once the installation is complete, you can proceed to the next…
