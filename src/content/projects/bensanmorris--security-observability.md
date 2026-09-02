---
repo: "bensanmorris/security_observability"
name: "security_observability"
description: "Safe and low overhead (eBPF-based) real-time observability of your certificate estate including certificate, process and k8s context info"
readmeQualityOk: true
url: "https://github.com/bensanmorris/security_observability"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 15
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T10:37:33Z"
lastCommitAt: "2026-09-02T08:03:31Z"
lastReleaseAt: "2026-03-23T15:57:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["bensanmorris"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb21eef0fe3874b327e7341ff4a2bb6aaef852383d202364017009bae8352302/bensanmorris/security_observability"
---

</p>

# CertSight - Realtime certificate monitoring via eBPF

CertSight provides real-time certificate observability for Linux via eBPF without private keys, CA impersonation, or application changes in **cloud native, bare metal and openshift / k8s environments.**

**Live AWS demo:** [Dashboard](http://certsight-demo.com:3000/d/certsight-v1) · [Test console (includes **blast radius and missing intermediate explorers**)](http://certsight-demo.com:8090)

---

## The problem

Certificate expiry causes outages that are entirely preventable. At scale with hundreds of machines and thousands of certificates tracking what's actually running in your estate is hard, especially when certificates are loaded dynamically, passed in memory between TLS stack components, or processed by runtimes that never call system crypto libraries.

Furthermore on 15th March 2026 SSL certificate validity dropped to 200 days and in 2029 it will drop to just 47 days strengthening the case for always-on low overhead real time certificate monitoring.

## How CertSight differs from existing approaches

| Approach | What it sees | What it misses |
|---|---|---|
| Network scanner | Certs on open ports | In-memory…
