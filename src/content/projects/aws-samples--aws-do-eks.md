---
repo: "aws-samples/aws-do-eks"
name: "aws-do-eks"
description: "Create, List, Update, Delete Amazon EKS clusters. Deploy and manage software on EKS. Run distributed model training and inference examples."
url: "https://github.com/aws-samples/aws-do-eks"
homepage: "https://bit.ly/do-eks"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [42, 21]
topics: ["deployment", "distributed-training", "docker", "eks", "eksctl", "inference", "observability", "terraform", "do-framework"]
stars: 66
forks: 34
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2021-07-13T22:45:22Z"
lastCommitAt: "2026-06-23T23:28:53Z"
lastReleaseAt: "2023-05-19T17:22:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 48
maintainers: ["iankouls-aws", "dmvevents", "tucktuck9"]
openGraphImageUrl: "https://opengraph.githubassets.com/72b01e694c1ac8e8794d45b32f4a3cd1abb01c59cd036ae7f7fc4c8689332804/aws-samples/aws-do-eks"
---

# AWS do EKS (aws-do-eks) <br/> Create and Manage your Amazon EKS clusters using the [do-framework](https://bit.ly/do-framework)

<center><img src="aws-do-eks.png" width="80%"/> </br>

Fig. 1 - EKS cluster sample
</center>

## Overview
As described in the [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html), creating an EKS cluster can be done using [eksctl](https://eksctl.io/usage/creating-and-managing-clusters/), the [AWS console](https://console.aws.amazon.com/eks/home#/clusters), or the [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html). [Terraform](https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest) can also be used to create and manage your EKS infrastructure. Regardless of your choice, each of these tools has its specifics and requires learning.  
The [do-framework](https://bit.ly/do-framework) strives to simplify DevOps and MLOps tasks by automating complex operations into intuitive action scripts. For example, instead of running an `eksctl` command with several command line arguments to create an EKS cluster, [aws-do-eks](https://bit.ly/do-eks) provides an `eks-create.sh`…
