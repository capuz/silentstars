---
repo: "themains/pwned_survey"
name: "pwned_survey"
description: "How Often Are Americans' Accounts Breached?"
readmeQualityOk: true
url: "https://github.com/themains/pwned_survey"
language: "TeX"
languages: ["TeX", "R"]
languagePcts: [52, 48]
topics: ["privacy", "cybersecurity", "data-breaches", "digital-divide", "have-i-been-pwned"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2018-07-22T05:22:54Z"
lastCommitAt: "2026-11-13T05:39:31Z"
lastReleaseAt: "2026-09-10T15:23:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 39
maintainers: ["soodoku"]
openGraphImageUrl: "https://opengraph.githubassets.com/896822fe90c4ab26e2e8146adbb6b2f79a8077f2e63c46141867f40493c7c393/themains/pwned_survey"
---

# Pwned: The Risk of Exposure From Data Breaches

This research repository combines an archived YouGov sample with July 2018 Have I Been Pwned (HIBP) records. One registered email was queried for each of 5,000 adults. We study recorded exposure and its associations with age, education, sex, and race/ethnicity.

82.84% of sampled adults have at least one recorded exposure, with a mean of 2.9902 person–breach records. Restricting to verified, nonspam records gives 71.78% and a mean of 1.8608. Both outcomes retain every respondent, including zeros.

These are counts for one email per sampled person. HIBP coverage is incomplete, and the demographic comparisons are associations. The study does not measure online-service use or identify a causal mechanism. The [manuscript](https://github.com/themains/pwned_survey/blob/HEAD/ms/pwned.pdf) and [supplement](https://github.com/themains/pwned_survey/blob/HEAD/ms/pwned_si.pdf) explain the design and limits.

## Reproduce this revision

With R 4.6 installed, run from the repository root:

```sh
make restore
make check
make paper
```

`renv.lock` pins the R dependencies. Linux source installation needs a compiler toolchain and development…
