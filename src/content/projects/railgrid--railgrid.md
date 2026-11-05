---
repo: "railgrid/railgrid"
name: "railgrid"
description: "Railgrid helps platform teams turn company data, tools, and infrastructure into reusable building blocks for AI-built apps and agents."
readmeQualityOk: true
url: "https://github.com/railgrid/railgrid"
homepage: "https://railgrid.ai"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["platform", "platform-engineering"]
stars: 14
forks: 3
openIssues: 27
closedIssues: 52
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-17T08:22:52Z"
lastCommitAt: "2026-11-05T00:21:33Z"
lastReleaseAt: "2026-02-21T07:51:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 57
maintainers: ["cwilhit", "mjudeikis"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be74ca69341b15438e31ab8db639935cf9e1d06ba2ee15a89213a7faf69642f/railgrid/railgrid"
---

# railgrid

railgrid is an open-source control plane for platform teams.

Providers publish Kubernetes-style APIs, versioned actions and MCP tools into isolated tenant workspaces. Users, teams and organizations reach them through one portal, one CLI, one API and one MCP endpoint, and every call is authorized as the caller by the same RBAC. Edges extend the control plane to clusters and servers behind NAT through outbound tunnels, so the same workspace that holds an application also reaches the cluster it runs on.

> **Status: alpha.** railgrid is at v0.1.x, every API is `v1alpha1`, and it is developed by a small team. There is no hosted service; you run the hub yourself. Expect breaking changes between minor versions until the APIs stabilize.

## What railgrid gives you

- **Tenancy.** Organizations, teams and users each get an isolated workspace with its own API surface. Membership and roles are first-party APIs. Authenticate with any OIDC provider or, for a single user, a static token.
- **Providers.** Helm-installed extensions that bring an APIExport, controllers, a backend, a portal micro-frontend, MCP tools and actions. Tenants enable a provider in a workspace and get its…
