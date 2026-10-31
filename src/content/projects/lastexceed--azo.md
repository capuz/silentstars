---
repo: "LastExceed/azo"
name: "azo"
description: "Re-implementation of ASIO (Audio Stream Input/Output)"
readmeQualityOk: true
url: "https://github.com/LastExceed/azo"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["lib", "audio"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2025-02-27T10:00:57Z"
lastCommitAt: "2026-10-23T16:13:53Z"
lastReleaseAt: "2026-10-14T19:33:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 92
maintainers: ["LastExceed", "HEnquist", "singularpoint"]
openGraphImageUrl: "https://opengraph.githubassets.com/291a88279dd8e091e459be8fa7e2e46279d0012fdce409ad99861f7fb35fc2d8/LastExceed/azo"
discussionCount: 2
---

# azo

A library for interacting with ASIO (Audio Stream Input/Output) drivers.

### Not an `ASIO SDK` Wrapper

For Rust bindings to the official [ASIO SDK by Steinberg](https://www.steinberg.net/developers/prorietary-sdk/), see the [`asio-sys`](https://crates.io/crates/asio-sys) crate instead.

`azo` does not use the SDK, it instead accesses the underlying COM objects exposed by the drivers directly.

### Cargo Features

* `undocumented` - Include message selectors not mentioned in the ASIO specification

* `host` - Use this if you are not familiar with COM, but
  * care about correctness a lot
  * need to access driver instances from multiple threads

### Getting Started

1. Discover drivers registered in the system via `driver::Metadata::enumerate()`
2. Instanciate the driver(s) via `driver::SafeHandle::new()`
3. Initialize the driver instance via `.init()`
4. ???
5. Profit.

See also the `/examples` provided.
