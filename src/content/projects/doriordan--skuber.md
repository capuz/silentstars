---
repo: "doriordan/skuber"
name: "skuber"
description: "A Scala Kubernetes client library"
readmeQualityOk: true
url: "https://github.com/doriordan/skuber"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 332
forks: 97
openIssues: 0
closedIssues: 151
watchers: 13
contributors: 51
recentReleases: 0
createdAt: "2015-11-25T13:43:33Z"
lastCommitAt: "2026-08-29T10:22:15Z"
lastReleaseAt: "2018-04-05T14:12:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 24
maintainers: ["doriordan", "scala-steward", "antholeole"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad6d08d569213eb46ff7e6d2b3dd738d20bc30beb4ab41efe03d8717d3e35487/doriordan/skuber"
---

***Announcement*** Looking to build a Kubernetes-native operator or controller in Scala? The new [skuber-operator](https://github.com/doriordan/skuber-operator) project builds on Skuber to offer a fully-featured Operator SDK similar to those offered in other languages.

# Skuber
 
Skuber is a Scala client library for [Kubernetes](http://kubernetes.io). It provides fully featured, high-level and strongly typed Scala APIs for managing Kubernetes cluster resources (such as Pods, Services, Deployments, StatefulSets, Ingresses, Roles etc.) via the Kubernetes REST API server. 

The client library offers a choice from four concrete clients, each sharing the same data model, JSON serialisers and configuration but using different asynchronous runtimes that support the underlying HTTP and streaming requirements:

 - An [Apache Pekko based client](#using-the-pekko-client).
 - An equivalent [Akka based client](#using-the-akka-client), specifically targeted at [Akka](https://akka.io/) licensees.
 - A [ZIO based client](#using-the-zio-client).
 - A [Cats effects based client](#using-the-cats-effect-client).

These are probably the most popular asynchronous runtimes in the Scala ecosystem, so…
