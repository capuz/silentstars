---
repo: "h3mmy/bloopySphere"
name: "bloopySphere"
description: "My home cluster. "
readmeQualityOk: true
url: "https://github.com/h3mmy/bloopySphere"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [56, 30]
topics: ["gitops", "k8s-at-home", "kubernetes"]
stars: 63
forks: 6
openIssues: 22
closedIssues: 92
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-10-27T19:05:13Z"
lastCommitAt: "2026-11-09T00:52:37Z"
lastReleaseAt: "2023-06-11T01:53:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 50
maintainers: ["renovate[bot]", "h3mmy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/421941726/4f7b93d1-bcad-447d-80ec-25c0c92dff58"
fundingLinks: ["ISSUEHUNT:https://issuehunt.io/r/h3mmy", "CUSTOM:https://www.buymeacoffee.com/h3mmy"]
discussionCount: 2
---

#

##

### A home Kubernetes cluster :sailboat

_... managed with Flux and Renovate_ :robot:

---

## :book:&nbsp; Overview

This is my home Kubernetes cluster. [Flux](https://github.com/fluxcd/flux2) watches this Git repository and makes the changes to my cluster based on the manifests in the [cluster](https://github.com/h3mmy/bloopySphere/blob/HEAD/cluster/) directory.
 [Renovate](https://github.com/renovatebot/renovate) also watches this Git repository and creates pull requests when it finds updates to Docker images, Helm charts, and other dependencies.

~~For more information, head on over to my [docs](https://h3mmy.github.io/bloopySphere/).~~
I have nested README files that should be visible as you browse the repo.

My [Gitlab](https://gitlab.com/h3mmy) has more of my projects

## Useful Snippets

List of container images in use cluster-wide

`kubectl get pods --all-namespaces -o go-template --template="{{range .items}}{{range .spec.containers}}{{.image}} {{end}}{{end}}" | sed 's/ /\n/g' | uniq > ./container_images_in_use.txt`

List of container images in use that have arm64 images available (grep -q --> grep -vq for inversion)

`kubectl get po -A -o yaml | grep 'image:' |…
