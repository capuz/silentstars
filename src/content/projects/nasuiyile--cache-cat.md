---
repo: "nasuiyile/cache-cat"
name: "cache-cat"
description: " A high-performance, highly available, and strongly consistent cache library"
readmeQualityOk: true
url: "https://github.com/nasuiyile/cache-cat"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 92
forks: 13
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-13T11:11:39Z"
lastCommitAt: "2026-07-19T06:13:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["nasuiyile", "XCXUnkind"]
openGraphImageUrl: "https://opengraph.githubassets.com/c910549cb44062bdc27fdda4f5e03192a3b847fbcf2a6cc41ee5ab97b8cbf358/nasuiyile/cache-cat"
---

# Cache-Cat

</div>

## Introduction

Cache-Cat is a high-performance key-value cache library that leverages the Raft consensus protocol to provide both high availability and strong consistency.

The goal of Cache-Cat is to build an extremely high-performance cache framework with disaster recovery capabilities based on Raft. Unlike traditional cache systems such as Redis and Memcached, Cache-Cat is designed to ensure that committed data is never lost.

In terms of positioning, the most comparable project is [RedisRaft](https://github.com/RedisLabs/redisraft?utm_source=chatgpt.com), which enables Redis instances to form a strongly consistent Raft cluster. However, RedisRaft is primarily a laboratory and research project.

> Even when Redis cluster solutions are used, Redis can still lose data. Redis clustering primarily addresses availability rather than data consistency.

Compared with systems such as etcd, Apache ZooKeeper, Consul, and TiKV, which also rely on consensus algorithms and provide reliable data storage, Cache-Cat offers significantly lower latency and higher throughput. Under the same environment and default configurations, Cache-Cat can achieve approximately 500,000…
