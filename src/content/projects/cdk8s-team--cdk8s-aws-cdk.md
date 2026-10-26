---
repo: "cdk8s-team/cdk8s-aws-cdk"
name: "cdk8s-aws-cdk"
description: "AWS CDK Adapter for cdk8s"
readmeQualityOk: true
url: "https://github.com/cdk8s-team/cdk8s-aws-cdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 15
closedIssues: 24
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-05-23T21:48:56Z"
lastCommitAt: "2026-10-26T09:15:00Z"
lastReleaseAt: "2023-02-28T18:12:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 68
maintainers: ["cdk8s-automation"]
openGraphImageUrl: "https://opengraph.githubassets.com/91e5027ca50f5822247d80557ba4728e270fdfd917153cd39a0b8c1c5a902220/cdk8s-team/cdk8s-aws-cdk"
---

# cdk8s-aws-cdk

AWS CDK Adapter for cdk8s allows you to define AWS CDK constructs within a cdk8s application.
The AWS resources will be provisioned using the [AWS Controllers for Kubernetes](https://aws-controllers-k8s.github.io/community/docs/community/overview/).

## DO NOT USE THIS IN PRODUCTION

This project is in very early alpha stages of development and is subject to frequent breaking changes.

## Pre-requisites

In you Kubernetes cluster, [install the appropriate ACK controllers](https://aws-controllers-k8s.github.io/community/docs/user-docs/install/),
depending on which resources you want to provision.

## Getting Started

Install the adapter and the AWS CDK in your cdk8s project.

```console
npm install cdk8s-aws-cdk aws-cdk-lib
```

The adapter provides a special `Chart`, that allows defining AWS CDK resources. You must extend this chart,
in place of the normal `cdk8s.Chart` object.

```ts
import * as awscdkadapter from 'cdk8s-aws-cdk'
import * as k from 'cdk8s';
import * as kplus from 'cdk8s-plus-24';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class MyChart extends awscdkadapter.Chart {

  constructor(scope: Construct, id: string, props: k.ChartProps = {}) {…
