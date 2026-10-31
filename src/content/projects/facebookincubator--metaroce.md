---
repo: "facebookincubator/metaroce"
name: "metaroce"
description: "Home of the MetaRoCE protocol specification and software implementation."
readmeQualityOk: true
url: "https://github.com/facebookincubator/metaroce"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 24
forks: 3
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-10-12T21:11:42Z"
lastCommitAt: "2026-10-31T07:44:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 60
undervaluedScore: 31
maintainers: ["nspring", "genevievehelsel", "vitaut"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0048ff8d2a68c58a6d00fdb6206f7a5ef916f99afa293408546f888e6fc5dfb/facebookincubator/metaroce"
---

# MetaRoCE

MetaRoCE is an RDMA transport protocol designed for hardware-offloaded
operation over best-effort Ethernet networks with shallow-buffer
switches. It targets large-scale AI training clusters, where thousands
of accelerators exchange data across networks spanning racks, buildings,
and sometimes geographic locations, scaling to hundreds of thousands of
nodes without compromising tail latency. The authoritative description
is the specification in [spec/](https://github.com/facebookincubator/metaroce/blob/HEAD/spec/).

## Key ideas

- **Lossy fabric, no PFC required.** The transport treats the network as
  lossy and recovers through selective acknowledgment and
  retransmission. The primary expectation from the fabric is ECN
  marking; switch spraying, trimming, telemetry, and link-level credits
  are all optional or unused.
- **Tags.** A single connection (QP) carries multiple independent
  message streams, each with its own sequence space and completion
  ordering, so a stall on one stream does not block the others.
- **Explicit multipath.** The sender maintains multiple flows per
  connection, each with its own window and SACK state, steering packets
  across ECMP routes…
