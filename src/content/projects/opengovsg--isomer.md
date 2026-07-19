---
repo: "opengovsg/isomer"
name: "isomer"
description: "Secure, reliable, accessible, and cost-effective static website builder for the Singapore Government"
readmeQualityOk: true
url: "https://github.com/opengovsg/isomer"
homepage: "https://www.isomer.gov.sg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 28
forks: 17
openIssues: 27
closedIssues: 60
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2024-01-08T16:34:39Z"
lastCommitAt: "2026-07-19T06:12:35Z"
lastReleaseAt: "2024-11-01T06:39:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["dependabot[bot]", "adriangohjw", "dcshzj"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d8f3e839ac0e0594e18dbd5d1909bcfd57f860fd711ae274cb0eec7836fdf5a/opengovsg/isomer"
---

# Isomer Next

This is a monorepo for the Isomer Next project.

## Getting Started

This monorepo uses pnpm and Turborepo. From the repository root:

```bash
corepack enable
pnpm install
```

The `turbo` CLI is available via `pnpm exec turbo` / `pnpm turbo` after install.

### Credentials

There are a few steps to getting started:

1. First, ensure that you are added to the Okta SSO. This can be verified via going to the `all-might` repository located [here](https://github.com/opengovsg/all-might)
   a. ensure that the user has a `/users/<name>.yml` file
   b. next, add the user to the relevant groups in `/groups`
   c. lastly, add the user to the relevant `applications`

2. Next, add the user to the AWS opengovsg org. This is done via configuration on the sso repo [here](https://github.com/opengovsg/opengovsg-aws-org-configs)
   a. follow the same process as above - add the users to `/config/users/<name>.yml`
   b. thereafter, add the user to either `/config/groups/isomer-admins.yaml` if they require admin permissions (engineer) or to `/config/groups/isomer-users.yaml` if they are not an engineer

3. Thirdly, get the credentials for 1Password
4. Add the user to the `isomerpages`…
