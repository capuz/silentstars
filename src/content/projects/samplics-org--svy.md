---
repo: "samplics-org/svy"
name: "svy"
description: "Modern Python ecosystem for complex survey design, weighting, estimation, and small area estimation."
readmeQualityOk: true
url: "https://github.com/samplics-org/svy"
language: "Python"
languages: ["Python"]
languagePcts: [67]
topics: ["data-science", "jax", "official-statistics", "python", "sampling", "small-area-estimation", "statistics", "survey-statistics", "survey-weighting", "design-based-inference"]
stars: 22
forks: 1
openIssues: 2
closedIssues: 17
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-01-07T19:04:52Z"
lastCommitAt: "2026-10-03T22:05:03Z"
lastReleaseAt: "2026-10-01T16:14:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 56
maintainers: ["MamadouSDiallo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0aa946d72d4af0d2a4fedbfaf11a64aeef7234828a652e2248e52be3a21ab625/samplics-org/svy"
---

# svy

**Design, analyze, and report complex surveys in Python.**

svy is a design-based, production-oriented library covering the full survey workflow: sample size, selection, weighting, estimation, testing, and modeling. It is [validated against R's `survey` package](https://svylab.com/learn/notes/posts/svy-vs-r-comparison/) to six significant digits and powered by a Rust engine.

🌐 [svylab.com](https://svylab.com) · 📘 [Documentation](https://svylab.com/docs/svy) · 🚀 [Quick Tour](https://svylab.com/docs/svy/tutorials/sample_quicktour.html)

---

## Why svy?

- **One object, whole workflow.** A `Sample` binds your data to its sampling design once; `.wrangling`, `.weighting`, `.estimation`, `.categorical`, and `.glm` all hang off it, and the design metadata travels through every step.
- **Correct by construction.** `Sample` is immutable: every transformation returns a new object, and subpopulation analysis (`where=`) keeps the full design for variance estimation instead of filtering rows, which understates standard errors.
- **Replicate weights done right.** Nonresponse adjustment, calibration, raking, and trimming are applied to the replicate weights in the same pass as the…
