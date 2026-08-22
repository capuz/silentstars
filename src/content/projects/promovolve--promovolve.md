---
repo: "promovolve/promovolve"
name: "promovolve"
description: "Promovolve is an attempt to get back what magazine advertising had!"
readmeQualityOk: true
url: "https://github.com/promovolve/promovolve"
language: "Scala"
languages: ["Scala"]
languagePcts: [47]
topics: ["adnetwork", "adtech", "iab-standards", "large-language-models"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-07-08T14:44:34Z"
lastCommitAt: "2026-08-22T04:07:18Z"
lastReleaseAt: "2026-08-08T13:30:00Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["hanishi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f19de1829d9bd7fd55ab043180c8e70447b74ad06573598974cb068cd2e9fb8/promovolve/promovolve"
discussionCount: 1
---

<h1 align="center">
</h1>

</p>

Promovolve is an attempt to get back what magazine advertising had:
relevant ads matched to what the reader is actually reading, with no
cookies, no user profiles, no cross-site tracking, and no degradation of
the reading experience. The page's content is the only targeting signal —
an article about hiking gets ads for hiking gear because of what it *is*,
not because of who is reading it.

Being open source is not incidental: **transparency is the product**.
Publishers and advertisers can read the auction, the pricing, and the
pacing logic and verify there is no hidden manipulation — something no
closed ad network can offer. For the guided version, read
**[the Promovolve book](https://promovolve.github.io/promovolve-book/)** —
13 short chapters on why the system is built the way it is.

## Demo

## How it works

1. **A publisher adds two lines of HTML** — a script tag and a `<div>`
   per ad slot. No SDK, no ad server account, no JavaScript to write.
2. **Pages are classified on demand** from real traffic: an LLM maps the
   page's text into IAB content categories the first time it serves.
3. **Auctions run periodically per site**, not on every…
