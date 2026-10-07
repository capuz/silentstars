---
repo: "digline/digline"
name: "digline"
description: "Regression testing for LLM applications — with the baseline in your repository, not on someone's server."
readmeQualityOk: true
url: "https://github.com/digline/digline"
homepage: "https://digline.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 12
closedIssues: 88
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-26T13:07:35Z"
lastCommitAt: "2026-10-07T10:26:12Z"
lastReleaseAt: "2026-09-10T07:57:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["alexpran", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbd1eb0a9c724e79dc1b3fdd991879a558f59662ebb75d9eff3d00bdc1e93cc3/digline/digline"
---

# digline

---

**Regression testing for LLM applications — with the baseline in your repository, not on someone's server.**

Your prompt worked on Tuesday. On Thursday it works a little less — not enough
to break, enough for a user to notice in two weeks. No ordinary test catches it,
because there is no correct output to compare against, only a better or a worse
one.

digline gives you an **approved reference** — the baseline — and on every change
tells you whether you are below it: which case, which check, by how much. The
baseline is a JSON file in your repository, so it goes through code review and
it rolls back with `git`. No server, no account, no network call you have not
configured yourself.

```console
$ digline compare --suite suite.py --run latest
2 checks got worse compared with the reference. Every case could be judged. No case is suspended. The suite is unchanged from the reference.

how-do-i-return · llm_rubric · Score fell from 1.000000 to 0.700000.
how-do-i-return · contains · Went from passing to failing (1.000000 → 0.000000).
```

## Why digline

Most evaluation tools tell you whether an output is below a threshold. digline
also tells you whether it is *worse…
