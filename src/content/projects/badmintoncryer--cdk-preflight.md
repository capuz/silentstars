---
repo: "badmintoncryer/cdk-preflight"
name: "cdk-preflight"
description: "Catch deploy-time CloudFormation failures at synth time: a Rego rule pack for constraints that resource schemas miss, injected into the AWS CDK built-in validator"
readmeQualityOk: true
url: "https://github.com/badmintoncryer/cdk-preflight"
language: "Open Policy Agent"
languages: ["Open Policy Agent"]
languagePcts: [83]
stars: 10
forks: 0
openIssues: 13
closedIssues: 98
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T10:13:39Z"
lastCommitAt: "2026-11-26T12:59:09Z"
lastReleaseAt: "2026-09-02T12:57:05Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 56
maintainers: ["badmintoncryer", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1353423628/8f7a2b6e-44a6-4d51-b32b-6c42ec4e98da"
---

Some CloudFormation constraints are not expressed in resource provider schemas — they live only in documentation, in service API validation, or across multiple properties. Templates that violate them pass `cdk synth`, pass CloudFormation pre-deployment validation, and then fail minutes into a deployment, burning a rollback cycle.

cdk-preflight is a curated [Rego rule pack](https://github.com/badmintoncryer/cdk-preflight/blob/HEAD/docs/rules.md) for exactly those constraints, evaluated with the CloudFormation validation engine that ships inside `aws-cdk-lib` (>= 2.267.0). By default a violation **fails `cdk synth`** — a template that is known to fail at deploy time never leaves your machine.
