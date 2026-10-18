---
repo: "QinCai-rui/MeshTalk"
name: "MeshTalk"
description: "Monorepo for MeshTalk, a privacy-first, end-to-end encrypted peer-to-peer messaging for LAN and internet peers. No accounts, no central message store, and local conversation history."
readmeQualityOk: true
url: "https://github.com/QinCai-rui/MeshTalk"
homepage: "https://meshtalk-site.qincai.xyz"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 40]
stars: 9
forks: 2
openIssues: 6
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-15T01:05:23Z"
lastCommitAt: "2026-10-18T08:16:51Z"
lastReleaseAt: "2026-08-16T00:00:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 64
maintainers: ["QinCai-rui", "github-actions[bot]", "kaesarwudev-ux"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcca52759cbd42286be2a501e30412aa5fbae3b022111f6f57bb8c2f3b863e6c/QinCai-rui/MeshTalk"
---

# MeshTalk

> [!WARNING]
> MeshTalk does not use post-quantum key exchange. All key agreement uses X25519
> (Curve25519), which is vulnerable to quantum attacks via Shor's algorithm.
> Captured traffic may be decryptable by a sufficiently large quantum computer
> ("store now, decrypt later"). Do not use MeshTalk for messages that must remain
> confidential against nation-state adversaries with long-term storage
> capabilities.

Peer-to-peer encrypted messaging over a LAN or direct NAT-traversed UDP links.

Optional release analytics is disabled until explicitly enabled as extended or basic; switch levels or turn it off in Settings » Diagnostics. See [Analytics](https://github.com/QinCai-rui/MeshTalk/blob/HEAD/docs/ANALYTICS.md) and the [privacy policy](https://github.com/QinCai-rui/MeshTalk/blob/HEAD/PRIVACY.md).

MeshTalk keeps the original offline LAN path: UDP broadcast discovers peers and
TCP carries authenticated messages. Private rooms add remote discovery through
 an opaque control service and public STUN. MeshTalk Relay provides a bounded,
peer-ID-only fallback path when direct UDP is unavailable. The control service
exchanges encrypted endpoint cards and never stores chat…
