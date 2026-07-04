---
repo: "simple-java-mail/smtp-connection-pool"
name: "smtp-connection-pool"
description: "Lightweight SMTP connection pool with clustering support, wait/release mechanism, connection lifecycle management, eager/lazy loading pool with load balancing and auto-expiry policy support"
readmeQualityOk: true
url: "https://github.com/simple-java-mail/smtp-connection-pool"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["connection-pool", "smtp", "transport", "concurrency", "high-performance", "pool", "java"]
stars: 13
forks: 8
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-06-06T13:51:21Z"
lastCommitAt: "2026-07-04T23:13:30Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 46
maintainers: ["bbottema"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7b3060372457cba3b785941a7fb1f6993a61af459e9fc2145a6bb32846d87f6/simple-java-mail/smtp-connection-pool"
---

# smtp-connection-pool

smtp-connection-pool is an ultra lightweight SMTP connection pool with clustering support, claim/wait/release mechanism, 
connection lifecycle management, eager/lazy loading pool with auto-expiry policy support.

This library does *not* take care of creating or sending emails; it just pools (hot) reusable Transport instances using Session
instances provided by the user.

This SMTP connection pool is used by Simple Java Mail, which offers a complete solution to creating, converting and sending emails.

## about

This library aims to improve performance for sending emails using Java Mail (now Jakarta Mail).

It represents three improvements over usual manual `Session.getTransport().connect()` approach:
   
   1. Support Transport (open) connection reuse over multiple threads
   2. Implement an SMTP connection pool so we have multiple reusable Transport connections (including lazy / eager initialization)
   3. Take performance to the next level and support clustered SMTP servers, so you can really scale up SMPT servers if your use-case requires it.

This library builds on top of [clustered-object-pool](https://github.com/bbottema/clustered-object-pool).…
