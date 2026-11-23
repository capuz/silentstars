---
repo: "NpgsqlRest/pg_function_load_tests"
name: "pg_function_load_tests"
description: "Performance testing that compares load tests of various web frameworks serving a PostgreSQL function through REST APIs,"
readmeQualityOk: true
url: "https://github.com/NpgsqlRest/pg_function_load_tests"
language: "Shell"
languages: ["Shell"]
languagePcts: [20]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-02T11:28:05Z"
lastCommitAt: "2026-11-23T13:30:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 65
undervaluedScore: 34
maintainers: ["vbilopav"]
openGraphImageUrl: "https://opengraph.githubassets.com/568e53e1ef6d1bd8bd3dc7f6809ac6f1cb5e26da836d378bdfb2505cd242ebb0/NpgsqlRest/pg_function_load_tests"
fundingLinks: ["PATREON:https://patreon.com/vbconsulting", "BUY_ME_A_COFFEE:https://buymeacoffee.com/vbilopavu"]
discussionCount: 3
---

# Load Performance Testing for Web APIs Returning PostgreSQL Functions

This project performs load performance testing for Web APIs on different tech stacks that execute PostgreSQL functions and return the results. The goal is to **measure framework overhead**, not database performance - all test functions use `generate_series()` for constant, predictable database response times.

## Frameworks Tested

| Framework | Version | Port | Language |
|-----------|---------|------|----------|
| Django | 6.1.3 | 8000 | Python 3.15 |
| FastAPI | 0.165.0 | 8001 | Python 3.15 |
| Fastify | 5.12.8 | 3101 | Node.js 26 |
| Express | 5.3.0 | 3102 | Node.js 26 |
| NestJS | 12.6.0 (Express platform) | 3106 | Node.js 26 |
| Bun | 1.4.5 | 3104 | Bun/TypeScript |
| Deno | 2.9.8 | 3105 | Deno/TypeScript |
| Go (net/http) | 1.27 | 5200 | Go |
| Gin | 1.12.0 | 5201 | Go 1.27 |
| Spring Boot | 4.2.0 | 5400 | Java 25 |
| Actix-web | 4.20 | 5300 | Rust 1.100 |
| Axum | 0.8.9 | 5301 | Rust 1.100 |
| Swoole | 6.2.6 | 3103 | PHP 8.5 |
| Laravel Octane | 13.43.0, Octane 2.25 on Swoole | 3107 | PHP 8.5 |
| PostgREST | 16.6 | 3000 | Haskell |
| PostGraphile | 5.2.1 (GraphQL) | 3108 | Node.js 26 |
