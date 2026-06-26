---
repo: "huggingface/hf-csi-driver"
name: "hf-csi-driver"
description: "CSI driver for mounting HuggingFace Buckets and Repos as FUSE filesystems"
url: "https://github.com/huggingface/hf-csi-driver"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 8
forks: 4
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 135
recentReleases: 10
createdAt: "2026-03-04T19:49:43Z"
lastCommitAt: "2026-06-26T06:47:25Z"
lastReleaseAt: "2026-04-24T17:44:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 58
maintainers: ["XciD", "christophe-rannou", "rtrompier"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d58b7a5eabd290b3052fc58c579d64487a8d487e40e6c2f62e031b9342ac47f/huggingface/hf-csi-driver"
---

# hf-csi-driver

Kubernetes CSI driver for mounting [Hugging Face Buckets](https://huggingface.co/docs/hub/storage-buckets) and model/dataset repos as FUSE volumes in pods.

Wraps [hf-mount](https://github.com/huggingface/hf-mount) (Rust FUSE filesystem) behind the CSI interface so kubelet can manage mount lifecycle automatically.

## How it works

```
Pod -> kubelet -> CSI NodePublishVolume -> mount pod (hf-mount-fuse) -> FUSE mount -> bind mount to target
                  CSI NodeUnpublishVolume -> unmount bind + delete mount pod
```

- **Pod-based mounting**: each FUSE mount runs in a dedicated Kubernetes pod that survives CSI driver restarts
- **Self-healing**: mount pods are automatically recreated from CRD state if they crash
- **HFMount CRD**: tracks mount state (args, workloads, targets) as the source of truth
- **Static provisioning**: users create PV/PVC pairs pointing to a bucket or repo
- **HF token**: passed via Kubernetes Secret through `nodePublishSecretRef`, refreshed live via `requiresRepublish`
- **Mount flags passthrough**: PV `mountOptions` are forwarded as `--flag` arguments to hf-mount-fuse
- **Graceful unmount (sidecar mode)**: the sidecar unpublish path…
