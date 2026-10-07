---
repo: "guardian/service-catalogue"
name: "service-catalogue"
description: "Provides an overview of P&E services and related metadata"
readmeQualityOk: true
url: "https://github.com/guardian/service-catalogue"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["production"]
stars: 8
forks: 0
openIssues: 3
closedIssues: 3
watchers: 27
contributors: 45
recentReleases: 0
createdAt: "2022-08-03T14:35:11Z"
lastCommitAt: "2026-10-07T10:30:46Z"
status: "watched"
tags: ["community_watch"]
healthScore: 89
undervaluedScore: 51
maintainers: ["NovemberTang", "akash1810", "melissaclark-gd"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2a1e989c51fd286c3ec4d35547a27ed28f261726827a2fc9f57caf0028e647e/guardian/service-catalogue"
discussionCount: 0
---

# The Product & Engineering Service Catalogue

A database of information from AWS, GitHub, Synk, and other sources,
Service Catalogue aims to provide a picture of the Guardian's estate,
broken down by Product & Engineering (P&E) team.

In contrast with [Prism](https://github.com/guardian/prism), which collects data
from a subset of AWS resources, Service Catalogue offers a more complete picture
of production services, as we may provision a resource that Prism doesn't know
about.

## Purpose

The Guardian has hundreds of EC2, lambda, and other services in AWS,
each built from one of thousands of GitHub repositories,
by one of many P&E teams.

Some of the questions Service Catalogue aims to answer include:

- For P&E teams:
  - Which services do I own?
  - Which services follow DevX best practice/use tooling?
  - Which repo do services come from?
  - What is my service reliability? (time since last incident)
- For the Developer Experience stream:
  - What proportion of all services follow best practice/use tooling?
  - What kinds of technologies are different streams using?
  - Which teams are struggling with reliability and need more support?
  - Which services belong to specific…
