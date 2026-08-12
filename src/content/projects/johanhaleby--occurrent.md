---
repo: "johanhaleby/occurrent"
name: "occurrent"
description: "Unintrusive Event Sourcing Library for the JVM"
readmeQualityOk: true
url: "https://github.com/johanhaleby/occurrent"
homepage: "https://occurrent.org"
language: "Java"
languages: ["Java"]
languagePcts: [86]
topics: ["cloud-events", "event-sourcing", "java", "kotlin"]
stars: 164
forks: 19
openIssues: 87
closedIssues: 249
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2020-07-06T17:14:59Z"
lastCommitAt: "2026-08-12T05:14:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["johanhaleby"]
openGraphImageUrl: "https://opengraph.githubassets.com/97500d44d10353bee1644e1ecd96743ae951963f7e024820d42dd5d6ac6ef7c8/johanhaleby/occurrent"
fundingLinks: ["GITHUB:https://github.com/johanhaleby"]
discussionCount: 0
---

<br>

Occurrent is an Event Sourcing library based on the [cloud events](https://cloudevents.io/) specification. 

#### Documentation

You can find documentation on the [website](https://occurrent.org).

#### Design Choices

Occurrent is designed to be [simple](https://www.infoq.com/presentations/Simple-Made-Easy/), unintrusive and pragmatic. It emphasizes understandability, composability, transparency, and pragmatism.
 
* You should be able to design your domain model without _any_ dependencies on Occurrent or any other library. Your domain model can be expressed with pure functions that return events. Use Occurrent to store these events.
* Simple: Pick only the libraries you need, no need for an all-or-nothing solution.
* You should be in control! Magic is kept to a minimum and data is stored in a standard format ([cloud events](https://cloudevents.io/)). You are responsible for serializing/deserializing the cloud events "body" (data) yourself.
* Composable: Function composition and pipes are encouraged. For example pipe the event stream to a rehydration function (any function that converts a stream of events to the current state) before calling your domain model.
* Designed to…
