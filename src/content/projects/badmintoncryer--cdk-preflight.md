---
repo: "badmintoncryer/cdk-preflight"
name: "cdk-preflight"
description: "Catch deploy-time CloudFormation failures at synth time: a Rego rule pack for constraints that resource schemas miss, injected into the AWS CDK built-in validator"
readmeQualityOk: true
url: "https://github.com/badmintoncryer/cdk-preflight"
language: "TypeScript"
languages: ["TypeScript", "Open Policy Agent"]
languagePcts: [59, 40]
stars: 8
forks: 0
openIssues: 28
closedIssues: 42
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T10:13:39Z"
lastCommitAt: "2026-09-13T08:30:30Z"
lastReleaseAt: "2026-09-02T12:57:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 53
maintainers: ["badmintoncryer", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1353423628/570ba43f-0419-4d83-9759-68e5dc32b281"
---

</p>

<h1 align="center">cdk-preflight</h1>

  <strong>Catch deploy-time CloudFormation failures at <code>cdk synth</code> time.</strong>
</p>

</p>

Some CloudFormation constraints are not expressed in resource provider schemas — they live only in documentation, in service API validation, or across multiple properties. Templates that violate them pass `cdk synth`, pass CloudFormation pre-deployment validation, and then fail minutes into a deployment, burning a rollback cycle.

cdk-preflight is a curated [Rego rule pack](https://github.com/badmintoncryer/cdk-preflight/blob/HEAD/docs/rules.md) for exactly those constraints, evaluated with the CloudFormation validation engine that ships inside `aws-cdk-lib` (>= 2.267.0). By default a violation **fails `cdk synth`** — a template that is known to fail at deploy time never leaves your machine.

The pack aims at **every deploy-time failure that no existing CDK mechanism already catches** — nothing narrower. Every bundled rule is backed by a `fail`/`pass` template pair, and the failure has been reproduced against real AWS. The handful of rules that could not be reproduced are marked `doc-only` and report as **warnings**: they show up in…
