---
repo: "lonewolf-im/lonewolf"
name: "lonewolf"
description: "XMPP with teeth 🐺"
readmeQualityOk: true
url: "https://github.com/lonewolf-im/lonewolf"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["async-rust", "chat-server", "instant-messaging", "rust", "self-hosted", "xmpp", "xmpp-protocol", "xmpp-server"]
stars: 6
forks: 0
openIssues: 4
closedIssues: 252
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-17T07:19:03Z"
lastCommitAt: "2026-11-02T13:38:22Z"
lastReleaseAt: "2026-10-27T17:11:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["ortuman", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b53b5765f6eb9ced8665473ae3b93295c8fc1cd64812004d297d5b005a2d5/lonewolf-im/lonewolf"
---

alt="lonewolf"
       width="25%">

Lonewolf is a self-hosted [XMPP](https://xmpp.org/) server written in Rust. It's
meant to be easy to set up, cheap to run, and able to grow into a cluster when you
need one.

> [!NOTE]
> Lonewolf is early, pre-1.0 software. Today it hosts chat between accounts on
> the domains you run. Federation with other XMPP servers is in progress, and
> clustering comes later.
>
> Most of Lonewolf's code, tests and docs are written with AI coding agents. The
> maintainer sets the design and scope and reviews the changes.

## Why Lonewolf?

- **Easy to run.** One binary with embedded storage. There's no database server
  to install, and a local test server needs two lines of config.
- **Light on resources.** It's native Rust and frugal with memory and CPU.
- **Standards first.** It follows the core XMPP RFCs closely, so standard
  clients behave the way you'd expect.
- **Limits you can see.** Connections, stanzas, rates and resources all have
  configurable limits, so one misbehaving client can't take your server down.

## What works today

- Chat between accounts on any domain you host, with several devices per account
- Contact lists, presence…
