---
repo: "stepchowfun/mull"
name: "mull"
description: "Structured note-taking in a plain text file. 📖"
readmeQualityOk: true
url: "https://github.com/stepchowfun/mull"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 37
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-17T07:28:53Z"
lastCommitAt: "2026-10-28T09:57:11Z"
lastReleaseAt: "2026-09-19T17:29:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["stepchowfun"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c8d1daa431eeefdf8078f566551dbcf70d6f4e93b6330890a7b0a535b7c24a/stepchowfun/mull"
---

# Mull 📖

*Mull* is a tool for structured note-taking in a plain text file, inspired by the classic experience of writing code in an IDE. The file is divided into pages, which are linked together like a wiki. Mull enforces a simple connectivity rule to help keep things organized. It has a [Visual Studio Code](https://code.visualstudio.com/) / [Cursor](https://cursor.com/) extension which provides syntax highlighting, hover previews, completions, diagnostics, formatting, and refactoring.

## A quick tour

### Pages and links

A *wiki* is a text file with a `.mull` extension. It contains *pages* which link to each other, all in the same file. Here's a little wiki with 3 pages:

```md
# Home

My go-to breakfast is [Pancakes] with fresh [Lemons].

# Lemons

Great on [Pancakes].

# Pancakes

- 1 cup of flour
- 1 cup of milk
- 1 egg
- A squeeze of [Lemons]
```

Each page starts with a `# Title`, followed by the contents of the page. To link to a page, use square brackets like `[Lemons]`.

A wiki starts with a `Home` page. Mull requires that every other page is *reachable* (directly or indirectly) by following links, starting from `Home`. This rule promotes a basic form of organization…
