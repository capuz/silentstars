---
repo: "MMRIZE/MMM-CalendarExt3"
name: "MMM-CalendarExt3"
description: "MagicMirror calendar view module"
readmeQualityOk: true
url: "https://github.com/MMRIZE/MMM-CalendarExt3"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 124
forks: 44
openIssues: 1
closedIssues: 115
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2022-04-24T15:16:52Z"
lastCommitAt: "2026-07-05T20:59:33Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 92
undervaluedScore: 41
maintainers: ["KristjanESPERANTO"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6aa9356d4e1e437c771da94895e5ee1b953eb4ce422964fa55020e1eb90e529/MMRIZE/MMM-CalendarExt3"
fundingLinks: ["KO_FI:https://ko-fi.com/eouia"]
discussionCount: 87
---

# MMM-CalendarExt3

**MMM-CalendarExt3** is a lightweight calendar module for [MagicMirror²](https://magicmirror.builders/) with week/month views, weather integration, and interactive popovers.

## Screenshot

## Concept

The previous module, `MMM-CalendarExt2`, was always notorious for its difficulty to use. I need a more easy and light one. So I re-write this from scratch newly.

## Features

### What's different with `CX2`.

- Only focusing on how it shows; Parsing is delegated to original MagicMirror module `calendar`. (It means the `calendar` module is REQUIRED to use this module.)
- Only `week` and `month` views. I found that people are rarely interested in other views on `CX2`. So I drop out different views.
- Respect to original MM's hide/show mechanism. Now you can hide/show this module easily with other scheduler or control modules. (By the way, Look at this module also. - [MMM-Scenes](https://github.com/MMRIZE/MMM-Scenes))
- No dependency on the 3rd party modules (e.g. momentJS or Luxon, etc.). This is built with pure JS and CSS only.

### Main Features

- `week` view or `month` view
- locale-aware calendar
- customizing events: filtering, sorting, transforming
-…
