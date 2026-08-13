---
repo: "DocSpring/logstruct"
name: "logstruct"
description: "Zero-config, type-safe JSON logging for Ruby on Rails apps."
readmeQualityOk: true
url: "https://github.com/DocSpring/logstruct"
homepage: "https://logstruct.com"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
topics: ["cloudwatch", "cloudwatch-logs", "cloudwatch-metrics", "json-logging", "logger", "logger-middleware", "logging", "rails", "structured-logging", "ruby"]
stars: 30
forks: 3
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-01T03:19:00Z"
lastCommitAt: "2026-08-13T05:17:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 33
maintainers: ["ndbroadbent"]
openGraphImageUrl: "https://opengraph.githubassets.com/23b042184949fdb5e25ef582d05a6eca153c4465b7dc6c47d436408f4dd80eb5/DocSpring/logstruct"
---

# LogStruct

Adds secure JSON structured logging to any Rails app (>= 7.1). Simply add the gem to your Gemfile and add an initializer to configure it. By default, your Rails app prints JSON logs to STDOUT (or to the configured destination when `RAILS_LOG_TO_STDOUT` is set). They're easy to search and filter, you can turn them into metrics and alerts, and they're great for building dashboards in CloudWatch, Grafana, or Datadog.

We support all your other favorite gems too, like Sidekiq, Sentry, and Shrine. (And if not, please open a PR!)

## Features

- JSON logging enabled by default for server processes in production and test environments (automatically disabled for console and other Rake tasks)
- ActionMailer integration for email delivery logging
- ActiveJob integration for job execution logging
- Sidekiq integration for background job logging
- Shrine integration for file upload logging
- Error handling and reporting
- Metadata collection for rich context
- Lograge integration for structured request logging
- Sensitive data scrubbing for strings (inspired by the Logstop gem)
- Host authorization logging for security violations
- Rack middleware for enhanced error logging
-…
