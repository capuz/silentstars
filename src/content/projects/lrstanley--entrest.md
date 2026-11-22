---
repo: "lrstanley/entrest"
name: "entrest"
description: "Extension that generates a compliant OpenAPI spec and server implementation"
readmeQualityOk: true
url: "https://github.com/lrstanley/entrest"
homepage: "https://entrest.dev"
language: "Go"
languages: ["Go", "Go Template"]
languagePcts: [73, 27]
topics: ["ent", "entity-framework", "go", "golang", "orm", "openapi", "openapi3"]
stars: 41
forks: 8
openIssues: 15
closedIssues: 48
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-06-02T17:24:14Z"
lastCommitAt: "2026-11-22T11:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 41
maintainers: ["lrstanley", "lrstanley-x[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/809436745/59867da5-f017-42fc-93ce-2dc6b1d96add"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 1
---

## :link: Table of Contents

  - [Features](#sparkles-features)
  - [Usage](#gear-usage)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :sparkles: Features

**entrest** is an [EntGo](https://entgo.io/) extension for generating compliant OpenAPI
specs and an HTTP handler implementation that matches that spec. It expands upon the
approach used by [entoas](https://github.com/ent/contrib/tree/master/entoas#entoas),
with additional functionality, and pairs the generated specification with a
fully-functional HTTP handler implementation.

- :sparkles: Generates OpenAPI specs for your EntGo schema.
- :sparkles: Generates a fully functional HTTP handler implementation that matches the OpenAPI spec.
- :sparkles: Supports automatic pagination (where applicable).
- :sparkles: Supports advanced filtering (using query parameters, `AND`/`OR` predicates, etc).
- :sparkles: Supports eager-loading edges, so you don't have to make additional calls unnecessarily.
- :sparkles: Supports various forms of sorting.
- :sparkles: And more!

---
