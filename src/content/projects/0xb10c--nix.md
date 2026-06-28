---
repo: "0xB10C/nix"
name: "nix"
description: "A collection of Nix packages and modules for software I'm using."
url: "https://github.com/0xB10C/nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 3
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-01-19T16:24:30Z"
lastCommitAt: "2026-06-28T02:00:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 74
maintainers: ["github-actions[bot]", "0xB10C", "edilmedeiros"]
openGraphImageUrl: "https://opengraph.githubassets.com/7684af668b990d46f972051e82ac58e8e873d8a5e20b4770862a6062190f1f40/0xB10C/nix"
---

# nix - a collection of nix packages and modules

A collection of Nix modules and packages for software I've written.

## Updating with nix-update

The [`nix-update`] tool can be used to update the version (usually commit) of the
packages. Run the following command to update, for example, miningpool-observer.

```
$ nix-update miningpool-observer --flake --version=skip
```

[`nix-update`]: https://github.com/Mic92/nix-update

## Integration tests

The integration tests can be run with `nix flake check`.
A single test, for example for `miningpool-observer`, can be run with
`nix build .#checks.x86_64-linux.miningpool-observer` on `x86_64-linux`.
Passing `--print-build-logs` helps debugging on failures.
