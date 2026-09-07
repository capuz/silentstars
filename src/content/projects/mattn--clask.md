---
repo: "mattn/clask"
name: "clask"
description: "Web micro-framework like flask in C++."
readmeQualityOk: true
url: "https://github.com/mattn/clask"
language: "C++"
languages: ["C++"]
languagePcts: [79]
topics: ["micro-framework", "cpp"]
stars: 127
forks: 6
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2020-06-07T12:45:08Z"
lastCommitAt: "2026-09-07T08:34:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 37
maintainers: ["mattn"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3cbcb3edd2c13b16a712f2a5a7c0d6ae3161d1b7c7f25540cf829a4c0afc691/mattn/clask"
fundingLinks: ["GITHUB:https://github.com/mattn"]
---

# clask

Very Very Experimental Web micro-framework like flask in C++.

*DO NOT USE THIS IN PRODUCTION*

## Usage

```cpp
#include "clask/core.hpp"

int main() {
  auto s = clask::server()
    .worker_count(32)
    .accept_queue_limit(4096)
    .socket_timeout(3000);
  s.GET("/", [](clask::request& req) {
    return "OK!";
  });
  s.GET("/foo", [](clask::response& resp, clask::request& req) {
    resp.set_header("content-type", "text/html");
    resp.write("he<b>l</b>lo");
  });
  s.run();
}
```

`run()` uses a worker-pool runtime by default. Accepted sockets are queued, idle keep-alive connections stay in the event loop, and overloaded accepts return `503 Service Unavailable` instead of spawning unbounded threads.

## Runtime Tuning

`server_t` exposes a few knobs for the worker-pool based runtime:

```cpp
auto s = clask::server()
  .worker_count(32)
  .accept_queue_limit(4096)
  .socket_timeout(3000);
```

- `worker_count(n)` sets the number of worker threads.
- `accept_queue_limit(n)` caps queued accepted sockets before returning `503 Service Unavailable`.
- `socket_timeout(ms)` sets socket send/receive timeout in milliseconds.

The current worker-pool runtime supports HTTP…
