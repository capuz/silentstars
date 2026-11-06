---
repo: "bensynapse/jsonrpcserver"
name: "jsonrpcserver"
description: "Process incoming JSON-RPC 2.0 requests in Python"
readmeQualityOk: true
url: "https://github.com/bensynapse/jsonrpcserver"
homepage: "https://bensynapse.github.io/jsonrpcserver/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["json-rpc", "api", "python", "asyncio", "json-rpc-server", "jsonrpc", "jsonrpc2", "rpc", "server", "typed"]
stars: 208
forks: 41
openIssues: 1
closedIssues: 138
watchers: 5
contributors: 20
recentReleases: 3
createdAt: "2015-11-01T23:51:59Z"
lastCommitAt: "2026-11-06T02:44:42Z"
lastReleaseAt: "2026-11-06T02:38:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 48
maintainers: ["bensynapse", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/45362585/cf8e105e-c560-4f38-a153-44c4c58fb259"
discussionCount: 14
---

jsonrpcserver takes a [JSON-RPC 2.0](https://www.jsonrpc.org/specification)
request, calls your Python function and gives you the response to send back.
It leaves the networking to you, so it fits into whatever server you already
have.

## Features

- Works with any framework or transport. The docs have tested examples for
  http.server, Flask, Werkzeug, Django, FastAPI, aiohttp, Sanic, Tornado,
  websockets, ZeroMQ and Socket.IO.
- Sync and async: `dispatch` and `async_dispatch`. With `async_dispatch`, the
  requests in a batch run concurrently.
- Follows the spec for batches, notifications and errors, and checks each
  request's params against your function's signature.
- Keeps exception messages out of responses and in your logs, and limits
  batches to 100 requests by default (`max_batch_size`).
- Typed: ships `py.typed`, and `@method` keeps your functions' signatures for
  mypy and pyright.
- Safe to call from several threads, and tested on Python 3.11 to 3.14,
  including free-threaded 3.14t.
- No dependencies, from 6.0.

## Install

```sh
pip install jsonrpcserver
```

If you're on 5.0.9 or older, upgrade: those versions send exception messages
to clients. Main is 6.0,…
