---
repo: "braintrustdata/braintrust-sdk-javascript"
name: "braintrust-sdk-javascript"
description: "JavaScript Tracing & Evals library for Braintrust"
readmeQualityOk: true
url: "https://github.com/braintrustdata/braintrust-sdk-javascript"
homepage: "https://www.braintrust.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 29
forks: 21
openIssues: 53
closedIssues: 254
watchers: 2
contributors: 88
recentReleases: 0
createdAt: "2023-07-17T20:01:33Z"
lastCommitAt: "2026-10-29T14:07:16Z"
lastReleaseAt: "2025-12-04T20:23:07Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 69
maintainers: ["lforst", "AbhiPrasad", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f75d5f6842475888bf9eb9dcbff6c8874451ec994ac6b3b072f1031055a08c9/braintrustdata/braintrust-sdk-javascript"
---

# Braintrust JavaScript SDKs

[Braintrust](https://www.braintrust.dev/) is a platform for evaluating and shipping AI products. Learn more at [braintrust.dev](https://www.braintrust.dev/) and in the [docs](https://www.braintrust.dev/docs).

This repository contains Braintrust's JavaScript/TypeScript SDKs and integrations, including:

- The main `braintrust` SDK package (`./js`)
- Integration packages under `./integrations`
- Shared tooling and smoke tests for JavaScript SDK development

## Quickstart

Install the main SDK and autoeval scorers:

```bash
npm install braintrust autoevals
```

Create `tutorial.eval.ts`:

```ts
import { Eval } from "braintrust";
import { LevenshteinScorer } from "autoevals";

Eval("Say Hi Bot", {
  data: () => [
    { input: "Foo", expected: "Hi Foo" },
    { input: "Bar", expected: "Hello Bar" },
  ],
  task: (input) => "Hi " + input,
  scores: [LevenshteinScorer],
});
```

Run it:

```bash
BRAINTRUST_API_KEY=<YOUR_API_KEY> npx braintrust eval tutorial.eval.ts
```

## Packages

| Package                     | Purpose                                                                         | npm…
