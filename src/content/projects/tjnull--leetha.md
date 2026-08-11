---
repo: "tjnull/leetha"
name: "leetha"
description: "Passive network fingerprinting and analysis engine"
readmeQualityOk: true
url: "https://github.com/tjnull/leetha"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 127
forks: 13
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-03T05:13:11Z"
lastCommitAt: "2026-08-11T04:47:20Z"
lastReleaseAt: "2026-04-13T18:59:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 27
maintainers: ["tjnull"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3f85ffc35e57c5910387e10513ed43c02842dc48b59e49cd33d7af3c5260c07/tjnull/leetha"
---

# Leetha

### Passive Network Fingerprinting and Analysis Engine

</div>

**Leetha identifies devices on your network by analyzing broadcast traffic and protocol exchanges** -- combining passive observation with active service probing to build a comprehensive device inventory, detect anomalies, and map your attack surface. No agents, no credentials, no device cooperation required.

> *Named after **K7-Leetha**, the sentient necroplasmic symbiote from Todd McFarlane's Spawn. The suit bonds with its host, silently observing and adapting to every threat in its environment -- much like this tool bonds with your network, passively learning every device and anomaly without ever revealing its presence.*

---

## Why Leetha

- **Passive-first design** -- identifies devices without sending a single packet; active probing is optional
- **Multi-evidence fusion** -- weighted certainty scoring across 15+ protocol sources with agreement boosting when independent sources corroborate
- **mDNS SRV target extraction** -- captures device hostnames, service ports, model names, and HomeKit categories from SRV/TXT records
- **Infrastructure-aware mDNS filtering** -- automatically detects…
