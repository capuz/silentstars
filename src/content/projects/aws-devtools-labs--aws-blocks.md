---
repo: "aws-devtools-labs/aws-blocks"
name: "aws-blocks"
description: "Composable building blocks for full-stack AWS apps — define infrastructure and runtime code together with end-to-end type safety using TypeScript, local mocking, and native client codegen for Kotlin, Swift, and Dart."
readmeQualityOk: true
url: "https://github.com/aws-devtools-labs/aws-blocks"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["android", "aws", "aws-cdk", "aws-dynamodb", "aws-lambda", "codegen", "dart", "fullstack", "infrastructure-as-code", "ios"]
stars: 404
forks: 55
openIssues: 34
closedIssues: 97
watchers: 4
contributors: 32
recentReleases: 9
createdAt: "2026-06-09T21:42:12Z"
lastCommitAt: "2026-10-19T09:15:01Z"
lastReleaseAt: "2026-08-07T20:44:07Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["sharonyajain", "VarshithaPamisetty", "osama-rizk"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/aws-devtools-labs/aws-blocks"
---

# AWS Blocks (Preview)

AWS Blocks is a backend toolkit for building full-stack applications on AWS. Each Block is a self-contained backend capability that bundles your application code, a local development setup, and the infrastructure to run it. Pick the Blocks you need, compose them, and AWS Blocks defines the AWS infrastructure for you following AWS best practices. Your entire application runs locally without an AWS account — when you're ready, deploy the same code to AWS without changing it.

> 📚 **Documentation:** [AWS Blocks Developer Guide](https://docs.aws.amazon.com/blocks/latest/devguide/what-is-blocks.html)

## Getting started

Requires [Node.js](https://nodejs.org/) 22 or later and npm 10 or later.

```bash
npm create @aws-blocks/blocks-app@latest my-app
cd my-app
npm install
npm run dev
```

`npm run dev` starts a local development server at `http://localhost:3000` with every Block running a local implementation — no AWS account or credentials required. Define your backend in `aws-blocks/index.ts` and your frontend in `src/`; types flow end to end with no code generation step.

- Start from a specific template with `--template <name>`. Available templates:…
