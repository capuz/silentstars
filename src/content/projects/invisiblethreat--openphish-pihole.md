---
repo: "invisiblethreat/openphish-pihole"
name: "openphish-pihole"
description: "Processing the free OpenPhish feed for use with Pihole"
url: "https://github.com/invisiblethreat/openphish-pihole"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-01-06T12:44:15Z"
lastCommitAt: "2026-06-24T23:37:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 69
maintainers: ["invisiblethreat"]
openGraphImageUrl: "https://opengraph.githubassets.com/511f103d30c7e29acd304dd2e250b59b24c3ad69ee6dc8d0b136b24b236f9b95/invisiblethreat/openphish-pihole"
---

# openphish-pihole

## tl; dr- Add this to Pihole

`https://raw.githubusercontent.com/invisiblethreat/openphish-pihole/main/openphish.txt`

## Details

Using the feed at https://openphish.com/phishing_feeds.html to generate a Pihole
compatible blocklist that is updated twice-daily. This matches the update
cadence of the upstream feed.

## Processing

The upstream list is URLs, and upon examination, regardless of the path, there
is value in blocking the entire domain. The one known class of false-positive
that is created when extracting the domain from the URL is URL shorteners, like
bit.ly. This is acceptable for the conferred protection and is not corrected for
at this time. Permitting URL shorteners explicitly will overcome this.

## Expiry

The feed is currently configured to retain all domains for 180 days.
`metadata.json` is useful for understanding the age and last observation of the
domain in question.

## Growth/Size

The retention is set to 180 days on this list, and having finally crossed the
180 day mark, the list has now started to expire domains that haven't been
re-observed. At this time, 2022-08-17, the list contains 103k entries.
