---
repo: "hm-edu/shibboleth-sp-oidc"
name: "shibboleth-sp-oidc"
description: "OIDC PoC for Shibboleth as IdP"
readmeQualityOk: true
url: "https://github.com/hm-edu/shibboleth-sp-oidc"
homepage: "https://shibboleth-sp-oidc.seclab.cs.hm.edu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["next-auth", "nextjs", "playwright", "shibboleth", "shibboleth-idp", "shibboleth-sp"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-04-03T13:36:10Z"
lastCommitAt: "2026-07-29T06:13:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 68
maintainers: ["renovate[bot]", "fritterhoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0fa4e740c985380b0460d32438cd138a0d1b62ec9ed702be188a825a42b564b/hm-edu/shibboleth-sp-oidc"
---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [NextAuth.js](https://next-auth.js.org/) and [MUI](https://mui.com/).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shibboleth OIDC Configuration

Create a file called `.env.local` in the root of the project and add the following:

```bash
# next-auth environment variables
NEXTAUTH_DEBUG="<true|false>"
NEXTAUTH_SECRET="<given-secret>"
NEXTAUTH_URL="<given-base-url>"

# shibboleth oidc environment variables
SHIBBOLETH_OIDC_ISSUER_URL="<given-issuer-url>"
SHIBBOLETH_OIDC_SCOPE="<given-scope>"
SHIBBOLETH_OIDC_CLIENT_ID="<given-client-id>"
SHIBBOLETH_OIDC_CLIENT_SECRET="<given-client-secret>"
```
