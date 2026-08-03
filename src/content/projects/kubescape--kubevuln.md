---
repo: "kubescape/kubevuln"
name: "kubevuln"
description: "Kubevuln is an in-cluster component of the Kubescape security platform. It scans container images for vulnerabilities, using Grype as its engine."
readmeQualityOk: true
url: "https://github.com/kubescape/kubevuln"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["kubernetes", "kubescape", "vulnerability-detection", "kubescape-helm"]
stars: 26
forks: 36
openIssues: 18
closedIssues: 37
watchers: 0
contributors: 33
recentReleases: 0
createdAt: "2022-03-13T16:54:24Z"
lastCommitAt: "2026-08-03T06:44:30Z"
lastReleaseAt: "2022-06-01T10:50:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["matthyx", "slashben", "kooomix"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e271f0bc37c3f81263e0859f91316b5b3bf0effe751aa2de68d3dbcad099a14/kubescape/kubevuln"
---

# Kubevuln

The Kubevuln component is an in-cluster component of the Kubescape security platform.
It [scans container images for vulnerabilities](https://www.armosec.io/blog/code-repository-container-image-registry-scanning/?utm_source=github&utm_medium=repository), using Grype as its engine.

## Build Kubevuln
To build kubevuln with its dependencies run: `make`

## Configuration
1. Load config file using the `CONFIG` environment variable

   `export CONFIG=path/to/clusterData.json`

   <details><summary>example/clusterData.json</summary>

   ```json5
   {
       "gatewayWebsocketURL": "127.0.0.1:8001",
       "gatewayRestURL": "127.0.0.1:8002",
       "kubevulnURL": "127.0.0.1:8080",
       "kubescapeURL": "127.0.0.1:8080",
       "eventReceiverRestURL": "https://report.armo.cloud",
       "eventReceiverWebsocketURL": "wss://report.armo.cloud",
       "rootGatewayURL": "wss://ens.euprod1.cyberarmorsoft.com/v1/waitfornotification",
       "accountID": "*********************",
       "clusterName": "******"
      }
   ```
   </details>

2. Set the `PORT` environment variable to 8081
   `export PORT=8080`

## Environment Variables

Check out `scanner/environmentvariables.go`

## VS…
