---
repo: "modoterra/echo"
name: "echo"
description: "Echo is a Rust implementation of a PHP superset. Existing PHP should stay familiar, while Echo adds a modern runtime, compiler tooling, native concurrency, parallel execution, and a path toward compiled binaries with predictable performance gains."
url: "https://github.com/modoterra/echo"
homepage: "https://xo.run/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["echo", "php", "rust", "xo"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-16T11:56:17Z"
lastCommitAt: "2026-07-02T06:33:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["csfh"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ae4dc6be299e712c0d167765170c654f1b2e863e36cd9b046b933ff986a05a7/modoterra/echo"
---

# Echo

Echo is a Rust implementation of a PHP superset. Existing PHP should stay familiar, while Echo adds a modern runtime, compiler tooling, native concurrency, parallel execution, and a path toward compiled binaries with predictable performance gains.

The command line entrypoint is `xo`.

## Status

Echo is early-stage software. The current implementation supports a small but growing PHP-compatible slice across parsing, AST generation, LLVM IR codegen, runtime behavior, and CLI execution.

Unsupported PHP behavior should fail explicitly rather than silently approximate semantics.

## Direction

Echo is intended to feel like PHP if PHP had a modern compiler, a standard library with native networking, and an owned concurrency runtime.

Future Echo should support programs shaped like this:

```php
<?php

namespace app\http

from std use net
from std use http

type User = {
    const id: int
    email: string
    displayName?: string
}

fn responseBody($request, list<User> $users): string {
    let $body = "Hello from Echo at " . $request.path . "\n"
    return $body . "Users seen: " . count($users) . "\n"
}

let list<User> $users = {}
let $server = net.listen("127.0.0.1:8080")…
