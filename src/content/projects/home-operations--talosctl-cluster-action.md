---
repo: "home-operations/talosctl-cluster-action"
name: "talosctl-cluster-action"
description: "GitHub Action that provisions an ephemeral Talos cluster (QEMU or Docker) from a declarative TalosCluster document"
readmeQualityOk: true
url: "https://github.com/home-operations/talosctl-cluster-action"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["github-actions", "talos"]
stars: 10
forks: 1
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-20T13:51:07Z"
lastCommitAt: "2026-08-28T12:23:05Z"
lastReleaseAt: "2026-07-31T17:52:10Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 50
maintainers: ["sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/9070257a116fa767f1f45df730fd7b889d7f81540ff4967eeb69e9f24e72291b/home-operations/talosctl-cluster-action"
---

# talosctl-cluster-action

Provision an ephemeral [Talos Linux](https://talos.dev) cluster on a CI runner from a
declarative config file instead of a wall of flags. Wraps `talosctl cluster create`,
with either the QEMU or the Docker provisioner.

```yaml
- uses: home-operations/talosctl-cluster-action@v1
  with:
    config: test/e2e/cluster.yaml
```

```yaml
# test/e2e/cluster.yaml
apiVersion: v1alpha1
kind: TalosCluster
metadata:
  name: e2e
spec:
  controlplanes:
    count: 1
  workers:
    count: 2
    cpus: 2
    memory: 4GiB
  network:
    cidr: 10.5.0.0/24
  config-patches:
    workers:
      - machine:
          sysctls:
            net.ipv4.ip_forward: "1"
```

Subsequent steps get `KUBECONFIG` and `TALOSCONFIG` in the environment, so `kubectl`
and `talosctl` just work. The cluster is destroyed in the post step.

## Why

Real per-node kernels, real `talosctl upgrade`, real Pod Security enforcement: things
kind cannot give you. The setup is fiddly in the same way every time (QEMU packages,
swap headroom, an Image Factory schematic, sudo, a chown afterwards, a socket path
length limit that is not obvious until it bites), so it lives here once.

## Providers

`spec.provider`…
