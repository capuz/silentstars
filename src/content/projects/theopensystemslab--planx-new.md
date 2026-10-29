---
repo: "theopensystemslab/planx-new"
name: "planx-new"
description: "Plan✕ is a platform for creating and publishing digital planning services"
readmeQualityOk: true
url: "https://github.com/theopensystemslab/planx-new"
homepage: "https://editor.planx.uk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 19
forks: 5
openIssues: 1
closedIssues: 117
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2020-07-26T12:42:58Z"
lastCommitAt: "2026-10-29T21:24:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 69
maintainers: ["DafyddLlyr", "jessicamcinchak", "ianjon3s"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a4423644ef150b681cd44541a525cb4f262eefca82473ff1b74d33368d5d2f/theopensystemslab/planx-new"
discussionCount: 5
---

# Plan✕

Plan✕ is a platform for creating and publishing digital planning services.

Learn more about how it's currently being used here: https://opendigitalplanning.org/

Explore our component library and design system here: https://storybook.planx.uk/

## Status pages

- Production: https://status.planx.uk
- Staging: https://status.planx.dev
- GIS & other data integrations: https://gis-status.planx.uk (ask for the password in Slack!)

## Our stack

planx-new is a monorepo containing our full application stack. Here's a quick summary of what you'll find here:

- `apps/api.planx.uk` is a Node/Express server and REST endpoints
- `apps/editor.planx.uk` is our React frontend, which consists of two main environments: an "editor" for service designers and a "preview" for public applicants. Our components are written with Material UI and broadly follow GOV.UK design patterns
- `apps/hasura.planx.uk` is a [Hasura](https://hasura.io/) GraphQL engine for our PostgreSQL database
- `apps/sharedb.planx.uk` is our implementation of [ShareDB](https://github.com/share/sharedb), a library for realtime document collaboration based on JSON Operational Transformation (OT) used in our "editor"…
