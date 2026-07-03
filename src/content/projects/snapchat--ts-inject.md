---
repo: "Snapchat/ts-inject"
name: "ts-inject"
description: "Typesafe dependency injection framework for TypeScript projects, providing easy-to-use, maintainable, and scalable code with strong type safety."
url: "https://github.com/Snapchat/ts-inject"
homepage: "https://snapchat.github.io/ts-inject/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 22
forks: 3
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-07-26T22:55:54Z"
lastCommitAt: "2026-07-03T06:24:26Z"
lastReleaseAt: "2026-03-11T00:54:46Z"
status: "thriving"
tags: []
healthScore: 68
undervaluedScore: 37
maintainers: ["kburov-sc", "Montana", "msilivonik-sc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c35ba1a49456bf240f4b5bfd588e0ef71a854874d457419d4014cad510b6687e/Snapchat/ts-inject"
---

# ts-inject

`ts-inject` is a 100% typesafe dependency injection framework for TypeScript projects, designed to enhance code sharing and modularity by ensuring compile-time dependency resolution. This framework leverages the dependency injection design pattern to decouple dependency usage from creation, allowing components to rely on interfaces rather than implementations.

## Features and Alternatives

`ts-inject` brings typesafety to dependency injection, setting it apart from a vast majority of frameworks, like [InversifyJS](https://github.com/inversify/InversifyJS), which operate at runtime and therefore lack this level of typesafety.

While [typed-inject](https://github.com/nicojs/typed-inject) also prioritizes typesafety, it lacks several key features that `ts-inject` offers:

- **Overcomes TypeScript Nested Type Limitations**: Unlike some frameworks, `ts-inject` navigates around [TypeScript's limits on nested types](https://github.com/nicojs/typed-inject/issues/22), making it more robust for complex applications.
- **Composable Containers**: `ts-inject` enables merging multiple containers, facilitating greater modularity and code reuse.
- **PartialContainer**: It allows…
