---
repo: "saiyam1814/kiac"
name: "kiac"
description: "Local Kubernetes on Apple's container framework - every node is its own lightweight VM. Metrics, storage, and LoadBalancer included."
readmeQualityOk: true
url: "https://github.com/saiyam1814/kiac"
homepage: "https://saiyam1814.github.io/kiac/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["apple-silicon", "containers", "kubernetes", "macos"]
stars: 373
forks: 24
openIssues: 4
closedIssues: 17
watchers: 3
contributors: 6
recentReleases: 9
createdAt: "2026-06-10T18:10:36Z"
lastCommitAt: "2026-09-28T10:06:46Z"
lastReleaseAt: "2026-08-08T15:53:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 93
undervaluedScore: 30
maintainers: ["saiyam1814", "yashrajshuklaaa", "timvahlbrock"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e79193264aef84ae541ed73a0e1f278d4d0a4e9ee45607ea9619c63bd4e4984/saiyam1814/kiac"
---

</p>

  <b>Local Kubernetes clusters where every node is its own lightweight VM.</b><br>
  Native on Apple silicon: fast everyday clusters on <a href="https://github.com/apple/container">apple/container</a>, plus opt-in real Apple GPU clusters through krunkit and Venus. No Docker Desktop. No Lima. No QEMU.
</p>

</p>

  kiac is listed in the <a href="https://landscape.cncf.io/?search=kiac&amp;item=platform--certified-kubernetes-installer--kiac">CNCF Cloud Native Landscape</a> under <b>Platform / Certified Kubernetes - Installer</b>.
</p>

</p>

```bash
brew install --cask saiyam1814/tap/kiac
kiac create cluster --workers 2
```

---

## Why this matters

Running a local Kubernetes cluster on a Mac has always meant a quiet compromise. Your "nodes" were containers sharing one kernel inside one hidden Linux VM, all pretending to be separate machines. It worked until you tried to test a node failure, or `kubectl top`, or a `type: LoadBalancer` service, and the illusion cracked.

A Kubernetes node wants to *be* a machine: its own kernel, its own kubelet, its own cgroups, its own IP that can come and go on its own. **kiac gives every node exactly that** by booting each one as its own…
