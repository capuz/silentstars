---
repo: "tomasbjerre/violation-comments-to-bitbucket-cloud-command-line"
name: "violation-comments-to-bitbucket-cloud-command-line"
description: "Report static code analysis to Bitbucket Cloud"
readmeQualityOk: true
url: "https://github.com/tomasbjerre/violation-comments-to-bitbucket-cloud-command-line"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["bitbucket-cloud", "bitbucket-cli", "bitbucket"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2019-06-09T16:05:18Z"
lastCommitAt: "2026-09-18T08:25:44Z"
lastReleaseAt: "2026-09-14T12:01:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 58
maintainers: ["tomasbjerre", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/191027269/0b825100-8ce5-11e9-8dcb-b75e9623ccb9"
---

# Violation Comments To Bitbucket Cloud Command Line

Report static code analysis to Bitbucket Cloud. It uses the [Violations Lib](https://github.com/tomasbjerre/violations-lib).

The runnable can be found in [NPM](https://www.npmjs.com/package/violation-comments-to-bitbucket-cloud-command-line).

| Version           | Java Version |
| ------------------| ------------ |
| version < 1.36.0  | 11           |
| 1.36.0 <= version | 17           |

Run it with:

```shell
# Using application password
npx violation-comments-to-bitbucket-cloud-command-line \
 -u tomasbjerre \
 -p MY-APPLICATION-PASSWORD \
 -ws tomasbjerre \
 -rs violations-test \
 -prid 1 \
 -v "CHECKSTYLE" "." ".*checkstyle/main\.xml$" "Checkstyle" \
 -v "JSHINT" "." ".*jshint/report\.xml$" "JSHint"
 
# Using API token
npx violation-comments-to-bitbucket-cloud-command-line \
 -t MY-PROJECT-OR-REPOSITORY-APPLICATION-PASSWORD \
 -ws tomasbjerre \
 -rs violations-test \
 -prid 1 \
 -v "CHECKSTYLE" "." ".*checkstyle/main\.xml$" "Checkstyle" \
 -v "JSHINT" "." ".*jshint/report\.xml$" "JSHint"
```

Create **application passwords** like this: https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html. Pass the…
