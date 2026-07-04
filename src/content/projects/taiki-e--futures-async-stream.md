---
repo: "taiki-e/futures-async-stream"
name: "futures-async-stream"
description: "Async stream for Rust and the futures crate."
url: "https://github.com/taiki-e/futures-async-stream"
homepage: "https://docs.rs/futures-async-stream"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["rust", "asynchronous", "proc-macro", "no-std"]
stars: 192
forks: 9
openIssues: 3
closedIssues: 13
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2019-07-31T13:41:14Z"
lastCommitAt: "2026-07-04T19:20:12Z"
lastReleaseAt: "2019-12-10T05:10:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 26
maintainers: ["taiki-e", "dependabot[bot]", "BugenZhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0775d5fd5d5865d5bb428e77d6168e38ba65d1898f11b2956b648481a42c1fe/taiki-e/futures-async-stream"
fundingLinks: ["GITHUB:https://github.com/taiki-e"]
---

# futures-async-stream

Async stream for Rust and the futures crate.

This crate provides useful features for streams, using `async_await` and
unstable [`coroutines`](https://github.com/rust-lang/rust/issues/43122).

## Usage

Add this to your `Cargo.toml`:

```toml
[dependencies]
futures-async-stream = "0.2"
futures = "0.3"
```

*Compiler support: requires rustc nightly-2024-04-25+*

## `#[for_await]`

Processes streams using a for loop.

This is a reimplement of [futures-await]'s `#[async]` for loops for
futures 0.3 and is an experimental implementation of [the idea listed as the
next step of async/await](https://rust-lang.github.io/rfcs/2394-async_await.html#for-await-and-processing-streams).

```rust
#![feature(proc_macro_hygiene, stmt_expr_attributes)]

use futures::stream::Stream;
use futures_async_stream::for_await;

async fn collect(stream: impl Stream<Item = i32>) -> Vec<i32> {
    let mut vec = vec![];
    #[for_await]
    for value in stream {
        vec.push(value);
    }
    vec
}
```

`value` has the `Item` type of the stream passed in. Note that async for
loops can only be used inside of `async` functions, closures, blocks,
`#[stream]` functions and `stream_block!`…
