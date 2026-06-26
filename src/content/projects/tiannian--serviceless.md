---
repo: "tiannian/serviceless"
name: "serviceless"
description: "An simple actor model in rust, like actix"
url: "https://github.com/tiannian/serviceless"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-09-11T17:51:42Z"
lastCommitAt: "2026-06-26T06:48:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 59
maintainers: ["tiannian"]
openGraphImageUrl: "https://opengraph.githubassets.com/102fca3a00fb5203a1bf81bbdbb6a8d7fe18ebd5f8173061593fe993c8527bcb/tiannian/serviceless"
---

# Serviceless

Serviceless is a small **async actor** library for Rust, inspired by Actix-style APIs but kept
minimal: one mailbox per [`Service`], fully async handlers, and addresses for typed messaging plus
optional **topic** notifications.

The implementation of this crate does not use `unsafe`.

## Features

- **Async actors** — Each service runs a mailbox loop; `started` / `stopped` hooks and
  [`Handler::handle`](https://docs.rs/serviceless/latest/serviceless/trait.Handler.html) are
  `async` (use the [`async_trait`](https://docs.rs/async-trait) crate).
- **Typed messages** — Implement [`Message`](https://docs.rs/serviceless/latest/serviceless/trait.Message.html)
  and [`Handler`](https://docs.rs/serviceless/latest/serviceless/trait.Handler.html) for your own
  types instead of manual routing tables.
- **`call` and `send`** — [`ServiceAddress::call`](https://docs.rs/serviceless/latest/serviceless/struct.ServiceAddress.html#method.call)
  awaits `M::Result`; [`send`](https://docs.rs/serviceless/latest/serviceless/struct.ServiceAddress.html#method.send)
  enqueues work and drops the handler return value.
- **Topics (pub/sub-style)** —…
