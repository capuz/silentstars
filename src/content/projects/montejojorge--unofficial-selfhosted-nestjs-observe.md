---
repo: "MontejoJorge/unofficial-selfhosted-nestjs-observe"
name: "unofficial-selfhosted-nestjs-observe"
description: "Selfhosted version of nestjs observe"
readmeQualityOk: true
url: "https://github.com/MontejoJorge/unofficial-selfhosted-nestjs-observe"
homepage: "https://montejojorge.github.io/unofficial-selfhosted-nestjs-observe/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["error-monitoring", "error-reporting", "loggin", "metrics", "nestjs", "nestjs-observability", "nodejs", "telemetry"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-10-28T10:58:09Z"
lastCommitAt: "2026-11-24T14:10:01Z"
lastReleaseAt: "2026-11-18T12:08:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["MontejoJorge"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b056f17b5ff1080edfa075359400f5b177191edfd46e264ffd7e249f4224fa/MontejoJorge/unofficial-selfhosted-nestjs-observe"
---

A self-hosted collector and dashboard for <a href="https://github.com/nestjs/observe"><code>@nestjs/observe</code></a>.<br />
  Keep your NestJS requests, jobs, errors, logs, traces and metrics on your own infrastructure, with no plan limits.

> **Note**
>
> This is a community project, not affiliated with the NestJS team. It is built with AI: most of the code
> and docs were written by AI coding agents, reviewed and directed by the maintainer.

> **Important**
>
> This project only works with **`@nestjs/observe` 0.3.20 or earlier**. Later releases may not work correctly
> with this collector, and they ship under the NestJS Observe Agent License, which only allows sending
> telemetry to NestJS Observe: pointing them at this collector would breach that license. See
> [issue #1](https://github.com/MontejoJorge/unofficial-selfhosted-nestjs-observe/issues/1).

Install or downgrade the agent to that exact version, without a `^` range, in your Nest app:

```sh
pnpm add @nestjs/observe@0.3.20 --save-exact
```
