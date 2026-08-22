---
repo: "lukehsiao/git-stats"
name: "git-stats"
description: ":bar_chart: A tool for getting aggregated commit stats"
readmeQualityOk: true
url: "https://github.com/lukehsiao/git-stats"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "git"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2022-10-26T16:10:48Z"
lastCommitAt: "2026-08-22T04:06:10Z"
lastReleaseAt: "2026-07-17T17:22:31Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 76
maintainers: ["lukehsiao", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/132db16a5a1fefb6bec01715dd8c5214a65028ce4ea20fba88efb4c6ca3ee375/lukehsiao/git-stats"
discussionCount: 0
---

<h1 align="center">
    📊<br>
    git stats
</h1>
    <strong>A tool for getting aggregated commit stats.</strong>
</div>
<br>
  </a>
  </a>
  </a>
</div>
<br>

`git-stats` parses [log](https://git-scm.com/docs/git-log) information to get stats about the files changed, additions, and deletions.
For example:

```
$ git stats -r origin..HEAD
Author           Commits  Changed Files  Insertions  Deletions  Net Δ
Luke Hsiao            67            117       +2616      -1126  +1490
dependabot[bot]       31             62        +203       -267    -64
Total                 98            179       +2819      -1393  +1426

Reviewer/Tester  Commits
Luke Hsiao             1
```

## Install

Git Stats reads your repository directly with [gitoxide](https://github.com/GitoxideLabs/gitoxide),
a pure-Rust implementation of `git`.

### From crates.io

```
cargo install git-stats --locked
```

Since you are compiling from source anyway, you can opt into CPU-specific
optimizations that the prebuilt binaries cannot use:

```
RUSTFLAGS="-C target-cpu=native" cargo install git-stats --locked
```

Or, if you use [`cargo-binstall`](https://github.com/cargo-bins/cargo-binstall):

```
cargo binstall…
