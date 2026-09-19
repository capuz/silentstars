---
repo: "cjlawson02/ntcore-ts"
name: "ntcore-ts"
description: "A TypeScript library for WPILib's NT4.1 spec"
readmeQualityOk: true
url: "https://github.com/cjlawson02/ntcore-ts"
homepage: "https://ntcore.chrislawson.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["dashboard", "first-robotics-competition", "networktables", "nodejs", "ntcore", "pubsub", "typescript"]
stars: 25
forks: 9
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-12-13T05:29:05Z"
lastCommitAt: "2026-09-19T02:45:37Z"
lastReleaseAt: "2025-02-10T21:13:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["renovate[bot]", "cjlawson02"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f22863712bdb21f91f4c8f3ac8a74d9ee6676ffd10dc254aa2544ff89fd300b/cjlawson02/ntcore-ts"
---

# ntcore-ts

TypeScript and React libraries for [WPILib's NetworkTables 4.1 protocol](https://github.com/wpilibsuite/allwpilib/blob/main/ntcore/doc/networktables4.adoc), plus an optional MCP server for agent tooling.

https://github.com/user-attachments/assets/eddf89b3-25c1-441b-aea5-357e49edd20e

> Live subscribe/publish dashboard (`apps/example-react`) talking to `apps/example-robot` over NT 4.1. Try it locally: start the robot (`npm run serve -w @ntcore-ts/example-robot`), then the dashboard (`npm run serve -w @ntcore-ts/example-react`).

## Features

- NodeJS and DOM support
- Togglable auto-reconnect
- Callbacks for new data on subscriptions
- Callbacks for connection listeners
- Wildcard prefix listeners for multiple topics
- Protobuf support with optional type generation and Zod validation
- Struct support for WPILib types (`getStructTopic(name, Pose2d)`, `useStructTopic(name, Pose2d)`)
- Retrying for messages queued during a connection loss
- On-the-fly server switching with resubscribing and republishing
- Generic types for Topics
- Client-side data validation using [Zod](https://github.com/colinhacks/zod)
- Server-matching timestamping using RTT calculation
- Granular…
