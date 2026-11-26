---
repo: "niakw/ProsperoEden-Encore"
name: "ProsperoEden-Encore"
description: "ProsperoEden Encore experimental Switch 1 + 2 (NS1/NS2) emulator PS5 FW 13.60. Audited Eden Vulkan/OpenGL, per-core JIT, FSR, DualSense TV-first UI, 31 languages, multiplayer lobby, per-game profiles, hardened releases. NSP/XCI/NSZ/XCZ/ExeFS/NRO/NSO/NCA/NAX/KIP/NUP/NX/DNSP/DXCI + LZ4/ZBIC/zstd-NCZ https://github.com/niakw/ProsperoEden-Encore#encore"
readmeQualityOk: true
url: "https://github.com/niakw/ProsperoEden-Encore"
homepage: "https://encore.dynv6.net"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [60, 29]
topics: ["eden", "eden-emu", "eden-emulator", "eden-emulator-switch", "eden-switch", "emulator", "firmware-1360", "homebrew", "nintendo-switch", "playstation-5"]
stars: 134
forks: 11
openIssues: 10
closedIssues: 9
watchers: 3
contributors: 1
recentReleases: 2
createdAt: "2026-10-30T03:25:30Z"
lastCommitAt: "2026-11-26T23:35:52Z"
lastReleaseAt: "2026-10-30T03:32:26Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 31
maintainers: ["niakw"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6880c94c985d5a669a2ad5996a01976203a4943069f5c1ae998e1e9ee798a3e/niakw/ProsperoEden-Encore"
discussionCount: 2
---

> **Architecture & research reference (NS1/NS2 → PS5):** [Complete component map, source ownership, official specifications, papers and validation methodology](https://github.com/niakw/ProsperoEden-Encore/blob/HEAD/docs/ENCORE_TECHNICAL_ARCHITECTURE_AND_RESEARCH.md).

> **12 Nov 2026 — development integration, not a stable download:** the previous native CI compiled 1,588 objects but package staging failed. Updated PS5 source includes NS1 CPU6 ABI alignment, NS2 sparse guest memory, R09 source policies, launcher GL/Vulkan handoff and eight **opt-in-only** daily WebP backgrounds (no artwork bundled). **NS1 and NS2 boot remain unverified on a new PS5 candidate.** [33-case upstream integration register](https://github.com/niakw/ProsperoEden-Encore/blob/HEAD/docs/audits/ENCORE_NS1_GLOBAL_R23_33_GAPS_PR_BRANCH_HANDOFF_2026-11-12.md) · [unpublished R457 addendum](https://github.com/niakw/ProsperoEden-Encore/blob/HEAD/docs/audits/ENCORE_DRAFT_RELEASE_CHANGELOG_2026-11-12.md).
