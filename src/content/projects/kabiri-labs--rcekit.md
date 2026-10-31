---
repo: "kabiri-labs/rcekit"
name: "rcekit"
description: "Test a URL or captured HTTP request for RCE—and know what the evidence actually proves. RCEKit checks command injection, SSTI and blind paths, separates confirmed execution from uncertain signals and untested runs, and generates targeted payloads for Burp, ffuf and Nuclei. One Python file; no third-party dependencies."
readmeQualityOk: true
url: "https://github.com/kabiri-labs/rcekit"
homepage: "https://github.com/kabiri-labs/rcekit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["command-injection", "payloads", "penetration-testing", "pentesting", "rce", "red-team", "remote-code-execution", "reverse-shell", "ssti", "payload"]
stars: 27
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2025-02-20T18:55:24Z"
lastCommitAt: "2026-10-31T07:46:13Z"
lastReleaseAt: "2026-09-24T13:50:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 71
maintainers: ["kabiri-labs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/936241456/b868fbcf-57ea-4b53-8edf-70b411161472"
---

# RCEKit

**`executed` means the target executed the input. `negative` means the probes reached it.**

**Version 3.11.0** · MIT · Python 3.8+ · zero third-party dependencies

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
one-liner computes when the target interprets the file it stored. Weaker signals
keep their own tiers and are never promoted into it. And a run that could not
test something never reports it as clean.

---

## Proof, not "maybe"

RCEKit confirms RCE through **multiple methods** under one CLI.…
