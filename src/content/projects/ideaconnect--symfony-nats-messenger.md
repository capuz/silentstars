---
repo: "ideaconnect/symfony-nats-messenger"
name: "symfony-nats-messenger"
description: "Symfony NATS Messenger Bridge (with JetStream persistence support)."
readmeQualityOk: true
url: "https://github.com/ideaconnect/symfony-nats-messenger"
language: "PHP"
languages: ["PHP"]
languagePcts: [94]
topics: ["async", "jetstream", "message-queue", "nats", "nats-jetstream", "php", "symfony", "symfony-messenger", "messenger-transport"]
stars: 28
forks: 11
openIssues: 6
closedIssues: 53
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2024-12-17T09:31:34Z"
lastCommitAt: "2026-11-21T11:38:16Z"
lastReleaseAt: "2026-08-09T16:27:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 63
maintainers: ["bpacholek", "matkomat", "petarf-sofascore"]
openGraphImageUrl: "https://opengraph.githubassets.com/177e46c58574bcc3aaa61c132be0d90b29138161114ba597ad89722045f41bd2/ideaconnect/symfony-nats-messenger"
fundingLinks: ["GITHUB:https://github.com/ideaconnect", "BUY_ME_A_COFFEE:https://buymeacoffee.com/idct"]
---

# Symfony NATS Messenger Bridge

A Symfony Messenger transport integration for [NATS JetStream](https://docs.nats.io/nats-concepts/jetstream), enabling reliable asynchronous messaging with persistent message streaming.

## Features

- 🚀 **High-Performance Messaging** - Leverage NATS JetStream for fast, reliable message delivery
- 📦 **Symfony Integration** - Implements Messenger's `TransportInterface`, `MessageCountAwareInterface`, `SetupableTransportInterface`, `KeepaliveReceiverInterface`, and `CloseableTransportInterface`
- ⚙️ **Configurable Consumers** - Support for multiple consumer strategies
- 🔄 **Flexible Batching** - Adjustable message batch sizes and timeouts
- 🔐 **Authentication Support** - User and password, token, NKey and JWT logins (see [NKey Authentication](#nkey-authentication))
- 📊 **Stream Configuration** - Configurable retention policies and replication
- 📍 **Stream Placement** - Pin a stream to a JetStream cluster and to tagged servers; an option you set
  changes only its own half of an existing placement (see [Stream Placement](#stream-placement))
- 🔁 **Automatic Reconnect** - Optional mode in which the NATS client recovers a lost connection and a…
