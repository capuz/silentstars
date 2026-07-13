---
repo: "rudderlabs/rudder-transformer"
name: "rudder-transformer"
description: "Open-source, warehouse-first Customer Data Pipeline and Segment-alternative. Collects and routes clickstream data and builds your customer data lake on your data warehouse."
readmeQualityOk: true
url: "https://github.com/rudderlabs/rudder-transformer"
homepage: "https://www.rudderstack.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["rudder", "rudder-server"]
stars: 96
forks: 13
openIssues: 0
closedIssues: 86
watchers: 19
contributors: 117
recentReleases: 0
createdAt: "2019-07-20T05:15:18Z"
lastCommitAt: "2026-07-13T06:38:30Z"
lastReleaseAt: "2023-03-23T10:13:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 49
maintainers: ["shekhar-rudder", "rudder-devbox[bot]", "maheshkutty"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a4181176ced27f364607592f1f8f176397ec5c578a93e53ce1461aaa0d022f3/rudderlabs/rudder-transformer"
discussionCount: 0
---

⚠️ Docker image for rudder-transformer has been moved to new org <a href="https://hub.docker.com/r/rudderstack/rudder-transformer/tags">rudderstack/rudder-transformer</a>
  <br/><br/>
 </p>

# RudderStack Transformer

RudderStack Transformer is a service which transforms the RudderStack events to destination-specific singular events. This feature is released under
under the [Elastic License 2.0](https://www.elastic.co/licensing/elastic-license).

## Transformer Setup

### Docker

If you want to run the RudderStack Transformer inside a Docker container, follow these steps:

1. Clone this repository
2. Run `docker-compose up transformer`

### Native Installation

On Mac, if you don't have `make` and `g++`, you would have to install `Xcode Command Line Tools` using `xcode-select --install`.

On Linux, install the required dependencies `python`, `make` and `g++` and follow these steps:

1. Clone this repository
2. Setup the repository with `npm run setup`
3. Build the service with `npm run build:clean`
4. Build isloated-vm with `npm run prepare`
5. Start the server with `npm start`

## Transformer without User Functions

If you don't need user functions, you can skip those and run a…
