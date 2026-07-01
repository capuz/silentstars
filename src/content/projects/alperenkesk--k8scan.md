---
repo: "alperenkesk/k8scan"
name: "k8scan"
description: "An advanced, read-only Kubernetes security scanner for identifying misconfigurations and vulnerabilities."
url: "https://github.com/alperenkesk/k8scan"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-26T09:06:43Z"
lastCommitAt: "2026-07-01T07:04:32Z"
lastReleaseAt: "2026-07-01T07:08:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 18
maintainers: ["alperenkesk"]
openGraphImageUrl: "https://opengraph.githubassets.com/413c1cb7c5f294f233f312dfed9ce75d8e72079c90976ebc29075d2d4c5763dc/alperenkesk/k8scan"
---

<h1 align="center">k8scan</h1>

</p>

  <b>Kubernetes Security Scanner</b>
</p>

  A fast, read-only Kubernetes security scanner written in Go. Detects misconfigurations, privilege escalation paths, exposed secrets, and container escape vectors — then correlates findings into <b>Capability Breaks</b> and <b>Compound Attack Paths</b> with validation-grade Proof-of-Concept commands.
</p>

---

## What it Finds

123+ checks across 8 categories:

| Category | Examples |
|---|---|
| **Container Security** | Privileged pods, dangerous capabilities (SYS_ADMIN, BPF), hostPID/IPC/Network, sensitive hostPath mounts, writable root filesystem |
| **RBAC** | Wildcard permissions, `pod/exec` access, `system:masters` binding, cross-namespace SA grants, cluster-admin to non-system subjects |
| **Secrets** | Hardcoded AWS keys, GitHub tokens, private keys in env vars or ConfigMaps, empty passwords, expired TLS certificates |
| **Network** | Exposed NodePorts, missing NetworkPolicies, permissive ingress/egress, cloud metadata API exposure, LoadBalancer without source ranges |
| **Control Plane** | Anonymous API server access, kubelet read-only port, etcd without auth/TLS, admission webhook…
