---
repo: "SlashNephy/infrastructure"
name: "infrastructure"
description: "Infrastructure as Code that are running at my home!"
readmeQualityOk: true
url: "https://github.com/SlashNephy/infrastructure"
language: "HCL"
languages: ["HCL", "Go"]
languagePcts: [43, 37]
topics: ["kubernetes", "terraform", "cloudflare", "infrastructure-as-code", "gitops"]
stars: 10
forks: 1
openIssues: 4
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-12-26T07:55:30Z"
lastCommitAt: "2026-07-14T05:55:40Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 70
maintainers: ["StarryBlueSky-bot", "renovate[bot]", "SlashNephy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a9554fdc4804d81f9e20ac97cb9132cc953128f91ae278a7fecb3bd4f2299e9/SlashNephy/infrastructure"
---

# infrastructure

- k8s
  - [/slashnephy/k8s](https://scrapbox.io/slashnephy/k8s)
- terraform
  - Managed with Terraform Cloud

## Setup k8s Cluster

Ensure the contents of `1password-credentials.json` are Base64-encoded before applying the manifest.

```console
$ kubectl kustomize --enable-helm k8s/init/${ENV_NAME} | kubectl apply -f -
```

## Useful Commands

- Generate long-lived bearer token for kubernetes-dashboard

```console
$ kubectl create token admin-user -n kubernetes-dashboard --duration=4294967296s
```

- Obtain Argo CD initial password

```console
$ kubectl get secret argocd-initial-admin-secret \
    -n argo-cd \
    -o jsonpath="{.data.password}" | base64 -d; echo
```

- Lint manifest files

```console
$ pnpm eslint
```
