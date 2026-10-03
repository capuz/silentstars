---
repo: "alex-w-developer/GetBlocked"
name: "GetBlocked"
description: "Lightweight, local-only MV3 Chrome extension for reducing common third-party web tracking."
readmeQualityOk: true
url: "https://github.com/alex-w-developer/GetBlocked"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["chrome-extension", "javascript", "manifest-v3", "open-source", "privacy", "tracker-blocker"]
stars: 24
forks: 10
openIssues: 9
closedIssues: 18
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-06-26T22:37:48Z"
lastCommitAt: "2026-10-03T22:04:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 44
maintainers: ["alex-w-developer", "AMANKUMAR0101", "Sentientbee"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe263e166a5dcd0ef0a4da167ec814587a8ed5ccf2765ccb85888fa5549fe838/alex-w-developer/GetBlocked"
discussionCount: 1
---

# GetBlocked!

**Cleaner pages. Fewer trackers. Local-only.**

GetBlocked! is a lightweight, local-only Chrome extension that helps reduce common third-party website tracking by blocking known tracker requests, cleaning tracking links, and explaining tracking attempts. An optional experimental Decoy Mode can instead let known tracker requests through while replacing supported analytics identifiers with one consistent fake browser-session profile.

It is built as a small, inspectable Manifest V3 project for people who want a friendly privacy tool and for contributors who want quick, useful pull requests.

## What GetBlocked! Does

- Blocks a curated starter list of known third-party tracker domains using Chrome `declarativeNetRequest`.
- Cleans common tracking URL parameters such as `utm_source`, `fbclid`, `gclid`, `dclid`, `mc_cid`, and similar campaign IDs.
- Preserves generic `ref` parameters used by invitations, referrals, and application routing.
- Detects visible tracking attempts such as pixels, suspicious scripts, tracking iframes, and tracking links.
- Shows a compact popup report with:
  - Estimated tracker resources on this page
  - Decoyed on this page
  - Tracking…
