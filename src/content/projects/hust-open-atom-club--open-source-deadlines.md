---
repo: "hust-open-atom-club/open-source-deadlines"
name: "open-source-deadlines"
description: "An open-source events, conferences, and competitions showcase website | Deadlines of open source events, conferences, and competitions."
originalDescription: "一个开源活动、会议和竞赛的展示网站 ｜ Deadlines of open source events, conferences, and competitions."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hust-open-atom-club/open-source-deadlines"
homepage: "https://oseddl.openatom.club"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [77, 20]
stars: 77
forks: 17
openIssues: 12
closedIssues: 16
watchers: 1
contributors: 31
recentReleases: 0
createdAt: "2025-06-25T17:10:02Z"
lastCommitAt: "2026-07-21T06:12:21Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 74
undervaluedScore: 35
maintainers: ["inscripoem", "dependabot[bot]", "mattheliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/771227973901fbe37ceb9a55a9ed49d6f225b3c582b72b66d85ba59fef4bb894/hust-open-atom-club/open-source-deadlines"
fundingLinks: ["GITHUB:https://github.com/hust-open-atom-club"]
---

# Open Source Deadlines | Open Source Event Countdown

A website that tracks the deadlines of open source conferences, competitions, and events, helping developers stay updated on the latest open source activities and not miss opportunities to contribute, learn, and communicate with the community.

## How to Add Events

We warmly welcome community contributions! If you find any open source conferences, competitions, or events that are not included, or if the information is incorrect, please help us update by submitting a Pull Request.

All event data is stored in YAML files under the `/data` directory.

- **Conferences**: Please add to `data/conferences.yml`
- **Competitions**: Please add to `data/competitions.yml`
- **Activities**: Please add to `data/activities.yml`

### Data Structure

Please add new entries in the corresponding YAML file, following the format below:

```yaml
- title: Event Name (e.g., Summer of Open Source)
  description: A one-sentence description of the event (no more than 100 characters)
  category: competition # Use "conference" for conferences, "activity" for activities
  tags:
    - Tag1
    - Tag2
  events:
    - year: 2025 # Year
      id: ospp2024 #…
