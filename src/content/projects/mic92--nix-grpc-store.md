---
repo: "Mic92/nix-grpc-store"
name: "nix-grpc-store"
description: "Nix remote store and build farm over gRPC: faster nix copy than ssh-ng, with mTLS and a scheduler for builders"
readmeQualityOk: true
url: "https://github.com/Mic92/nix-grpc-store"
language: "C++"
languages: ["C++"]
languagePcts: [69]
stars: 72
forks: 12
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 8
recentReleases: 10
createdAt: "2026-07-09T17:28:28Z"
lastCommitAt: "2026-11-20T12:00:12Z"
lastReleaseAt: "2026-11-01T18:33:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 39
maintainers: ["Mic92", "ConnorBaker", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59dc603e8a066030790ee166667d666792a14119a8f790f6c4b58c8aa0e0608c/Mic92/nix-grpc-store"
---

# nix-grpc-store

**Status: Stable.**

Remote Nix store access over gRPC instead of SSH. `nix copy` over a WAN
link is **5.5x faster than `ssh-ng://`** because round trips are hidden:
path-info queries are batched and NAR downloads are pipelined, so wall time
is bandwidth-bound instead of latency-bound.

Why gRPC instead of `ssh-ng://`?

  * **Latency-tolerant `nix copy`.** One RPC batches the path queries
    for a whole closure and one request per connection downloads all
    NARs as a server-driven stream. Copying 200 small paths at 50 ms
    RTT takes 1.3 s instead of the 11.8 s a round-trip-per-path client
    needs.
  * **Faster handshakes.** A TLS handshake is much cheaper than an SSH
    connection setup (no subprocess, no shell, no SSH key exchange and
    session negotiation), and connections are multiplexed over HTTP/2, so
    frequent short-lived store operations start quickly.
