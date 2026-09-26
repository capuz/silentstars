---
repo: "canmi21/seam"
name: "seam"
description: "Rendering is a protocol, not a render-time computation."
readmeQualityOk: true
url: "https://github.com/canmi21/seam"
homepage: "https://seamjs.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ctr", "codegen", "injection", "skeleton", "protocol", "lowering"]
stars: 43
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-29T01:19:34Z"
lastCommitAt: "2026-09-26T08:48:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["canmi21"]
openGraphImageUrl: "https://opengraph.githubassets.com/64d2826b1d35db51f1c3dd4315d6f03ed5c879e326fc5dbdb7f2a877c34de243/canmi21/seam"
---

# Seam & SeamJS

Seam is being rebuilt. The protocol stays, the compiler in front of it does not.

Compile-time rendering for Svelte: a component is rendered once, at build time, into an IR a
server fills per request, and the bytes are what SvelteKit's server render would have sent. The
framework around it is SvelteKit with that one step moved; Kit's source sits under `vendor/kit`
as it is written. The rules are in `spec/`, what is left in `spec/roadmap.md`, and what has to pass before
any of it is finished in `spec/conformance.md`.

The previous version lives whole on the
[`observation`](https://github.com/canmi21/seam/tree/observation) branch, including the Go and
TypeScript servers that no longer exist here.

It found page structure by rendering React against mock data and diffing the output, which is
where that branch gets its name. The new one reads the Svelte template AST and lowers it, so
structure is generated rather than guessed. The original design is written up in
[Rendering as a Protocol](https://canmi.net/architecture/compile-time-rendering), and where it
goes next in [Future of SeamJS](https://canmi.net/architecture/observation-to-lowering).

## License

The compiler…
