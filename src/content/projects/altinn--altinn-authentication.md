---
repo: "Altinn/altinn-authentication"
name: "altinn-authentication"
description: "Altinn platform microservice for handling authentication"
readmeQualityOk: true
url: "https://github.com/Altinn/altinn-authentication"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 8
forks: 6
openIssues: 148
closedIssues: 525
watchers: 14
contributors: 40
recentReleases: 0
createdAt: "2022-02-21T21:22:16Z"
lastCommitAt: "2026-10-09T10:50:36Z"
status: "thriving"
tags: ["community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 70
maintainers: ["TheTechArch", "renovate[bot]", "acn-dgopa"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe56cdf09b5b0d3351c541f340e2d730a5f2a977fb9fb8e363b2ed7f1f9ab7ee/Altinn/altinn-authentication"
---

# Altinn Platform Authentication

This repository contains the **Altinn Platform Authentication** component. It is responsible for authenticating the users, systems and organisations that access the Altinn 3 platform, and for issuing the Altinn JSON Web Tokens (JWT) that the rest of the platform trusts.

It does two things:

- **Browser sign-in** — a small OIDC authorization server that delegates identity proofing to upstream providers (ID-porten, FEIDE, UIDP) and establishes an Altinn session.
- **Token exchange** — exchanges a trusted external token (ID-porten / Maskinporten / Altinn Studio) for an Altinn JWT.

Read more on docs.altinn.studio:

- [Authentication capabilities](https://docs.altinn.studio/technology/architecture/capabilities/runtime/security/authentication/)
- [Solution components](https://docs.altinn.studio/technology/architecture/components/application/solution/altinn-platform/authentication/)
- [Construction components](https://docs.altinn.studio/technology/architecture/components/application/construction/altinn-platform/authentication/)

## Build status

## Documentation

In-repo documentation lives in…
