---
repo: "pdevito3/FullstackTemplate"
name: "FullstackTemplate"
description: "A rich starter app in .NET and React with tooling for agentic development and verification"
readmeQualityOk: true
url: "https://github.com/pdevito3/FullstackTemplate"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [73, 23]
topics: ["bff", "dotnet", "fullstack", "react", "scaffold", "template", "webapp", "aspire", "aspire-dotnet", "northflank"]
stars: 5
forks: 0
openIssues: 18
closedIssues: 216
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-27T22:32:35Z"
lastCommitAt: "2026-11-05T08:05:39Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 97
undervaluedScore: 68
maintainers: ["pdevito3"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bbc71d4ca06bf9f9de461ee8607baa0774a04623eb051fb943b826c1c13b78c/pdevito3/FullstackTemplate"
---

# Fullstack Template

A production-ready .NET Aspire template featuring:
- **React 19** frontend with TanStack Router and React Query
- **Backend-For-Frontend (BFF)** pattern with YARP and OIDC, and server-side sessions in PostgreSQL
- **Configurable authentication** - one setting selects the auth provider, and a new provider is one folder in the AppHost
- **Multi-tenant architecture** with data isolation
- **OpenTelemetry** observability built-in
- **.NET 10** with Aspire 13.6

## Create a New App

1. Clone the repo, or use the GitHub "Use this template" button.
2. In the root of the clone, run the init script:

   ```bash
   dotnet run scripts/init.cs --name MyProject --auth-provider Keycloak
   ```

3. Commit the result.

To bring later template commits into the app, see [docs/template-updates.md](https://github.com/pdevito3/FullstackTemplate/blob/HEAD/docs/template-updates.md).

The script works on all platforms. It changes only a clean git tree. A second run with the same arguments changes nothing. The rename also deletes the files that only this repo uses: the CI job of the init script, the template merge script, and the OpenID conformance suite with its provider and the…
