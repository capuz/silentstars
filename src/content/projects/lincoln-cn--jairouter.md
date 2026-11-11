---
repo: "Lincoln-cn/JAiRouter"
name: "JAiRouter"
description: "Self-hosted LLM gateway for Java and Spring Boot teams: one OpenAI-compatible endpoint in front of Ollama, vLLM, GPUStack and cloud models, with RBAC, rate limiting, circuit breaking, audit and a visual console."
readmeQualityOk: true
url: "https://github.com/Lincoln-cn/JAiRouter"
homepage: "https://jairouter.com/"
language: "Java"
languages: ["Java"]
languagePcts: [77]
topics: ["api-gateway", "circuit-breaker", "gateway", "load-balancing", "model-serving", "openai-api", "rate-limiting", "ai-gateway", "java", "llm"]
stars: 26
forks: 11
openIssues: 1
closedIssues: 463
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2025-08-06T07:21:45Z"
lastCommitAt: "2026-11-11T19:47:56Z"
lastReleaseAt: "2026-08-25T11:01:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 74
maintainers: ["Lincoln-cn", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/491cebd1333c2f6ab6772e1b9e1b9ac83b9b8a86093c68c8440105d5f738a1f8/Lincoln-cn/JAiRouter"
discussionCount: 4
---

# JAiRouter

  Ollama · vLLM · GPUStack · Xinference · LocalAI · OpenAI · Claude · Gemini<br>
  Routing · load balancing · rate limiting · circuit breaking · failover · RBAC · audit · visual console

This README is written to be read by **people and AI agents alike**: the facts block below and the
[Repository map](#repository-map) / [Commands](#commands) / [HTTP surfaces](#http-surfaces) sections
are the machine-actionable core. Where the code and this file disagree, the code wins — please open
an issue so we can fix the file.

```yaml
product:         JAiRouter
repository:      Lincoln-cn/JAiRouter
checkout_dir:    model-router            # the local/git directory name differs from the product name
artifact:        model-router            # Maven artifactId
project_version: 3.8.5                   # pom.xml
latest_release:  v3.8.5 (2026-11-12)
stack:
  backend:  Java 17 + Spring Boot 4.1.2 (WebFlux / reactive)
  frontend: Vue 3 + TypeScript + Vite, bilingual zh-CN / en-US
  build:    Maven wrapper — ./mvnw (Unix) · .\mvnw.cmd (Windows)
runtime:
  default_port: 8080
  console:      /admin/
  swagger_ui:   dev profile only
  required_env_in_prod: [JWT_SECRET,…
