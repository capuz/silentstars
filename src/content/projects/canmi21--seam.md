---
repo: "canmi21/seam"
name: "seam"
description: "Rendering is a protocol, not a render-time computation."
readmeQualityOk: true
url: "https://github.com/canmi21/seam"
homepage: "https://seamjs.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["ctr", "codegen", "injection", "skeleton", "protocol", "lowering"]
stars: 40
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-29T01:19:34Z"
lastCommitAt: "2026-09-05T07:26:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["canmi21"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb150f56e9f1e8e9eaf9c80da4e06d30504241eb4da1f8c814206037d2c5e004/canmi21/seam"
---

# Seam & SeamJS

Seam is being rebuilt. The protocol stays, the compiler in front of it does not.

The previous version lives whole on the
[`observation`](https://github.com/canmi21/seam/tree/observation) branch, including the Go and
TypeScript servers that no longer exist here.

It found page structure by rendering React against mock data and diffing the output, which is
where that branch gets its name. The new one reads the Svelte template AST and lowers it, so
structure is generated rather than guessed. The original design is written up in
[Rendering as a Protocol](https://canmi.net/architecture/compile-time-rendering), and where it
goes next in [Future of SeamJS](https://canmi.net/architecture/observation-to-lowering).

## License

MIT License © 2025 [Canmi](https://canmi.net)
