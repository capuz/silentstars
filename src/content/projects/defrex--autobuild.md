---
repo: "defrex/autobuild"
name: "autobuild"
description: "Tickets in, product out. No babysitting required."
readmeQualityOk: true
url: "https://github.com/defrex/autobuild"
homepage: "https://www.autobuild.run/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 7
forks: 2
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-03T17:49:27Z"
lastCommitAt: "2026-11-17T14:35:58Z"
lastReleaseAt: "2026-10-14T16:17:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 68
maintainers: ["defrex", "autobuild[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3905a487079448480a65b2b3d0319bcf53abba87bc9a89ee2296534ef68f700/defrex/autobuild"
---

# Autobuild

**Tickets in, Product out.**

Autobuild runs coding agents through a fixed pipeline that plans, implements,
reviews, and verifies every ticket before it merges. You groom tickets in and
review pull requests out; agents do the work, and deterministic code keeps
them honest.

## Quickstart

You need [Bun](https://bun.sh), `git`, and the local prerequisites for the
agent runtime you select: Claude Code, Codex CLI, or Pi. The GitHub forge also
needs an authenticated [`gh` CLI](https://cli.github.com) or an exported
`GITHUB_TOKEN`/`GH_TOKEN`; the local-git forge needs no account or remote.

From the repository you want built, install Autobuild as a development dependency:

```sh
bun add -d --exact @defrex/autobuild@1.8.0
```

Without a `package.json`, installation creates `package.json` and `bun.lock`,
which should be committed, with `node_modules/` ignored.

Run the repository-installed CLI:

```sh
bun ab init
```

This vendors the editable `ab-*` skills, writes a stack-neutral config, and
hands repository-aware setup to a coding agent. The
[configuration reference](https://github.com/defrex/autobuild/blob/HEAD/docs/configuration.md) covers every field. Then
start the…
