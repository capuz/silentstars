---
repo: "anteriorcore/dune2nix"
name: "dune2nix"
description: "Ingest Dune projects to Nix, fully at eval time. No codegen, no IFD, no hardcoded hash."
url: "https://github.com/anteriorcore/dune2nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [84]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-20T23:37:25Z"
lastCommitAt: "2026-06-27T00:32:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["shunueda", "robinanterior", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e09f8d678c9dd74e5861cc7b23aaaeaaf34a3e1f24fd14a2a9bc55b074a8a36/anteriorcore/dune2nix"
---

# dune2nix

Turn [Dune](https://dune.build)-based OCaml projects into
[Nix](https://nixos.org) derivations.

`dune2nix` parses Dune's lockfiles fully at Nix eval time, which gives us: no
codegen, no
[Import From Derivation (IFD)](https://nix.dev/manual/nix/2.26/language/import-from-derivation),
no hardcoded hash.

## Overlay

The version of Dune included in the current Nixpkgs release (25.11) has critical
bugs related to lockfile handling. `dune2nix` provides an optional overlay that
uses the latest build that address these issues. For more details, see
[`./nix/overlays.nix`](./nix/overlays.nix).

## Demo

There is a minimal demo project that uses
[`janestreet/core`](https://github.com/janestreet/core) in
[`./tests/demo`](./tests/demo).

## Copyright & License

`dune2nix` is authored by Anterior, based in NYC, USA.

We’re hiring! If you got this far, e-mail us at hiring+oss@anterior.com and
mention this project.

The code is available under the AGPLv3 license (not later).

See the [LICENSE](./LICENSE) file.
