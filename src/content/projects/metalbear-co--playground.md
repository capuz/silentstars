---
repo: "metalbear-co/playground"
name: "playground"
description: "Playground for mirrord - services written in different languages to try out mirrord with"
readmeQualityOk: true
url: "https://github.com/metalbear-co/playground"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
stars: 14
forks: 12
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 27
recentReleases: 0
createdAt: "2023-03-13T06:41:01Z"
lastCommitAt: "2026-08-27T14:15:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 74
maintainers: ["aris-cub", "t4lz", "adnazujolakisic"]
openGraphImageUrl: "https://opengraph.githubassets.com/76e173ab805a4260f8e38bb30b4f4c123c61cd9db6d84dfe8e7d293a8a040982/metalbear-co/playground"
---

# MetalBear Playground

This repository contains different microservices and Kubernetes manifests to deploy them.
Each microservice has it's own `app.yaml` that should contain all of it's dependencies (besides other microservices).

To deploy on GKE, run:
```
kustomize build --enable-helm overlays/gke | kubectl apply -f -
```

## SQS

To enable SQS:

1. Install mirrord Operator in cluster (with SQS splitting enabled)
2. `aws iam create-user --user-name SQSPlayground`
3. `aws iam create-access-key --user-name SQSPlayground` - save data to file
4. `aws sqs create-queue --queue-name IpCount` - take QueueUrl to be used in deployment.yaml
5. You need to edit `ip-visit-sqs-consumer/policy.json` and set REGION and ACCOUNT_ID
6. `aws iam create-policy --policy-name SQSPlaygroundPolicy --policy-document file://ip-visit-sqs-consumer/policy.json`
7. `aws iam attach-user-policy --policy-arn arn:aws:iam::526936346962:policy/SQSPlaygroundPolicy --user-name SQSPlayground`
8. Set Region in app.yaml in `ip-visit-counter` and `ip-visit-sqs-consumer`

## Proto

To build proto

```
cd proto
protoc --go_out=../protogen --go_opt=paths=source_relative \
        --go-grpc_out=../protogen…
