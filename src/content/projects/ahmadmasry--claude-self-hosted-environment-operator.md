---
repo: "AhmadMasry/claude-self-hosted-environment-operator"
name: "claude-self-hosted-environment-operator"
description: "Kubernetes operator for Claude Code self-hosted environments: fixed and on-demand runner fleets to run claude code agents in."
readmeQualityOk: true
url: "https://github.com/AhmadMasry/claude-self-hosted-environment-operator"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["ai-agents", "anthropic", "claude", "claude-code", "controller-runtime", "helm", "kubebuilder", "kubernetes", "kubernetes-operator", "self-hosted"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-02T18:45:34Z"
lastCommitAt: "2026-11-26T23:35:04Z"
lastReleaseAt: "2026-11-14T17:53:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 54
maintainers: ["AhmadMasry", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73b587b23ca8bb8bb0b1169d24aa7c064ce363ade906574a4a7e3239c505a628/AhmadMasry/claude-self-hosted-environment-operator"
---

# Claude Code self-hosted environment operator

A Kubernetes operator that runs [Claude Code self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments)
on your cluster. You create one `ClaudeEnvironment` per environment from
claude.ai admin settings, point it at a runner image you build and a Secret
holding the environment key, and the operator runs the fleet: a fixed set
of runners, or an orchestrator that spawns one hardened pod per session.
Every pod meets the Restricted Pod Security Standard by default. Give each
on-demand environment its own namespace: its orchestrator can create
work-order Secrets there.

Status: pre-release. The API is `claude.cloudeng.ps/v1alpha1` and may still change; see
[API stability](#api-stability) for what that promises.
Every change runs through unit, envtest, kind e2e and upgrade e2e suites in CI, and a
manual [real-environment test](https://github.com/AhmadMasry/claude-self-hosted-environment-operator/blob/HEAD/docs/testing.md#real-environment-test) registers with
Anthropic's control plane and routes a real session through the operator; see
[What a run looks like](#what-a-run-looks-like).
