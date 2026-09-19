---
repo: "ruby-amqp/march_hare"
name: "march_hare"
description: "Idiomatic, fast and well-maintained JRuby client for RabbitMQ"
readmeQualityOk: true
url: "https://github.com/ruby-amqp/march_hare"
homepage: "https://github.com/ruby-amqp/march_hare/tree/main/docs/guides"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [98]
topics: ["rabbitmq", "ruby", "jruby", "messaging", "amqp0-9-1"]
stars: 99
forks: 42
openIssues: 4
closedIssues: 84
watchers: 6
contributors: 29
recentReleases: 0
createdAt: "2011-05-20T07:29:33Z"
lastCommitAt: "2026-09-19T02:47:54Z"
lastReleaseAt: "2025-09-11T23:19:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 35
maintainers: ["michaelklishin"]
openGraphImageUrl: "https://opengraph.githubassets.com/113de632adc97bb41843d82bb0625919741ddcf30f4eaf2bd1067b41b6158bda/ruby-amqp/march_hare"
discussionCount: 1
---

# March Hare, a JRuby RabbitMQ Client

March Hare is an idiomatic, fast and well-maintained (J)Ruby DSL on top of the [RabbitMQ Java client](https://www.rabbitmq.com/client-libraries/java-api-guide). 

It strives to combine strong parts of the Java client with over many years of experience with other client libraries,
both for Ruby and other languages.

## Why March Hare

 * Concurrency support on the JVM is excellent, with many tools & approaches available. Lets make use of it.
 * RabbitMQ Java client is rock solid and supports every RabbitMQ feature. Very nice.
 * It is screaming fast thanks to all the heavy duty being done in the pretty efficient & lightweight Java code.
 * It uses synchronous APIs where it makes sense and asynchronous APIs where it makes sense. Some other [Ruby RabbitMQ clients](https://github.com/ruby-amqp)
   only use one or the other.
 * [amqp gem](https://github.com/ruby-amqp/amqp) has certain amount of baggage it cannot drop because of backwards compatibility concerns. March Hare is a
   clean room design, much more open to radical new ideas.

## What March Hare is not

March Hare is not

 * A replacement for the RabbitMQ Java client
 * A replacement for…
