---
repo: "mesonbuild/wrapdb"
name: "wrapdb"
description: "New wrap requests"
url: "https://github.com/mesonbuild/wrapdb"
homepage: "https://mesonbuild.com/Adding-new-projects-to-wrapdb.html"
language: "Meson"
languages: ["Meson"]
languagePcts: [91]
stars: 108
forks: 291
openIssues: 84
closedIssues: 210
watchers: 10
contributors: 281
recentReleases: 0
createdAt: "2020-01-26T00:47:49Z"
lastCommitAt: "2026-06-25T01:38:33Z"
lastReleaseAt: "2021-06-04T18:50:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 54
maintainers: ["wrapdb-bot", "bgilbert", "tp-m"]
openGraphImageUrl: "https://opengraph.githubassets.com/324148fbc54c249f2252f62c57a0aa2911c5bb8ffac47e0ee86ce12f3439d669/mesonbuild/wrapdb"
---

# Meson Wrap Database

This is a collection of projects that use Meson as their build system, or have
a meson port maintained by the Meson team. They can be used as subproject to
any Meson project that needs them as a dependency.

**Newly added or updated ports in this repository require Meson ≥ 0.56**.

## How to test a wrap

Clone this repository locally, and set the `wraps` option with a comma separated
list of wraps that needs to be built.

For example to test libjpeg-turbo and zlib:
```sh
meson setup builddir -Dwraps=libjpeg-turbo,zlib
meson compile -C builddir
```

## How to contribute new wraps

### Getting Started

- Write [`my-project.wrap`](https://mesonbuild.com/Wrap-dependency-system-manual.html)
  file and add it in `subprojects/` directory.

- If upstream project's build system is not Meson, a port can be added in
  `subprojects/packagefiles/my-project/meson.build` and
  `patch_directory = my-subproject` should be added into the wrap file.
  Note that the whole `subprojects/packagefiles/my-project` subtree will be
  copied onto the upstream's source tree, but it is generally not accepted to
  override upstream files.

- It is often easier to develop in…
