---
repo: "fslev/json-compare"
name: "json-compare"
description: "A Java library for comparing JSONs"
readmeQualityOk: true
url: "https://github.com/fslev/json-compare"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["compare", "diff", "java", "json", "match", "regex", "assertion"]
stars: 77
forks: 16
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2018-06-09T19:05:58Z"
lastCommitAt: "2026-11-26T15:26:31Z"
lastReleaseAt: "2026-09-29T08:10:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["fslevoaca-ionos", "renovate[bot]", "fslev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b075940deec3300c7ec3bfe4dd145380c8bd67dbb1cd6aa405b7a54cb3c7265/fslev/json-compare"
---

# JSON Compare

> A Java library for matching JSONs, with regex, JSONPath, and embedded match tweaks — no glue code required.

Compare any two JSON-convertible Java objects and report every difference on
mismatch. The expected JSON is matched leniently by default — sizes and array
order are ignored, scalar values are matched as Java regular expressions, and
match logic can be tuned with operators (`!`, `!.*`, `.*`, `#(...)`) embedded
directly inside the expected JSON.
