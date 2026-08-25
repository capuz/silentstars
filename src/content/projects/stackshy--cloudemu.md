---
repo: "stackshy/cloudemu"
name: "cloudemu"
description: "  A real cloud simulator. It simulates real cloud resources (AWS, Azure, GCP) entirely in-memory on your machine."
readmeQualityOk: true
url: "https://github.com/stackshy/cloudemu"
homepage: "https://cloudemu.info"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 142
forks: 11
openIssues: 68
closedIssues: 128
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-02-27T20:14:31Z"
lastCommitAt: "2026-08-25T04:09:04Z"
lastReleaseAt: "2026-04-12T09:00:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 30
maintainers: ["NitinKumar004"]
openGraphImageUrl: "https://opengraph.githubassets.com/8988f099b62bd2270c053c3ec0a07ef0f1dc551c014f10d36d49ee2ded796060/stackshy/cloudemu"
discussionCount: 2
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/stackshy/cloudemu/development/.github/logo-dark.png" />
  </picture>
</p>

</p>

</p>

---

cloudemu emulates the **cloud APIs** of AWS, Azure, and GCP entirely in memory. Point the real SDKs or CLIs — in **any language** — at a local endpoint, and your unmodified code runs against an in-memory backend. No accounts, no network, no bill; instant, deterministic, and resettable.

It emulates the API **control surface** your code actually calls, not real infrastructure — which is exactly what removes cost, latency, and flakiness from the loop.

## Three ways to run it

1. **Standalone server / Docker** — `cloudemu serve` (or `docker run … ghcr.io/stackshy/cloudemu`). A long-lived local cloud you point any app, CLI, or SDK at, LocalStack-style.
2. **In-process SDK server** (Go) — a `httptest.NewServer` your tests point the real SDKs at. No container.
3. **Typed Go API** — call the in-memory mocks directly: `cloud.EC2.RunInstances(ctx, …)`.

## Quickstart

```sh
docker run --rm -p 4566:4566 -p 4568:4568 -p 4569:4569 -p 4570:4570 \
  ghcr.io/stackshy/cloudemu:latest
#   AWS 4566 · Azure…
