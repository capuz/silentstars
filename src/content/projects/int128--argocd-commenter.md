---
repo: "int128/argocd-commenter"
name: "argocd-commenter"
description: "Notify ArgoCD Application status via Pull Request comment or GitHub Deployment API"
readmeQualityOk: true
url: "https://github.com/int128/argocd-commenter"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["argocd", "golang", "kubernetes", "kubebuilder"]
stars: 155
forks: 17
openIssues: 8
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2020-12-12T04:44:42Z"
lastCommitAt: "2026-10-29T12:25:13Z"
lastReleaseAt: "2021-09-27T03:52:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 40
maintainers: ["renovate[bot]", "int128"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0295298788d7badf3771f73928589bc06f17816c8c8fb061a5bd09088730354/int128/argocd-commenter"
---

# argocd-commenter [](https://github.com/int128/argocd-commenter/actions/workflows/build.yaml)

This is a Kubernetes Controller to notify a change of Argo CD Application status.

## Example: Pull Request notification

In the [GitOps](https://www.weave.works/technologies/gitops/) way, you merge a pull request to deploy a change to Kubernetes cluster.
argocd-commenter allows you to receive a notification comment after merging.

When an Application is syncing, synced or healthy, argocd-commenter will create a comment.

When the sync was failed, argocd-commenter will create a comment.

See the examples in [e2e-test fixtures](https://github.com/int128/argocd-commenter-e2e-test/pulls?q=is%3Apr+is%3Aclosed).

### Sequence diagram

Here is the sequence diagram of the deployment flow.

```mermaid
sequenceDiagram
  actor User

  User ->>+ GitHub Repository: git push
  GitHub Repository -->>- User: pushed

  loop Argo CD reconciler
    Argo CD Application ->>+ GitHub Repository: git checkout
    GitHub Repository -->>- Argo CD Application: manifest
    note over Argo CD Application: Out of Sync
    Argo CD Application ->>+ Kubernetes Deployment: kubectl apply
    note over Argo CD…
