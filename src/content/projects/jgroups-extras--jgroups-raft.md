---
repo: "jgroups-extras/jgroups-raft"
name: "jgroups-raft"
description: "Implementation of the Raft consensus protocol in JGroups"
readmeQualityOk: true
url: "https://github.com/jgroups-extras/jgroups-raft"
homepage: "https://jgroups-extras.github.io/jgroups-raft/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["consensus", "distributed-systems", "raft", "raft-algorithm", "raft-protocol"]
stars: 286
forks: 86
openIssues: 9
closedIssues: 150
watchers: 29
contributors: 21
recentReleases: 0
createdAt: "2014-11-07T08:40:56Z"
lastCommitAt: "2026-11-06T12:18:05Z"
lastReleaseAt: "2026-07-24T18:51:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 42
maintainers: ["jabolina", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a591123d6324437cbc4cec6babae9c48668d7b851100acf775549307e669f26/jgroups-extras/jgroups-raft"
discussionCount: 3
---

jgroups-raft
============

jgroups-raft is an implementation of the [Raft](https://raft.github.io/) consensus algorithm in [JGroups](http://jgroups.org/).
Users can use jgroups-raft embedded in their applications to build strongly consistent, highly available, fault-tolerant systems.

## Overview
jgroups-raft is a library offering all the guarantees the Raft algorithm provides, with features including:

* Configurable and alternatives for leader election;
* Dynamic membership changes in single-step;
* Configurable log implementations for storage;
* Member deduplication and request redirection;
* Ready-to-use building blocks.

By building on top of JGroups, jgroups-raft takes advantage of additional features with a mature and battle-tested network stack.
jgroups-raft is [verified with Jepsen](https://github.com/jgroups-extras/jepsen-jgroups-raft) to identify linearizability violations in the building blocks.

## Getting Started

To get started developing with jgroups-raft:

* Take a look at the complete [documentation](https://jgroups-extras.github.io/jgroups-raft/manual/index.html);
* Details about the implementation are available in the [design…
