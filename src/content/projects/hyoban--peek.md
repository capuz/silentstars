---
repo: "hyoban/peek"
name: "peek"
description: "A native git diff viewer for macOS, with Codex-written commits and code reviews, built in Go with MyGo"
readmeQualityOk: true
url: "https://github.com/hyoban/peek"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-24T15:56:10Z"
lastCommitAt: "2026-10-25T08:38:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 39
maintainers: ["hyoban"]
openGraphImageUrl: "https://opengraph.githubassets.com/80a42044b8281cf61635d0b4b1cb676f34eb0a242d6ccf3877f97e88b4a5979a/hyoban/peek"
fundingLinks: ["GITHUB:https://github.com/hyoban", "CUSTOM:https://afdian.com/a/hyoban"]
---

# Peek

A native git diff viewer for macOS, built in Go with [MyGo](https://github.com/egoist/mygo).

Open a repository and peek at its history: what each commit changed, the uncommitted changes in the work tree, and every file as the commit has it. Repositories open in one window, switched from the project's name in the toolbar, and it refreshes as the repository changes.

## Changes

The files the chosen commit changes, with its message above their diffs stacked one after another, and the history at the right.

## Files

All of the commit's files, to read any of them as it was then.

## Features

- The uncommitted changes always at the top of the history
- Changed files grouped into code, tests, docs and lockfiles or generated files, with their added and deleted lines, and each diff marked viewed once read; tests, docs and generated files start folded as viewed, and a viewed diff opens again when chosen in the sidebar
- Filter the sidebar's files by path
- Syntax-highlighted diffs, with unmodified lines and imports folded away, unified or side by side
- Step through the changes of all the files with Next and Previous Change
- Select lines by their numbers to copy a reference to…
