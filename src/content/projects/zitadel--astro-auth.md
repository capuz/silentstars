---
repo: "zitadel/astro-auth"
name: "astro-auth"
description: "Official Zitadel auth integration for Astro."
url: "https://github.com/zitadel/astro-auth"
homepage: "https://www.npmjs.com/package/@zitadel/astro-auth"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [73, 20]
topics: ["astro", "auth", "authentication", "zitadel", "authn", "authorization", "authz", "iam", "identity", "login"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 4
createdAt: "2025-08-12T12:26:32Z"
lastCommitAt: "2026-06-21T22:33:00Z"
lastReleaseAt: "2026-06-20T23:36:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 74
maintainers: ["mridang", "dependabot[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3321567688e45aa71775c46e658a0fa3a3c6dcd8c81759698d890114c737fd4d/zitadel/astro-auth"
postedAt: "2026-06-20T23:46:36.407Z"
---

# Astro Auth

An [Astro](https://astro.build/) integration for auth
that provides seamless authentication with multiple providers, session
management, and UI primitives that feel natural in Astro.

This integration brings the power and flexibility of OAuth to Astro
applications with full TypeScript support, SSR-friendly HTTP handling,
and Astro-native patterns including integrations, endpoints, and components.

### Why?

Modern web applications require robust, secure, and flexible authentication
systems. Integrating OAuth and session management with Astro applications requires careful consideration of
framework patterns, server-side rendering, and TypeScript integration.

However, a direct integration isn't always straightforward. Different types
of applications or deployment scenarios might warrant different approaches:

- **Framework Integration:** OAuth and auth flows operate at the HTTP level, while Astro
  uses integrations, endpoints, and components. A proper integration should bridge this
  gap by providing Astro-native primitives for authentication and authorization
  while maintaining the full OAuth provider ecosystem compatibility.
- **HTTP Request Handling:** Astro’s…
