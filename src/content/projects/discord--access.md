---
repo: "discord/access"
name: "access"
description: "Access, a centralized portal for employees to transparently discover, request, and manage their access for all internal systems needed to do their jobs"
url: "https://github.com/discord/access"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 34]
topics: ["access", "authorization", "okta", "permissions", "rbac", "security"]
stars: 461
forks: 80
openIssues: 9
closedIssues: 15
watchers: 75
contributors: 549
recentReleases: 0
createdAt: "2024-03-27T02:26:38Z"
lastCommitAt: "2026-06-24T00:25:38Z"
lastReleaseAt: "2024-04-26T22:26:20Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 33
maintainers: ["somethingnew2-0", "eguerrant", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7638365f46d5829a0704b483af8a6fa23eaffd9775283b65a69b51eb407550ee/discord/access"
---

# ACCESS

Meet Access, a centralized portal for employees to transparently discover, request, and manage their access to all internal systems needed to do their jobs. If you're interested in the project, come chat with us!

## Purpose

The Access service exists to help answer the following questions for each persona:

- All Users
  - What do I have access to?
  - What does a teammate have access to that I don’t?
  - What groups and roles are available?
  - Can I request access?
- Team Leads
  - How do I give access to a new team member easily?
  - How do I give temporary access to an individual for a cross-functional effort?
  - Which roles do I administer?
  - How can I create, merge, or split a role based on a team re-org?
- Application Owners
  - Who has access to my application?
  - How do I setup access for a new application?
  - How do I create a new access group for my application?
  - How do I give a role access to one of my application's groups?

## Development Setup

Access is a React and Typescript single-page application (SPA) with a FastAPI backend that connects to the Okta API.

You'll need an Okta API Token from an Okta user with the `Group Admin` and `Application…
