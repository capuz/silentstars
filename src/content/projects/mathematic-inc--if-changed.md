---
repo: "mathematic-inc/if-changed"
name: "if-changed"
description: "CLI tool that enforces synchronized changes across files using if-changed/then-change comment annotations in diffs"
readmeQualityOk: true
url: "https://github.com/mathematic-inc/if-changed"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cargo", "cli", "code-synchronization", "developer-tools", "file-diff", "git", "linter", "pre-commit", "pre-commit-hook", "rust"]
stars: 19
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2024-04-19T01:19:48Z"
lastCommitAt: "2026-07-25T06:01:34Z"
lastReleaseAt: "2026-07-22T07:14:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 65
maintainers: ["renovate[bot]", "jrandolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f172c4e5cef905acc33043d834cdf867b26aa530fae920eda1e80b7549a8acd8/mathematic-inc/if-changed"
fundingLinks: ["GITHUB:https://github.com/mathematic-inc"]
---

# `if-changed`

`if-changed` is a command-line utility that checks for `"if-changed"` and `"then-change"` comments in a repository diff and errors if dependent files need changes.

## Installation

```bash
cargo install if-changed
```

## Usage

```bash
Usage: if-changed [OPTIONS] [PATTERNS]...

Arguments:
  [PATTERNS]...
          Git patterns defining the set of files to check. By default, this will be all changed files between revisions.

          This list follows the same rules as [`.gitignore`](https://git-scm.com/docs/gitignore) except relative paths/patterns are always matched against the repository root, even if the paths/patterns don't contain `/`. In particular, a leading `!` before a pattern will reinclude the pattern if it was excluded by a previous pattern.

Options:
      --from-ref <FROM_REF>
          The revision to compare against. By default, HEAD is used

          [env: PRE_COMMIT_FROM_REF=]

      --to-ref <TO_REF>
          The revision to compare with. By default, the current working tree is used

          [env: PRE_COMMIT_TO_REF=]

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

To use with…
