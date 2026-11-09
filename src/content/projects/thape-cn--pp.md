---
repo: "thape-cn/pp"
name: "pp"
description: "Do people performance evaluation without Vendor/SaaS cost."
readmeQualityOk: true
url: "https://github.com/thape-cn/pp"
language: "HTML"
languages: ["HTML", "Ruby"]
languagePcts: [54, 39]
topics: ["rails", "rails-application"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-19T06:19:29Z"
lastCommitAt: "2026-11-09T04:34:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 77
maintainers: ["Eric-Guo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b5a712d4858d61ecf2a378c789e1d7d29cfb1d72f30bea1f5c0628f558842af/thape-cn/pp"
---

# a People Performance system

## How to Start (or Restart) Development?

Traditionally, you would run `bin/setup`, but the following steps will get you started more quickly.

```bash
bin/rails db:migrate
RAILS_ENV=development bin/rails db:fixtures:load
bin/rails server # login as guochunzhong@thape.com.cn / pp_rocks
```

## Development Notes

### Background report exports

All Excel reports and evaluation PDF downloads run in Sidekiq. Apply the migration
with `bin/rails db:migrate` and restart the web and Sidekiq processes when deploying.
For local development, start Redis and run `bundle exec sidekiq` alongside `bin/dev`.
The Sidekiq initializer starts a `reports` capsule with one worker per process to
limit workbook memory use while keeping the default queue available for other jobs.
Set the Sidekiq process's database pool (`RAILS_MAX_THREADS`) to at least its total
worker concurrency (6 with the default 5 workers plus the report worker).

Export requests return a status page immediately. Users can revisit their latest
100 requests through **My exports**, download completed files, and retry failed
requests. Jobs apply the requesting user's current permissions and language.…
