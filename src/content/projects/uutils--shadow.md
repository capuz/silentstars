---
repo: "uutils/shadow"
name: "shadow"
description: "Memory-safe Rust reimplementation of Linux shadow-utils (useradd, passwd, groupadd, etc.)"
readmeQualityOk: true
url: "https://github.com/uutils/shadow"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 9
forks: 4
openIssues: 2
closedIssues: 126
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2026-03-23T09:56:40Z"
lastCommitAt: "2026-07-21T06:11:48Z"
lastReleaseAt: "2026-04-22T14:59:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 59
maintainers: ["pierre-warnier", "renovate[bot]", "oech3"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6373a50adbab87111dc649e9384b6e46f14cb5130e1fa903967b736b5d4da7/uutils/shadow"
---

# shadow

</div>

---

A memory-safe reimplementation of the Linux
[shadow-utils](https://github.com/shadow-maint/shadow) in
[Rust](http://www.rust-lang.org). shadow-utils (`useradd`, `passwd`,
`groupadd`, etc.) is the suite of setuid-root tools that manages user accounts,
passwords, and groups on every Linux system.

## Why

shadow-utils runs as **root or setuid-root on every Linux system**. It parses
user-supplied input, writes to `/etc/passwd`, `/etc/shadow`, `/etc/group`, and
has had recent CVEs (CVE-2023-4641: password leak in memory, CVE-2024-56433:
subuid collision enabling account takeover). Until this project appear, there was **no
Rust reimplementation** — not in uutils, not in Prossimo/Trifecta, not on
crates.io.

[sudo-rs](https://github.com/trifectatechfoundation/sudo-rs) proved the model:
an independent Rust rewrite of a privilege-boundary tool can go from zero to
default-in-Ubuntu in under 3 years. This project follows that playbook.

## Goals

- **Drop-in replacement**: same flags, same exit codes, same output format as
  GNU shadow-utils. Differences are treated as bugs.
- **uutils compatible**: built on [`uucore`](https://crates.io/crates/uucore)
  with the…
