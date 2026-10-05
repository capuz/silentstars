---
repo: "axonivy/vscode-designer"
name: "vscode-designer"
description: "VS Code Extension for Axon Ivy"
readmeQualityOk: true
url: "https://github.com/axonivy/vscode-designer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 6
forks: 4
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2023-05-02T14:06:34Z"
lastCommitAt: "2026-10-05T10:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 83
maintainers: ["ivy-lli", "ivy-lgi", "ivy-rew"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fa868642bed3849f289e9814d6963f462bf5276c13237b631cc6bf93616572/axonivy/vscode-designer"
---

# VS Code extension

The available VS Code extension can be found under `/extension`.

## Build & Package

- `pnpm install`: install all packages
- `pnpm run build`: build the extension and webviews
- `pnpm run package`: package the extension as .vsix file

### Generate REST Client from Axon Ivy OpenAPI

To access the REST API of the engine and the market, we generate the Axios client from OpenAPI. To retreive the current OpenAPI specifications, you can run the following command (Maven needed):

```shellscript
pnpm run openapi
```

This will run `"openapi:download"` and `"openapi:codegen"`, which will download the most recent OpenAPI specification with and generate the Axios client under `extension/src/engine/api/generated` and `extension/src/market/api/generated`.
The OpenAPI specifications generated are from the last successful build of a releasing branch. You can also load the file from https://jenkins.ivyteam.io/job/core_openapi/.

If you're working on a feature branch and want to generate the clients from a manually generated OpenAPI specification, you can

- download the OpenAPI specification from the engine and place it under `target/engine/openapi.json` and then run:
-…
