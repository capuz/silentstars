---
repo: "pevey/sveltekit-medusa-sdk"
name: "sveltekit-medusa-sdk"
description: "A client library for communicating with a Medusa ecommerce backend in SvelteKit"
readmeQualityOk: true
url: "https://github.com/pevey/sveltekit-medusa-sdk"
homepage: "https://pevey.com/sveltekit-medusa-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 61
forks: 6
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-04-17T01:54:22Z"
lastCommitAt: "2026-07-21T06:12:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 34
maintainers: ["pevey"]
openGraphImageUrl: "https://opengraph.githubassets.com/048942d0f7e5fa95749e0422a1c706992d042f9ffb59bcf80a254959c40250c4/pevey/sveltekit-medusa-sdk"
discussionCount: 2
---

# sveltekit-medusa-sdk

A SvelteKit client for communicating with a [Medusa](https://medusajs.com) v2 backend built on top of the Medusa JS SDK. It is designed to access the Medusa backend **only from the storefront server**. It is not designed for having the client browser make network calls to the Medusa backend directly.

This package is the successor to [sveltekit-medusa-client](https://www.npmjs.com/package/sveltekit-medusa-client), a SvelteKit library for communicating with a v1 Medusa backend.

## What changed from `sveltekit-medusa-client`

The SvelteKit client for Medusa v1 exported a **class** (`new MedusaClient(url)`) that you instantiated somewhere in your app and then imported into each load function, form action, or endpoint that needed Medusa access. This successor client for Medusa v2 is built around SvelteKit's **remote functions** feature. You import ready-made `query`/`command`/`form` functions (e.g. `getProducts`, `addToCart`, `login`) and call them directly from components. Under the hood, they use a single shared `@medusajs/js-sdk` instance, configured once via a hook. Credentials and region are pulled from the request context and injected on every call. So…
