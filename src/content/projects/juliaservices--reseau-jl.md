---
repo: "JuliaServices/Reseau.jl"
name: "Reseau.jl"
description: "Pure-Julia IO primitives (io readiness polling, timers, sockets, TLS, etc.)"
readmeQualityOk: true
url: "https://github.com/JuliaServices/Reseau.jl"
homepage: "https://juliaservices.github.io/Reseau.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 21
forks: 6
openIssues: 6
closedIssues: 9
watchers: 2
contributors: 12
recentReleases: 5
createdAt: "2026-02-07T13:48:24Z"
lastCommitAt: "2026-08-07T05:15:50Z"
lastReleaseAt: "2026-06-11T22:41:15Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 48
maintainers: ["quinnj", "david-macmahon", "ararslan"]
openGraphImageUrl: "https://opengraph.githubassets.com/8010206494e7b94c2126db8f08c90b6c36dc2abb30539bea20b954ecf56c3d5a/JuliaServices/Reseau.jl"
---

# Reseau.jl

`Reseau.jl` is a pure-Julia networking transport stack with deadline-aware TCP,
hostname-aware dialing, and TLS in one package.

Reseau provides:

- TCP connections and listeners
- hostname-aware dialing and listening through the `TCP` and `TLS` entrypoints
- TLS clients and listeners
- integrated readiness, deadline, and timer handling across macOS, Linux, and Windows
- precompile and `--trim=safe` validation in the test suite

## Installation

```julia
using Pkg
Pkg.add("Reseau")
```

## Main Entry Points

The supported public entry points are the exported `TCP` and `TLS` modules:

- `TCP` for TCP connections, listeners, deadlines, and string-address dialing
- `TLS` for TLS clients and listeners

## Quick Start

### TCP

```julia
using Reseau

listener = TCP.listen(TCP.loopback_addr(0); backlog = 128)
addr = TCP.addr(listener)

server_task = errormonitor(@async begin
    conn = TCP.accept(listener)
    try
        write(conn, "echo:" * String(read(conn)))
    finally
        close(conn)
    end
end)

client = TCP.connect(addr)
write(client, "hello")
closewrite(client)
reply = String(read(client))

close(client)
close(listener)
wait(server_task)

reply ==…
