---
repo: "kix-run/kix"
name: "kix"
description: "Kix is a Kubernetes compiler."
readmeQualityOk: true
url: "https://github.com/kix-run/kix"
homepage: "https://kix.run"
language: "Nix"
languages: ["Nix", "Rust"]
languagePcts: [51, 42]
stars: 7
forks: 0
openIssues: 17
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-09T08:17:58Z"
lastCommitAt: "2026-11-26T15:23:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 46
maintainers: ["adamcharnock"]
openGraphImageUrl: "https://opengraph.githubassets.com/8314b3b04d85aabc1d2f9be5ec61ca54378367d382afcdbdb961682ea734c1c4/kix-run/kix"
discussionCount: 0
---

# Kix

Kix is a Kubernetes compiler. You define packages and clusters in Nix, check the whole cluster locally before touching Kubernetes, preview changes against the live cluster, and deploy in dependency order.

The output is standard Kubernetes manifests. When one resource references another, Kix records the dependency and uses that graph to order deploys, generate network policies when enabled, run policy checks, and show what a change affects.

Here is a minimal `cluster.nix` that runs one package on a local `kind` cluster:

```nix
{ kix, packages }:

kix.buildCluster {
  modules = [
    kix.flavors.kind

    {
      namespaces = {
        tutorial-04 = { };
      };

      instances.tutorial-04 = {
        hello-world = {
          package = packages.echo-server;
          config = {
            message = "Hello from my first Kix cluster!";
          };
        };
      };
    }
  ];
}
```

## Install

Install Kix on Linux (`x86_64-linux`, `aarch64-linux`) or Apple silicon macOS (`aarch64-darwin`):

```sh
curl -fsSL https://kix.run/install | sh
```
