---
repo: "tweag/rules_nixpkgs"
name: "rules_nixpkgs"
description: "Rules for importing Nixpkgs packages into Bazel."
readmeQualityOk: true
url: "https://github.com/tweag/rules_nixpkgs"
homepage: "https://nix-bazel.build/"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [91]
topics: ["bazel", "bazel-rules", "nix", "nixpkgs"]
stars: 397
forks: 103
openIssues: 62
closedIssues: 147
watchers: 25
contributors: 79
recentReleases: 0
createdAt: "2017-12-10T08:53:48Z"
lastCommitAt: "2026-10-19T08:50:02Z"
lastReleaseAt: "2024-07-12T09:29:40Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 38
maintainers: ["avdv", "vreuter", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a951ee8475e3259f9112769bb6fade09bdb8d531b52dfdf17f9df642849f40b5/tweag/rules_nixpkgs"
discussionCount: 7
---

# Nixpkgs rules for Bazel

Use [Nix][nix] and the [Nixpkgs][nixpkgs] package set to import
external dependencies (like system packages) into [Bazel][bazel]
hermetically. If the version of any dependency changes, Bazel will
correctly rebuild targets, and only those targets that use the
external dependencies that changed.

Links:
* [Nix + Bazel = fully reproducible, incremental
  builds][blog-bazel-nix] (blog post)
* [Nix + Bazel][youtube-bazel-nix] (lightning talk)

[nix]: https://nixos.org/nix
[nixpkgs]: https://github.com/NixOS/nixpkgs
[bazel]: https://bazel.build
[blog-bazel-nix]: https://www.tweag.io/posts/2018-03-15-bazel-nix.html
[youtube-bazel-nix]: https://www.youtube.com/watch?v=7-K_RmDasEg&t=2030s

See [examples](https://github.com/tweag/rules_nixpkgs/blob/HEAD/examples/toolchains) for how to use `rules_nixpkgs` with different toolchains.

## Rules

* [nixpkgs_git_repository](#nixpkgs_git_repository)
* [nixpkgs_http_repository](#nixpkgs_http_repository)
* [nixpkgs_local_repository](#nixpkgs_local_repository)
* [nixpkgs_package](#nixpkgs_package)
* [nixpkgs_flake_package](#nixpkgs_flake_package)
* [nixpkgs_cc_configure](#nixpkgs_cc_configure)
*…
