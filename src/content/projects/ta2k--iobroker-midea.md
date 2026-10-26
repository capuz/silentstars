---
repo: "TA2k/ioBroker.midea"
name: "ioBroker.midea"
description: "ioBroker Adapter for midea devices"
readmeQualityOk: true
url: "https://github.com/TA2k/ioBroker.midea"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iobroker", "midea", "dimstal", "adapter"]
stars: 14
forks: 14
openIssues: 9
closedIssues: 70
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2020-02-01T12:02:02Z"
lastCommitAt: "2026-10-26T03:03:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["TA2k", "dependabot[bot]", "Claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c04f005398efbeb2769f70b8839dbebbbedb250bb84f688a24416766703709e/TA2k/ioBroker.midea"
---

# ioBroker.midea

ioBroker adapter for Midea, Dimstal and Royal Clima air conditioners. Talks the
**Midea LAN protocol** directly to your appliance — V3 (default), V2 and V1
firmware are all supported. The cloud account is only contacted to retrieve
encryption tokens for V3 appliances and to enrich device names; V1 and V2
appliances run cloudless.

## How it works

1. UDP broadcast on port 6445 to discover all Midea appliances on the LAN.
   V3 firmware replies with a 5a5a/8370 binary frame, V2 with a raw 5a5a frame
   and V1 with an `<?xml …>` response (the adapter then opens a short TCP
   round-trip to the appliance to learn its device id).
2. For V3 appliances the adapter authenticates against the configured cloud
   (MSmartHome by default; NetHome Plus, Midea Air or Ariston Clima are
   selectable in *Cloud app*) and asks for the per-device `{token, key}` pair
   needed for the LAN handshake. V1 and V2 appliances do not need a cloud
   token — discovery alone is enough to control them.
3. From then on, control runs over TCP/6444. V3 uses the 8370 transport
   (AES-256-CBC + HMAC-SHA-256 session) wrapping AES-128-ECB encrypted command
   bodies. V1 and V2 send the same…
