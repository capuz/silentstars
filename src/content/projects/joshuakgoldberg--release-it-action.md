---
repo: "JoshuaKGoldberg/release-it-action"
name: "release-it-action"
description: "Runs release-it as a GitHub Action, with handling for semantic releases and protected branches. 📤"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/release-it-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 10
forks: 2
openIssues: 2
closedIssues: 123
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2023-10-01T17:04:17Z"
lastCommitAt: "2026-11-24T02:01:59Z"
lastReleaseAt: "2025-11-11T16:00:55Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 76
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbdd3140cde45b685984598e624cbb2f1ad246609d906a489a20779c11d005df/JoshuaKGoldberg/release-it-action"
---

Runs release-it as a GitHub Action, with handling for semantic releases and protected branches.
	📤

	
	

	

## Why?

[`release-it`](https://github.com/release-it/release-it) is a great tool for releasing packages.
But running it in CI takes more work than `npx release-it`.
You need to set up Git and npm first.
You probably want safe handling for consecutive branch pushes during your release flow.
And if things go wrong, you want informative error reporting to explain what happened.

This action handles all of that for you.

## What It Does

Each time it runs, the action:

1. Sets up the Git user for release commits
2. Finishes any [earlier release that didn't make it to npm or GitHub releases](#what-happens-when-a-release-gets-pushed-but-not-published), then stops
3. Stops if [`should-semantic-release`](https://github.com/JoshuaKGoldberg/should-semantic-release) says there's nothing to release
4. Runs `npx release-it --verbose`

It also adds in safe handling for common corner cases such as npm being slow to recognize new versions.

## Usage

Run `JoshuaKGoldberg/release-it-action` in a GitHub workflow after building your code:
