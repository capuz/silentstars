---
repo: "ThalesGroup/fred"
name: "fred"
description: "the UI and agentic backend of the fred innovation track"
url: "https://github.com/ThalesGroup/fred"
homepage: "https://fredk8.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 22]
topics: ["agentic-ai", "langchain", "langgraph", "model"]
stars: 56
forks: 26
openIssues: 27
closedIssues: 904
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2025-05-15T13:32:22Z"
lastCommitAt: "2026-06-29T07:21:55Z"
lastReleaseAt: "2025-08-19T15:50:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["simcariou", "dimitri-tombroff", "marcfawaz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6266686aa408cf82ffde11cdfc1c29235b764faff064c3ba69c083a62fd806b0/ThalesGroup/fred"
discussionCount: 0
---

# Fred

> **IMPORTANT:** This project currently includes a dependency licensed under AGPL (GNU Affero General Public License). This library will be removed in an upcoming release. Until then, be aware that the AGPL terms may apply to deployments that use the affected component.

Two key references before diving in:

- [Who does what](https://github.com/orgs/ThalesGroup/projects/8/views/4)
- [Fred deployment factory](https://github.com/fred-agent/fred-deployment-factory)

Fred is a production-ready platform for building and operating multi-agent AI applications. It has two complementary faces:

- **A hosted platform** — control plane, knowledge flow, chat frontend, auth, team access control, observability, and Kubernetes-ready deployment, all integrated and ready to use.
- **An open agent model** — a typed SDK and lightweight runtime that let teams ship independent agent pods, registered with the platform and operated alongside it without forking the core.

## How Fred is structured

Fred is built around three platform applications and a publishable SDK stack:

| Layer      | Package                                                     | Role…
