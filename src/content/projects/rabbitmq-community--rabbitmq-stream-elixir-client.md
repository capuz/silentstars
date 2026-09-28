---
repo: "rabbitmq-community/rabbitmq-stream-elixir-client"
name: "rabbitmq-stream-elixir-client"
description: "Elixir Client for RabbitMQ Streams Protocol."
readmeQualityOk: true
url: "https://github.com/rabbitmq-community/rabbitmq-stream-elixir-client"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
topics: ["client", "elixir", "rabbitmq", "rabbitmq-streams"]
stars: 29
forks: 4
openIssues: 5
closedIssues: 8
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2022-05-12T01:27:44Z"
lastCommitAt: "2026-09-28T10:06:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 54
maintainers: ["suchitd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f648a124e025602f2bd10ddaaa803602398362e5402ca26eed4ab7020a27536/rabbitmq-community/rabbitmq-stream-elixir-client"
discussionCount: 1
---

# RabbitMQStream

Elixir Client for [RabbitMQ Streams Protocol](https://www.rabbitmq.com/streams.html).

## Overview

RabbiMQ 3.9 introduced the [Streams](https://www.youtube.com/watch?v=PnmGoMiaJhE) as an alternative to Queues, but differs mainly by implementing a ["non-destructive consumer semantics"](https://www.rabbitmq.com/docs/streams#overview). A consumer can read the messages starting at any offset, while receiving new messages.

While this feature is avaiable when using the existing Queues, it shines when used with its dedicated protocol, that allows messages to be consumed [extremelly fast](https://youtu.be/PnmGoMiaJhE?si=oHBaa6ml1dGewuvT&t=1125), in comparisson to Queues.

This library aims to be a Client for the [Streams Protocol](https://www.rabbitmq.com/docs/stream), managing connections and providing an idiomatic way of interacting with all the features avaiable for this functionallity.

## Features

- Producing and Consuming from Streams
- [Offset Tracking](https://www.rabbitmq.com/blog/2021/09/13/rabbitmq-streams-offset-tracking) and [Control Flow](https://www.rabbitmq.com/docs/stream#flow-control)(Credits) helpers
- [Stream…
