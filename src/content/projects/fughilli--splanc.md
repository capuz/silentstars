---
repo: "fughilli/splanc"
name: "splanc"
description: "Software for mapping and driving awesome effects on LED art."
readmeQualityOk: true
url: "https://github.com/fughilli/splanc"
homepage: "https://splanc.pages.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [44, 21]
stars: 6
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T17:55:49Z"
lastCommitAt: "2026-10-25T08:40:31Z"
lastReleaseAt: "2026-10-19T05:21:39Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 78
undervaluedScore: 50
maintainers: ["fughilli", "github-actions[bot]", "issuefleet[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274621779/0043c3b2-573c-4ed7-90bc-d1df88cd9d2b"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/fughilli"]
---

src="https://github.com/fughilli/splanc/actions/workflows/test.yaml/badge.svg?branch=main&event=push"
    alt="Test" /></a>
    src="https://github.com/fughilli/splanc/actions/workflows/hitl.yaml/badge.svg?branch=main&event=push"
    alt="HITL tests" /></a>
    src="https://img.shields.io/badge/HITL%20status-Grafana-f46800?logo=grafana&logoColor=white"
    alt="HITL status" /></a>
    src="https://img.shields.io/badge/live%20app-splanc.io%2Fapp-084de7"
    alt="Live app" /></a>
    src="https://img.shields.io/badge/built%20with-Bazel-43a047"
    alt="Built with Bazel" /></a>

**Map every LED in an addressable-LED installation in 3D — with just a phone —
then design light effects that flow across the real geometry and play them live
on the controller.**

Mount your LEDs however you like (a sculpture, a ceiling, a sign, a tree), walk
around the lit fixture with your phone, and splanc recovers the `(x, y, z)`
position of every LED. Then you author effects in a browser editor and stream
them to the device, where they run across the fixture's true 3D shape instead of
a guessed layout.

No ARCore, no LiDAR, no depth sensor — capture runs in any modern phone browser
(rear camera + motion…
