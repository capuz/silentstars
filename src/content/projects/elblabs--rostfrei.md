---
repo: "elbLabs/rostfrei"
name: "rostfrei"
description: "Rust framework for event-sourced applications, with durable commands, NATS messaging, and visual testing and tracing."
readmeQualityOk: true
url: "https://github.com/elbLabs/rostfrei"
homepage: "https://elblabs.github.io/rostfrei/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["behavior-driven-development", "cqrs", "domain-driven-design", "event-driven", "event-sourcing", "jetstream", "nats", "rust", "rust-framework"]
stars: 7
forks: 0
openIssues: 14
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-08-26T11:49:05Z"
lastCommitAt: "2026-11-20T12:02:56Z"
lastReleaseAt: "2026-11-19T12:36:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 52
maintainers: ["RichardSto", "418j"]
openGraphImageUrl: "https://opengraph.githubassets.com/d529e80408631e80ff6046c1f63d3122a579f8f6be8706ee2831d273e6286550/elbLabs/rostfrei"
---

Business rules stay in ordinary Rust. rostfrei connects them to durable commands,
atomic event transactions, messaging, and read models with Tracer to inspect the results.

## Use the framework

One dependency, with the adapters you need:

```toml
[dependencies]
rostfrei = { version = "0.2.3", features = ["nats", "tracer"] }
```

Install the development CLI separately:

```sh
cargo install --locked --version 0.2.3 rostfrei-structure
```

See [framework setup](https://github.com/elbLabs/rostfrei/blob/HEAD/docs/getting-started.mdx#one-framework-dependency) for
features, imports, and test dependencies. **0.2 APIs are evolving**;
read the [upgrade guide](https://github.com/elbLabs/rostfrei/blob/HEAD/docs/getting-started.mdx#upgrading-from-01) for existing applications.
