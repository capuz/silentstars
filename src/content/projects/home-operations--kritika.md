---
repo: "home-operations/kritika"
name: "kritika"
description: "Repository-aware AI pull request reviewer for GitHub"
readmeQualityOk: true
url: "https://github.com/home-operations/kritika"
homepage: "https://kritika.home-operations.com/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["0ver", "code-review", "github", "kubernetes", "llm", "pull-request", "vectorchord"]
stars: 15
forks: 1
openIssues: 5
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-09-24T23:09:16Z"
lastCommitAt: "2026-10-02T09:59:46Z"
lastReleaseAt: "2026-10-02T01:53:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["onedr0p", "sticky-gecko[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75cef81ad4cfe5ecf6051a978d50758429b028e501ec34f7292dfc141376ef0/home-operations/kritika"
---

# kritika

**Repository-aware AI pull request review for GitHub.**

</div>

> [!WARNING]
> kritika is not production ready. It is under active development and has no
> release yet: configuration, the database schema and the APIs change without
> notice, and there is no upgrade path from one commit to the next.

kritika indexes a repository, reviews each pull request against that context,
posts one sticky summary comment plus inline findings and a commit status, and
answers follow-ups when the bot is @-mentioned. A pull request from a fork is
reviewed when a maintainer asks with `@<bot> review`. One deployment serves any
number of forge accounts, and every index and review job runs in its own
Kubernetes Job pod that holds no secrets.

📖 **Docs site: <https://kritika.home-operations.com/>**: setup, the
configuration file, repository settings, chart values, the dashboard,
metrics and development.

## Features

- **Context beyond the diff.** Whole declarations the diff touches,
  definitions of identifiers on changed lines and callers of changed
  declarations, cut by tree-sitter, plus the most similar chunks from a
  VectorChord index of the default branch, and the issues the…
