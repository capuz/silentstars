---
repo: "cortex-docs/cortex"
name: "cortex"
description: "Generate typed SDKs from OpenAPI, AsyncAPI, GraphQL, gRPC, and OpenRPC—plus interactive docs and MCP servers enriched with custom Markdown."
readmeQualityOk: true
url: "https://github.com/cortex-docs/cortex"
homepage: "https://cortexdocs.dev"
language: "TypeScript"
languages: ["TypeScript", "EJS"]
languagePcts: [54, 32]
topics: ["api-client", "api-documentation", "api-reference", "asyncapi", "code-generation", "developer-experience", "developer-tools", "documentation-generator", "graphql", "grpc"]
stars: 84
forks: 178
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-12T11:45:41Z"
lastCommitAt: "2026-09-13T08:29:38Z"
lastReleaseAt: "2026-09-12T09:53:03Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 46
maintainers: ["nick-csu", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc3c1e905801e9b95243bb4e23a9e60f7a30d804028e57a4d37d7843dd465fb7/cortex-docs/cortex"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/docs-site/assets/logo_dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="packages/docs-site/assets/logo_light.svg">
  </picture>
</p>

<h2 align="center">Every developer. Every agent.</h2>

  Cortex turns API specifications and Markdown into typed SDKs, interactive documentation, and an MCP server from one project configuration.
</p>

  OpenAPI · AsyncAPI · GraphQL · gRPC · OpenRPC · Markdown
</p>

</p>

<h3 align="center">
</h3>

</p>

</br>

Cortex combines OpenAPI, AsyncAPI, GraphQL, Protocol Buffer, OpenRPC, and Markdown sources. Developers get interactive documentation, applications get typed SDKs, and AI agents get an MCP server with project context.

If Cortex helps your team, [star this repository](https://github.com/cortex-docs/cortex) to support its development.

## Try Cortex in 60 seconds

Create a sample project and inspect the generation plan:

```bash
mkdir petstore
cd petstore
npm install --global @cortex-docs/cli
cortex init petstore
cortex validate
cortex generate --dry-run
```

Cortex validates each source and shows every planned output:

```text
✓ Config is valid
✓…
