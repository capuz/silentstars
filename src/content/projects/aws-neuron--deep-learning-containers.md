---
repo: "aws-neuron/deep-learning-containers"
name: "deep-learning-containers"
description: "AWS Neuron Deep Learning Containers (DLCs) are a set of Docker images for training and serving models on AWS Trainium and Inferentia instances using AWS Neuron SDK."
readmeQualityOk: true
url: "https://github.com/aws-neuron/deep-learning-containers"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 21]
stars: 26
forks: 15
openIssues: 1
closedIssues: 2
watchers: 28
contributors: 20
recentReleases: 0
createdAt: "2023-12-22T20:04:35Z"
lastCommitAt: "2026-11-12T05:36:54Z"
lastReleaseAt: "2024-12-27T23:23:47Z"
status: "thriving"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 81
undervaluedScore: 39
maintainers: ["neuron-containers-ci", "cdbhatia-aws", "aws-ruhip"]
openGraphImageUrl: "https://opengraph.githubassets.com/148838681d3df1efc435221e95962f2c144a07716dd2799343527a62b7a3fed4/aws-neuron/deep-learning-containers"
---

## AWS Neuron Deep Learning Containers

AWS Neuron Deep Learning Containers (DLCs) are a set of Docker images for training and serving models on AWS Trainium and Inferentia instances using AWS Neuron SDK. For more documentation, please refer to [Neuron Containers Overview](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/containers/index.html).

## Building and Customizing Dockerfiles

### Prerequisites

To build the Dockerfiles successfully, ensure the files under the `common/` directory is in the same parent folder as the Dockerfile. The common directory contains shared scripts and configuration files required by all container builds.

### Building a Container

To build a specific container, navigate to the repository root and use Docker build with the appropriate context:

```bash
# Example: Build PyTorch 2.7.0 inference container
docker build -f pytorch/inference/2.7.0/Dockerfile.neuronx -t my-neuron-container .
```

### Customizing Containers

You can customize the containers by:

1. **Modifying existing Dockerfiles**: Edit the Dockerfile to add additional packages or configurations
2. **Creating derived images**: Use the pre-built containers as base images for your…
