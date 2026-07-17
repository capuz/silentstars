---
repo: "raviqqe/oneRPC"
name: "oneRPC"
description: "The router-less serverless RPC framework for TypeScript"
readmeQualityOk: true
url: "https://github.com/raviqqe/oneRPC"
homepage: "https://raviqqe.github.io/oneRPC"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["nextjs", "rpc", "typescript", "edge-computing", "aws-lambda"]
stars: 31
forks: 1
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-22T03:01:29Z"
lastCommitAt: "2026-07-17T05:58:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 57
maintainers: ["dependabot[bot]", "raviqqe"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e2ccebee714c5fc93e00a0a6f324dd4a16a7b7bbe7d8c9969c724080882bc45/raviqqe/oneRPC"
---

# oneRPC

The router-less serverless RPC framework.

oneRPC is a minimal RPC library to convert a server-side function of a type, `(input: T) => Promise<S>` into `(request: Request) => Promise<Response>` and make it callable from the client side in a type-safe way.

Currently, we support [React Router](https://reactrouter.com/), [Next.js Route Handlers][route-handlers], and [AWS Lambda](https://aws.amazon.com/lambda/).

## Features

- 🔮 Seamless client-server communication

  You can call remote procedures just as seamless as calling local functions.

- 🛡️ Type safe

  Server-client communication is made safe with request and response types in TypeScript which are used by both client and server.

- 🔥 Serverless first

  Routing is delegated to other frameworks or infrastructures.

- 🤝 HTTP friendly

  You can leverage full potential of HTTP functionalities, such as cache control headers.

- 🐁 Minimal dependencies

  It depends only on [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API). Thus, it works on many platforms including Node.js, Deno, and edge runtimes.

- 🌊 Streaming support

  Stream responses are transferred as [JSON Lines](https://jsonlines.org/) and…
