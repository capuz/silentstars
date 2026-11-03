---
repo: "TUM-Dev/gocast"
name: "gocast"
description: "TUMs lecture streaming service."
readmeQualityOk: true
url: "https://github.com/TUM-Dev/gocast"
homepage: "https://tum.live"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [46, 38]
topics: ["education", "live-streaming", "video-streaming", "hacktoberfest"]
stars: 263
forks: 64
openIssues: 75
closedIssues: 497
watchers: 8
contributors: 47
recentReleases: 10
createdAt: "2021-02-19T08:44:21Z"
lastCommitAt: "2026-11-03T19:05:11Z"
lastReleaseAt: "2026-09-12T00:41:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 46
maintainers: ["joschahenningsen", "bassner", "SebiWrn"]
openGraphImageUrl: "https://opengraph.githubassets.com/37887b46068e18a27d17768b88c7860ae25f96f3c1a37e404d79efa1d0a91d24/TUM-Dev/gocast"
discussionCount: 8
---

# [TUM-Live](https://live.rbg.tum.de)

TUMs lecture streaming service, currently serving up to 100 courses every semester with up to 2000 active students.

Features include:
- Automatic lecture scheduling and access management coupled with [CAMPUSOnline](https://www.campusonline.tugraz.at)
- Livestreaming from lecture halls
  - Support for Extron SMPs and automatic backup recordings on them.
  - Support for preset management on ip cameras
  - Automatic recordings and video on demand with granular access control.
- Self-streaming
  - Stream ingest from Home using OBS or similar software.
- Live chat 
- Statistics (live and VoD view count)
- Self-service dashboard for lecturers 
  - schedule streams, manage access...

## Architecture

```
                                          ┌──────────────────────┐
                              ┌───────────►   Campus Management  │
                              │           │ System (CAMPUSOnline)│
               ┌──────────┐   │Enrollments└──────────────────────┘
               │Identity  │   │
               │Management│   │                 - Users,
               │  - SAML  ◄─┐ │                 - Courses,
               │  - LDAP  │ │ │…
