---
repo: "SELISEdigitalplatforms/blocks-iam"
name: "blocks-iam"
description: "Identity and Access Management for SELISE Blocks: accounts, roles, permissions, organizations, authentication, SSO/OIDC, MFA and CAPTCHA."
readmeQualityOk: true
url: "https://github.com/SELISEdigitalplatforms/blocks-iam"
homepage: "https://seliseblocks.com"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [65, 34]
topics: ["authentication", "authorization", "blocks", "dotnet", "iam", "identity", "mfa", "oidc", "react", "seliseblocks"]
stars: 46
forks: 1
openIssues: 12
closedIssues: 228
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2026-04-19T08:50:23Z"
lastCommitAt: "2026-10-04T10:01:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["asifrafeen", "rezwanx", "kazi-lakit"]
openGraphImageUrl: "https://opengraph.githubassets.com/292427ae125b70c568486566ecaa7eae3f16712b3a17e5781484705651c644bf/SELISEdigitalplatforms/blocks-iam"
---

# Blocks IAM

Blocks IAM is the identity and access management service of the SELISE `<Blocks/>` platform: an **ASP.NET Core** API (Genesis-backed) with a **React** (Vite, TypeScript) single-page application built into `server/Api/wwwroot`, plus a background **Worker**. It implements sign-in and sign-up (including social and GitHub SSO), OIDC flows and client management, sessions and devices, MFA, tokens and personal access tokens, and the IAM domain itself (users, organizations, roles and permission grants) consumed by the other Blocks services.

## Project structure

```
blocks-iam/
├── client/                      # React + Vite + TypeScript
│   ├── app/                     # Application code (idp, cross-modules, pages, routes,
│   │                            #   components, guards, hooks, lib, providers, …)
│   ├── public/                  # Static assets copied as-is by Vite
│   ├── index.html
│   ├── vite.config.ts           # build.outDir → ../server/Api/wwwroot; `BLOCKS_*` env prefix
│   ├── package.json
│   └── .env.example             # Copy to .env (see below)
├── server/
│   ├── Api/                     # Web host (Kestrel, Genesis, controllers)
│   │   ├──…
