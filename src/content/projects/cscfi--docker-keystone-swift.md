---
repo: "CSCfi/docker-keystone-swift"
name: "docker-keystone-swift"
description: "  A docker image running OpenStack Keystone and OpenStack Swift object storage for integration tests."
readmeQualityOk: true
url: "https://github.com/CSCfi/docker-keystone-swift"
language: "Python"
languages: ["Python", "Dockerfile"]
languagePcts: [60, 30]
stars: 5
forks: 2
openIssues: 2
closedIssues: 2
watchers: 3
contributors: 38
recentReleases: 0
createdAt: "2022-02-17T13:29:39Z"
lastCommitAt: "2026-11-06T02:05:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 74
maintainers: ["emm1R"]
openGraphImageUrl: "https://opengraph.githubassets.com/243c7a5928d3902be099a03786fc3cc434682f7fe3574715bb060e1589ba914d/CSCfi/docker-keystone-swift"
---

# Openstack swift and keystone container image

This container makes it easy to run *integration tests* against OpenStack Keystone and OpenStack Swift object storage.
It is not suitable for production.

The container starts both a swift and a keystone service so that integration tests can run against a single Docker container. The project's [Dockerfile](https://github.com/CSCfi/docker-keystone-swift/blob/HEAD/Dockerfile) is compatible with both amd64 and arm64 as BuildKit detects the target architecture automatically.

The following commands are available in the resulting container:
- openstack
- keystone
- swift
- bash

This image also comes with S3 API enabled. Swift and S3 have some compatibility issues, which are [described here](https://docs.openstack.org/swift/latest/s3_compat.html).

This project was created as a combination of other existing approaches, none of which served our needs:
- [Dockerfile from swift](https://github.com/openstack/swift)
- [dockerswiftaio/docker-swift](https://github.com/NVIDIA/docker-swift)
- [jeantil/openstack-swift-keystone-docker](https://github.com/jeantil/openstack-swift-keystone-docker)

## 🏃 Build and Run

### Prerequisites

- Docker
-…
