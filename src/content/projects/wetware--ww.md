---
repo: "wetware/ww"
name: "ww"
description: "Decentralized OS for multi-tool agent swarms."
readmeQualityOk: true
url: "https://github.com/wetware/ww"
homepage: "https://wetware.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["capability-based-security", "capnproto", "decentralized", "ipfs", "libp2p", "p2p", "rust", "wasm", "webassembly", "wasi"]
stars: 24
forks: 3
openIssues: 79
closedIssues: 243
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-03-26T14:42:45Z"
lastCommitAt: "2026-11-25T13:18:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 62
maintainers: ["lthibault"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c7df0e9691e46f6c6ba14a309141985678327e7ad0a3247418654c7f7ac15e0/wetware/ww"
---

# Wetware

Wetware lets you safely run code you didn't write, don't trust, and cannot see: third-party MCP servers, code your LLM produced at runtime, tools other agents handed you across the swarm. It's a decentralized operating system for multi-tool agent swarms.

Cells are WASM processes with no ambient node-control authority. They receive
a fixed WASI substrate: stdio, arguments/environment, clocks, randomness, an
image-root filesystem, and private writable `/tmp`. Known-CID reads additionally
depend on the execution context's root or cache wiring. See the
[WASI host functions](https://github.com/wetware/ww/blob/HEAD/doc/api/wasm-guest.md#wasi-host-functions).
Node-control operations require explicitly granted, typed Cap'n Proto
capabilities. Those references can be attenuated to a method allowlist; the
restriction travels with the reference across local and libp2p RPC boundaries
and recursively confines capabilities returned through it. Argument- and
resource-level filtering remain separate, application-level designs. Least
privilege is enforced by the runtime, not delegated to a prompt or to the
model running inside the cell.
