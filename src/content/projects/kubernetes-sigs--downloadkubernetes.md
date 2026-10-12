---
repo: "kubernetes-sigs/downloadkubernetes"
name: "downloadkubernetes"
description: "Download kubernetes binaries more easily"
readmeQualityOk: true
url: "https://github.com/kubernetes-sigs/downloadkubernetes"
homepage: "https://downloadkubernetes.com"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [42, 25]
topics: ["k8s-sig-release"]
stars: 127
forks: 31
openIssues: 2
closedIssues: 17
watchers: 8
contributors: 431
recentReleases: 0
createdAt: "2019-06-16T16:39:10Z"
lastCommitAt: "2026-10-12T11:15:36Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 48
maintainers: ["kubernetes-prow[bot]", "dependabot[bot]", "dipesh-rawat"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d6a8ffeb0c454d5cc07eb029eb61abef645df1d493757e0f0c76102fbd8e2e2/kubernetes-sigs/downloadkubernetes"
---

# Download Kubernetes

## Build locally

1. Run `go run ./cmd/update-index/main.go`
2. Build assets with `npm run build`
3. Open `dist/index.html` with a browser, from the command line: `open dist/index.html`

## Architecture

The published artifacts are static HTML/CSS/JavaScript files. They are updated offline by the `update-index` command and
then published to the web via [Netlify].

## Community, discussion, contribution, and support

Learn how to engage with the Kubernetes community on the [community page](http://kubernetes.io/community/).

You can reach the maintainers of this project at:

- [Slack](http://slack.k8s.io/)
- [Mailing List](https://groups.google.com/forum/#!forum/kubernetes-dev)

### Code of conduct

Participation in the Kubernetes community is governed by the [Kubernetes Code of Conduct](https://github.com/kubernetes-sigs/downloadkubernetes/blob/HEAD/code-of-conduct.md).

[owners]: https://git.k8s.io/community/contributors/guide/owners.md
[Creative Commons 4.0]: https://git.k8s.io/website/LICENSE
[Netlify]: https://netlify.com/
