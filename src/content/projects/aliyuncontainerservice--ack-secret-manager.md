---
repo: "AliyunContainerService/ack-secret-manager"
name: "ack-secret-manager"
description: "ACK Secret Manager allows you to use external secret management systems (*e.g.*, Alibaba Cloud Secrets Manager) to securely add secrets in Kubernetes. "
readmeQualityOk: true
url: "https://github.com/AliyunContainerService/ack-secret-manager"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["secret-management", "kms"]
stars: 17
forks: 11
openIssues: 4
closedIssues: 4
watchers: 4
contributors: 18
recentReleases: 1
createdAt: "2020-05-08T11:27:14Z"
lastCommitAt: "2026-08-15T04:04:06Z"
lastReleaseAt: "2026-07-09T03:21:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 58
undervaluedScore: 42
maintainers: ["lijiuxing1", "DahuK"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d5185a1218b2b6e2b67d6e4bc351611d60fb3a5c187649cb370eddc6d0a65e/AliyunContainerService/ack-secret-manager"
---

# ACK Secret Manager

English | [中文简体](https://github.com/AliyunContainerService/ack-secret-manager/blob/HEAD/README-zh_CN.md)

[ack-secret-manager](https://github.com/AliyunContainerService/ack-secret-manager)   enables you to securely import credentials stored in [Alibaba Cloud KMS Secrets Manager](https://www.alibabacloud.com/help/en/key-management-service) or [Alibaba Cloud OOS Encryption Parameter ](https://www.alibabacloud.com/help/en/oos/getting-started/manage-encryption-parameters)  into your Kubernetes cluster as native Secret objects. This ensures automatic synchronization of encrypted data while allowing applications to safely consume secrets by mounting them in Pod configurations. It helps mitigate sensitive data exposure risks in the development and deployment stages of the supply chain, ensuring compliance with security best practices.

> **⚠️ Breaking Change (since v0.6.4)**: For security hardening, the default values of `enableCrossNamespaceSecretStore` and `enableCrossNamespaceAuthRef` were changed from `true` to `false`. After upgrading, cross-namespace references (ExternalSecret → SecretStore, SecretStore → ServiceAccount/AccessKey Secret) are rejected by…
