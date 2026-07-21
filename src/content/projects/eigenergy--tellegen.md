---
repo: "eigenergy/tellegen"
name: "tellegen"
description: "Interactive OPF in your browser"
readmeQualityOk: true
url: "https://github.com/eigenergy/tellegen"
homepage: "https://tellegen.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [62, 22]
topics: ["webassembly", "rust", "differentiable-programming", "optimization-algorithms", "power-flow", "sveltejs", "wasm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-11T19:50:48Z"
lastCommitAt: "2026-07-21T06:11:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["samtalki"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9e112ae8e7abbfcf5429f9f5d1e60afe0b8824eeb5a933a4a23b1dd0724bef7/eigenergy/tellegen"
---

</p>

# tellegen

Reactive visualization for power systems optimization. Demand and rating edits
preview through KKT sensitivity columns and commit as exact solves, entirely in
the browser: DC OPF, AC power flow, and the SOCWR relaxation run in
WebAssembly. Case parsing uses
[powerio](https://github.com/eigenergy/powerio). The name is Tellegen's
theorem, the reciprocity result behind adjoint sensitivities.

Live demo: [tellegen.dev](https://tellegen.dev). Documentation:
[eigenergy.github.io/tellegen](https://eigenergy.github.io/tellegen/).

## Packages

```sh
npm install @tellegen/engine   # case parsing and wasm solves, framework agnostic
npm install @tellegen/svelte   # map, panels, and solve card as Svelte components
```

`@tellegen/engine` exports case parsing, browser solving, the `Study` preview
and commit calls, sensitivities, and generated TypeScript types.
`@tellegen/svelte` exports the map, panels, local file flow, and solve card.
Start with the
[framework quickstart](https://eigenergy.github.io/tellegen/framework-quickstart.html);
`examples/browser-minimal/` and `examples/svelte-minimal/` are working
integrations of each package. The Rust engine is the…
