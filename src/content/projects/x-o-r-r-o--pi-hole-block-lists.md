---
repo: "x-o-r-r-o/Pi-Hole-Block-Lists"
name: "Pi-Hole-Block-Lists"
description: "Ad Block list for alomst all devices."
readmeQualityOk: true
url: "https://github.com/x-o-r-r-o/Pi-Hole-Block-Lists"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [44, 34]
topics: ["adguardhome", "pihole", "pihole-adblocker-list", "pihole-ads-list", "pihole-blacklist", "pihole-blocklists", "piholeblocklist"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-06-03T23:42:18Z"
lastCommitAt: "2026-10-24T08:08:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 72
maintainers: ["x-o-r-r-o", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a32a52931cb8f34a75ed12f278db7eb88ecd9aa91ebcdf3921d438a8edbb4e1d/x-o-r-r-o/Pi-Hole-Block-Lists"
---

# Pi-Hole-Block-Lists

Ready-to-use block lists for ads, trackers, malware, phishing and unwanted content, rebuilt **every day** from
well-maintained sources. Use them in **AdGuard Home** or **Pi-hole**, on your **router**, or on a single **computer or
phone**, with step-by-step guides for each.

## Quick start

**1. You already run AdGuard Home or Pi-hole** (2 minutes). Add these two links, which block ads, trackers, malware and
phishing without breaking normal sites:
```
https://raw.githubusercontent.com/x-o-r-r-o/Pi-Hole-Block-Lists/master/adblock/ads-and-tracking.txt
https://raw.githubusercontent.com/x-o-r-r-o/Pi-Hole-Block-Lists/master/adblock/security.txt
```
- **AdGuard Home:** **Filters → DNS blocklists → Add blocklist → Add a custom list** → paste one link → **Save**; repeat for
  the second.
- **Pi-hole v6:** **Lists** → paste a link → **Add blocklist** (both links), then **Tools → Update Gravity**. (Pi-hole v5:
  use the same links without `/adblock`.)

**2. Protect one computer, no extra hardware** (2 minutes). Pick the recommended set from the menu by pressing Enter:
- **macOS / Linux** (Terminal):
  ```bash
  curl -fsSLO…
