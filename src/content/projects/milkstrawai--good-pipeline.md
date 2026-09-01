---
repo: "milkstrawai/good_pipeline"
name: "good_pipeline"
description: "DAG-based job pipeline orchestration for Rails, built on GoodJob."
readmeQualityOk: true
url: "https://github.com/milkstrawai/good_pipeline"
homepage: "https://milkstrawai.github.io/good_pipeline/"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [61, 21]
topics: ["activejob", "postgresql", "rails", "ruby", "ruby-on-rails"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-20T18:42:50Z"
lastCommitAt: "2026-09-01T08:49:14Z"
lastReleaseAt: "2026-04-02T12:30:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 51
undervaluedScore: 7
maintainers: ["AliOsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5a6b10ce65e129acf068d992eb620f8211d72e458321979ae1453d76415985e/milkstrawai/good_pipeline"
---

# GoodPipeline

DAG-based job pipeline orchestration for Rails, built on [GoodJob](https://github.com/bensheldon/good_job).

Define multi-step workflows as directed acyclic graphs — not linear chains. Steps run in parallel when they can and wait for dependencies when they must. GoodPipeline handles dependency resolution, parallel execution, failure strategies, conditional branching, pipeline chaining, and lifecycle callbacks. It also ships with a web dashboard.

## Requirements

- Ruby >= 3.2
- Rails >= 7.2
- PostgreSQL
- GoodJob >= 4.14 with `preserve_job_records = true`

## Installation

Add to your Gemfile:

```ruby
gem "good_pipeline"
```

Then install the migrations:

```bash
bin/rails generate good_pipeline:install
bin/rails db:migrate
```

When upgrading an existing application to GoodPipeline 0.5, add the dashboard indexes before serving a large execution history:

```bash
bin/rails generate good_pipeline:upgrade
bin/rails db:migrate
```

The upgrade generator is idempotent: if its dashboard-index migration already exists, a second invocation reports a no-op instead of creating another file.

GoodPipeline requires GoodJob to preserve job records. Add this to your GoodJob…
