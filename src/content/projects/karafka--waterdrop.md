---
repo: "karafka/waterdrop"
name: "waterdrop"
description: "Standalone Karafka library for producing Kafka messages"
readmeQualityOk: true
url: "https://github.com/karafka/waterdrop"
homepage: "https://karafka.io"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["waterdrop", "ruby-kafka", "karafka-framework", "karafka", "karafka-application", "kafka", "apache-kafka", "rubygems", "rubygem", "ruby"]
stars: 285
forks: 40
openIssues: 8
closedIssues: 175
watchers: 8
contributors: 18
recentReleases: 0
createdAt: "2015-07-30T15:10:32Z"
lastCommitAt: "2026-10-29T10:36:50Z"
lastReleaseAt: "2021-11-28T17:01:45Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 41
maintainers: ["mensfeld", "coipond-renovate[bot]", "coipond-coder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e631e7e1d6c9df87183adbcf66487d80e8ff502fa30750c202f6702c81a3136d/karafka/waterdrop"
fundingLinks: ["CUSTOM:https://karafka.io/#become-pro"]
---

# WaterDrop

WaterDrop is a standalone gem that sends messages to Kafka easily with an extra validation layer. It is a part of the [Karafka](https://github.com/karafka/karafka) ecosystem.

It:

 - Is thread-safe
 - Supports sync and async producing
 - Supports transactions
 - Supports buffering
 - Supports producing to multiple clusters
 - Supports multiple delivery policies
 - Supports per-topic configuration alterations (variants)
 - Works with [async](https://github.com/socketry/async) gems ecosystem
 - Works with Kafka `1.0+` and Ruby `3.3+`
 - Works with and without Karafka

## Documentation

Karafka ecosystem components documentation, including WaterDrop, can be found [here](https://karafka.io/docs/#waterdrop).

## Getting Started

If you want to both produce and consume messages, please use [Karafka](https://github.com/karafka/karafka/). It integrates WaterDrop automatically.

To get started with WaterDrop:

1. Add it to your Gemfile:

```bash
bundle add waterdrop
```

2. Create and configure a producer:

```ruby
producer = WaterDrop::Producer.new do |config|
  config.deliver = true
  config.kafka = {
    'bootstrap.servers': 'localhost:9092',
    'request.required.acks': 1…
