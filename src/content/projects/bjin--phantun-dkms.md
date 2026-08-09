---
repo: "bjin/phantun-dkms"
name: "phantun-dkms"
description: "Kernel module re-implementation of phantun, transform UDP streams into fake-TCP streams"
readmeQualityOk: true
url: "https://github.com/bjin/phantun-dkms"
language: "Python"
languages: ["Python", "C"]
languagePcts: [62, 33]
topics: ["faketcp", "kernel-module", "phantun", "wireguard"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-31T11:28:13Z"
lastCommitAt: "2026-08-09T04:47:43Z"
lastReleaseAt: "2026-04-27T12:34:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 39
maintainers: ["bjin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9e54b26bf82976ce258f18e5b02b9ed16d80712bbf411fb5438d3ce48eea4b5/bjin/phantun-dkms"
---

# phantun-dkms

If you already know [**Phantun**](https://github.com/dndx/phantun/): this is a **Linux kernel module implementation of Phantun's fake-TCP idea**.

Phantun runs as a **user-space client/server** pair around a **TUN interface**. `phantun-dkms` keeps the translation in the **kernel**, intercepts **existing UDP sockets** directly, and avoids the TUN topology.

## Phantun compatibility

`phantun-dkms` is **not advertised as compatible with Phantun endpoints**.

The important nuance: the **basic wire packet shape is intentionally the same**, so the TCP/UDP header overhead story is the same too. For MTU budgeting, Phantun's documentation is still the right mental model.

What changed is the **behavioral contract** around that wire format. I have not tried to make mixed `phantun` / `phantun-dkms` endpoints interoperate, and I would currently assume they **most likely will not** work seamlessly.

Main reasons:

- **Untested interoperability**: mixed deployments have not been validated.
- **Randomized initiator ISN**: `phantun-dkms` randomizes the initial sequence number; Phantun historically uses `0`, which is easier for DPI to fingerprint.
- **Symmetric role model**:…
