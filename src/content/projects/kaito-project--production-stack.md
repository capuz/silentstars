---
repo: "kaito-project/production-stack"
name: "production-stack"
description: "Evaluating an inference stack built on top of KAITO and llm-d."
readmeQualityOk: true
url: "https://github.com/kaito-project/production-stack"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 6
forks: 7
openIssues: 8
closedIssues: 32
watchers: 0
contributors: 13
recentReleases: 6
createdAt: "2026-03-24T05:45:19Z"
lastCommitAt: "2026-08-17T04:19:55Z"
lastReleaseAt: "2026-08-13T00:21:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 76
maintainers: ["rambohe-ch", "tnsimon", "techworldhello"]
openGraphImageUrl: "https://opengraph.githubassets.com/994c9b51ef706c42c6b40953db800cf7ed98115dec9552ba7051c1ad62a53b7b/kaito-project/production-stack"
---

# Production Stack

This project evaluates a production inference stack built on top of existing OSS projects. The stack is designed based on the [**llm-d**](https://github.com/llm-d/llm-d) reference stack. Credits go to llm-d contributors for the reference architecture and the contribution of several core components, such as the EPP. In this stack, KAITO is the inference engine, and we focus on evaluating the request routing and autoscaling performance. We run the [vLLM simulator](https://github.com/llm-d/llm-d-inference-sim) so that the entire stack can be evaluated using CPUs only.

## Architecture

### Components

- **[Istio Gateway](https://istio.io/latest/docs/tasks/traffic-management/ingress/gateway-api/)** — Entry point for all inference requests. Routes client requests (e.g., `POST /v1/chat/completions`) through the stack.
- **[llm-gateway-auth](https://github.com/kaito-project/llm-gateway-auth)** — ext_authz API-key authorization filter. Validates the `Authorization: Bearer <token>` header against an `APIKey` custom resource resolved from the request's `Host` subdomain (`<namespace>.gw.example.com`) before any routing or model dispatch happens. Ships two components —…
