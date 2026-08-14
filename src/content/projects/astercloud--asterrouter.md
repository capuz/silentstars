---
repo: "astercloud/asterrouter"
name: "asterrouter"
description: "asterrouter  星尘智路"
readmeQualityOk: true
url: "https://github.com/astercloud/asterrouter"
homepage: "https://asterroute.proxyai.best/"
language: "Go"
languages: ["Go"]
languagePcts: [69]
topics: ["ai", "airouter", "router"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-09T23:25:15Z"
lastCommitAt: "2026-08-14T05:15:19Z"
lastReleaseAt: "2026-07-13T15:23:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 61
maintainers: ["wutongci", "lwmacct"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8ae451a68b936278bbaf187869894d41a8aa15a7e1f394f399e18dabbf93339/astercloud/asterrouter"
---

# AsterRouter

**Enterprise AI access, governed by policy.**

A private-deployable AI gateway for enterprise applications, teams, and internal platforms.

[简体中文](https://github.com/astercloud/asterrouter/blob/HEAD/README.zh-CN.md) · [Product and refactor blueprint](https://github.com/astercloud/asterrouter/blob/HEAD/docs/README.md)

</div>

## What AsterRouter is

AsterRouter is an enterprise AI gateway between applications and authorized AI providers. It gives one stable API endpoint and one control plane for:

- application access and credential lifecycle;
- model service and provider supply;
- access policies and routing policies;
- usage, cost, budgets, traces, and audit evidence;
- private deployment and enterprise identity boundaries.

```text
Enterprise applications and employees
                 |
                 v
      AsterRouter Enterprise AI Gateway
  Identity -> Access Policy -> Routing Policy
                 |
                 v
          Authorized AI providers
```

## Product shape

There is one public product entry and two authenticated work surfaces:

| Surface | Purpose | Entry |
| --- | --- | --- |
| Official Website | Public product scope, routing model,…
