---
repo: "durable-workflow/server"
name: "server"
description: "Language-neutral workflow orchestration server for running durable workflows with external workers over HTTP. Supports task polling, schedules, namespaces, history export, role-scoped auth, and Docker/Compose/Kubernetes deployment, with persistence backed by SQLite, MySQL, or PostgreSQL."
readmeQualityOk: true
url: "https://github.com/durable-workflow/server"
homepage: "https://durable-workflow.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [65]
topics: ["cronjob-scheduler", "distributed-cron", "distributed-systems", "microservice-framework", "microservice-orchestration", "microservices-architecture", "orchestrator", "workflow-automation", "workflow-engine", "workflow-management"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 106
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-12T03:45:35Z"
lastCommitAt: "2026-10-08T10:52:21Z"
lastReleaseAt: "2026-05-03T04:55:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["durable-workflow-ops", "rmcdaniel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3887973e53c7137085e5ae29081fba704d3bb29b795334a193fdcee5f58efb4/durable-workflow/server"
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

The published Compose stack starts Server with MySQL, Redis, a queue worker,
and the scheduler. It bootstraps the database and the default namespace before
accepting traffic.

```bash
curl -fsSLO…
