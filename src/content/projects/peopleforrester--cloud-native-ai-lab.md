---
repo: "peopleforrester/cloud-native-ai-lab"
name: "cloud-native-ai-lab"
description: "Seven hands-on labs for running AI workloads on Kubernetes: GPU scheduling, distributed training, model serving, and agents. Runs on a local kind cluster, no GPU required. Companion to a KubeCon EU 2026 talk."
readmeQualityOk: true
url: "https://github.com/peopleforrester/cloud-native-ai-lab"
homepage: "https://michaelrishiforrester.com"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [70, 30]
topics: ["ai-infrastructure", "cloud-native", "dra", "gpu-scheduling", "jobset", "kserve", "kubecon", "kubernetes", "kueue", "mcp"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-03-21T16:17:42Z"
lastCommitAt: "2026-10-16T06:46:43Z"
lastReleaseAt: "2026-08-07T14:16:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 39
maintainers: ["peopleforrester"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3a7b90ce512337ca96b3edc32a731772270e87b23e50261f0c2af2a2d19f2/peopleforrester/cloud-native-ai-lab"
---

# Cloud Native AI Lab

Give a Kubernetes engineer a laptop and seven labs, and watch them schedule GPUs,
coordinate distributed training, and serve a model behind an autoscaling API.
No GPU required, no cloud bill.

Every lab runs on a local `kind` cluster. If you know pods, deployments, and
services, you can start at Lab 00 today. No machine learning background needed.

| What you get | |
|---|---|
| **7 progressive labs** | Kueue, DRA, JobSet, KServe, Gateway API Inference, kagent and MCP |
| **Runs on a laptop** | 3-node `kind` cluster, about 8GB RAM, no cloud spend |
| **74 automated tests** | version pins, links, manifests, and security context are CI-gated ([tests/](https://github.com/peopleforrester/cloud-native-ai-lab/blob/HEAD/tests/)) |
| **11 project one-pagers** | each carrying its own verification date ([docs/projects/](https://github.com/peopleforrester/cloud-native-ai-lab/blob/HEAD/docs/projects/)) |

Built as the companion resource to a Cloud Native University talk at
[KubeCon + CloudNativeCon Europe 2026](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/),
delivered 24 March 2026 at the RAI in Amsterdam, and maintained since as a
standing community…
