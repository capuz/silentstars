---
repo: "anduril/sample-app-auto-reconnaissance"
name: "sample-app-auto-reconnaissance"
description: "A sample application showcasing the use of the Tasks and Entities APIs"
readmeQualityOk: true
url: "https://github.com/anduril/sample-app-auto-reconnaissance"
homepage: "https://developer.anduril.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["lattice-sdk-sample"]
stars: 83
forks: 27
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 8
recentReleases: 0
createdAt: "2024-12-03T19:13:24Z"
lastCommitAt: "2026-11-02T15:17:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 32
maintainers: ["dependabot[bot]", "oagrawal-anduril", "vpuri-anduril"]
openGraphImageUrl: "https://opengraph.githubassets.com/750cfe668d3a0019bde859dcad44de181dbf65a7f04f0e49ad15ee97af4eb049/anduril/sample-app-auto-reconnaissance"
---

# Auto Reconnaissance

## Description

This app demonstrates how to use the Lattice REST SDK for Python SDKs perform a simulated auto-reconnaissance scenario.

This is comprised of three independent programs that work in conjunction; 
1. `simulated_track`: Publishes a representative Track, representing a real-world object that can't be commanded, such as a point-of-interest from a sensor. 
1. `simulated_asset`: Simulates an aerial vehicle that can be tasked to Orbit a point of interest. This uses the Orbit task, defined in `tasks/sim_asset_tasks.proto`
1. `auto-reconnaissance`: Tasks the simulated asset based on the location of the simulated track. This demonstrates how to create Tasks to control Agents in Lattice. 

The program streams all incoming entities with the Entities API, then determines if there is any non-friendly track within a certain distance from an asset.
If this requirement is fulfilled, the auto-reconnaissance system classifies the track disposition as suspicious, and creates an `Orbit` task for the asset to loop around the track.

## How to run locally

#### Prerequisites
- Python version greater than or equal to 3.13

#### Before you begin

Ensure you have [set…
