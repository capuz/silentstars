---
repo: "dcotecnologia/kubescope"
name: "kubescope"
description: "IDE for Kubernetes workloads on Amazon EKS, Google GKE and Azure AKS, built with Python and Qt."
readmeQualityOk: true
url: "https://github.com/dcotecnologia/kubescope"
homepage: "https://kubescope.dcotecnologia.com/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["amazon-eks", "cluster-management", "desktop-app", "devops", "kubernetes", "kubernetes-dashboard", "pyside6", "python", "qt", "aks"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-08T07:42:33Z"
lastCommitAt: "2026-10-26T21:00:41Z"
lastReleaseAt: "2026-10-17T12:30:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["danilogco"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df9ea7957b88669dd347e5702020c4fb4d5a2445b6a57bc2a3c34755a4f2c8c/dcotecnologia/kubescope"
fundingLinks: ["GITHUB:https://github.com/danilogco", "BUY_ME_A_COFFEE:https://buymeacoffee.com/danilogco"]
---

# KubeScope

Desktop IDE for Kubernetes, including Amazon EKS, Google GKE and
Azure AKS clusters available
through the local Kubernetes configuration. It talks to the cluster with the
official Kubernetes Python client, so it needs no `kubectl`. It is read-only by
default: it lists and inspects resources. An optional **write mode** (off until
you turn it on in Settings) adds a few actions to the right-click menu: delete or
evict a Pod, scale or restart a Deployment (each asks for confirmation), and the
complete `kubectl exec` command to open a shell in a Pod and the `kubectl
port-forward` command of a Service, a Pod or a StatefulSet, to run in your own terminal.

## Install

The easiest way, and the one we recommend, is the install script. It finds the
latest release, picks the right package for your system, checks it against the
sha256 that GitHub publishes for it, and installs it. Run the same command again to
update.

**Linux** (the `.deb` on Debian and Ubuntu, the AppImage elsewhere):

```bash
curl -fsSL https://raw.githubusercontent.com/dcotecnologia/kubescope/main/install.sh | sh
```

**Windows** (PowerShell, for your user, no administrator needed):

```powershell
irm…
