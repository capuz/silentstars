---
repo: "max-sixty/tend"
name: "tend"
description: "Claude-powered CI workflows for GitHub repositories"
readmeQualityOk: true
url: "https://github.com/max-sixty/tend"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 39
forks: 7
openIssues: 7
closedIssues: 287
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-21T23:20:37Z"
lastCommitAt: "2026-10-02T10:00:12Z"
lastReleaseAt: "2026-06-29T18:58:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["tend-agent", "max-sixty", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68461168acceaf0bf1d7460dfa07eb0bdea2e73fe4f2b683a74fe000fd7b5207/max-sixty/tend"
---

<h1><img src="assets/logo-512.png" alt="tend logo" width="50" align="absmiddle">Tend</h1>

Tend allows open-source projects to have an agent as a dutiful junior
maintainer. The agent can review PRs, triage issues, fix CI, help out with
research, maintain a changelog, sweep the repo for improvements, refine
documentation, etc.

> Current status: Tend is in its early days. It has been working _extremely_ well in
> [Worktrunk](https://www.github.com/max-sixty/worktrunk) for the past couple of
> months, such that folks suggested I generalize it into its own project.

## Structure

To use Tend, a project needs:

- A GitHub account for the agent (for example this project's is **[@tend-agent](https://www.github.com/tend-agent))**
- One of:
  - A Claude Max subscription (harness = "claude")
  - A ChatGPT Plus or Pro subscription (experimental), or an OpenAI API key
    (harness = "codex") — see
    [Codex (experimental alternative)](#codex-experimental-alternative).

Tend offers the default code & instructions for the agent. Specifically that means:

- A set of workflow templates
- A very particular set of Skills
  - ...skills it has acquired over a very long career (two months)

Each…
