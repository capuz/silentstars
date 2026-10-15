---
repo: "formspark/httphq"
name: "httphq"
description: "Generate custom endpoints to capture and inspect HTTP requests"
readmeQualityOk: true
url: "https://github.com/formspark/httphq"
homepage: "https://httphq.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [47, 24]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-05-08T10:02:31Z"
lastCommitAt: "2026-10-15T08:32:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 74
maintainers: ["botre"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0bf6b1b89dc51316ddf2407c61d56353e6e6dea45412dd06383d70081357e8d/formspark/httphq"
---

https://httphq.com

    Generate custom endpoints to capture and inspect HTTP requests.

    Sponsored by <a href="https://formspark.io">Formspark</a>, the simple & powerful form solution for developers.

## CI

## Docs

[API](https://github.com/formspark/httphq/blob/HEAD/docs/api.md) · [Scripts](https://github.com/formspark/httphq/blob/HEAD/docs/scripts.md)

## Configuration

httphq is configured entirely through environment variables.

| Variable          | Required | Default       | Secret | Notes                                                                                                      |
| ----------------- | -------- | ------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `APPLICATION_ENV` | no       | `development` | no     | Set to `production` to bind all interfaces, raise the rate limit, and default logging to `info`.           |
| `LOG_LEVEL`       | no       | env-dependent | no     | Overrides the log level: `debug`, `info`, `warn`, or `error`.                                              |
| `PLATFORM`        | no       | `direct`      | no     | The hosting platform in front…
