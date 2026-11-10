---
repo: "openwebdocs/mdn-bcd-collector"
name: "mdn-bcd-collector"
description: "Data collection service for MDN's browser-compat-data"
readmeQualityOk: true
url: "https://github.com/openwebdocs/mdn-bcd-collector"
homepage: "https://collector.openwebdocs.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 51
forks: 33
openIssues: 31
closedIssues: 81
watchers: 6
contributors: 29
recentReleases: 9
createdAt: "2022-11-20T10:17:54Z"
lastCommitAt: "2026-11-10T11:39:00Z"
lastReleaseAt: "2026-10-23T08:54:34Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 64
maintainers: ["dependabot[bot]", "Elchi3", "caugner"]
openGraphImageUrl: "https://opengraph.githubassets.com/b77176dc966284ad5808e63f90f277a742398a8a8f46ceba576c18c2874d7ca3/openwebdocs/mdn-bcd-collector"
fundingLinks: ["GITHUB:https://github.com/openwebdocs", "OPEN_COLLECTIVE:https://opencollective.com/open-web-docs"]
---

# MDN browser-compat-data collector

Data collection service for MDN's [browser-compat-data](https://github.com/mdn/browser-compat-data). Live at https://collector.openwebdocs.org/.

Feature detection tests are generated based on machine-readable data (Web IDL and CSS definitions) from web standards, with support for custom tests where needed. Results are submitted to the [mdn-bcd-results](https://github.com/openwebdocs/mdn-bcd-results) repository.

This service is part of an effort to [assist BCD updates with automation](https://github.com/mdn/browser-compat-data/issues/3308), and exists to run lots of small tests in browsers to determine the support status of a feature in a browser, and save those results.

## License

This project is under the Apache License 2.0 license. See the LICENSE file for more details.

## Setup

This project requires Node.js 26.

```sh
npm install
```

## Updating BCD using the results

See [docs/update-bcd.md](https://github.com/openwebdocs/mdn-bcd-collector/blob/HEAD/docs/update-bcd.md) for information on how to use the `update-bcd` script.

## Reviewing BCD changes

See…
