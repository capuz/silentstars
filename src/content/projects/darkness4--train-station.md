---
repo: "Darkness4/train-station"
name: "train-station"
description: "A Full Stack demo app with gRPC and Modern Android Development/Svelte to keep up with today's standards."
url: "https://github.com/Darkness4/train-station"
homepage: "https://train.mnguyen.fr"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [63]
topics: ["kotlin", "room", "mvvm-android", "android", "mvvm-architecture", "svelte", "sveltekit", "grpc", "grpc-android", "grpc-go"]
stars: 13
forks: 4
openIssues: 1
closedIssues: 18
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-11-04T13:15:18Z"
lastCommitAt: "2026-06-25T01:38:17Z"
lastReleaseAt: "2021-07-27T22:15:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 75
maintainers: ["renovate[bot]", "Darkness4"]
openGraphImageUrl: "https://opengraph.githubassets.com/da4a6e990a24882f73fb24a2531fe0ebd0e9cfcd57a42aaa8e23183c9a03e402/Darkness4/train-station"
---

# Train Station

By Marc Nguyen and Jean-Baptiste Rubio.

## Specifications

### API

Specifications are given here: [Protos](./protos) and [`docs`](./docs)

### Android

- Fetch data from the api and display in a list and a screen with the details
- Possibility to bookmark certain items per user
- OAuth Authentication
- Mockup:
  
- Implementation of a search/filter system on the displayed list
- Setting up a local database to display the item list in offline mode
- Usage of StateFlow

## Screenshots

 
 

# Modern Android Development (MAD)

[MAD scorecard](https://madscorecard.withgoogle.com/scorecard/share/4258311558/)

# Documentation

## API

### Setup

#### Production build and deployment

1. Deploy an identity provider (like Dex):

   ```yaml
   # dex.config.yaml
   # TODO: for production, set this to the public URL of the auth server
   issuer: http://dex.example.com:5556

   # TODO: for production, change this
   storage:
     type: memory
   web:
     http: 0.0.0.0:5556
   telemetry:
     http: 0.0.0.0:5558

   # Configuration for static clients
   staticClients:
     # Used for login using server-side logic
     - id: train-station
       redirectURIs:
         # TODO:…
