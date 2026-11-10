---
repo: "nixidae/nixkube"
name: "nixkube"
description: "CSI driver for Nixxing Kubernetes, see develop branch!"
readmeQualityOk: true
url: "https://github.com/nixidae/nixkube"
homepage: "https://nixidae.github.io/nixkube/"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [68, 31]
topics: ["csi", "kr8s", "kubernetes", "nix", "csi-driver", "nixos", "persistent-volumes", "python", "storage"]
stars: 127
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-31T19:30:58Z"
lastCommitAt: "2026-11-10T14:43:44Z"
lastReleaseAt: "2026-02-19T05:49:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Lillecarl"]
openGraphImageUrl: "https://opengraph.githubassets.com/be44d82942a28924ee128f645401a368fa6d3a194d71f4d2b1ce94346b8aebd3/nixidae/nixkube"
---

# nixkube / nix + kube / nix-csi / nix-nri

Mount /nix into Kubernetes pods using the CSI ephemeral volumes or NRI(Node Resource Interface). Volumes
share lifetime with Pods and are embedded into the Podspec.

## Deploying nixkube

Stick your pubkeys in ./keys and they will be imported into the module system
then run the following command and you'll have nixkube deployed.
```bash
nix run --file . internal.kubenixApply.deploymentScript -- --yes --prune
```

If you'd rather mangle YAML yourself you can use
```bash
nix build --file . internal.kubenixApply.manifestYAMLFile
```
and stuff the result into Kustomize, a blender or your Kubernetes cluster

### Which commit to deploy

Deploy the `tested` branch, or a release. CI moves `tested` to a commit of
`main` once every test of it passed, and by then its images are on ghcr.io.
`main` itself can name an image that CI has not pushed yet.

The manifest names each image by content: the init image by a tag from its
store hash, and `scratch` by digest. A release pins the init image by
digest too. To run an image this checkout did not build, set
`nixkube.images.nix` (for example to `ghcr.io/nixidae/nixkube/nix:main`)
and…
