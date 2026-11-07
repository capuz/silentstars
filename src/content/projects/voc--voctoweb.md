---
repo: "voc/voctoweb"
name: "voctoweb"
description: "voctoweb – the frontend and backend software behind media.ccc.de"
readmeQualityOk: true
url: "https://github.com/voc/voctoweb"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [64]
topics: ["c3voc", "conference", "video", "hacktoberfest"]
stars: 236
forks: 67
openIssues: 110
closedIssues: 275
watchers: 19
contributors: 62
recentReleases: 0
createdAt: "2015-10-17T18:58:53Z"
lastCommitAt: "2026-11-07T10:36:41Z"
lastReleaseAt: "2026-03-06T00:01:30Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 39
maintainers: ["saerdnaer", "manno", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2790969d4f59bda918d696ad89f5d8c56d39f011bca8097041e276976e7b4fcd/voc/voctoweb"
---

# voctoweb
Voctoweb is a rails application that provides a “YouTube like” user interface to video, audio and pdf files; a meta data editor; and APIs. For more infomation about relations to other components see [c3voc Wiki](https://c3voc.de/wiki/software:voctoweb).

## APIs

 Every talk (alias **event**, in other systems also called lecture, session or generic item) is assigned to exactly one **conference** (e.g. the _congress_ or lecture series like _datengarten_ or _openchaos_) and consists of multiple files alias **recordings**. These files can be video or audio recordings of the talk in different formats and languages (live-translation), subtitle tracks as srt or slides as pdf.

### Public GraphQL API

The newest API endpoint is at https://media.ccc.de/graphql, implementing a GraphQL endpoint with Apollo Federation. This allows clients to only request the attributes they need, while all data needed per screen can be fetched in a single request. We tried to clean up the type names and call talks `lecture` and files `resources` (previously known as recordings). Please create issues if you are missing anything.

#### Query a lecture with video format preference

``` graphql
query…
