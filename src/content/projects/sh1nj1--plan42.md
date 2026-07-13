---
repo: "sh1nj1/plan42"
name: "plan42"
description: "A tracker of your creatives.  Your creativeness is coming!"
readmeQualityOk: true
url: "https://github.com/sh1nj1/plan42"
homepage: "https://collavre.com"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [64, 24]
topics: ["ai", "chat", "collaboration", "docs", "notion-alternative", "planning", "project-management", "self-hosted", "task"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-22T08:56:15Z"
lastCommitAt: "2026-07-13T06:38:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["sh1nj1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/206e402c7bee0d128126a804cc3a7bdea586ea72394446a9291129d63785cb76/sh1nj1/plan42"
---

# Collavre

A tracker of your creatives.

Your creativeness is coming!

Collavre is an experimental project for small development teams to provide a unified platform for knowledge, task management, and chat communication with AI Agents.
The Creative in Collavre represents a tree-like todo list that can serve as a documentation block, task, or chat.

DEMO: [https://collavre.com](https://collavre.com)

* [Features](https://github.com/sh1nj1/plan42/blob/HEAD/docs/features_summary.md)

## Getting Started

[Ruby on Rails getting started document](https://github.com/sh1nj1/ror_getting_started/blob/main/getting_started.md)

### Local Development

* install mise and install ruby
  `mise install`
* install nvm and install node
  `nvm install`
* `bundle install`
* `./bin/rails db:prepare`
* `./bin/rails db:seed`
* `brew install vips` # for image processing (macOS)
* `./script/install-hooks.sh` # install git hooks (pre-push checks)
* `bin/rails server` - Start the Rails server. When `SOLID_QUEUE_IN_PUMA` is set, the background job processor and scheduler run alongside the server. The `bin/dev` script sets this variable automatically in development.

### Git Hooks

The pre-push hook…
