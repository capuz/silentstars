---
repo: "Lillecarl/easykubenix"
name: "easykubenix"
description: "Like kubenix, but easier"
readmeQualityOk: true
url: "https://github.com/Lillecarl/easykubenix"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [57, 43]
stars: 32
forks: 5
openIssues: 13
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-13T14:24:52Z"
lastCommitAt: "2026-09-14T09:12:25Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 74
undervaluedScore: 46
maintainers: ["Lillecarl"]
openGraphImageUrl: "https://opengraph.githubassets.com/248085d4bad49fe7fd0071c80dfa835d6493923d69e6dffa880ca21a6ae243b7/Lillecarl/easykubenix"
---

# easykubenix

Note that a lot of this text is AI slop(because i write like a toddler), don't
judge the book by it's cover though!

`easykubenix` uses the NixOS module system to generate Kubernetes manifests. It
avoids generating Nix types for the entire Kubernetes API, resulting in faster
evaluations and a simpler user experience compared to alternatives.

Manifest validation is performed by a script that applies the generated
resources against an ephemeral `etcd` and `kube-apiserver` instance. This
approach uses the Kubernetes API server as the single source of truth for
validation.

## Usage
Define your resources using the NixOS module system. The top-level attribute
is `kubernetes`, followed by the resource `kind`, then the resource name.

### Try the demo
Evaluate the demo YAML and apply it to an ephemeral apiserver
```bash
nix run --file . validationScript
```
Check the generated YAML
```bash
cat $(nix build --print-out-paths --file . manifestYAMLFile)
```

### Modules API
```nix
{
  kubernetes.namespace.ConfigMap.my-awesome-configmap = {
    stringData."config.json" = builtins.toJSON { key = "value"; };
  };

  kubernetes.namespace.Deployment.my-app = {
    spec.replicas =…
