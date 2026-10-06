---
repo: "significa/1password-secrets"
name: "1password-secrets"
description: "1password-secrets is a CLI utility to sync 1Password secrets to local env files and Fly apps."
readmeQualityOk: true
url: "https://github.com/significa/1password-secrets"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["cli-tool", "secrets", "1password", "1password-cli", "flyio"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2023-01-30T15:16:26Z"
lastCommitAt: "2026-10-06T10:41:32Z"
lastReleaseAt: "2024-07-15T10:02:34Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 36
maintainers: ["tofran"]
openGraphImageUrl: "https://opengraph.githubassets.com/a17909505f90ed1cc76567f8109cf69ff39685d8103db9a72b922ebbe941daec/significa/1password-secrets"
---

# 1password-secrets

1password-secrets is a CLI utility to sync 1Password secrets (env files). It enables:

- Seamless sharing of _local_ secrets used for development.
  Developers starting out in a project can just use this tool to retrieve the `.env` file needed for
  local development.
  Likewise it is also simple to push any local changes to the 1password vault.

- More secure and simpler method of managing Fly.io secrets.
  By default, Fly secrets must be managed by `flyctl`. This means that when setting secrets in
  production, developers must use `flyctl` to pass credentials via arguments - risking credentials
  being stored in their histories. Alternatively, one must write secrets in a file and run
  `flyctl secrets import`. This works well, but you must ensure everything is synced to a
  secret/password manager and then delete the file.
  1password-secrets enables a leaner management of secrets via 1password. When passing a fly app name, it
  automatically finds and imports secrets on 1password to Fly. This way you ensure
  developers always keep secrets up-to-date and never in any files on disk.

Motivation: Using 1password avoids the need for another external secret…
