---
repo: "ministryofjustice/hmpps-approved-premises-api"
name: "hmpps-approved-premises-api"
description: "The API for the Approved Premises Service"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/hmpps-approved-premises-api"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["hmpps", "api"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 7
watchers: 28
contributors: 56
recentReleases: 0
createdAt: "2022-07-18T17:18:06Z"
lastCommitAt: "2026-09-08T08:15:09Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 97
undervaluedScore: 63
maintainers: ["davidatkinsuk", "vbala-moj", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fdf09b079bd247f71ced83c57aa2532a617f81ca7dcf5642939d8d929fe7275/ministryofjustice/hmpps-approved-premises-api"
---

# Approved Premises API (now Community Accommodation)

This is the shared backend for the Community Accommodation User Interfaces

- [CAS1 - Approved Premises](https://github.com/ministryofjustice/hmpps-approved-premises-ui)
- [CAS2 - Short-Term Accommodation](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-ui)
- [CAS3 - Temporary Accommodation ](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui)

### Java install

To install Java you can use sdkman:

* Uninstall/unconfigure any other tool used to manage JDKs (e.g. jenv)
* Install sdkman using the instructions on the [website](https://sdkman.io/)
* Add source `"$HOME/.sdkman/bin/sdkman-init.sh` into `.zshrc` to ensure it's available in all terminals
* In the project root run `sdk env install` to install the correct version of java
* It's advised to set the project java version as system-wide default, allowing ap-tools to be run from anywhere e.g. `sdk default java <installed-version-here>`

## Running Tests

To run tests, you'll need to first start some dependencies using:

```shell
./script/test_database
```

Whilst you can run all the tests locally using `./script/test`, this takes…
