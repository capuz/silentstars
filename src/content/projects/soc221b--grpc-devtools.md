---
repo: "soc221b/grpc-devtools"
name: "grpc-devtools"
description: "Browser DevTools extension for debugging gRPC-Web and Connect-ES network requests."
readmeQualityOk: true
url: "https://github.com/soc221b/grpc-devtools"
homepage: "https://chrome.google.com/webstore/detail/fohdnlaeecihjiendkfhifhlgldpeopm"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 36]
topics: ["chrome-extension", "grpc-web", "connect-es"]
stars: 18
forks: 4
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-03-02T12:35:41Z"
lastCommitAt: "2026-08-07T05:16:03Z"
lastReleaseAt: "2025-04-30T06:58:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 63
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d6463f54df90c7b865a013ba6c769ba9a598cef9f815cbc9c1bf55a4c72d89e/soc221b/grpc-devtools"
discussionCount: 0
---

# gRPC Devtools

</div>

## Usage

### [gRPC-Web](https://github.com/grpc/grpc-web)

`gRPC-Devtools` requires at least [`gRPC-Web` 1.1.0](https://grpc.io/blog/grpc-web-interceptor/), so make sure you upgrade your grpc-web if you're still running an older one.

grpc-devtools.ts

```ts
import type { StreamInterceptor, UnaryInterceptor } from "grpc-web";

declare const __gRPC_devtools__:
  | undefined
  | {
      gRPCWebUnaryInterceptor: UnaryInterceptor<unknown, unknown>;
      gRPCWebStreamInterceptor: StreamInterceptor<unknown, unknown>;
    };

export const unaryInterceptors =
  typeof __gRPC_devtools__ === "object"
    ? [
        __gRPC_devtools__.gRPCWebUnaryInterceptor,
      ]
    : [];
export const streamInterceptors =
  typeof __gRPC_devtools__ === "object"
    ? [
        __gRPC_devtools__.gRPCWebStreamInterceptor,
      ]
    : [];
```

example.ts

```ts
import { unaryInterceptors, streamInterceptors } from "./grpc-devtools";

const client = new ChatServiceClient(host, creds, { unaryInterceptors, streamInterceptors });
```

## [Connect-ES](https://github.com/connectrpc/connect-es)

grpc-devtools.ts

```ts
import type { Interceptor } from "@connectrpc/connect";

declare…
