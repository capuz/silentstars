---
repo: "openapi-typesafe/openapi-typesafe"
name: "openapi-typesafe"
description: "Drop-in, TypeScript 7-ready successor to openapi-typescript and openapi-fetch. Type-safe OpenAPI clients with secure, verifiable releases."
readmeQualityOk: true
url: "https://github.com/openapi-typesafe/openapi-typesafe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-03T18:23:49Z"
lastCommitAt: "2026-11-07T13:54:12Z"
lastReleaseAt: "2026-11-05T18:29:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 54
maintainers: ["fedorello", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb23864d28c0b7a7b6fcec1c2f8dc3023dc0e1fcf7b9c3f3fad2471179d63d8/openapi-typesafe/openapi-typesafe"
---

# openapi-typesafe

Type-safe TypeScript for OpenAPI: generate types from an OpenAPI 3.x schema and call your API with a
fully typed `fetch` client.

`openapi-typesafe` is a maintained, drop-in successor to
[`openapi-typescript`](https://github.com/openapi-ts/openapi-typescript) and `openapi-fetch`, whose
author [stopped maintaining them](https://github.com/openapi-ts/openapi-typescript/issues/2874) in
September 2026. It is a fork with the full upstream history (see [NOTICE](https://github.com/openapi-typesafe/openapi-typesafe/blob/HEAD/NOTICE)).

> **Release candidate.** The current version is a 1.0.0 release candidate (`1.0.0-rc.N`);
> names and output can still change before 1.0.0.

## Design goals

- **Drop-in.** Migrate by changing package names. Generated output and the client API stay compatible.
- **TypeScript 7 ready.** The generator does not use the TypeScript compiler API, so it works the
  same on TypeScript 5.4, 6 and 7.
- **Verifiably compatible.** A public [compatibility report](https://github.com/openapi-typesafe/openapi-typesafe/blob/HEAD/docs/compatibility.md) compares the
  output with openapi-typescript on more than 1,800 real-world OpenAPI 3.x schemas. CI runs…
