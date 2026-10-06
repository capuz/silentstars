---
repo: "1homsi/onekit"
name: "onekit"
description: "Define your API once in .onk schemas and generate Go, TypeScript, Python and Rust clients and servers, OpenAPI 3.1 docs, SSE and WebSocket streaming, mocks, and editor tooling."
readmeQualityOk: true
url: "https://github.com/1homsi/onekit"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["api", "code-generation", "codegen", "developer-tools", "golang", "idl", "language-server", "openapi", "python", "rpc"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 20
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-07-02T11:44:08Z"
lastCommitAt: "2026-10-06T10:42:00Z"
lastReleaseAt: "2026-07-12T12:07:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["1homsi", "dependabot[bot]", "AbedAmouneh"]
openGraphImageUrl: "https://opengraph.githubassets.com/9882b3c3a8d095ca53758d864554944d0f0d6f5d8f21f72ca58fecd83d4c20db/1homsi/onekit"
---

# onekit

onekit is a schema language and toolchain for building HTTP APIs. You describe an API once in `.onk` files, and `onek` generates the code around it: Go servers and clients, TypeScript clients and server routes, Python clients, Dart/Flutter clients, Swift clients, Rust clients and Axum servers, and OpenAPI 3.1 documents.

One binary does the whole job. The compiler turns your schemas into a single intermediate representation (`internal/onkir`), and every generator reads that same representation, so a rule written once in the schema behaves the same way in every language.

## The `.onk` language

```
package example.users

message User {
  id: string
  name: string
  email: string
}

message CreateUserRequest {
  name: string @len(2, 100)
  email: string @email
}

service UserService {
  base_path: "/v1"
  headers: {
    "X-API-Key": string @required @format("uuid")
  }

  createUser(CreateUserRequest) -> User @post("/users")
}
```

Fields carry no numbers to manage, and attributes are written as `@decorator(args)` on the field or method they apply to. The language is pre-1.0 and evolving; read…
