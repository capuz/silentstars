---
repo: "KittyCAD/cli"
name: "cli"
description: "The Zoo command line tool."
readmeQualityOk: true
url: "https://github.com/KittyCAD/cli"
homepage: "https://zoo.dev/docs/cli/manual"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 29
forks: 7
openIssues: 25
closedIssues: 37
watchers: 8
contributors: 20
recentReleases: 0
createdAt: "2021-12-07T19:35:39Z"
lastCommitAt: "2026-10-21T21:15:35Z"
lastReleaseAt: "2022-02-02T18:25:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 58
maintainers: ["zoo-github-actions-auth[bot]", "dependabot[bot]", "adamchalmers"]
openGraphImageUrl: "https://opengraph.githubassets.com/34e610ae958af9f10a3de3c4601786afba08fa769b7b2925dc3889118649620d/KittyCAD/cli"
---

# cli

The Zoo command line tool.

The instructions below refer to instructions for contributing to the repo.

For the CLI docs for end users refer to: https://zoo.dev/docs/cli/manual

### Installing

On MacOS, you can use Homebrew:
```
brew tap kittycad/kittycad
brew install kittycad
zoo --help   
```
For all other installs, see the instructions on the [latest release](https://github.com/KittyCAD/cli/releases).

### Updating the API spec

Updating the API spec is as simple as updating the [`spec.json`](https://github.com/KittyCAD/cli/blob/HEAD/spec.json) file. The macro will take it from there when
you `cargo build`. It likely might need some tender love and care to make it a nice command like the other generated ones
if it is out of the ordinary.

Only `create`, `edit`, `view/get`, `list`, `delete` commands are generated. The rest are bespoke and any generation lead to something
that seemed harder to maintain over time. But if you are brave you can try.

For examples of the macro formatting, checkout some of the commands under `src/` like `cmd_file` or `cmd_user`.

**Note:** If you update the API spec here, you will likely want to bump the spec for the…
