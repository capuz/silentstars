---
repo: "gildrb/eukhe"
name: "eukhe"
description: "Eukhe (εὐχή): a crash-safe, metered agent harness whose rules are proven, in Rust and Bend"
readmeQualityOk: true
url: "https://github.com/gildrb/eukhe"
homepage: "https://eukhe.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [72, 22]
topics: ["agent", "bend", "cli", "gateway", "multi-provider", "rlm", "rust", "terminal", "tui", "durable"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T15:44:29Z"
lastCommitAt: "2026-11-14T21:34:22Z"
lastReleaseAt: "2026-10-06T18:55:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["gildrb", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a7f659dab3ada912a94aab3b5e61eef6f07d2d658ece40a1f4a5b1cca6b9855/gildrb/eukhe"
---

# Eukhe (εὐχή)

Eukhe (εὐχή: a wish, a prayer) is a harness and embeddable core for agents that work toward a goal, within limits, until the specified checks pass.

- Goal: the work to be done.
- Limits: money, time, tokens. Each model request and tool call reserves its worst case first; spend passes a limit only when a provider reports more than the reserve.
- Checks: commands that decide when the work is done, such as `cargo test` or `bend PROOF.bend --verdict`.
- Report: the agent's final answer, and each check's verdict with its output.

[Why?](https://github.com/gildrb/eukhe/blob/HEAD/PHILOSOPHY.md)

## Install

```sh
curl -fsSL https://eukhe.com/install | sh  # macOS (Apple Silicon), Linux (x64, arm64)
```

- Nix: `nix run github:gildrb/eukhe`
- Home Manager: `programs.eukhe.enable = true;` (module `inputs.eukhe.homeManagerModules.default`)

## Use

```sh
cd /path/to/project
eukhe         # start; /login on the first run
eukhe agents  # find and open sessions
eukhe update  # install the latest release
eukhe --help  # all commands
```

Eukhe follows your project's `AGENTS.md`. Type `/` in a session for the slash commands.

## Capabilities

- Budgets: `/budget set cost=5…
