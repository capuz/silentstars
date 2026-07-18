---
repo: "nyaomaru/is-kit"
name: "is-kit"
description: "Lightweight, zero-dependency toolkit for building `isFoo` style type guards in TypeScript. Runtime-safe 🛡️, composable 🧩, and ergonomic ✨. npm -> https://www.npmjs.com/package/is-kit"
readmeQualityOk: true
url: "https://github.com/nyaomaru/is-kit"
homepage: "https://is-kit-docs.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["is", "open-source", "typescript", "utility", "is-kit", "type-guard", "type-guards", "type-safe", "runtime-type-checking", "validation"]
stars: 51
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-01T10:54:11Z"
lastCommitAt: "2026-07-18T05:45:28Z"
lastReleaseAt: "2025-11-29T06:17:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["nyaomaru", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1067760372/0518d7d9-77f1-4ddb-b3ed-df17c0d2bb70"
---

# is-kit

    src="https://raw.githubusercontent.com/nyaomaru/is-kit/main/docs/public/iskit_image.png"
    width="600"
    alt="is-kit logo"
  />
</p>

  </a>
  </a>
  </a>
  </a>
</p>

`is-kit` is a lightweight, zero-dependency toolkit for building reusable TypeScript **type guards**.

It helps you write small `isFoo` functions, compose them into **richer runtime checks**, and keep **TypeScript narrowing** natural inside regular control flow.

**Runtime-safe** 🛡️, **composable** 🧩, and **ergonomic** ✨ without asking you to adopt a heavy schema workflow.

- Build and reuse **typed guards**
- **Compose guards** with `and`, `or`, `not`, `oneOf`
- **Validate object** shapes and collections
- **Parse or assert** `unknown` values without a large schema framework

[📚 Documentation Site](https://is-kit-docs.vercel.app/)

> Best for **app-internal narrowing, filtering, and reusable guards**.

## 🤔 Why use `is-kit`?

Tired of rewriting the same `isFoo` checks again and again?

`is-kit` is a good fit when you want to:

- **write reusable `isX`** functions instead of one-off inline checks
- keep runtime validation **lightweight and dependency-free**
- **narrow values directly** in `if`,…
