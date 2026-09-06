---
repo: "pactflow/example-consumer"
name: "example-consumer"
description: "An example of a consumer that uses Pact+PactFlow to create a consumer driven contract with its provider"
readmeQualityOk: true
url: "https://github.com/pactflow/example-consumer"
homepage: "https://pactflow.io"
language: "TypeScript"
languages: ["TypeScript", "Makefile"]
languagePcts: [71, 25]
topics: ["example", "pactflow", "open-source"]
stars: 33
forks: 556
openIssues: 1
closedIssues: 48
watchers: 12
contributors: 11
recentReleases: 0
createdAt: "2020-04-04T02:10:58Z"
lastCommitAt: "2026-09-06T08:03:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 67
maintainers: ["pactflow-renovate-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b474966676d0951c1a6480118e4252e313c02610907588f2cc904b653eeb5925/pactflow/example-consumer"
---

# Example Consumer

This is an example of a Node consumer using Pact to create a consumer driven contract, and sharing it via [PactFlow](https://pactflow.io).

It is using a public tenant on PactFlow, which you can access [here](https://test.pactflow.io/) using the credentials `dXfltyFMgNOFZAxr8io9wJ37iUpY42M`/`O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1`. The latest version of the Example Consumer/Example Provider pact is published [here](https://test.pactflow.io/pacts/provider/pactflow-example-provider/consumer/pactflow-example-consumer/latest).

The project uses a Makefile to simulate a very simple build pipeline with two stages - test and deploy.

* Test
  * Run tests (including the pact tests that generate the contract)
  * Publish pacts, associating the consumer version with the name of the current branch
  * Check if we are safe to deploy to prod (ie. has the pact content been successfully verified)
* Deploy (only from master)
  * Deploy app (just pretend for the purposes of this example!)
  * Record the deployment in the Pact Broker

## Tech Stack

| Concern          | Tool       |
| ---------------- | ---------- |
| Build            | Vite       |
| Language         | TypeScript |
|…
