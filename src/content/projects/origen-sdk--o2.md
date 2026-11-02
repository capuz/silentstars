---
repo: "Origen-SDK/o2"
name: "o2"
description: "The semiconductor developer’s kit, rebuilt for modern Python and Rust workflows. O2 brings device modeling, pattern generation, test-program generation, plugins, and documentation into one cohesive toolkit"
readmeQualityOk: true
url: "https://github.com/Origen-SDK/o2"
homepage: "https://origen-sdk.org/o2"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [67, 30]
stars: 6
forks: 1
openIssues: 42
closedIssues: 31
watchers: 7
contributors: 9
recentReleases: 2
createdAt: "2019-11-23T17:00:13Z"
lastCommitAt: "2026-11-02T15:18:02Z"
lastReleaseAt: "2026-08-27T02:43:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 72
maintainers: ["ginty", "rlaj", "priyavadan"]
openGraphImageUrl: "https://opengraph.githubassets.com/70ff8962c1bf90668ac6c0f78b6539044bf4e7e0b06cb3aa56a00a163392910c/Origen-SDK/o2"
discussionCount: 1
---

# Origen 2 [](https://github.com/Origen-SDK/o2/actions?query=workflow%3A%22Regression+Tests%22)

See here for how to setup an Origen 2 development environment - https://origen-sdk.org/o2/guides/developers/installation.html

To build or serve O2's own documentation from a source checkout, enter the
embedded core application first:

```text
cd python/origen
origen web build
origen web serve
```

The repository root is an O2 development workspace, not itself an Origen
application, so application-scoped ``web`` commands are not currently exposed
there. The release coordinator is the exception and can be run from the root.

### Origen Metal Python Development

1. Compile the Origen CLI by running:
   ```text
   cd rust/origen
   cargo build --bin origen --workspace
   ```
2. Add `<workspace>/rust/origen/target/debug/` to your `$PATH` or otherwise make the `origen` CLI
   that was just compiled to this location available for execution
3. Compile Origen Metal by running:
   ```text
   origen develop_origen build --metal
   ```

Repeat step 3 after making any changes to `rust/origen_metal` (the Rust library) or
`rust/pyapi_metal` (the Python bindings for it).

Run the Rust tests for the…
