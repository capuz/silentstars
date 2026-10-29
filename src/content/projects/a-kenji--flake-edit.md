---
repo: "a-kenji/flake-edit"
name: "flake-edit"
description: "Edit your flake inputs with ease."
readmeQualityOk: true
url: "https://github.com/a-kenji/flake-edit"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["cli", "flakes", "library", "nix", "rust", "automation", "configuration", "nixos"]
stars: 110
forks: 2
openIssues: 8
closedIssues: 37
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2023-10-06T21:58:29Z"
lastCommitAt: "2026-10-29T10:37:10Z"
lastReleaseAt: "2026-10-02T12:08:14Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 46
maintainers: ["a-kenji", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f629443a4b5ea6f97c61b3e2ee0758512acb59db95d6a39ad7cf520531039fe9/a-kenji/flake-edit"
---

# `$ flake-edit` - edit your flake inputs with ease

Since Nix [`flake.nix`](https://nixos.org/manual/nix/unstable/command-ref/new-cli/nix3-flake.html) input attributes are a constrained subset of the Nix language, and don't actually have functions I wanted to have a safe way to programmatically edit them.
In particular I was interested in two things, that in the flake native way are managed through the `flake.nix` files: [`follow`](#-flake-edit-follow) as well as [`pin`](#-flake-edit-update) and general update management.

Pin management: As a consumer of other sources I might only want to depend on release versions of projects. To solve this problem other projects have set up hosted services to be a proxy between the input and the lock file. Meaning when running `nix flake update flake-edit` the service would give a different path back, depending on the last released version. This functionality should be possible without a specifically hosted middle man service.
That's what the [`flake-edit update`](#-flake-edit-update) subcommand is for.

Follow management: Flake dependencies are transitive by default - adding an input also adds the inputs of that input. Which can genuinely be…
