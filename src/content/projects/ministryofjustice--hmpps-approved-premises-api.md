---
repo: "ministryofjustice/hmpps-approved-premises-api"
name: "hmpps-approved-premises-api"
description: "The API for the Approved Premises Service"
url: "https://github.com/ministryofjustice/hmpps-approved-premises-api"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["hmpps", "api"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 8
watchers: 28
contributors: 441
recentReleases: 0
createdAt: "2022-07-18T17:18:06Z"
lastCommitAt: "2026-06-29T07:21:23Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 100
undervaluedScore: 64
maintainers: ["davidatkinsuk", "danhumphreys-moj", "vbala-moj"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b52332f83037bb17a7a4e97bd6ea4bdb701a85d352f3d3599acb43d02916c2d/ministryofjustice/hmpps-approved-premises-api"
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
