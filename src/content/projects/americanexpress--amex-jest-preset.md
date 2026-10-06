---
repo: "americanexpress/amex-jest-preset"
name: "amex-jest-preset"
description: "✨ An opinionated Jest preset"
readmeQualityOk: true
url: "https://github.com/americanexpress/amex-jest-preset"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["jest", "testing", "one-app", "jest-configuration"]
stars: 16
forks: 4
openIssues: 1
closedIssues: 3
watchers: 14
contributors: 189
recentReleases: 0
createdAt: "2017-06-01T17:20:21Z"
lastCommitAt: "2026-10-06T10:41:49Z"
lastReleaseAt: "2023-01-18T16:58:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 69
undervaluedScore: 32
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd39c111f704aa3d95d425510e3e644729dcf64f8f1c682320f3c10d2cd707dd/americanexpress/amex-jest-preset"
---

# amex-jest-preset

An opinionated [Jest preset](http://facebook.github.io/jest/docs/en/configuration.html#preset-string)

For a React specific Jest preset use: [amex-jest-preset-react](https://github.com/americanexpress/amex-jest-preset-react) which extends off of this preset and adds some React specific configurations.

> Want to get paid for your contributions to `amex-jest-preset`?
> Send your resume to oneamex.careers@aexp.com

## Configurations

- [cacheDirectory](https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string) is used to let Jest know to output its cache within the project workspace (specifically in `<rootDir>/.jest-cache`). This is useful as it eliminates issues caused by several projects sharing the same Jest cache on CI builds.

- [collectCoverage](http://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean) tells Jest to collect code coverage metrics on every test run

- [collectCoverageFrom](http://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array) tells Jest what directories to collect and not collect coverage metrics from

-…
