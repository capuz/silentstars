---
repo: "netobserv/netobserv-ebpf-agent"
name: "netobserv-ebpf-agent"
description: "Network Observability eBPF Agent"
readmeQualityOk: true
url: "https://github.com/netobserv/netobserv-ebpf-agent"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["ebpf", "kubernetes", "network-observability", "openshift"]
stars: 212
forks: 63
openIssues: 7
closedIssues: 21
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2022-03-07T09:55:49Z"
lastCommitAt: "2026-11-04T11:28:24Z"
lastReleaseAt: "2023-06-05T08:29:33Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 41
maintainers: ["dependabot[bot]", "jotak", "jpinsonneau"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a69f49a28161f28e30ad71e59027a67dd6c3b9a95b589721702478735a2b13/netobserv/netobserv-ebpf-agent"
---

# Network Observability eBPF Agent

The Network Observability eBPF Agent allows collecting and aggregating all the ingress and
egress flows on a Linux host (required a Kernel 5.8+ with eBPF enabled).

* [How to build](#how-to-build)
* [How to configure](#how-to-configure)
* [How to run](#how-to-run)
* [Development receipts](#development-receipts)
* [Known issues](#known-issues)
* [Frequently-asked questions](#frequently-asked-questions)
* [Troubleshooting](#troubleshooting)

## How to build

To build the agent image and push it to your Docker / Quay repository, run:
```bash
# compile project
make build

# build the default image (quay.io/netobserv/netobserv-ebpf-agent:main):
make image-build

# push the default image (quay.io/netobserv/netobserv-ebpf-agent:main):
make image-push

# build and push on your own quay.io account (quay.io/myuser/netobserv-ebpf-agent:dev):
IMAGE_ORG=myuser VERSION=dev make images

# build and push on a different registry
IMAGE=dockerhub.io/myuser/plugin:tag make images
```

## How to configure

The eBPF Agent is configured by means of environment variables. Check the
[configuration…
