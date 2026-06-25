---
repo: "k8s-operatorhub/community-operators"
name: "community-operators"
description: "The canonical source for Kubernetes Operators that are published on OperatorHub.io and part of the default catalog of the Operator Lifecycle Manager."
url: "https://github.com/k8s-operatorhub/community-operators"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [99]
stars: 266
forks: 741
openIssues: 0
closedIssues: 96
watchers: 2
contributors: 648
recentReleases: 0
createdAt: "2021-06-23T09:23:18Z"
lastCommitAt: "2026-06-25T01:37:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 47
maintainers: ["ack-bot", "stubbi", "maximilianoPizarro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7968effa6710a041b08845135c7e889bf1ae1c82c158b346eb8962ac9dd62c3/k8s-operatorhub/community-operators"
discussionCount: 18
---

# Kubernetes Community Operators

## About this repository

This repo is the canonical source for Kubernetes Operators that appear on [OperatorHub.io](https://operatorhub.io).
The solutions merged on this repository are distributed via the [OLM][olm] index catalog [quay.io/operatorhubio/catalog][quay.io].
Users can install [OLM][olm] in any Kubernetes or vendor such as Openshift to consume this content by adding a new CatalogSource for the index image `quay.io/operatorhubio/catalog`. [(more info)][catalog]

**NOTE** If you are looking to distribute solutions on Openshift/OKD catalog then, you also should publish them 
into the repository [Community Operators](https://github.com/redhat-openshift-ecosystem/community-operators-prod).

## Documentation

Full documentation is generated via [mkdoc](https://www.mkdocs.org/) and is located at [https://k8s-operatorhub.github.io/community-operators/](https://k8s-operatorhub.github.io/community-operators/)

## IMPORTANT NOTICE

Some APIs versions are deprecated and are OR will no longer be served on the Kubernetes version 
`1.22/1.25/1.26` and consequently on vendors like Openshift `4.9/4.12/4.13`.

**What does it mean for you?**

Operator…
