---
repo: "huggingface/transformers-mic"
name: "transformers-mic"
description: "Executable model integration contracts published on the Hub, run from framework CI"
readmeQualityOk: true
url: "https://github.com/huggingface/transformers-mic"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 7
forks: 5
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 36
recentReleases: 0
createdAt: "2026-10-06T16:26:00Z"
lastCommitAt: "2026-11-05T11:25:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 53
maintainers: ["tarekziade", "tomaarsen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a231a22ada29e9986dc0a7f7356bd31126851f4385c7ee7d0ade0f7a199de6cc/huggingface/transformers-mic"
---

# transformers-mic

A **Model Integration Contract (MIC)** is a proposed standard: next to a Hub
model, an executable check that it works in a framework, run by that
framework's CI. Each MIC has three parts:

- a **fixture**: a shrunk model built from the real checkpoint's config, with its
  tokenizer and processor files copied unchanged
- a **usage path**: runnable Markdown that does what users do, such as generating
  text or running a training step
- **baselines**: the outputs that usage produced, reviewed by a human

Words used throughout the docs:

- **checkpoint**: the real Hub model a MIC covers (`mistralai/Mistral-Large-4-1T-A52B`).
- **fixture**: the small model a MIC runs on CPU, built from one checkpoint by the
  [recipe](https://github.com/huggingface/transformers-mic/blob/HEAD/docs/fixtures.md#recipe) and published as `huggingface-mic/<name>-mic`.
  Older text, repository and file names say *slim fixture* or *slim model*: same thing.
- **shrink**: the recipe step that turns the checkpoint's config into the fixture's
  (the *shrunk config*); [`tmic shrink`](https://github.com/huggingface/transformers-mic/blob/HEAD/docs/cli.md#how-was-the-fixture-shrunk)
  shows what it…
