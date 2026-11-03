---
repo: "ngudbhav/rails-api-boilerplate"
name: "rails-api-boilerplate"
description: "Ruby on Rails API Boilerplate with OTP Authentication support."
readmeQualityOk: true
url: "https://github.com/ngudbhav/rails-api-boilerplate"
homepage: "https://ngudbhav.github.io/rails-api-boilerplate/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [96]
topics: ["api", "jwt", "mailer", "otp", "rails", "ruby", "sentry", "sidekiq"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-02T16:53:05Z"
lastCommitAt: "2026-11-03T10:51:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 63
maintainers: ["dependabot[bot]", "ngudbhav", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/994901331/99dbccc0-1c6b-49d1-b64d-a6b9dd10e19f"
discussionCount: 0
---

# Rails 8 and Ruby 3.4 API Boilerplate application

## Setup
Ensure that Ruby 3.4 is installed and active in the environment. You can use a version manager like `rbenv` or `rvm` to manage Ruby versions.
This application is built with Rails 8 and uses MySQL as the database.

```bash
git clone https://github.com/ngudbhav/rails-api-boilerplate.git
cd rails-api-boilerplate
bin/setup
```

## Features
- API-only Rails application
- Mobile-first authentication with [OTP](https://github.com/ngudbhav/rails-api-boilerplate/blob/HEAD/lib/otp) and design with [JWT](https://github.com/ngudbhav/rails-api-boilerplate/blob/HEAD/lib/jwt_authenticate.rb)
- Global credentials loader with fail-safe ([lib/credentials.rb](https://github.com/ngudbhav/rails-api-boilerplate/blob/HEAD/lib/credentials.rb))
- [YJIT](https://shopify.engineering/ruby-yjit-is-production-ready) enabled for performance ([lib/enable_yjit.rb](https://github.com/ngudbhav/rails-api-boilerplate/blob/HEAD/config/initializers/enable_yjit.rb))
- Common utilities for API responses ([controllers/concerns/api_response.rb](https://github.com/ngudbhav/rails-api-boilerplate/blob/HEAD/app/controllers/concerns/response.rb))
- Uses…
