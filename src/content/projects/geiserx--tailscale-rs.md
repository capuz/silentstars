---
repo: "GeiserX/tailscale-rs"
name: "tailscale-rs"
description: "A best-effort, pure-Rust port of Tailscale's Go tsnet — embed a Tailscale node directly in your Rust app. Fork of tailscale/tailscale-rs."
readmeQualityOk: true
url: "https://github.com/GeiserX/tailscale-rs"
homepage: "https://geiserx.github.io/tailscale-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["async", "derp", "ffi", "magicdns", "mesh-networking", "mesh-vpn", "nat-traversal", "networking", "noise-protocol", "overlay-network"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-07T21:29:49Z"
lastCommitAt: "2026-10-14T08:58:24Z"
lastReleaseAt: "2026-06-10T00:02:20Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 65
maintainers: ["geiresx", "GeiserX", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1262326977/b8b68c51-d9f6-41d0-bbb7-5eda4638a2f4"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

A fork of [tailscale/tailscale-rs](https://github.com/tailscale/tailscale-rs).

`tailscale-rs` is a work-in-progress Tailscale library written in Rust, with language bindings to
C, Elixir, and Python.

> [!NOTE]
> This project is **not associated with Tailscale Inc.** — it is an independent, unofficial fork.
> See [Legal](#legal).

> [!CAUTION]
> This software is unstable and insecure.
>
> I welcome enthusiasm and interest, but please **do not** build production software using these
> libraries or rely on it for data privacy until I've had a chance to batten down some hatches
> and complete a third-party audit.
>
> See [Caveats](https://geiserx.github.io/tailscale-rs/caveats/) for more details.

## Features

- TCP and UDP sockets on the tailnet from an in-process WireGuard data plane.
- Direct peer-to-peer connections through NAT traversal (STUN, Disco, `CallMeMaybe`), falling back to DERP relays.
- MagicDNS and split DNS, fail-closed by default.
- Using subnet routers and exit nodes (opt-in), with the exit node changeable at runtime.
- Tailscale Serve handlers: `Proxy`, `Text`, `TcpForward`, `Path` and `Redirect`.
- Tailnet Lock peer signature enforcement (partial, see…
