---
repo: "Pioneer-Centre-for-AI/p1-compute-documentation"
name: "p1-compute-documentation"
description: "P1 HPC Documentation (General Overview)"
readmeQualityOk: true
url: "https://github.com/Pioneer-Centre-for-AI/p1-compute-documentation"
homepage: "https://hpc.aicentre.dk/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [53, 25]
topics: ["ai", "gdpr", "hpc", "ml", "p1"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2022-10-05T11:43:27Z"
lastCommitAt: "2026-11-19T12:00:35Z"
lastReleaseAt: "2026-11-05T13:28:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 75
maintainers: ["starostka"]
openGraphImageUrl: "https://opengraph.githubassets.com/2836a99aa8f1953ee9fd75b609b28c4858b857a418d77c2eb275fbf104f5cbcd/Pioneer-Centre-for-AI/p1-compute-documentation"
---

# P1 compute documentation

The site at [hpc.aicentre.dk](https://hpc.aicentre.dk) for P1 compute, and what it ships:

- `src/`, `static/`: the site, SvelteKit on GitHub Pages. Its pages are the user manual.
- `pkgs/cli/`: `aicentre`, the command line tool installed from `https://hpc.aicentre.dk/install`.
- `pkgs/gallery/`: the files of the gallery's examples, served as `/gallery/<code>.tar.gz`.
- `docs/`: the technical reference for maintainers. Start at [docs/README.md](https://github.com/Pioneer-Centre-for-AI/p1-compute-documentation/blob/HEAD/docs/README.md).

## Develop

```sh
nix develop    # bun and node for the site, cargo for the CLI, and shellcheck
bun install
bun run dev    # http://localhost:5173/
bun run check
bun run build
```

The CLI has its own commands in `pkgs/cli`; see [docs/02-the-cli.md](https://github.com/Pioneer-Centre-for-AI/p1-compute-documentation/blob/HEAD/docs/02-the-cli.md).
