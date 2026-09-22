---
repo: "SeradedStripes/shiptalkers"
name: "shiptalkers"
description: "A slack bot that compares your time on slack to your hackatime time. Also a website that does it, all in one."
readmeQualityOk: true
url: "https://github.com/SeradedStripes/shiptalkers"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-26T09:05:55Z"
lastCommitAt: "2026-09-22T08:43:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["SeradedStripes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66e08b84bfc6730c40680d83c17bd7347eb5428f7b3ab538d296456c63d558c5/SeradedStripes/shiptalkers"
---

# Ship Talkers

## Overview

Ship Talkers is a Slack bot and website for exploring activity across Hack Club Slack.
It estimates time spent writing messages, compares that time with Hackatime coding time, and provides user, channel, and word statistics.

It is a fun way to see how much time you spend on Slack versus coding.  
Are you a real maker or is it all just shiptalk?  
Drop a message in the [#ship-talkers](https://hackclub.enterprise.slack.com/archives/C07TCQ45NTS) channel to find out.
Website: [here](https://shiptalkers.kirze.de/)

## How it works

The scraper uses Slack bot and user tokens to collect messages, threads, users, channels, reactions, and profile data.
It stores the data in PostgreSQL and uses ShipTalkers IDs, generated from Slack identifiers, for stable public URLs.

The website reads the stored data to provide stats pages, search, ranked boards, and paginated user and channel directories.
A sessionizer estimates Slack time from message activity, while the scoring jobs calculate user, channel, and word totals.

Users can link their accounts to retrieve Hackatime data through the Hackatime OAuth2 API.
Ship Talkers then compares coding time with estimated Slack…
