---
repo: "opengovsg/isomer"
name: "isomer"
description: "Secure, reliable, accessible, and cost-effective static website builder for the Singapore Government"
url: "https://github.com/opengovsg/isomer"
homepage: "https://www.isomer.gov.sg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 26
forks: 15
openIssues: 40
closedIssues: 44
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2024-01-08T16:34:39Z"
lastCommitAt: "2026-07-03T06:23:28Z"
lastReleaseAt: "2024-11-01T06:39:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["dependabot[bot]", "adriangohjw", "seaerchin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3eddc40c4ea3785d9f11395e13216263892aa40d971751917802eee7f0152d2/opengovsg/isomer"
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
