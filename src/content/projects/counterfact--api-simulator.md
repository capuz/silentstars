---
repo: "counterfact/api-simulator"
name: "api-simulator"
description: "Turn an OpenAPI spec into a local API in one command. Build and test your frontend with custom responses, shared state, and simulated failures, without waiting for the backend."
readmeQualityOk: true
url: "https://github.com/counterfact/api-simulator"
homepage: "http://counterfact.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["front-end-development", "mock-server", "openapi", "openapi3", "swagger", "typescript", "openapi-generator", "openapi31"]
stars: 170
forks: 20
openIssues: 3
closedIssues: 393
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2022-04-08T19:32:15Z"
lastCommitAt: "2026-10-31T01:53:00Z"
lastReleaseAt: "2022-09-27T21:38:04Z"
status: "thriving"
tags: ["funded"]
healthScore: 100
undervaluedScore: 45
maintainers: ["pmcelhaney", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db0a13fb1bd2426ce0f6bbb06257a1cbe214c172ceb5c2d5f29aa45e5c70c42e/counterfact/api-simulator"
fundingLinks: ["GITHUB:https://github.com/pmcelhaney"]
discussionCount: 15
---

## Build the frontend. Don’t wait for the backend.

Counterfact lets frontend developers work independently of the backend.
People and agents can build and test against an API contract instead of a live
API, simulating new functionality, error responses, and edge cases. Selectively
proxy requests to real services when they are useful.

### The backend isn’t ready

Frontend work shouldn’t have to wait for the backend. When an API is unavailable or a feature hasn’t been built yet, developers still need a way to build and test the clients that depend on it.

### Counterfact implements the contract

Give Counterfact an OpenAPI contract, and it provides a working API for your web and mobile clients. Develop against that contract, simulate new functionality, and test errors and edge cases without waiting for the live backend.

### Mix simulated and real responses

The OpenAPI document describes the interface. Counterfact handles requests and
returns simulated responses or forwards selected requests to a real service.

## Try it

With Node.js 22.22 or newer, run this example in a new directory:

```sh
npx counterfact@latest https://petstore3.swagger.io/api/v3/openapi.json api
```…
