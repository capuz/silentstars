---
repo: "xenit-eu/thunx"
name: "thunx"
description: "Pluggable ABAC/PBAC middleware"
readmeQualityOk: true
url: "https://github.com/xenit-eu/thunx"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "openpolicyagent", "querydsl", "spring", "spring-cloud-gateway", "spring-data-jpa", "spring-security"]
stars: 39
forks: 12
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2021-06-08T14:50:59Z"
lastCommitAt: "2026-07-14T05:52:41Z"
lastReleaseAt: "2022-12-16T09:56:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 54
maintainers: ["renovate[bot]", "AndreasVAmexio", "NielsCW"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7049f0a4535c93d3b4fda22e1c7a92ede44ccc202b0fb8ae1b02d51bde4203a/xenit-eu/thunx"
---

# Thunx  

Thunx is a pluggable [Attribute Based Access Control] system, with and end-to-end implementation
using:
* [OpenPolicyAgent] as a policy engine
* [Spring Cloud Gateway] as a policy enforcement point 
* [Spring Data REST] as an API service

This project uses a distributed authorization architecture, by applying:
* early access decisions at the API Gateway 
* postponed access decisions in the Spring Data REST service

When the API Gateway does not have sufficient contextual information to grant or deny access,
it delegates the policy decision to the Spring Data REST service. This API Service receives an
authorization-predicate, a __thunk__ from the API Gateway and rewrites the database queries to
ensure the authorization-predicate is satisfied.

### Advantages

This approach provides the following advantages:

* **Decoupling**: The API service does not need to be concerned with authorization logic.
* **Performance**: Using query-rewriting instead of post-filtering can be orders of magnitude faster.
* **Performance**: By delegating decisions to the appropriate data-context, access policies can be much more
  fine-grained, without paying a big runtime penalty for loading…
