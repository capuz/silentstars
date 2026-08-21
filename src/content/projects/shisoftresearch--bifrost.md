---
repo: "ShisoftResearch/bifrost"
name: "bifrost"
description: "Pure rust building block for distributed systems"
readmeQualityOk: true
url: "https://github.com/ShisoftResearch/bifrost"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["raft", "rpc", "rust-library", "data-structrues", "distributed-systems", "consensus", "rust"]
stars: 173
forks: 19
openIssues: 1
closedIssues: 0
watchers: 12
contributors: 2
recentReleases: 0
createdAt: "2016-11-06T20:19:15Z"
lastCommitAt: "2026-08-21T04:11:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 29
maintainers: ["shisoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/dedfe15542b5d35086660d86ad1f1010083d23c6629c602e87b7915ac8b9b373/ShisoftResearch/bifrost"
---

# bifrost 

Pure rust building block for distributed systems

### Objective

The objective of bifrost is to build a solid foundation for distributed systems in rust.
It is similar to one of my Clojure project [cluster-connecter](https://github.com/shisoft/cluster-connector), but no longer require any third-party software like Zookeeper or etcd. 
Bifrost will ship with it's own reliable data store based on [raft consensus algorithm](https://raft.github.io/) state machines. Users are also able to build their own reliable data structures by implementing state machine commands.  

**Bifrost is still in very early stage of development and it is not suggested to be used in any kinds of projects until it is stabilized and fully tested** 

### Progress Check List

- [ ] RPC
    - [x] TCP Server
    - [x] Protocol
    - [x] Event driven server
    - [x] Sync client
    - [x] Async client
    - [X] Multiplexing pluggable services
    - [X] Shortcut (for both TCP and RPC APIs)
- [ ] Raft (data replication)
    - [x] Leader election
    - [x] Log replication
    - [x] Master/subs state machine framework
    - [ ] State machine client
        - [x] Sync
        - [x] PubSub
    - [ ] Master…
