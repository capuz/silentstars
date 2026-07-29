---
repo: "cel-expr/cel-java"
name: "cel-java"
description: "Fast, portable, non-Turing complete expression evaluation with gradual typing (Java)"
readmeQualityOk: true
url: "https://github.com/cel-expr/cel-java"
homepage: "https://cel.dev"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["cel", "expression", "expression-language", "expression-parser", "java"]
stars: 274
forks: 38
openIssues: 8
closedIssues: 42
watchers: 7
contributors: 26
recentReleases: 0
createdAt: "2023-01-09T22:47:41Z"
lastCommitAt: "2026-07-29T06:13:34Z"
lastReleaseAt: "2024-07-16T04:47:14Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 40
maintainers: ["l46kok", "andrewparmet", "copybara-github"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/587078119/da13fec1-ed41-4aa2-847c-188403e38b71?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061705Z&X-Amz-Expires=300&X-Amz-Signature=9cb2b97bbe9b3dfbc2c4579ed64c29f670a2d7bffdd3e1b66d3c356191afcc6f&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEyNSwibmJmIjoxNzg1MzA1ODI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.BxxtP2BMI_lScicMME3ryGHHooSn2kdN17ks5ja8x0Q"
---

# Common Expression Language for Java

The Common Expression Language (CEL) is a non-Turing complete language designed
for simplicity, speed, safety, and portability. CEL's C-like [syntax][1] looks
nearly identical to equivalent expressions in C++, Go, Java, and TypeScript.

```java
// Check whether a resource name starts with a group name.
resource.name.startsWith("/groups/"+auth.claims.group)
```

```go
// Determine whether the request is in the permitted time window.
request.time - resource.age < duration("24h")
```

```typescript
// Check whether all resource names in a list match a given filter.
auth.claims.email_verified && resources.all(r, r.startsWith(auth.claims.email))
```

A CEL "program" is a single expression. The examples have been tagged as
`java`, `go`, and `typescript` within the markdown to showcase the commonality
of the syntax.

CEL is ideal for lightweight expression evaluation when a fully sandboxed
scripting language is too resource intensive.

---

* [Quick Start](#quick-start)
* [Overview](#overview)
    * [Environment Setup](#environment-setup)
    * [Parsing](#parsing)
    * [Checking](#checking)
        * [Macros](#macros)
    *…
