---
repo: "coder/coder-logstream-kube"
name: "coder-logstream-kube"
description: "Stream Kubernetes Pod events to the Coder startup logs"
readmeQualityOk: true
url: "https://github.com/coder/coder-logstream-kube"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 28
forks: 9
openIssues: 2
closedIssues: 34
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2023-05-19T18:26:21Z"
lastCommitAt: "2026-07-17T05:59:12Z"
lastReleaseAt: "2026-02-27T14:32:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["dependabot[bot]", "kacpersaw", "rowansmithau"]
openGraphImageUrl: "https://opengraph.githubassets.com/125ef266ce04d8dd62c0f4fc2ade048b4918c96e9e3f7c07ba7e343bbc16c101/coder/coder-logstream-kube"
---

<h1>coder-logstream-kube</h1>
  <p>Stream Kubernetes Pod events to Coder startup logs</p>

  [Installation](#installation) | [Configuration](#configuration) | [Development](#development)

</div>

---

- Easily determine the reason for a pod provision failure, or why a pod is stuck pending
- Visibility into when pods are OOMKilled or evicted
- Filter by namespace, field selector, and label selector to reduce Kubernetes API load

## Installation

Deploy via Helm chart:

```console
helm repo add coder-logstream-kube https://helm.coder.com/logstream-kube
helm install coder-logstream-kube coder-logstream-kube/coder-logstream-kube \
    --namespace coder \
    --set url=<your-coder-url>
```

For additional customization (image, pull secrets, annotations, etc.), see the [values.yaml](https://github.com/coder/coder-logstream-kube/blob/HEAD/helm/values.yaml) file.

## Configuration

### Multi-Namespace Support

By default, coder-logstream-kube will watch all namespaces in the cluster. To limit which namespaces are monitored, you can specify them in the [values.yaml](https://github.com/coder/coder-logstream-kube/blob/HEAD/helm/values.yaml) file:

```yaml
# Watch specific namespaces only…
