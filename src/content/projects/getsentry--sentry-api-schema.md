---
repo: "getsentry/sentry-api-schema"
name: "sentry-api-schema"
description: "Sentry's public API schema"
readmeQualityOk: true
url: "https://github.com/getsentry/sentry-api-schema"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [73, 27]
topics: ["tag-production"]
stars: 11
forks: 7
openIssues: 12
closedIssues: 9
watchers: 35
contributors: 237
recentReleases: 0
createdAt: "2020-08-18T19:18:13Z"
lastCommitAt: "2026-10-20T08:49:44Z"
lastReleaseAt: "2026-02-24T09:26:08Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 87
undervaluedScore: 55
maintainers: ["sentry-release-bot[bot]", "sentry-api-schema-updater[bot]", "wedamija"]
openGraphImageUrl: "https://opengraph.githubassets.com/e805c9d272724a71c1f7be8ebe36c9ad9fc409e5b153d9ca253afa6a00aaa338/getsentry/sentry-api-schema"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

# @sentry/api

The official, auto-generated TypeScript client for Sentry's public REST API.

## Install

```bash
npm install @sentry/api
```

## Usage

Configure a client once, then call its typed operation methods:

```ts
import { createSentryClient } from "@sentry/api";

const sentry = createSentryClient({
  baseUrl: "https://sentry.io",
  headers: { Authorization: `Bearer ${process.env.SENTRY_AUTH_TOKEN}` },
});

const result = await sentry.listOrganizations();

if ("error" in result) throw result.error;
console.log(result.data);
```

Operation methods retain the generated documentation, typed arguments, and response types. Per-call options include `path`, `query`, `headers`, `signal`, and `throwOnError`. Results preserve the underlying `request` and `response`, including response headers:

```ts
const controller = new AbortController();

const { data: project, request, response } = await sentry.getProject({
  path: {
    organization_id_or_slug: "my-org",
    project_id_or_slug: "my-project",
  },
  signal: controller.signal,
  throwOnError: true,
});

console.log(project, request.url, response.headers.get("content-type"));
```

Operations always return `fields`: `{ data,…
