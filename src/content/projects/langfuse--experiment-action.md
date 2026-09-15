---
repo: "langfuse/experiment-action"
name: "experiment-action"
description: "Run your Langfuse experiment with your GitHub action workflow."
readmeQualityOk: true
url: "https://github.com/langfuse/experiment-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 16
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 12
recentReleases: 5
createdAt: "2026-04-20T11:38:48Z"
lastCommitAt: "2026-09-15T08:55:04Z"
lastReleaseAt: "2026-08-26T09:43:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["dependabot[bot]", "wochinge", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cee47478e66dd7b53535677faca25e22ed8cb91b7bd858f3f46fdbcec62270d5/langfuse/experiment-action"
---

# langfuse/experiment-action

Run a [Langfuse](https://langfuse.com) experiment in your CI pipeline. The
action loads your experiment script, runs it against a Langfuse dataset,
comments the result on the PR, and optionally fails the job when a regression
is detected. Learn more in the Langfuse docs on
[testing experiments in CI environments](https://langfuse.com/docs/evaluation/experiments/experiments-via-sdk#testing-in-ci-environments).

## Contents

- [Quickstart](#quickstart)
- [Usage](#usage)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Script contract](#script-contract)
  - [Consuming the result in later steps](#consuming-the-result-in-later-steps)
  - [Experiment metadata](#experiment-metadata)
- [FAQ](#faq)
  - [Can I run Python and TypeScript experiments in the same step?](#can-i-run-python-and-typescript-experiments-in-the-same-step)
  - [How do I manage the Langfuse SDK installation myself?](#how-do-i-manage-the-langfuse-sdk-installation-myself)
  - [How do I pass extra secrets (OpenAI keys, etc.) to my experiment?](#how-do-i-pass-extra-secrets-openai-keys-etc-to-my-experiment)
  - [Can I pin a specific Langfuse SDK…
