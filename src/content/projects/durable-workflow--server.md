---
repo: "durable-workflow/server"
name: "server"
description: "Language-neutral workflow orchestration server for running durable workflows with external workers over HTTP. Supports task polling, schedules, namespaces, history export, role-scoped auth, and Docker/Compose/Kubernetes deployment, with persistence backed by SQLite, MySQL, or PostgreSQL."
readmeQualityOk: true
url: "https://github.com/durable-workflow/server"
homepage: "https://durable-workflow.com"
language: "PHP"
languages: ["PHP", "Rust"]
languagePcts: [47, 23]
topics: ["cronjob-scheduler", "distributed-cron", "distributed-systems", "microservice-framework", "microservice-orchestration", "microservices-architecture", "orchestrator", "workflow-automation", "workflow-engine", "workflow-management"]
stars: 6
forks: 2
openIssues: 75
closedIssues: 187
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-12T03:45:35Z"
lastCommitAt: "2026-11-04T02:32:31Z"
lastReleaseAt: "2026-05-03T04:55:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 62
maintainers: ["rmcdaniel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a394c5012634b56ad377fd0621726a44f6e06af01a5e718e2242d9e6cbc1a90/durable-workflow/server"
---

# Durable Workflow Server

Durable Workflow Server is the self-hosted, language-neutral runtime for
durable workflows. It records workflow state and history, matches tasks to
workers, fires timers and schedules, manages namespaces, and resumes execution
after process or infrastructure restarts.

Applications connect through first-party PHP, Python, and Rust SDKs. Workers
run in your application environment and can scale independently from Server.
For a managed runtime, use [Durable Workflow Cloud](https://cloud.durable-workflow.com/).
Laravel applications can also run the engine directly in
[embedded mode](https://durable-workflow.com/docs/2.0/category/embedded/).

[Documentation](https://durable-workflow.com/docs/2.0/) | [Sample App](https://github.com/durable-workflow/sample-app) | [CLI](https://github.com/durable-workflow/cli) | [Waterline](https://github.com/durable-workflow/waterline)

## Run Server

For the 21 October 2026 critical PHP update, follow the
[PHP runtime security notice](https://github.com/durable-workflow/server/blob/HEAD/docs/security/php-runtime-2026-10-21.md) and verify
the patched runtime in every deployed role.

The published Compose stack starts the…
