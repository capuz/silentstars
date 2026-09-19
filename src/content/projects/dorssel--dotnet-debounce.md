---
repo: "dorssel/dotnet-debounce"
name: "dotnet-debounce"
description: ".NET library that coalesces, debounces, serializes, and throttles incoming concurrent events."
readmeQualityOk: true
url: "https://github.com/dorssel/dotnet-debounce"
homepage: "https://dorssel.github.io/dotnet-debounce/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["coalesce", "debounce", "throttle", "dotnet", "rate-limit"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-04-09T19:07:02Z"
lastCommitAt: "2026-09-19T01:36:21Z"
lastReleaseAt: "2025-01-22T14:30:44Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 77
maintainers: ["dorssel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5f896c115e3d1ad7a402263902259beb6662513a32ce569f29222a5fe5980e4/dorssel/dotnet-debounce"
fundingLinks: ["GITHUB:https://github.com/dorssel"]
discussionCount: 0
---

# .NET event debouncer

This library exposes a single object: an event debouncer. It can be used to "filter" or "buffer" multiple incoming events into one.
It is also able to buffer attached event data for later usage at a performance cost.
Common uses are:

- Throttling how often the event handler is called.
- Coalescing/debounce multiple events into one; the final event includes to total number of events received.
- Serializing the event handler, such that it is not called re-entrant even if events are fired from multiple concurrent sources.
- Spacing event handler calls, to give the CPU / disk / network some breathing room if events are arriving continuously.

## Examples

### auto-save

You want auto-save for your changing documents. Every key press alters the document, but not every key press should immediately lead
to saving. Instead, the debouncer only fires when no new events are coming in within a configurable time window
(such as when the user stops typing for 10 seconds). But simultaneously,   the event should not be held off forever
(such as when the user types continuously). Therefore, the debouncer has a configurable maximum
timeout after which the save event is no…
