---
repo: "cordx56/prepoly"
name: "prepoly"
description: "A statically and flexibly type-inferred scripting language with just-in-time compilation"
readmeQualityOk: true
url: "https://github.com/cordx56/prepoly"
homepage: "http://prepoly.56.ax/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["jit-compiler", "programming-language", "type-inference"]
stars: 27
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-06-27T13:12:21Z"
lastCommitAt: "2026-07-14T05:53:28Z"
lastReleaseAt: "2026-07-06T01:16:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["cordx56"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebb8b852eee54dee921c29de1b172117486144fa4046ba4ac22930527f954454/cordx56/prepoly"
---

<h1>
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="book/public/logo/dark.svg">
    </picture>
  </h1>
  <p>
    A statically and flexibly type-inferred scripting language <br>
    with just-in-time compilation
  </p>
  <p>
  </p>
</div>

prepoly is a statically type-checked, structurally typed scripting language with
flexible type inference. The name contracts *pre-typed* and *polymorphic*:
it runs like an interpreter, but every function is fully type-checked just before
it executes, and most types are inferred rather than written. A program is run by
a **just-in-time compiler** for native speed, or by an **interpreter** for the
REPL and WebAssembly.

Quick start:

```bash
curl -L https://raw.githubusercontent.com/cordx56/prepoly/refs/heads/main/scripts/install.sh | sh
```

## Features

- **Type inference everywhere.** Flexible inference means most code needs
  no annotations; types are resolved per function, just before it runs.
- **Records and sum types** under one `type` keyword. Methods are implemented
  with `fun T.m(...)`: a first `self` parameter makes an instance method,
  otherwise it is static; `Self` refers to the type.
- **Structural…
