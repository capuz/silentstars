---
repo: "superdurable/dex"
name: "dex"
description: "Durable Execution (D-EX) framework forked from iWF of IndeedEng by the creator. Dex is No Replay, Zero Dependencies."
readmeQualityOk: true
url: "https://github.com/superdurable/dex"
homepage: "https://docs.superdurable.io/"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [40, 29]
stars: 130
forks: 11
openIssues: 68
closedIssues: 82
watchers: 3
contributors: 32
recentReleases: 10
createdAt: "2023-09-07T16:37:07Z"
lastCommitAt: "2026-10-25T22:10:41Z"
lastReleaseAt: "2026-08-07T19:25:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 48
maintainers: ["longquanzheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/73f8dfe42faadb18cdcddf6ea0c6d2cf1b0a266da6e58255b73ec453e5ea620b/superdurable/dex"
---

# Dex - Durable Execution(D-EX)

> ⚠️ **Beta:** Dex's core features are complete and its core APIs are stable. Minor API refinements may still be introduced before general availability.

## Why Durable Execution & Dex
**Durable Execution** provides programming model that makes a process survive any disruptions. 

There are three types of disruptions:
* **Business disruption**
* **External disruption**
* **Internal disruption**
  
Take a simple refund. A customer asks for a refund. A manager approves it. Then the system calls an API to move the money.
But the manager may forget(business discruption). The payment API may be down(external discuprtion). Our own server may restart or has a bug(internal disruption). Then the refund gets stuck, and the business gets hurt. And real refund processes are a hundred times more complex so they have 100 times more disruptions like those.

Dex make every process is a durable execution. Every step is saved, retried, and can wait. If the manager forgets, we send a reminder, or escalate. If the API is down, we keep retrying. If our server restarts, the run picks up right where it stopped.

**Dex** provides a structural programming model with only a…
