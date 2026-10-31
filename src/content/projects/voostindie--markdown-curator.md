---
repo: "voostindie/markdown-curator"
name: "markdown-curator"
description: "Java 25+ library/application framework for monitoring repositories of Markdown documents, running queries on them, and inserting the output back into the documents."
readmeQualityOk: true
url: "https://github.com/voostindie/markdown-curator"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "markdown", "obsidian"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-05-12T17:22:13Z"
lastCommitAt: "2026-10-31T07:36:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 58
maintainers: ["voostindie"]
openGraphImageUrl: "https://opengraph.githubassets.com/92e96370830d03d9f413c571831997233cbfdb2c9d849a91bc06008ea83b727f/voostindie/markdown-curator"
---

# Markdown Curator

## TL;DR

- This is a Java 25+ library and small application framework for processing directories of Markdown documents.
- It is especially well suited for [Obsidian](https://obsidian.md) vaults and [iA Writer](https://ia.net/writer) libraries. More generally: for Markdown-based wikis that use wikilinks to link to other documents in the same wiki.
- It detects queries in the documents, executes them, and writes back the results in the documents themselves.
- It extracts information out of documents as properties and writes them into documents as front matter.
- As an application, it monitors and processes directories and files in the background.
- As an application,  optionally, it runs an HTTP server that exposes the curators, documents, and queries for use in local automation.

Even shorter: this tool allows you to keep your static content [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

## The 5-minute introduction

This is a Java library and application framework that spins up a daemon. This daemon monitors one or more wikis: directories of Markdown documents like [Obsidian](https://obsidian.md) vaults or [iA Writer](https://ia.net/writer)…
