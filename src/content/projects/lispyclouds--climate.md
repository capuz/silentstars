---
repo: "lispyclouds/climate"
name: "climate"
description: "The sidekick for your CLIs powered by OpenAPI"
url: "https://github.com/lispyclouds/climate"
homepage: "https://pkg.go.dev/github.com/lispyclouds/climate"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cli", "golang", "openapi"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-13T13:21:10Z"
lastCommitAt: "2026-07-01T07:05:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 37
maintainers: ["lispyclouds"]
openGraphImageUrl: "https://opengraph.githubassets.com/49141163d4a71269efbd6d2012fbd3f593954fa4d006933bfdcaabd13610d2a8/lispyclouds/climate"
---

# climate

Read the detailed [blogpost](https://zuplo.com/blog/2025/02/02/generate-cli-from-api-with-climate)!

Go is a fantastic language to build CLI tooling, specially the ones for interacting with an API server. `<your tool>ctl` anyone?
But if you're tired of building bespoke CLIs everytime or think that the swagger codegen isn't just good enough or don't quite subscribe to the idea of codegen in general (like me!), look no further.

What if you can influence the CLI behaviour from the server? This enables you to bootstrap your [cobra](https://cobra.dev/) or [urfave/cli/v3](https://cli.urfave.org/) CLI tooling from an [OpenAPI](https://swagger.io/specification/) spec. Checkout [Wendy](https://bob-cd.github.io/cli/#wendy) as an example of a full CLI project made using climate.

## Getting started

### Rationale

climate allows the server to influence the CLI behaviour by using OpenAPI's [extensions](https://swagger.io/docs/specification/v3_0/openapi-extensions/). It encourages [spec-first](https://www.atlassian.com/blog/technology/spec-first-api-development) practices thereby keeping both users and maintenance manageable. It does just enough to handle the spec and nothing more.…
