---
repo: "Vortx-AI/emem"
name: "emem"
description: "An open protocol for signed, content-addressed facts and verifiable memory shared across AI agents acting in the physical world."
readmeQualityOk: true
url: "https://github.com/Vortx-AI/emem"
homepage: "https://emem.dev/"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [63, 27]
topics: ["ai-agents", "memory", "ed25519", "long-term-memory", "world-models", "mcp", "model-context-protocol", "agent-memory", "earth-observation", "mcp-server"]
stars: 52
forks: 7
openIssues: 0
closedIssues: 4
watchers: 7
contributors: 4
recentReleases: 6
createdAt: "2026-04-24T20:31:22Z"
lastCommitAt: "2026-08-11T04:48:13Z"
lastReleaseAt: "2026-08-10T05:05:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["vortx-jaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/e08de73588d2b9bfa4a0418f064f6427dc562c4a115d48eaee91737fcbe84a57/Vortx-AI/emem"
---

alt="Six panels explaining emem. 1: two agents describe one field, one reports 0.62 and one reports 'looks healthy', neither can check the other. 2: the place resolves to one cell64 and the reading becomes a fact hashed with blake3 over canonical CBOR and signed with ed25519. 3: the fact collapses to one line, emem:fact:<cell64>:<fact_cid>, a 52-character untruncated digest. 4: anyone resolves that token to the byte-identical signed body and verifies the receipt in their own process, with no key, no account and no callback. 5: emem-guard reads the emem: tokens in a transcript before an agent asserts, denying PROV_SIG when a signature fails, PROV_BYTES when it resolves to different bytes, and PROV_DRIFT when it moved past the band threshold. 6: what it does not do, one responder signs rather than a network consensus, a real citation can still sit on a wrong claim, and only emem:fact: binds a whole body while entity and bundle tokens co-refer." />

# emem

**emem is the shared memory layer for multi-agent systems.**

*Two agents that share no model, no vendor, and no trust can cite the same signed fact and each verify it alone. Satellites fill the memory today; any machine that…
