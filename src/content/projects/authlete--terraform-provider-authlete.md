---
repo: "authlete/terraform-provider-authlete"
name: "terraform-provider-authlete"
description: "This is a terraform provider for managing Authlete v3.0+. configuration"
readmeQualityOk: true
url: "https://github.com/authlete/terraform-provider-authlete"
homepage: "https://www.authlete.com/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["oauth", "oauth2", "oidc", "openid-connect", "terraform"]
stars: 5
forks: 6
openIssues: 1
closedIssues: 10
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2021-09-01T13:07:42Z"
lastCommitAt: "2026-11-23T10:18:37Z"
lastReleaseAt: "2022-09-01T14:59:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 87
maintainers: ["shariq-sdks", "srqai", "speakeasy-github[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbf67579730f5c4b32dac5bf92600025f83b16bff60355f13fa3eb029b54f66/authlete/terraform-provider-authlete"
---

# terraform-provider-authlete 3.1.0

Manage [Authlete](https://www.authlete.com) services and OAuth 2.0 / OpenID
Connect clients with Terraform.

> **Note**
>
> The 3.x line is the current one. See the
> [registry page](https://registry.terraform.io/providers/authlete/authlete/latest)
> for the latest release and the
> [release notes](https://github.com/authlete/terraform-provider-authlete/releases)
> for what changed in each.
>
> Coming from 1.3.x? v1.3.17 is the last release of that line, and 3.x is
> not an upgrade of it: your configuration and your state both need changes.
> Read the [migration guide](https://registry.terraform.io/providers/authlete/authlete/latest/docs/guides/migrating-from-1-3) before you change the version constraint.
>
> Already on 3.0.0? The migration guide has a section for you: 3.0.0 reset
> several settings whenever it updated a service, and later releases do not.
>
> Please report any issue you run into.

## Requirements

- Terraform 1.0 or later
- An Authlete 3.0 account and an **Organization Token** from the console

### Compatibility

| Provider | Authlete API |
|---|---|
| 3.x | 3.0 |
| 1.3.x | 2.2 and later |
