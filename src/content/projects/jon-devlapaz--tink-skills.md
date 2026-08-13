---
repo: "jon-devlapaz/tink-skills"
name: "tink-skills"
description: "Find, test, and improve agent skills"
readmeQualityOk: true
url: "https://github.com/jon-devlapaz/tink-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 17
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-01T05:42:41Z"
lastCommitAt: "2026-08-13T05:20:09Z"
lastReleaseAt: "2026-08-01T05:43:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["jon-devlapaz", "bradAGI"]
openGraphImageUrl: "https://opengraph.githubassets.com/c747b28ccc4ac742ce04c697b76a4ebda9e82c61cee20a2250e9e0dc56b787ad/jon-devlapaz/tink-skills"
---

# tink-skills

Scout what fits. Measure if it moves anything.

Local evidence under project `.agents/skills/` — not a claim the skill wins
everywhere. Install with [tink](https://github.com/jon-devlapaz/tink).

```mermaid
flowchart LR
    A["task"] --> B["skill-scout"]
    B -->|candidate| C["skill-eval-loop"]
    B -.->|none| D["use / rewrite / stop"]
    C --> D
```

## Install

```console
# Tink 1.0.0 at the reviewed release-candidate commit.
cargo install --git https://github.com/jon-devlapaz/tink.git \
  --rev 2b082b5032b6f6cef6ea301868c499a93b86552f --locked

tink init --with-tink-skills
tink skill list
tink skill check
```

One skill at a time:

```console
tink skill add jon-devlapaz/tink-skills --skill skill-scout
tink skill add jon-devlapaz/tink-skills --skill skill-eval-loop
tink skill add jon-devlapaz/tink-skills --skill triangulate-me
```

Refresh every clean GitHub import:

```console
tink skill refresh
```

Refresh one by naming it: `tink skill refresh NAME`.

Local skills do not refresh. Install a library skill by name with
`tink skill add NAME`. Do not hand-edit `.tink-source.json` receipts.

## First success

Start with the core loop: scout a candidate, then…
