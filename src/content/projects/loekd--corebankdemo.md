---
repo: "loekd/CoreBankDemo"
name: "CoreBankDemo"
description: "Demo app for talks about resillient / mission critical software. Featuring design patterns like retry, inbox, outbox. Featuring tools like Aspire, K6, DevProxy."
readmeQualityOk: true
url: "https://github.com/loekd/CoreBankDemo"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T12:10:49Z"
lastCommitAt: "2026-09-12T08:04:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 27
maintainers: ["loekd"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fa0b3ff5aeb82651a536a57f0d5849e910987ed21924aa1b0f2fe847a8e9bf1/loekd/CoreBankDemo"
---

# CoreBankDemo

A runnable reference implementation of **exactly-once payment processing** across two services that
fail independently. It is a working distributed system — .NET 10, .NET Aspire, PostgreSQL, Dapr,
Redis and OpenTelemetry — built to show what it actually takes to not lose, duplicate, or reorder a
payment when the network, the downstream, or a process goes away mid-flight.

Everything runs locally with one command. Nothing here talks to a real bank.

## What it demonstrates

| Concern | How it is solved here |
|---|---|
| Don't lose a request during an outage | **Transactional Outbox** — the payment is committed to `paymentsdb` in the same transaction that records the intent to forward it (ADR-002) |
| Don't charge twice | **Idempotent Inbox** — every command is stored and de-duplicated on its idempotency key *before* any business logic runs (ADR-001) |
| Don't reorder a customer's payments | **Partitioned processing** — messages are hashed onto 4 fixed partitions; one worker holds one partition at a time, so ordering holds per key while partitions run in parallel (ADR-004, ADR-010) |
| Scale out without two workers racing | **Renewable Redis leases** —…
