---
repo: "scionproto-contrib/jpan"
name: "jpan"
description: "SCION Java Client"
readmeQualityOk: true
url: "https://github.com/scionproto-contrib/jpan"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["scion"]
stars: 5
forks: 3
openIssues: 6
closedIssues: 27
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-08-14T08:18:25Z"
lastCommitAt: "2026-09-18T14:03:36Z"
lastReleaseAt: "2025-04-02T14:44:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 58
maintainers: ["tzaeschke"]
openGraphImageUrl: "https://opengraph.githubassets.com/714d191b94e9eab7c601479065c26e656bc42ca925d1ed622a1bcfcab40e9052/scionproto-contrib/jpan"
---

# JPAN - Java API for path aware networking with SCION

This library is 100% pure Java network stack for using [SCION](https://scion.org). It currently provides 
support for UDP and [SCMP](https://docs.scion.org/en/latest/protocols/scmp.html). More information about SCION can be found 
in [Getting Started](https://github.com/scionproto-contrib/jpan/blob/HEAD/SCION_GETTING_STARTED.md) and more generally [here](https://docs.scion.org). 
JPAN provides functionality similar to 
[snet (Go)](https://pkg.go.dev/github.com/scionproto/scion/pkg/snet),
[PAN (Go)](https://pkg.go.dev/github.com/netsec-ethz/scion-apps/pkg/pan) and 
[scion-rs (Rust)](https://github.com/MystenLabs/scion-rs). 

The following artifact contains the complete SCION Java implementation:
```xml 
<dependency>
    <groupId>org.scion</groupId>
    <artifactId>jpan</artifactId>
    <version>0.7.0</version>
</dependency>
```

### Feature summary
- 100% Java
- UDP over SCION via `ScionDatagramChannel` or `ScionDatagramSocket`
- [SCMP](https://docs.scion.org/en/latest/protocols/scmp.html) (ICMP for SCION)
- Works stand-alone or with a local SCION daemon (without dispatcher, see below) 
- NAT support, see…
