---
repo: "awesome-foundation/cfnrain"
name: "cfnrain"
description: "Community fork of AWS CloudFormation Rain, not affiliated with AWS"
readmeQualityOk: true
url: "https://github.com/awesome-foundation/cfnrain"
homepage: "https://awesome-foundation.github.io/cfnrain/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 18
forks: 1
openIssues: 23
closedIssues: 19
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-10-24T12:49:41Z"
lastCommitAt: "2026-11-09T04:35:27Z"
lastReleaseAt: "2026-10-27T12:29:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 48
maintainers: ["allixsenos", "kddejong", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4bc34705fc09759e792e1d7a6e8f269a65f0974dc95dc811fafc8a4e653820b/awesome-foundation/cfnrain"
discussionCount: 4
---

# cfnrain

cfnrain is a command line tool for [AWS CloudFormation](https://aws.amazon.com/cloudformation/) templates and stacks. It deploys stacks through change sets, packages local files into templates, formats templates, and shows stack logs.

cfnrain is a community fork of [AWS CloudFormation Rain](https://github.com/aws-cloudformation/rain). AWS archived Rain on 2026-07-29. cfnrain continues from Rain's last commit, and works as a replacement for Rain v1.24.4.

**cfnrain is not affiliated with or endorsed by Amazon Web Services.**

## Documentation

Read the documentation at **[awesome-foundation.github.io/cfnrain](https://awesome-foundation.github.io/cfnrain/)**. It covers installation, a first deploy, every command, the template directives, modules, CI usage, and migrating from Rain.

## Install

Download an archive for your system from the [releases page](https://github.com/awesome-foundation/cfnrain/releases), and check it against `checksums.txt` and its build provenance:

```sh
sha256sum --ignore-missing -c checksums.txt
gh attestation verify <archive> -R awesome-foundation/cfnrain
```

Or build it with Go:

```sh
go install…
