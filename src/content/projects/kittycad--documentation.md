---
repo: "KittyCAD/documentation"
name: "documentation"
description: "The handwritten sections of the KittyCAD docs. Found a typo? make an edit :D !"
readmeQualityOk: true
url: "https://github.com/KittyCAD/documentation"
language: "MDX"
languages: ["MDX"]
languagePcts: [99]
stars: 6
forks: 39
openIssues: 12
closedIssues: 20
watchers: 6
contributors: 36
recentReleases: 0
createdAt: "2022-08-04T03:49:35Z"
lastCommitAt: "2026-11-13T18:35:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 80
maintainers: ["modeling-app-github-app[bot]", "persis-randolph", "pierremtb"]
openGraphImageUrl: "https://opengraph.githubassets.com/a602ec7c1a8842332c54c4cbd0b3d6c26227c9e753969895358cddfe19ec3f15/KittyCAD/documentation"
---

# Zoo docs

Contains source Markdown files for Zoo's documentation. Handwritten pages live
alongside directories mirrored from other repositories.

Did you find a typo? Please make a pull request!

## Source ownership

Edit generated documentation in its authoritative repository. Changes made to
the downstream mirrors in this repository will be overwritten.

| Path in this repository | Authoritative source |
| --- | --- |
| `content/pages/docs/kcl-lang/**` | [`KittyCAD/modeling-app`](https://github.com/KittyCAD/modeling-app) `docs/kcl-lang/**` |
| `content/pages/docs/kcl-std/**` | `modeling-app/rust/kcl-lib/std/**` doc comments, rendered into `modeling-app/docs/kcl-std/**` |
| `content/kcl-test-outputs/**` | `modeling-app/rust/kcl-lib/tests/outputs/**` |
| `content/pages/docs/cli/manual/zoo*.md` | [`KittyCAD/cli`](https://github.com/KittyCAD/cli), generated with `make gen-md` |

The remaining file in the CLI manual, `index.md`, is handwritten here. The
[API reference](https://zoo.dev/docs/api) is generated separately and is not
stored in this repository.

See [`AGENTS.md`](https://github.com/KittyCAD/documentation/blob/HEAD/AGENTS.md) for generator commands and the exact ownership…
