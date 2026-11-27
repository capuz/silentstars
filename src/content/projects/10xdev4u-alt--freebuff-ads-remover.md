---
repo: "10xdev4u-alt/freebuff-ads-remover"
name: "freebuff-ads-remover"
description: "Pluggable extension to remove ads from Freebuff Desktop"
readmeQualityOk: true
url: "https://github.com/10xdev4u-alt/freebuff-ads-remover"
homepage: "https://10xdev4u-alt.github.io/freebuff-ads-remover/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ad-blocker", "adblock", "desktop", "electron", "freebuff", "privacy", "typescript", "vitest"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 96
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T16:32:50Z"
lastCommitAt: "2026-11-27T16:30:06Z"
lastReleaseAt: "2026-11-09T07:59:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["10xdev4u-alt", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2beb549a8d2607d565a24ad904b502d700577fb5f23a35b9e24fcb6bc0816c26/10xdev4u-alt/freebuff-ads-remover"
---

# Freebuff Ads Remover

  **Every ad in Freebuff Desktop — gone. Network kills, CSS burial, and a live shield dashboard counting every stop.**

---

Freebuff Desktop shows ads to fund free access to AI models. This extension sits between the app and its ad server: requests die at the Electron session layer, anything server-rendered gets hidden by CSS, and the shield badge counts it all live.

- [Quickstart](#quickstart) · [How it works](#how-it-works) · [Configuration](#configuration) · [FAQ](#faq) · [Docs](#docs)

## What gets removed

| Surface | What disappears |
|---|---|
| SponsorBreak | Full-screen breaks |
| Billboard | Sidebar + panel units |
| Intermission | Between-turn ads |
| Spotlight / Showcase | Spotlight + showcase formats |
| Sponsored tasks / runs | Sponsored cards in timelines |
| In-chat sponsored cards | Server-rendered `sponsored-ad` creatives |
| Partner / Invitations | Partner ads, ad invites |
| Tracking | All impression / click / engagement endpoints |
