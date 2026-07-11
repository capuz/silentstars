---
repo: "bhovhannes/junit-report-merger"
name: "junit-report-merger"
description: "Merges multiple JUnit XML reports into one"
readmeQualityOk: true
url: "https://github.com/bhovhannes/junit-report-merger"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 48
forks: 12
openIssues: 3
closedIssues: 20
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2016-01-22T06:44:40Z"
lastCommitAt: "2026-07-11T05:57:56Z"
lastReleaseAt: "2021-08-11T10:18:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 50
maintainers: ["renovate[bot]", "bhovhannes"]
openGraphImageUrl: "https://opengraph.githubassets.com/c507b2b4d64703a3a5a19ba37d65c2a6cc524469e5cbf1a32e6ca71c18f3b8f3/bhovhannes/junit-report-merger"
---

# junit-report-merger

Merges multiple JUnit XML reports into one.

Reporters of many testing frameworks generate JUnit XML reports. [`mocha-junit-reporter`](https://www.npmjs.com/package/mocha-junit-reporter), [`karma-junit-reporter`](https://www.npmjs.com/package/karma-junit-reporter) to name a few. Sometimes there is a need to combine multiple reports together in a single file. This is what `junit-report-merger` does.

`junit-report-merger` creates a new test results report in [JUnit XML format](#junit-xml-format) by collecting all `<testsuite>` elements from all XML reports and putting them together.

## CLI

Package provides a `jrm` binary, which you can use to merge multiple xml reports into one.  
In a nutshell it is a tiny wrapper around [mergeFiles](#mergefiles) api.

### Installing

#### Globally

```shell script
npm install -g junit-report-merger
```

In this case you'll be able to execute `jrm` binary from within your shell.

#### Locally

```shell script
npm install junit-report-merger --save-dev
```

In this case `jrm` binary will be available only inside `package.json` scripts:

```
scripts: {
    "merge-reports": "jrm combined.xml \"results/*.xml\""
}
```

###…
