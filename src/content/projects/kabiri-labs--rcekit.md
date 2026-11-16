---
repo: "kabiri-labs/rcekit"
name: "rcekit"
description: "Test a URL, a captured HTTP request or a multi-step chain for RCE—and know what the evidence actually proves. 11 methods, from command injection and SSTI to argument injection and file inclusion. Every verdict says what the target did, and a run that tested nothing is never called clean. Burp/ffuf/Nuclei exports. One Python file, no dependencies."
readmeQualityOk: true
url: "https://github.com/kabiri-labs/rcekit"
homepage: "https://github.com/kabiri-labs/rcekit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["command-injection", "payloads", "penetration-testing", "pentesting", "rce", "red-team", "remote-code-execution", "reverse-shell", "ssti", "payload"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2025-02-20T18:55:24Z"
lastCommitAt: "2026-11-16T04:25:08Z"
lastReleaseAt: "2026-09-24T13:50:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["kabiri-labs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/936241456/04054474-978a-4f9b-89fe-add4cf5d067a"
---

# RCEKit

**`executed` means the target executed the input. `negative` means the probes reached it.**

**Version 3.17.0** · MIT · Python 3.8+ · zero third-party dependencies

RCEKit is an **RCE detection &amp; confirmation toolkit** for authorised penetration
testing, red teaming and security research. Point it at a target you are allowed
to test — a URL or a captured HTTP request — and every finding comes back with
the tier it earned.

Every `executed` rests on a value RCEKit generated at random for that probe and
that reflection cannot produce. It comes back through one of 3 channels: a
computed result **present in the response** and absent from a payload-free
control; an **out-of-band callback** carrying a token only the target ever held;
or a value the target stored and RCEKit **fetched back** in a second request —
the token `file` has it write to a path it serves, the product `write`'s
one-liner computes when the target interprets the file it stored, and the product
`include` writes *through the inclusion sink itself* and then fetches back. Weaker signals
keep their own tiers and are never promoted into it. And a run that could not
test something never reports it as clean.…
