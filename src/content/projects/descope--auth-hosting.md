---
repo: "descope/auth-hosting"
name: "auth-hosting"
description: "A lightweight React app that hosts your Descope authentication flows. Each Descope project includes a hosted version of this app (custom domain supported), or you can fork and deploy it yourself to customize visuals like the background, layout, or branding."
readmeQualityOk: true
url: "https://github.com/descope/auth-hosting"
homepage: "https://auth.descope.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["authentication", "descope", "hosted", "oidc", "openid-connect", "vercel"]
stars: 58
forks: 14
openIssues: 3
closedIssues: 3
watchers: 11
contributors: 27
recentReleases: 0
createdAt: "2023-06-04T12:07:44Z"
lastCommitAt: "2026-10-28T09:58:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["descope[bot]", "dorsha", "ami-descope"]
openGraphImageUrl: "https://opengraph.githubassets.com/23023c15e3c1bcaa43b5410f4d8c7821597938f8d3bcafb826aa1aacb3599a16/descope/auth-hosting"
---

# Descope Authentication Hosting App

This is a React web application that runs Descope's login flows according to the project created in your [Descope](https://app.descope.com) account.

### Deployment

By default, the app is deployed to the Descope hosting page in [https://api.descope.com/login](https://api.descope.com/login).  
The main purpose is to allow easy integration for descopers implementing authentication with Descope (such as OIDC [use case](#open-id-connect-oidc-use-cases-in-descope)).

In case you want to have your own hosted page (customize styling, your own domain, etc.), you can use this repository as a template, do the relevant modification and host it (using Vercel, etc.)

---

#### Open ID Connect (OIDC) use cases in Descope

Descope allows you to integrate with your existing Identity Provider (IdP) via OpenID Connect (OIDC) or with any deployed OIDC client.  
With this implementation, you can seamlessly add Descope authentication to your application utilizing any OIDC provider.

You can refer to either the [main documentation](https://docs.descope.com/customize/auth/oidc) on how to set it up, or you can review a few of the tutorials published that showcase…
