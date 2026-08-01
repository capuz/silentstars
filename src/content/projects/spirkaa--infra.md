---
repo: "spirkaa/infra"
name: "infra"
description: ":rocket: Персональный кластер Kubernetes. DevOps, GitOps, IaC вот это всё"
readmeQualityOk: true
url: "https://github.com/spirkaa/infra"
language: "HCL"
languages: ["HCL", "Jinja"]
languagePcts: [61, 21]
topics: ["kubernetes", "helm", "ansible", "packer", "proxmox", "terraform", "kubeadm", "k8s", "k8s-at-home", "vault"]
stars: 60
forks: 9
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 2
recentReleases: 0
createdAt: "2022-07-27T08:08:33Z"
lastCommitAt: "2026-08-01T05:36:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 41
maintainers: ["spirkaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/e836f188316f9378e93e9a41f5321f3b8d55b01e3b40b79e2596e0a7d3029e1a/spirkaa/infra"
---

# Infra (Home Kubernetes)

Конфигурация моего персонального кластера Kubernetes с использованием методологий [Infrastructure-as-Code](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac) и [GitOps](https://codefresh.io/learn/gitops/).

* Предыдущая версия на основе Docker внутри LXC, без k8s - [spirkaa/ansible-homelab](https://github.com/spirkaa/ansible-homelab).
* Для вдохновения можно посмотреть, как делают другие - [k8s-at-home](https://github.com/topics/k8s-at-home).

## Обзор

Основные компоненты разделены по директориям:

* [ansible](https://github.com/spirkaa/infra/blob/HEAD/ansible) - роли для настройки шаблонов ВМ, первоначального запуска кластера c помощью kubeadm, обновления секретов Vault.
* [сluster](https://github.com/spirkaa/infra/blob/HEAD/cluster) - конфигурация приложений в виде чартов Helm, kustomize и простых манифестов k8s, разворачиваемых с помощью ArgoCD.
* [packer](https://github.com/spirkaa/infra/blob/HEAD/packer) - создание шаблонов ВМ.
* [terraform](https://github.com/spirkaa/infra/blob/HEAD/terraform) - запуск, настройка и управление жизненным циклом ВМ в кластере.

### Скриншоты

| [][screenshot-01] | [][screenshot-02] |
|…
