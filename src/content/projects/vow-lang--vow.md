---
repo: "vow-lang/vow"
name: "vow"
description: "A programming language and toolchain for the future of Agentic Coding"
readmeQualityOk: true
url: "https://github.com/vow-lang/vow"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 8
forks: 0
openIssues: 304
closedIssues: 366
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-02-25T10:08:11Z"
lastCommitAt: "2026-09-03T08:14:10Z"
lastReleaseAt: "2026-08-30T04:11:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["pmatos", "dependabot[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ae6e744b88a1fa9a198dc50da2d482ee2588f94341e91d3a145b08faf2687d/vow-lang/vow"
discussionCount: 2
---

# Vow

An agent-first programming language with formal verification.

Vow programs carry machine-checked contracts (preconditions, postconditions, loop invariants) that are statically verified by [ESBMC](https://esbmc.org/) bounded model checking. The compiler emits structured JSON output designed for AI agents to consume, enabling a CEGIS (counterexample-guided inductive synthesis) workflow: write code → compile → verify → read counterexamples → fix → iterate.

For project design details, see [docs/vow_design.md](https://github.com/vow-lang/vow/blob/HEAD/docs/vow_design.md).

## Quick Start

```bash
# Bootstrap (one-time)
cargo build --all --release
scripts/bootstrap.sh --skip-cargo

# Install the self-hosted toolchain to a user prefix (add --with-rust-compiler to also install vowr)
scripts/install-toolchain.sh --prefix "$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"
vow build --no-verify examples/hello.vow -o /tmp/vow_hello

# Day-to-day usage
build/vowc build examples/divide.vow              # compile + verify
build/vowc verify examples/divide.vow              # verify contracts only
build/vowc build --mode debug examples/divide.vow  # runtime vow checks
```

## Development…
