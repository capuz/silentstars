---
repo: "Lillecarl/nixkube"
name: "nixkube"
description: "CSI driver for Nixxing Kubernetes, see develop branch!"
readmeQualityOk: true
url: "https://github.com/Lillecarl/nixkube"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [63, 36]
topics: ["csi", "kr8s", "kubernetes", "nix"]
stars: 122
forks: 4
openIssues: 28
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-31T19:30:58Z"
lastCommitAt: "2026-09-19T02:45:30Z"
lastReleaseAt: "2026-02-19T05:49:21Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 88
undervaluedScore: 40
maintainers: ["Lillecarl"]
openGraphImageUrl: "https://opengraph.githubassets.com/983ba73490c9f47c27eefdf2f430b4dd999aaddfe1f36c78acb7cae4fbed2b53/Lillecarl/nixkube"
---

# nixkube / nix + kube / nix-csi / nix-nri

Mount /nix into Kubernetes pods using the CSI ephemeral volumes or NRI(Node Resource Interface). Volumes
share lifetime with Pods and are embedded into the Podspec.

## Deploying nixkube

Stick your pubkeys in ./keys and they will be imported into the module system
then run the following command and you'll have nixkube deployed.
```bash
nix run --file . kubenixEval.deploymentScript -- --yes --prune
```

If you'd rather mangle YAML yourself you can use
```bash
nix build --file . easykubenix.manifestYAMLFile
```
and stuff the result into Kustomize, a blender or your Kubernetes cluster

## Deploying workloads

nixkube supports two methods for injecting Nix stores into pods:

### CSI Ephemeral Volumes (Explicit)

Request Nix stores explicitly via CSI volumeAttributes. Specify one or more:
- `storePath` - Direct nix store path (highest priority)
- `flakeRef` - Flake reference to build
- `nixExpr` - Nix expression to evaluate and build

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-csi
spec:
  containers:
  - name: hello
    image: nixos/nix:latest
    volumeMounts:
    - name: nix
      mountPath: /nix
  volumes:
  - name: nix…
