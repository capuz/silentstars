---
repo: "Quantco/quant-ranger"
name: "quant-ranger"
description: "Tool for maintenance work across GitHub repositories."
readmeQualityOk: true
url: "https://github.com/Quantco/quant-ranger"
homepage: "https://ranger.quantco.tech"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["copier", "dependencies", "maintenance-management", "package-management", "python"]
stars: 7
forks: 0
openIssues: 11
closedIssues: 1
watchers: 1
contributors: 22
recentReleases: 2
createdAt: "2026-07-30T14:52:32Z"
lastCommitAt: "2026-11-02T15:18:08Z"
lastReleaseAt: "2026-10-12T13:29:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 46
maintainers: ["dependabot[bot]", "ytausch", "quant-ranger[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb77bbf0085ba193874bd409c15a27b2641cc04ca766498fc2bfcf4fd4508c31/Quantco/quant-ranger"
---

# quant-ranger

Automated repository maintenance across GitHub organizations. quant-ranger
discovers applicable work, runs typed update tasks in fresh checkouts, and can
publish the results as pull requests.

## Getting started

Run the CLI directly from conda-forge with Pixi:

```bash
pixi exec quant-ranger --help
```

For repeated use, install it globally:

```bash
pixi global install quant-ranger
```

Run an updater in dry-run mode with an existing GitHub CLI login:

```bash
quant-ranger update --gh --repository octo-org/octo-repo pixi-update
```

Add `--publish-changes` before the updater name to create or update a pull
request.

See the [documentation](https://ranger.quantco.tech/) for updaters,
authentication, automation, extension APIs, and the
[CLI reference](https://ranger.quantco.tech/).

### Installing from PyPI

Installing `quant-ranger` as a conda package is strongly recommended because quant-ranger drives several external command-line tools that only conda can declare as dependencies.
The wheel on PyPI contains the same Python code, but if you install it with `pip`, you must make the tools listed under `[package.run-dependencies]` in…
