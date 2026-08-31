---
repo: "huggingface/serge"
name: "serge"
description: "Reviews pull requests with any OpenAI-compatible LLM "
readmeQualityOk: true
url: "https://github.com/huggingface/serge"
homepage: "https://huggingface.github.io/serge/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai", "huggingface", "reviewbot"]
stars: 49
forks: 9
openIssues: 12
closedIssues: 8
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-04-23T06:44:54Z"
lastCommitAt: "2026-08-31T09:58:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 35
maintainers: ["tarekziade", "dependabot[bot]", "sayakpaul"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e53dcfcdcb440670b5d060c4bafe267f76088cb9a9cf98e7d5a6100fdf5a49b/huggingface/serge"
---

# serge

`serge` reviews GitHub pull requests with an OpenAI-compatible LLM and
posts validated inline comments on the diff. The default reviewer persona is
Serge, triggered by comments such as `@askserge please review`.

It can run as:

| Mode | Best for |
| ---- | -------- |
| GitHub Action | Per-repo CI control via a workflow file |
| GitHub App webhook | Hosted automation across many repos, no per-repo workflow |
| Web app | Human-in-the-loop staged reviews before publishing |

## Quick Start

Add an LLM key as a repository secret named `LLM_API_KEY`, then install the
Action workflow from the [GitHub Action guide](https://github.com/huggingface/serge/blob/HEAD/docs/github-action.md). Comment
`@askserge please review` on an open PR to start a review.

For fork-heavy repositories or hosted deployments, use the
[GitHub App](https://github.com/huggingface/serge/blob/HEAD/docs/github-app.md) or [web app](https://github.com/huggingface/serge/blob/HEAD/docs/web-app.md) guides instead.

Beyond reviewing, serge can also open fix PRs from CI failures — see the
optional, write-capable [tasks flow](https://github.com/huggingface/serge/blob/HEAD/docs/tasks-flow.md).

## Documentation

-…
