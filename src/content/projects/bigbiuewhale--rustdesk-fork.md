---
repo: "BigBIueWhale/rustdesk_fork"
name: "rustdesk_fork"
description: "The sovereign TeamViewer competitor, now security-hardened, direct-IP only."
readmeQualityOk: true
url: "https://github.com/BigBIueWhale/rustdesk_fork"
language: "Rust"
languages: ["Rust", "Python", "Shell"]
languagePcts: [36, 21, 20]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-06-13T17:10:41Z"
lastCommitAt: "2026-10-03T22:03:26Z"
lastReleaseAt: "2026-07-11T17:56:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 75
undervaluedScore: 47
maintainers: ["BigBIueWhale"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf251bab879e0bb95577a4040f0bccc0cb2546ab7419b605306004625463b49f/BigBIueWhale/rustdesk_fork"
fundingLinks: ["GITHUB:https://github.com/rustdesk", "KO_FI:https://ko-fi.com/rustdesk"]
---

# RustDesk — Hardened Fork

A security-hardened, **direct-IP-only** fork of [RustDesk](https://github.com/rustdesk/rustdesk) `1.4.7`.
You reach a *known* host **by its IP address**, and every connection is mutually password-authenticated by
a mandatory **CPace PAKE** before a single application byte crosses the wire. It is built to be, on the
wire, **as defensible as SSH** — the opposite of zero-config remote access.

> This is **not** upstream RustDesk, and the upstream tagline does not describe it. There is **no
> rendezvous/relay server, no public ID, no LAN discovery, no auto-updater, no plugin loader, no 2FA/OTP,
> and no key or server override** — those paths are **deleted from the source tree** (removed, not merely
> disabled). The binary **refuses to start** unless its sovereign, single-port, zero-egress posture can be
> asserted at runtime.

## Security posture

- **One mandatory balanced PAKE — CPace over ristretto255 + SHA-512** (CFRG draft), enforced at the
  transport choke point before any application message, on every transport, with no legacy fallback. No
  password hash ever touches the wire. A published
  [AI-conducted…
