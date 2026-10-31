---
repo: "BigBIueWhale/rustdesk_fork"
name: "rustdesk_fork"
description: "The sovereign TeamViewer competitor, now security-hardened, direct-IP only."
readmeQualityOk: true
url: "https://github.com/BigBIueWhale/rustdesk_fork"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [40, 20]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T17:10:41Z"
lastCommitAt: "2026-10-31T09:53:56Z"
lastReleaseAt: "2026-07-11T17:56:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 75
undervaluedScore: 42
maintainers: ["BigBIueWhale"]
openGraphImageUrl: "https://opengraph.githubassets.com/0381db3fc3127446e4b1c152b2377cf0aca46b68ebd3130f9704a370495e43fc/BigBIueWhale/rustdesk_fork"
fundingLinks: ["GITHUB:https://github.com/rustdesk", "KO_FI:https://ko-fi.com/rustdesk"]
---

# RustDesk — Hardened Fork

A security-hardened, **direct-IP-only** fork of [RustDesk](https://github.com/rustdesk/rustdesk) `1.4.7`.
You reach a *known* host **by its IP address**, and every connection is mutually password-authenticated by
a mandatory **CPace PAKE** before application traffic is admitted.

> This is **not** upstream RustDesk, and the upstream tagline does not describe it. There is **no
> rendezvous/relay server, no public ID, no LAN discovery, no auto-updater, no plugin loader, no 2FA/OTP,
> and no key or server override** — those paths are **deleted from the source tree** (removed, not merely
> disabled).

## Security design

- **One mandatory balanced PAKE — CPace over ristretto255 + SHA-512** (CFRG draft), enforced at the
  transport choke point before any application message, on every transport, with no legacy fallback. No
  password hash ever touches the wire.
  **R-V3 remains outstanding**: the required external expert audit has not happened. The exact-commit
  [external audit handoff and mandatory scope](https://github.com/BigBIueWhale/rustdesk_fork/blob/HEAD/docs/CRYPTO-AUDIT-SCOPE.md) records that release blocker.
- **Direct transport.** The…
