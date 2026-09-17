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
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-26T13:07:35Z"
lastCommitAt: "2026-09-17T08:52:08Z"
lastReleaseAt: "2026-09-10T07:57:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["alessandro-prandini", "alexpran", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa0f7010707ebd9e36f3db4c2aba583a6d5761ac1079e22429346fa8fddfa95/digline/digline"
---

# digline

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/flow/digline-flow.svg">
</picture>

---

<br>

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

## Why digline…
