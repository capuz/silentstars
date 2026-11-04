---
repo: "Intentd/inrun"
name: "inrun"
description: "Intent Runner for Kubernetes"
readmeQualityOk: true
url: "https://github.com/Intentd/inrun"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["kubernetes", "operators", "declarative-operators", "intent", "platform-engineering", "crd", "go", "kubernetes-operator", "reconciliation"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-04T23:26:01Z"
lastCommitAt: "2026-11-04T11:27:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 15
maintainers: ["iAlexeze"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd487babf58c5af782d34105b6db5960bf44ea52b872c9c296fc5aca4baeec2/Intentd/inrun"
discussionCount: 1
---

Kubernetes reconciliation is battle-tested and free. Using it is expensive: a purpose-built operator, Kubernetes expertise, and maintenance for as long as it runs. So developers leave it to platform engineers.

Inrun opens it to anyone who has written a service that takes a request and returns a response.

You bring the decision. Inrun brings the machinery.

## How it works

A caller sends an **intent**: a small payload in their own words, with no `apiVersion`, `kind` or `spec`. Inrun turns it into a custom resource, reconciles it, and gives the caller back a **view** of the result.

```console
intent ──▶ gateway ──▶ custom resource ──▶ runtime ──▶ reconcile ──▶ status ──▶ view
```

**The reconciler decides. Inrun writes.** Inrun runs the informers, queues, retries, leader election, server-side apply, owner references, finalizers, status, events, cleanup and metrics. How a resource is reconciled is up to you:

- **Declarative:** describe the resources in a Blueprint. No code.
- **Remote:** any HTTP service, in any language, returns what should exist.
- **Existing service:** an API that knows nothing about Inrun reconciles as it is. Inrun calls it once per reconcile and maps its…
