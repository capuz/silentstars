---
repo: "cloudy-sky-software/pulumi-render"
name: "pulumi-render"
description: "A Pulumi provider for Render based on Render's OpenAPI spec. https://render.com"
readmeQualityOk: true
url: "https://github.com/cloudy-sky-software/pulumi-render"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["pulumi", "pulumi-provider", "render"]
stars: 12
forks: 2
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-03-10T05:02:12Z"
lastCommitAt: "2026-10-21T23:36:22Z"
lastReleaseAt: "2022-08-03T16:26:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 70
maintainers: ["renovate[bot]", "praneetloke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/031741150444259df0144eea616182faf598bf1a14ae80a55aa741baf44a088c/cloudy-sky-software/pulumi-render"
---

# Pulumi Native Provider for Render

[Render](https://render.com/) is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

> This provider was generated using [`pulschema`](https://github.com/cloudy-sky-software/pulschema) and [`pulumi-provider-framework`](https://github.com/cloudy-sky-software/pulumi-provider-framework).

## Package SDKs

- Node.js: https://www.npmjs.com/package/@cloudyskysoftware/pulumi-render
- Python: https://pypi.org/project/pulumi-render/
- .NET: https://www.nuget.org/packages/CloudySkySoftware.Pulumi.Render
    - :warning: Previous versions of this provider used the namespace `Pulumi.Render` which are now deprecated.
- Go: `import github.com/cloudyskysoftware/pulumi-render/sdk/go/render`

## Using The Provider

You'll need an API key. Follow Render's [docs](https://render.com/docs/api#getting-started) for creating one.
Then set the API key as a secret with `pulumi config set --secret render:apiKey`.

### Importing Existing Resources

Import IDs should satisfy all ID segments in the `GET` endpoint for the resource
you are importing. The IDs…
