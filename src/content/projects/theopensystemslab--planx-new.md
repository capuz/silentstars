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
stars: 18
forks: 4
openIssues: 12
closedIssues: 106
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2020-07-26T12:42:58Z"
lastCommitAt: "2026-10-05T10:46:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 68
maintainers: ["DafyddLlyr", "joecarver", "ianjon3s"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ce2281a3b669ee3de089dfbad9838d127fe630aa8e9a0d5768013f58fb270b3/theopensystemslab/planx-new"
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
