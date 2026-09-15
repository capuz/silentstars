---
repo: "zigflow/zigflow"
name: "zigflow"
description: "Define durable workflows in YAML, powered by Temporal"
readmeQualityOk: true
url: "https://github.com/zigflow/zigflow"
homepage: "http://zigflow.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["dsl", "serverless-workflow", "temporal", "workflows", "workflow-management-system", "durable-execution", "yaml", "temporal-dsl", "zigflow", "developer-tools"]
stars: 205
forks: 27
openIssues: 18
closedIssues: 73
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-08-01T17:01:42Z"
lastCommitAt: "2026-09-15T08:55:11Z"
lastReleaseAt: "2025-12-03T16:49:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 42
maintainers: ["mrsimonemms", "dependabot[bot]", "YJ-928"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1030452575/89fa3875-5ad9-4ac6-950d-4ef0e9f23026"
fundingLinks: ["GITHUB:https://github.com/mrsimonemms", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mrsimonemms"]
discussionCount: 6
---

**Declarative YAML workflows on Temporal. No SDK boilerplate.**

Zigflow lets you define and run [Temporal](https://temporal.io) workflows using
YAML, built on the [CNCF Open Workflow Specification](https://open-workflow-specification.org)
(formerly Serverless Workflow). You write a workflow definition; Zigflow
compiles it into a fully-featured Temporal workflow with retries, state
management and deterministic execution. No Go, Java or TypeScript workflow
code required.

> If this looks useful, a ⭐ helps others find the project.

---

## Quick start

Run your first workflow in a few minutes and see the result.

1. Install Zigflow

   ```sh
   brew tap zigflow/tap
   brew trust --cask zigflow/tap/zigflow
   brew install --cask zigflow
   ```

   For other options, see [installation docs](https://zigflow.dev/docs/getting-started/installation).

2. Start a Temporal server

   > Requires the [Temporal CLI](https://docs.temporal.io/cli)

   ```sh
   temporal server start-dev
   ```

   The Temporal UI will be available at <http://localhost:8233>.

3. Create a workflow

   Save this as `workflow.yaml`:

   ```yaml
   document:
     dsl: 1.0.0
     taskQueue: zigflow
     workflowType:…
