---
repo: "hnaderi/scala-k8s"
name: "scala-k8s"
description: " Kubernetes client, data models and typesafe manifest generation for scala, scalajs, and scala native"
readmeQualityOk: true
url: "https://github.com/hnaderi/scala-k8s"
homepage: "http://projects.hnaderi.dev/scala-k8s/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "circe", "kubernetes", "kubernetes-api", "manifest", "scalajs", "scalanative", "typesafe", "typesafe-config", "typesafe-configuration"]
stars: 50
forks: 10
openIssues: 2
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-09-03T03:32:18Z"
lastCommitAt: "2026-08-28T12:23:12Z"
lastReleaseAt: "2022-11-04T09:04:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["hnaderi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c875faea5ac99fa42275b65acfc3455e5fb416205186d38aca219a396a4a3be/hnaderi/scala-k8s"
discussionCount: 3
---

<br/>
  <strong>Scala K8S</strong>
  <i>Kubernetes client, data models and typesafe manifest generation for scala, scalajs, and scala native</i>
</p>

## What
This library provides a full blown extensible client that you can use to interact directly with kubernetes API server, to create operators or accomplish other automation tasks, also you can use it to create or manipulate manifests in scala.

## Why
Kubernetes spec is large enough to fit in one's brain, and YAML and helm are a joke! instead of using different tooling and languages with no to little IDE and compiler support, you can use this library to have the latest kubernetes API spec under your tool belt, in scala!
so the most complex templates are just simple functions, and you can use whatever abstraction you like to create objects; and create manifests easily.  
for easy to use recipes and integration with sbt, visit [this project](https://github.com/hnaderi/sbt-k8s)  

## Goals
- to become the defacto k8s integration library in all scala ecosystems 

## Design principles
- As extensible as possible
- As dependency free as possible
- As Un-opinionated as possible
- Provide seamless integrations
- All specs are generated…
