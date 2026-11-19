---
repo: "Ahoo-Wang/CoSec"
name: "CoSec"
description: "RBAC-based And Policy-based Multi-Tenant Reactive Security Framework  | Multi-tenant reactive security framework based on RBAC and policies"
originalDescription: "RBAC-based And Policy-based Multi-Tenant Reactive Security Framework  | 基于 RBAC 和策略的多租户响应式安全框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/CoSec"
homepage: "https://cosec.ahoo.me/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
topics: ["authentication", "authorization", "gateway", "identity", "java", "jwt", "kotlin", "policy", "rbac", "redis"]
stars: 45
forks: 4
openIssues: 3
closedIssues: 92
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2022-11-19T05:52:15Z"
lastCommitAt: "2026-11-19T05:01:35Z"
lastReleaseAt: "2022-12-01T13:11:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["Ahoo-Wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/2457636e56f2f60027cb43c777461d83480ab084a406d18c7fef2c5d38bf6dc1/Ahoo-Wang/CoSec"
discussionCount: 0
---

# CoSec

Multi-tenant, non-blocking authorization for Spring: IAM-style policy documents and role-based permissions,
evaluated deny-first for every request.

> [Documentation](https://cosec.ahoo.me/) | [中文文档](https://cosec.ahoo.me/zh/)

## Why CoSec

- **Policies as data.** Platform, app and tenant documents in JSON: statements on actions and resources, typed
  conditions (roles, tenant, app and space, IP ranges, time windows, external attributes), and bindings that say
  who each policy applies to. Every instance compiles them into a snapshot read from Redis and picks up published
  changes without a restart.
- **Deny wins, everywhere.** Any matching DENY overrides every ALLOW, in any document; unmatched requests are
  denied; a request that cannot be decided fails closed with `503`, with two documented exceptions: while the revocation store cannot be read a request's token is accepted unless `cosec.authentication.revocation.fail-closed` is `true`, and past the bounded snapshot lag only the tenants in `cosec.authorization.snapshot.fail-closed.tenants` answer `503` ([Security model](https://cosec.ahoo.me/guide/security-model#the-two-documented-exceptions)).
