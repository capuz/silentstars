---
repo: "inorbit-ai/inorbit-robot-connectors"
name: "inorbit-robot-connectors"
description: "Collection of connectors that communicate with InOrbit platform on behalf of robots by means of the InOrbit Python Edge SDK"
url: "https://github.com/inorbit-ai/inorbit-robot-connectors"
homepage: "https://www.inorbit.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["edge-sdk", "fleet-management", "interoperability", "robotics", "robots"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-09-01T16:10:52Z"
lastCommitAt: "2026-06-24T00:23:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 72
maintainers: ["b-Tomas", "leandropineda", "miguelgarcia"]
openGraphImageUrl: "https://opengraph.githubassets.com/9230a43bb2931275c5a37f1b392c490e8405d29a141f13884655e4f68876ee52/inorbit-ai/inorbit-robot-connectors"
---

# InOrbit Robot Connectors

This repository hosts a collection of Connectors that communicate with the *InOrbit Platform* on behalf of robots by means of the [InOrbit Python Edge SDK](https://github.com/inorbit-ai/edge-sdk-python). Its goal is to group ready to use Connectors for different robot vendors or types, easing the integration between *InOrbit* and any other robot software.

## Connectors

The following Connectors are included in this repository:

### OTTO Motors

The [InOrbit](https://inorbit.ai/) Robot Connector for [OTTO Motors](https://directory.inorbit.ai/connect/OTTO-Motors) AMRs. Making use of the OTTO Fleet Manager's WebSocket and REST APIs, it allows integrating OTTO robots with your fleet on InOrbit, unlocking interoperability.

A single instance of the Connector is capable of controlling multiple robots.

Check the [README](otto_connector/README.md) for more details on requirements and how to set it up.

### Mobile Industrial Robots (MiR)

The [InOrbit](https://inorbit.ai/) Robot Connector for [Mobile Industrial Robots](https://directory.inorbit.ai/connect/Mobile-Industrial-Robots-A/S) AMRs.

It is a single robot connector, meaning one instance of it per robot…
