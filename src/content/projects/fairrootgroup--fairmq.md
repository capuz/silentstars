---
repo: "FairRootGroup/FairMQ"
name: "FairMQ"
description: "C++ Message Queuing Library and Framework"
readmeQualityOk: true
url: "https://github.com/FairRootGroup/FairMQ"
homepage: "https://fairrootgroup.github.io/FairMQ/"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["fairroot", "fairmq", "zeromq", "shmem", "c-plus-plus"]
stars: 94
forks: 35
openIssues: 27
closedIssues: 128
watchers: 9
contributors: 20
recentReleases: 0
createdAt: "2018-04-10T16:14:55Z"
lastCommitAt: "2026-06-10T17:31:19Z"
lastReleaseAt: "2022-07-11T07:26:30Z"
status: "at_risk"
tags: ["solo_builder", "legacy_hero"]
healthScore: 59
undervaluedScore: 29
maintainers: ["dennisklein", "rbx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7369f30ff701536340b51483c558e8608baa6ec0c7185e887bb5a057bd46e1bd/FairRootGroup/FairMQ"
discussionCount: 4
---

# FairMQ

C++ Message Queuing Library and Framework

Docs: [Book](https://github.com/FairRootGroup/FairMQ/blob/dev/README.md#documentation)

Find all FairMQ releases [here](https://github.com/FairRootGroup/FairMQ/releases).

## Introduction

FairMQ is designed to help implementing large-scale data processing workflows needed in next-generation Particle Physics experiments. FairMQ is written in C++ and aims to
  * provide **an asynchronous message passing abstraction** of different data transport technologies,
  * provide a reasonably **efficient data transport** service (zero-copy, high throughput),
  * be **data format agnostic**, and
  * provide **basic building blocks** that can be used to implement higher level data processing workflows.

The core of FairMQ provides an abstract asynchronous message passing API with scalability protocols
inspired by [ZeroMQ](https://github.com/zeromq/libzmq) (e.g. PUSH/PULL, PUB/SUB).
FairMQ provides multiple implementations for its API (so-called "transports",
e.g. `zeromq` and `shmem` (latest release of the `ofi` transport in v1.4.56, removed since v1.5+)) to cover
a variety of use cases
(e.g. inter-thread, inter-process, inter-node…
