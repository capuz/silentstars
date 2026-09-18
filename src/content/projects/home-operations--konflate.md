---
repo: "home-operations/konflate"
name: "konflate"
description: "A read-only pull request review tool for Flux using Flate for rendering."
readmeQualityOk: true
url: "https://github.com/home-operations/konflate"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["0ver", "flate", "fluxcd", "helmrelease", "kubernetes", "kustomize"]
stars: 69
forks: 2
openIssues: 4
closedIssues: 36
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-06-05T00:33:40Z"
lastCommitAt: "2026-09-18T14:03:26Z"
lastReleaseAt: "2026-06-06T15:48:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 34
maintainers: ["sticky-gecko[bot]", "onedr0p", "Stasky745"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f62a1399cab876b7a2103879938e6fe98b390d482f21c81a71969e1a7edc2d7/home-operations/konflate"
---

# konflate

**Review your GitOps pull requests as _rendered_ Flux diffs — not raw file diffs.**

</div>

A one-line bump to a Flux resource — a `HelmRelease` chart version, an
`OCIRepository` tag, a `Kustomization` edit — can add, remove, or mutate dozens
of rendered Kubernetes resources. The git diff shows the line; it doesn't show
that. konflate does: it renders the Flux cluster at the PR's **merge-base** and
at its **head** using [flate](https://github.com/home-operations/flate), diffs
the two, and presents the result as a GitHub-style review UI with the blast
radius, image changes, render failures, and heuristic danger flags surfaced up
front.

## How it works

1. konflate lists the open pull requests for one repository from its forge
   (GitHub / GitLab / Forgejo, cloud or self-hosted) using the native Go SDK.
2. For each PR it clones the repo, computes `merge-base(head, target)`, and
   extracts both trees (so changes that landed on the base branch _after_ the PR
   opened don't pollute the diff — exactly how GitHub computes a PR diff).
3. It renders the Flux cluster at both trees with flate (two orchestrators
   sharing one source cache) and pairs the outputs into…
