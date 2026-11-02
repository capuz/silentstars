---
repo: "easimon/azure-builtin-roles"
name: "azure-builtin-roles"
description: "Monitor/Archive of Azure IAM (Role Definitions and Provider Operations). Tweets at https://twitter.com/maiam_bot"
readmeQualityOk: true
url: "https://github.com/easimon/azure-builtin-roles"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-30T17:11:48Z"
lastCommitAt: "2026-11-02T13:40:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 67
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f959ad1bba1ed3f0b80bf0070ce707196b7a01e2a7985050b762ffad96d5b03/easimon/azure-builtin-roles"
---

# Monitor/Archive of Azure IAM Definitions

## Twitter account has been suspended, so tweeting is disabled until this is resolved

Frequently updated list of

- Built-in Azure Role Definitions (not Azure AD roles)
- Azure Providers and their operations (to be used as `actions`/`dataActions` in role definitions)

to track changes over time. Inspired by [MAMIP Monitor AWS Managed IAM Policies](https://github.com/z0ph/MAMIP).

## What it does

There is a [scheduled workflow](https://github.com/easimon/azure-builtin-roles/blob/HEAD/.github/workflows/check_azure_updates.yaml) that does the following steps:

- Update the list of Built-In Azure role definitions using `az role definition list`,
  saved as one file per role definition
- Update the list of Azure providers and their operations using `az provider operation list / show`,
  saved as one file per provider
- Reformat them using `jq` to guard a bit against diff noise
- Push any detected additions/removals/modifications, one file at a time

## TODO list

- Monitor AAD roles
- ~~Add twitter bot support, similar to [MAMIP](https://twitter.com/mamip_aws)~~

## Caveats

### Other subscriptions accounts might show other results

The…
