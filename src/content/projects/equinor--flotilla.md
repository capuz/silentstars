---
repo: "equinor/flotilla"
name: "flotilla"
description: "Flotilla is the main point of access for operators to interact with multiple robots in a facility."
readmeQualityOk: true
url: "https://github.com/equinor/flotilla"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [59, 39]
stars: 19
forks: 47
openIssues: 27
closedIssues: 1102
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2021-11-23T08:21:54Z"
lastCommitAt: "2026-10-02T10:00:22Z"
lastReleaseAt: "2022-10-18T07:55:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 75
maintainers: ["Christdej", "aeshub", "andchiind"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/431017185/7699fe13-51f7-42a8-b31e-cf8e9f8f6224"
---

# Flotilla

Flotilla is the main point of access for operators to interact with multiple robots in multiple facilities.
The application consists of a [frontend](https://github.com/equinor/flotilla/blob/HEAD/frontend) in React, a [backend](https://github.com/equinor/flotilla/blob/HEAD/backend) in ASP.NET, and a Mosquitto MQTT [broker](https://github.com/equinor/flotilla/blob/HEAD/broker).

## Prerequisites

| Tool                                                                                                         | Version | Needed for                       |
| ------------------------------------------------------------------------------------------------------------ | ------- | -------------------------------- |
| [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) | latest  | Full stack (`make compose`) + Tilt broker/Postgres |
| [Tilt](https://docs.tilt.dev/install.html)                                                                   | latest  | Running the stack locally (`make run`) |
| [uv](https://docs.astral.sh/uv/getting-started/installation/)                                                | latest  |…
