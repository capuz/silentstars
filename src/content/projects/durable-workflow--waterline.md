---
repo: "durable-workflow/waterline"
name: "waterline"
description: "Operator UI for Durable Workflow runtime health, history, queues, retries, and repair."
readmeQualityOk: true
url: "https://github.com/durable-workflow/waterline"
homepage: "https://durable-workflow.com/docs/2.0/monitoring/"
language: "PHP"
languages: ["PHP"]
languagePcts: [71]
topics: ["background-jobs", "laravel", "php", "queues", "workflows", "durable-execution", "durable-workflow", "monitoring", "observability", "workflow-engine"]
stars: 207
forks: 18
openIssues: 1
closedIssues: 63
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2022-10-31T03:35:59Z"
lastCommitAt: "2026-10-10T10:04:41Z"
lastReleaseAt: "2022-12-31T00:53:54Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 43
maintainers: ["durable-workflow-ops", "rmcdaniel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/559768001/9f8659c9-2a36-4616-ae19-99501c62e5dc"
---

# Waterline

Waterline is the operator UI for the technical runtime state of
[Durable Workflow](https://github.com/durable-workflow/workflow).

Waterline is for fleet health, queues, waits, retries, failures, repair,
history, and runtime diagnostics. Business dashboards should read
application-owned read models projected at domain milestones, with
`workflow_id` and `run_id` stored only as correlation references.

## Installation

Waterline uses one UI and operator behavior contract with two backend modes:

- Embedded mode is the Composer package inside a Laravel application and adds
  the optional `durable-workflow/workflow` integration.
- Service mode is the self-contained `durableworkflow/waterline` image. It
  needs no host PHP installation and connects to a standalone server through
  the published PHP SDK, never through the server database.

See [Waterline service mode](https://github.com/durable-workflow/waterline/blob/HEAD/SERVICE_MODE.md) for the image, deployment inputs,
authorization modes, persistence boundary, and Docker Compose example.

### Embedded Laravel

This UI is installable via [Composer](https://getcomposer.org).

```bash
composer require \…
