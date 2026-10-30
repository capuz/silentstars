---
repo: "OskarStark/doctor-rst"
name: "doctor-rst"
description: "Bring consistency to documentation"
readmeQualityOk: true
url: "https://github.com/OskarStark/doctor-rst"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["docs", "rst", "sphinx", "php", "docker", "hacktoberfest"]
stars: 45
forks: 23
openIssues: 13
closedIssues: 83
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2018-12-27T09:19:36Z"
lastCommitAt: "2026-10-30T10:23:05Z"
lastReleaseAt: "2020-01-31T07:20:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 58
maintainers: ["dependabot[bot]", "Amoifr", "OskarStark"]
openGraphImageUrl: "https://opengraph.githubassets.com/045fd748c77809602cc3c102c644f3805085048a2fccdedacc4112b9c6844a84/OskarStark/doctor-rst"
fundingLinks: ["GITHUB:https://github.com/OskarStark"]
---

DOCtor-RST
==========

Lint your documentation against given rules.

Available rules
---------------

You can find the available rules [here](https://github.com/OskarStark/doctor-rst/blob/HEAD/docs/rules.md).

Usage
-----

You can use it as a Github Action like this:
```yaml
# .github/workflows/lint.yaml
name: Lint

on:
    push:
    pull_request:

jobs:
    doctor-rst:
        name: DOCtor-RST
        runs-on: ubuntu-latest
        steps:
            - name: "Checkout code"
              uses: actions/checkout@v4

            - name: DOCtor-RST
              uses: docker://oskarstark/doctor-rst
              with:
                  args: --short --error-format=github
```

If your `*.rst` files are not located in root:
```diff
              uses: docker://oskarstark/doctor-rst
              with:
                  args: --short --error-format=github
+              env:
+                  DOCS_DIR: 'docs/'
```

Error Formatter
---------------

* **detect** _(default)_ If running inside GithubActions CI environment, `github` is used, otherwise `console`.

* **github** Used to annotate your pull requests.

* **console** Used to generate a human readable output.

To force the usage of…
