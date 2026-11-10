---
repo: "aws/amazon-cloudwatch-agent-operator"
name: "amazon-cloudwatch-agent-operator"
description: "The Amazon CloudWatch Agent Operator is software developed to manage the CloudWatch Agent on kubernetes."
readmeQualityOk: true
url: "https://github.com/aws/amazon-cloudwatch-agent-operator"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 32
forks: 44
openIssues: 11
closedIssues: 6
watchers: 7
contributors: 161
recentReleases: 0
createdAt: "2023-08-01T18:06:09Z"
lastCommitAt: "2026-11-10T14:49:32Z"
lastReleaseAt: "2025-09-03T12:51:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 81
undervaluedScore: 56
maintainers: ["EduVencovsky", "movence", "bhavya76"]
openGraphImageUrl: "https://opengraph.githubassets.com/5764d46cdade3a8fddd6e911080a0800c874ba6e534666159ea1aaa6cb35da2b/aws/amazon-cloudwatch-agent-operator"
---

# Amazon CloudWatch Agent Operator
The Amazon CloudWatch Agent Operator is software developed to manage the [CloudWatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) on kubernetes.

Supported Languages:
- Java
- Python
- .NET
- NodeJS

This repo is based off of the [OpenTelemetry Operator](https://github.com/open-telemetry/opentelemetry-operator)

## Build and Deployment
- Image can be built using `make container`
- Deploy kubernetes objects to your cluster `make deploy`

## Pre requisites
1. Have an existing kubernetes cluster, such as [minikube](https://minikube.sigs.k8s.io/docs/start/)

2. Install cert-manager on your cluster
```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml
```

## Getting started
1. Set a shortcut for kubectl for the operator namespace

```
kubectl config set-context --current --namespace=amazon-cloudwatch
```

2. Look at all resources created

```
kubectl get all
```

3. Look at the manager pod logs to ensure the manager is functioning and waiting for workers

```
kubectl logs amazon-cloudwatch-agent-operator-controller-manager-66f67f47f78
```…
