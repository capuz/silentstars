---
repo: "edgefirst-dev/api-client"
name: "api-client"
description: "A basic HTTP client for making API requests"
readmeQualityOk: true
url: "https://github.com/edgefirst-dev/api-client"
homepage: "https://edgefirst-dev.github.io/api-client/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-13T20:11:07Z"
lastCommitAt: "2026-08-03T06:44:08Z"
lastReleaseAt: "2025-09-01T23:46:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 50
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10eb311137f10a2dee6681040e20da686a21cd6c7a69472b9b309647ce7e38ba/edgefirst-dev/api-client"
fundingLinks: ["GITHUB:https://github.com/sergiodxa"]
---

# @edgefirst-dev/api-client

The `APIClient` class provides a flexible and extensible HTTP client for making API requests. It supports common HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) and allows customization of the request and response handling through the `before` and `after` interceptor hooks.

## Installation

```sh
bun add @edgefirst-dev/api-client
```

## Usage

Import the `APIClient` and create a new instance to make API requests.

```ts
import { APIClient } from "@edgefirst-dev/api-client";

let client = new APIClient("https://api.example.com");
let response = await client.get("/users/1");
```

### Customization

You can customize the request and response handling by extending the `APIClient` class and overriding the `before` and `after` methods.

```ts
class CustomAPIClient extends APIClient {
  async before(request: Request) {
    // Add a custom header to the request
    request.headers.set("X-Custom-Header", "value");

    return request;
  }

  async after(request: Request, response: Response) {
    if (response.status === 401) {
      // Handle unauthorized error
      throw new Error("Unauthorized");
    }

    return response;
  }
}

let client = new…
