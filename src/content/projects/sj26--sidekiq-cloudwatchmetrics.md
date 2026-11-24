---
repo: "sj26/sidekiq-cloudwatchmetrics"
name: "sidekiq-cloudwatchmetrics"
description: "Publish Sidekiq metrics to AWS CloudWatch"
readmeQualityOk: true
url: "https://github.com/sj26/sidekiq-cloudwatchmetrics"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 80
forks: 50
openIssues: 3
closedIssues: 13
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2016-08-19T08:56:33Z"
lastCommitAt: "2026-11-24T01:59:46Z"
lastReleaseAt: "2025-03-24T00:47:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 33
maintainers: ["ampagent", "sj26"]
openGraphImageUrl: "https://opengraph.githubassets.com/be472b2d410567ea1ce7c138401bce52b50ccaddcf5bdffc279744fbba4d656d/sj26/sidekiq-cloudwatchmetrics"
---

# Sidekiq CloudWatch Metrics

Runs a thread inside your Sidekiq processes to report metrics to CloudWatch
useful for autoscaling and keeping an eye on your queues.

Optimised for Sidekiq Enterprise with leader election, but works everywhere!

## Installation

Add this gem to your application’s Gemfile near sidekiq and then run `bundle install`:

```ruby
gem "sidekiq"
gem "sidekiq-cloudwatchmetrics"
```

## Usage

Add near your Sidekiq configuration, like in `config/initializers/sidekiq.rb` in Rails:

```ruby
require "sidekiq"
require "sidekiq/cloudwatchmetrics"

Sidekiq::CloudWatchMetrics.enable!
```

### Configuration

By default, all metrics are published to CloudWatch. If you want to reduce costs by only publishing specific metrics, you can configure which metrics to enable using an opt-in approach:
