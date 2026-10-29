---
repo: "judell/community-calendar"
name: "community-calendar"
description: "Calendar aggregation for communities"
readmeQualityOk: true
url: "https://github.com/judell/community-calendar"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [57, 22]
stars: 18
forks: 10
openIssues: 12
closedIssues: 31
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2024-08-23T21:10:29Z"
lastCommitAt: "2026-10-29T05:48:41Z"
lastReleaseAt: "2026-08-13T18:54:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 71
maintainers: ["actions-user", "judell", "guptaaman678"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2fe1cbe9ee1deaa6b2a9acd6a83db1b21b5deb1ac593aa73a26d7c1e3915290/judell/community-calendar"
discussionCount: 1
---

# Community Calendar

Public events are trapped in information silos. The library posts to their website, the YMCA uses Google Calendar, the theater uses Eventbrite, Meetup groups have their own pages. Anyone wanting to know "what's happening this weekend?" must check a dozen different sites.

Existing local aggregators typically expect event producers to "submit" events via a web form. This means producers must submit to several aggregators to reach their audience — tedious and error-prone. Worse, if event details change, producers must update each aggregator separately.

This project takes a different approach: **event producers are the authoritative sources for their own events**. They publish once to their own calendar, and individuals and aggregators pull from those sources. When details change, the change propagates automatically. This is how RSS feeds work for blogs,iCalendar can do the same for events.

The gold standard is **iCalendar (ICS) feeds** — a format that machines can read, merge, and republish. If you're an event producer and your platform can publish an ICS feed, that's great. But ICS isn't the only way. The real requirement is to **embrace the open web**. A…
