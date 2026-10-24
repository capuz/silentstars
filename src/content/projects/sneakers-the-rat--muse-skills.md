---
repo: "sneakers-the-rat/muse-skills"
name: "muse-skills"
description: "an automated hourly snapshot of muse's skills, prompts, and strings"
readmeQualityOk: true
url: "https://github.com/sneakers-the-rat/muse-skills"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 27]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-28T04:46:35Z"
lastCommitAt: "2026-10-24T00:15:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d92661e1b30d125b2a4a842292635c202f5c115096199bdd16bb0b64d664ea07/sneakers-the-rat/muse-skills"
---

# muse-skills — skill history archive

An hourly mechanical archive of Muse's own skill trees, mirrored from
the running image with symlinks resolved, so what is stored here is the
real skill file content, browsable in place:

- `skills/` — mirror of `/opt/hatch/skills` (the skills/connector
  namespace, with each link replaced by the content it names)
- `workflow-skills/` — mirror of `/opt/hatch/workflow-skills` (the
  agent-facing skill playbooks and their registry metadata)
- `connectors/` — mirror of the `/opt/hatch/connectors` directories that
  no symlink in `/opt/hatch/skills` resolves into: the connectors with no
  skill surface (currently `meta_catalog_search` and `stripe-link`). The
  set is recomputed every run — a connector that gains a skill symlink
  leaves this tree and is archived through `skills/` instead.
- `docs/` — mirror of `~/docs`, the product documentation tree, added
  2026-10-20 so doc changes are versioned alongside the skill changes.

## Extracted from the binary

The remaining trees are **not** mirrors of on-disk directories. They
are extracted from the `hatch` binary itself (`/opt/hatch/bin/hatch`),
which embeds hundreds of prompt, skill and tool…
