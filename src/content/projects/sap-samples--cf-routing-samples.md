---
repo: "SAP-samples/cf-routing-samples"
name: "cf-routing-samples"
description: "Samples for the Cloud Foundry runtime on SAP BTP related to application routing topics such as HTTP/2 server examples for SAP BTP, Cloud Foundry runtime in various popular programming languages. The examples include H2C and gRPC examples."
url: "https://github.com/SAP-samples/cf-routing-samples"
homepage: "https://blogs.sap.com/2022/02/16/http-2-on-sap-btp-cloud-foundry-runtime/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [49, 23]
topics: ["sample", "sample-code", "sap-btp", "http2", "python", "node", "ruby", "golang"]
stars: 10
forks: 8
openIssues: 1
closedIssues: 1
watchers: 8
contributors: 108
recentReleases: 0
createdAt: "2022-02-07T18:08:45Z"
lastCommitAt: "2026-06-24T06:38:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 73
maintainers: ["dependabot[bot]", "Dariquest", "plowin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dceee482edfe63bfd0fdf163f1b02aab75d581b41d5c40abc1702ea510c4efc/SAP-samples/cf-routing-samples"
---

# Cloud Foundry Routing Samples

## Description

The SAP Business Technology Platform (BTP) provides a runtime environment for running your applications at scale.

This repository contains samples for applications running on the Cloud Foundry runtime for SAP BTP, related to routing topics.

In order to leverage more advance features of the routing stack of the Cloud Foundry runtime for SAP BTP, such as full support for HTTP/2, your apps need to add support.

The following samples are available in the respective subdirectories:

* [`http2`](http2/README.md) - HTTP/2 and gRPC enabled server samples for Cloud Foundry
* [`ip-allow-listing-route-service`](ip-allow-listing-route-service/README.md) - A route service that allows you to restrict access to your applications based on the client IP address
* [`per-route/loadbalancing`](per-route/loadbalancing/README.md) - A sample app that demonstrates how to use customizable load balancing algorithms in Cloud Foundry

## Requirements

The samples provided in this repository are intended to run in a Cloud Foundry environment. Each of the samples may contain further information on specific technical requirements.

Samples are provided in the…
