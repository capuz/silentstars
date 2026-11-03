---
repo: "gemba-app/brakes"
name: "brakes"
description: "Brakes for agent-built software: CI, security and review gates installed by one binary"
readmeQualityOk: true
url: "https://github.com/gemba-app/brakes"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 18
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-31T21:53:23Z"
lastCommitAt: "2026-11-03T10:52:19Z"
lastReleaseAt: "2026-11-03T07:05:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 44
maintainers: ["joseperezaguera"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2a0e7f21bb03de925af6a53792ae579fc08cb8bf74cb8971815338fd8c8d20b/gemba-app/brakes"
---

# brakes

`brakes` installs and audits the mechanical brakes that make a coding agent's work pass
the same gates whether or not the agent cooperates: hooks run by the agent's environment,
repository controls, and GitHub checks. It renders them from the commands and answers a
repository declares, for any language, stack, agent host and model provider, and it
audits any repository against the same rules, whether `brakes` installed it or not.

It covers enforcement only. It does not decide where work is planned or how a team works:
it ships no engineering guide, no workflow framework and no instruction prose beyond what a
brake needs. Your CI runs your commands, once; `brakes` installs and audits the gates around
it and never runs them: when a repository has no CI it guides you to one you own, when it
has one it audits it and proposes patches it never applies, and its own jobs only judge
what your CI produced.

Home: <https://github.com/gemba-app/brakes>. License: [Apache-2.0](https://github.com/gemba-app/brakes/blob/HEAD/LICENSE).

## Example

A Rust crate with no CI yet, given its CI and the brakes for Claude Code:

```sh
mkdir -p ~/.config/brakes
echo '{"schema": 1, "owner":…
