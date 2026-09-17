---
repo: "kestra-io/plugin-git"
name: "plugin-git"
description: "Plugin to sync your code from Git, push your workflow code and namespace files from Kestra to Git, or clone custom Git repositories at runtime"
readmeQualityOk: true
url: "https://github.com/kestra-io/plugin-git"
homepage: "https://kestra.io/plugins/plugin-git"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["git", "kestra", "plugin", "hacktoberfest"]
stars: 10
forks: 11
openIssues: 4
closedIssues: 88
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2023-05-05T20:16:06Z"
lastCommitAt: "2026-09-17T08:51:40Z"
lastReleaseAt: "2024-06-04T10:01:47Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 86
maintainers: ["fdelbrayelle", "Malaydewangan09", "jymaire"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c92b2f0f26473d1ae1be5dede6398b8016f88681695ca598dcc6226743dd4ab/kestra-io/plugin-git"
---

</a>
</p>

<h1 align="center" style="border-bottom: none">
    Event-Driven Declarative Orchestrator
</h1>

</div>

<br />

</p>

<br />
    </a>
</p>

# Kestra Git plugin

## Why

- What user problem does this solve? Teams need to clone, fetch, and interact with Git repositories from orchestrated workflows instead of relying on manual console work, ad hoc scripts, or disconnected schedulers.
- Why would a team adopt this plugin in a workflow? It keeps Git steps in the same Kestra flow as upstream preparation, approvals, retries, notifications, and downstream systems.
- What operational/business outcome does it enable? It reduces manual handoffs and fragmented tooling while improving reliability, traceability, and delivery speed for processes that depend on Git.

## What

- Provides plugin components under `io.kestra.plugin.git`.
- Includes classes such as `SyncFlow`, `Sync`, `SyncNamespaceFiles`, `PushNamespaceFiles`.

## Dashboards

Dashboard tasks (`SyncDashboards`, `PushDashboards`) moved to the Git EE plugin in Kestra 2.0.0, because dashboards are an Enterprise Edition feature. `TenantSync` no longer syncs the `_global/dashboards` directory on OSS.

## Documentation
* Full…
