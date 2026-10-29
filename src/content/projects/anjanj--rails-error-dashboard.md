---
repo: "AnjanJ/rails_error_dashboard"
name: "rails_error_dashboard"
description: "Self-hosted error tracking for Rails - zero recurring cost, full data ownership."
readmeQualityOk: true
url: "https://github.com/AnjanJ/rails_error_dashboard"
homepage: "https://anjanj.github.io/rails_error_dashboard/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [87]
topics: ["error-monitoring", "open-source", "rails", "ruby", "self-hosted", "error-dashboard", "bug-tracking", "devtools", "error-reporting", "error-tracking"]
stars: 94
forks: 10
openIssues: 18
closedIssues: 64
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-12-24T04:28:16Z"
lastCommitAt: "2026-10-29T05:50:34Z"
lastReleaseAt: "2025-12-31T23:05:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 42
maintainers: ["AnjanJ", "github-actions[bot]", "Maxime-Quesnel"]
openGraphImageUrl: "https://opengraph.githubassets.com/783cd070609d78806ebab8d6618f055796a4936564b6c9ebff1dbf47f0e546e2/AnjanJ/rails_error_dashboard"
fundingLinks: ["GITHUB:https://github.com/AnjanJ", "BUY_ME_A_COFFEE:https://buymeacoffee.com/anjanj"]
discussionCount: 7
---

# Rails Error Dashboard

**Rails-native error tracking for failure investigation — see the Ruby state and Rails runtime health behind every exception. Self-hosted, inside your app, in your own database. The gem is MIT and free forever.**

```ruby
gem "rails_error_dashboard"
```

```bash
bundle install
rails generate rails_error_dashboard:install
rails db:migrate
```

Open `/red`, then send a test error from its Settings page. No monitoring account or ingestion service is required.

[Try the live demo](https://rails-error-dashboard.anjan.dev) (`gandalf` / `youshallnotpass`) · [Read the documentation](https://anjanj.github.io/rails_error_dashboard/) · [View on RubyGems](https://rubygems.org/gems/rails_error_dashboard)

> **Beta:** RED is functional and extensively tested, but configuration and APIs may change before 1.0. Supports Rails 7.0–8.1 and Ruby 3.2–4.0 (CI runs every Ruby from 3.2 to 4.0 against every supported Rails version).

## See the Ruby state and Rails runtime health behind every exception

Rails Error Dashboard (RED) is an open-source, self-hosted Rails engine for investigating production failures. It helps you answer not only **what failed**, but **what was…
