---
repo: "anduril/sample-app-ais-integration-grpc"
name: "sample-app-ais-integration-grpc"
description: "A sample application showcasing the use of the Entities gRPC APIs"
readmeQualityOk: true
url: "https://github.com/anduril/sample-app-ais-integration-grpc"
homepage: "https://developer.anduril.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["lattice-sdk-sample"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2024-12-03T19:12:24Z"
lastCommitAt: "2026-11-02T15:17:26Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 48
maintainers: ["dependabot[bot]", "anduril-gh-bot", "oagrawal-anduril"]
openGraphImageUrl: "https://opengraph.githubassets.com/f57a8450fb3f3a9c61b7bd8c410f980fa423368e3f5c48c17958501234758782/anduril/sample-app-ais-integration-grpc"
---

# AIS to Lattice Integration - gRPC

This is a sample application showcasing an integration between AIS vessel traffic data and Lattice.

The sample application demonstrates how to use the Lattice gRPC SDK for initializing an entity and features the `publish_entity` endpoint to illustrate publishing an entity to the Lattice API.

The AIS (Automatic Identification System) vessel traffic dataset is a repository of vessel identification and positioning data. The data is collected through an onboard navigation safety device that transmits and monitors the location and characteristics of vessels in U.S. For this sample demonstration, the only 4 fields in the dataset that we are interested in are the MMSI, latitude, longitude, and vessel name. These fields are used to simulate maritime traffic, creating and continuously updating vessel entities with their latest position and publishing them to the Lattice API in real-time.

## Before you begin

- Install Python version greater than or equal to 3.10.
- Complete the [set up](https://developer.anduril.com/guides/getting-started/set-up) instructions in the *Lattice SDK Documentation*.

## Clone the repository

```bash
git clone…
