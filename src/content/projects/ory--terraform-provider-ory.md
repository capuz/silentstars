---
repo: "ory/terraform-provider-ory"
name: "terraform-provider-ory"
description: "Terraform provider for managing Ory Network resources — identities, OAuth2 clients, permissions, organizations, projects, and more."
url: "https://github.com/ory/terraform-provider-ory"
homepage: "https://registry.terraform.io/providers/ory/ory/latest"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["identity", "infrastructure-as-code", "oauth2", "ory", "terraform", "terraform-provider", "ory-network"]
stars: 20
forks: 2
openIssues: 2
closedIssues: 62
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2025-12-16T12:43:26Z"
lastCommitAt: "2026-06-30T06:50:11Z"
lastReleaseAt: "2026-03-18T15:59:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["ory-bot", "KT-Doan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b86e03397693105d8af52c1259af2b68211450cee9f373cb6a58fe7ad75c1cd0/ory/terraform-provider-ory"
---

# Terraform Provider for Ory Network

> **Special Thanks**
> Shoutout to [Jason Hernandez](https://github.com/jasonhernandez) and the [Materialize](https://materialize.com/) team for creating the initial version of this provider! Also see [NOTICE.md](./NOTICE.md)

A Terraform provider for managing [Ory Network](https://www.ory.sh/) resources using infrastructure-as-code.

> **Note**: This provider is for **Ory Network** (the managed SaaS offering) only. It does not support self-hosted Ory deployments.

## Migrating Deprecated `ory_project_config` Attributes

Many attributes in the `ory_project_config` resource have been renamed to follow the OpenAPI spec naming convention. The old names still work but will show deprecation warnings in Terraform output and will be removed in a future major version. Run `./scripts/migrate-deprecated-attrs.sh` to see the full list of renames.

**Examples of renamed attributes:**

| Old Name | New Name |
|----------|----------|
| `enable_password` | `selfservice_methods_password_enabled` |
| `login_ui_url` | `selfservice_flows_login_ui_url` |
| `oauth2_access_token_lifespan` | `oauth2_ttl_access_token` |
| `password_min_length` |…
