---
repo: "finos/messageml-utils"
name: "messageml-utils"
description: "MessageML is a markup language used by the Symphony Agent API for representing messages, including formatting (bold, italic, numbered and unnumbered lists etc.) and entity data representing structured objects."
readmeQualityOk: true
url: "https://github.com/finos/messageml-utils"
homepage: "https://docs.developers.symphony.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["symphony", "messageml"]
stars: 15
forks: 34
openIssues: 7
closedIssues: 133
watchers: 11
contributors: 36
recentReleases: 0
createdAt: "2017-05-03T17:13:54Z"
lastCommitAt: "2026-11-02T15:18:10Z"
lastReleaseAt: "2017-08-30T04:12:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 73
maintainers: ["renovate[bot]", "thibauult", "iaShatalov"]
openGraphImageUrl: "https://opengraph.githubassets.com/da37b884b81392422a3e0292d98f885a8a3eb3fdb63134c490961e74c60b9fc1/finos/messageml-utils"
---

# Introduction

MessageML is a markup language used by the Symphony Agent API for representing messages, including formatting (bold,
italic, numbered and unnumbered lists etc.) and entity data representing [_structured
objects_](https://docs.developers.symphony.com/building-bots-on-symphony/messages/overview-of-messageml/entities/structured-objects).

The format is intended to allow third parties to create and render rich content messages representing complex objects,
enabling deep workflow integrations across multiple systems, with Symphony being the central hub.

# Description

Support of Symphony structured objects comprises the ability to parse and render the following formats:

* [MessageML](https://docs.developers.symphony.com/building-bots-on-symphony/messages/overview-of-messageml), a superset of PresentationML, adding a number of
  convenience tags for more complex or frequently used constructs. It is translated to PresentationML internally by the
  Agent API before ingestion in Symphony.
* [PresentationML](https://docs.developers.symphony.com/building-bots-on-symphony/messages/overview-of-presentationml), a strict subset of HTML5
  describing the markup which controls…
