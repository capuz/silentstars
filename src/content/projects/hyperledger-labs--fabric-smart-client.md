---
repo: "hyperledger-labs/fabric-smart-client"
name: "fabric-smart-client"
description: "The Fabric Smart Client is a framework that lets you focus on the business processes and simplifies the development of Fabric(x)-based distributed application."
readmeQualityOk: true
url: "https://github.com/hyperledger-labs/fabric-smart-client"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["blockchain", "fabric", "hyperledger-fabric", "fabric-x", "lfdt"]
stars: 77
forks: 90
openIssues: 56
closedIssues: 961
watchers: 3
contributors: 47
recentReleases: 0
createdAt: "2021-05-28T14:40:53Z"
lastCommitAt: "2026-11-11T11:21:52Z"
lastReleaseAt: "2026-04-02T15:47:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 58
maintainers: ["mbrandenburger", "SaidAltury-ibm", "entrepreneurme"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc4619fbf11787b0704a1b2dcca8e459fa768e2c3e6d36cf8240057db65648bd/hyperledger-labs/fabric-smart-client"
---

# Fabric Smart Client

The Fabric Smart Client (FSC) is a Go framework for building client applications on Hyperledger [Fabric](https://github.com/hyperledger/fabric) and [Fabric-x](https://github.com/hyperledger/fabric-x). You write a business process as a set of *views*, one for each party, that exchange messages over sessions. FSC handles identities, endorsement, ordering, commit notifications and the peer-to-peer channels between the parties.

## Features
- A view and session programming model for multi-party protocols.
- Direct peer-to-peer communication between FSC nodes.
- Transaction assembly, endorsement collection and finality tracking for Fabric and Fabric-x.
- One node can connect to several networks, each configured in `core.yaml`.

## Getting started
To write your first FSC application:
1. Read [Core concepts](https://github.com/hyperledger-labs/fabric-smart-client/blob/HEAD/docs/core-concepts.md) for what FSC is and how a business process maps to views.
2. Follow the [Programming model guide](https://github.com/hyperledger-labs/fabric-smart-client/blob/HEAD/docs/platform/view/programming-model.md): how an application creates a node, installs SDKs, and registers…
