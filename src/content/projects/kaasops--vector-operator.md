---
repo: "kaasops/vector-operator"
name: "vector-operator"
description: "Kubernetes Operator for deploy and configure Vector"
url: "https://github.com/kaasops/vector-operator"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [73, 25]
stars: 174
forks: 29
openIssues: 16
closedIssues: 31
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2022-10-06T11:47:40Z"
lastCommitAt: "2026-07-03T12:38:50Z"
lastReleaseAt: "2022-12-15T14:32:20Z"
status: "thriving"
tags: []
healthScore: 68
undervaluedScore: 28
maintainers: ["aa1ex", "gecube", "stigglor"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/546631396/ed563206-e1ab-420a-a279-18d6c6b69676"
---

</a>
  <tr>
  </a>
</p>

# Vector Operator

## Description
The operator deploys and configures a vector agent daemonset on every node to collect container and application logs from the node file system.

Connect us in Telegram - https://t.me/+Y0PzGa1d5DFiYThi

## Features

- [x] Building vector config from namespaced custom resources (kind: VectorPipeline)
- [x] Configuration validation
- [x] Full support of vector config options
- [x] Namespace isolation
- [ ] Vector config optimization
- [x] Vector aggregator support

[RoadMap](https://github.com/orgs/kaasops/projects/1)

## Documentation
- Quick start [doc](https://github.com/kaasops/vector-operator/blob/main/docs/quick-start.md)
- Design [doc](https://github.com/kaasops/vector-operator/blob/main/docs/design.md)
- Specification [doc](https://github.com/kaasops/vector-operator/blob/main/docs/specification.md)
- Secure credentials [doc](https://github.com/kaasops/vector-operator/blob/main/docs/secure-credential.md)
- Collect logs from file [doc](https://github.com/kaasops/vector-operator/blob/main/docs/logs-from-file.md)
- Collect journald services logs…
