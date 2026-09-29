---
repo: "siphon-project/siphon-sip"
name: "siphon-sip"
description: "SIPhon — High-performance SIP proxy, B2BUA, and IMS platform with Python scripting"
readmeQualityOk: true
url: "https://github.com/siphon-project/siphon-sip"
homepage: "https://siphon-sip.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 55
forks: 8
openIssues: 4
closedIssues: 14
watchers: 3
contributors: 3
recentReleases: 9
createdAt: "2026-03-07T18:33:32Z"
lastCommitAt: "2026-09-29T10:04:19Z"
lastReleaseAt: "2026-07-29T11:58:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 45
maintainers: ["killdashnine", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d49e086d075f742ee75ef21103e1f119ca3956d9a0523a5ca018cee77c4effd/siphon-project/siphon-sip"
fundingLinks: ["GITHUB:https://github.com/siphon-project", "CUSTOM:https://realtime-telecom.nl"]
discussionCount: 3
---

</p>

  </a>
</p>

</p>

---

## Why SIPhon?

SIPhon exists because of Kamailio and OpenSIPS — not in spite of them.

These two projects are giants. They carry the world's phone calls. They've been battle-tested across thousands of deployments, from small PBX setups to carrier-grade IMS cores handling millions of subscribers. The depth of their SIP knowledge, encoded in decades of C code and mailing list threads, is extraordinary. If you run voice infrastructure today, you almost certainly depend on one of them, directly or indirectly.

This project is a love letter to that work.

But after years of writing Kamailio route scripts — debugging `$avp(s:...)` expansions, tracing `failure_route` chains, grepping through C modules to understand why `t_relay()` behaves differently with `record_route()` before vs. after — a question kept coming back: **what if we could keep the architecture but rethink the interface?**

Kamailio and OpenSIPS got the hard parts right: stateful proxy logic, transaction state machines, registrar semantics, dialog tracking. What they didn't get — because it wasn't a priority in 2001 — was a developer experience that modern engineers expect. Their config…
