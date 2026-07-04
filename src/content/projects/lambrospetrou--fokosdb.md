---
repo: "lambrospetrou/fokosdb"
name: "fokosdb"
description: "FokosDB: A strongly consistent bottomless storage database ontop of Cloudflare Durable Objects"
url: "https://github.com/lambrospetrou/fokosdb"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 40
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2025-01-23T20:23:09Z"
lastCommitAt: "2026-07-04T19:19:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["lambrospetrou"]
openGraphImageUrl: "https://opengraph.githubassets.com/389f6941b921eb6a344f634c26cb781fe3a6d279ff8135a60880fb8c84d45536/lambrospetrou/fokosdb"
discussionCount: 0
---

# fokosdb

FokosDB: A strongly consistent bottomless storage database ontop of Cloudflare Durable Objects

Read the article introducing FokosDB and explaining the reasoning behind its architecture: <https://www.lambrospetrou.com/articles/fokosdb>

> [!CAUTION]
> **Do NOT use this in production, yet.**
>
> I am still doing breaking changes, and will continue doing so for a few weeks, so do not store any data you will need again until a version is published that I consider stable enough.
>
> **You have been warned!**

## Project structure

FokosDB is not yet extracted into a properly structured package and is now mixed into a test Worker that exposes any number of databases through a REST API.

This is intentional to allow quick iteration during initial development.
Once there is a stable version ready, I will properly refactor the directory structure and publish an NPM library with only the actual FokosDB library.

## TODO

No particular order.

### Performance and Reliability

- Update partial range topology within each partition to maintain also range boundaries to skip forwards in range partitions.
- Optimize the range partition splitting (25% of total space instead of 50%, and…
