---
repo: "ClaimBound/claimbound-evidence"
name: "claimbound-evidence"
description: "Evidence cards for narrow public AI, ML and data claims: frozen protocol, hashed sources, honest result status."
readmeQualityOk: true
url: "https://github.com/ClaimBound/claimbound-evidence"
homepage: "https://claimbound.github.io/claimbound-evidence/docs/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["reproducibility", "open-science", "public-data", "claim-verification", "open-research", "manual-audit", "data-validation", "open-data", "pre-registration", "claimbound"]
stars: 10
forks: 3
openIssues: 10
closedIssues: 111
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-29T14:26:20Z"
lastCommitAt: "2026-10-24T08:20:09Z"
lastReleaseAt: "2026-06-15T18:57:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["NeoZorK", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1224689307/5017285a-3880-4b98-9221-afe0a8dde084"
discussionCount: 1
---

Evidence cards for narrow public AI, ML and data claims: frozen protocol,
  hashed sources, honest result status.

```bash
pipx install claimbound-evidence        # or: uv tool install claimbound-evidence
                                        # or: conda install -c conda-forge claimbound-evidence
claimbound validate-card path/to/card.json
```

ClaimBound turns a narrow public AI, ML, data or software-development claim into
a small evidence card: protocol, source boundary, hashes, exact result status,
claim boundary and reproduction level.

It is not a model leaderboard, hosted scoring service or certification authority.
It is an open-source toolkit for asking one plain question:

```text
Where is the evidence?
```

If there is no evidence card, the statement is still only a claim. Green means
one narrow claim passed under a frozen protocol — not "trust everything".
`PASSED_UNDER_PROTOCOL` is not the same as independently reproduced: most public
cards are still `SINGLE_OPERATOR` / `not independently reproduced` until a
separate rerun records otherwise. Negative, blocked and drift outcomes are
first-class evidence too.

Read the one-screen walkthrough in [ClaimBound in 30…
