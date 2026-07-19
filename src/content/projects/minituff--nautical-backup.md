---
repo: "Minituff/nautical-backup"
name: "nautical-backup"
description: "A simple Docker volume backup tool."
readmeQualityOk: true
url: "https://github.com/Minituff/nautical-backup"
homepage: "https://minituff.github.io/nautical-backup/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["bash", "docker", "automation", "devops"]
stars: 445
forks: 8
openIssues: 10
closedIssues: 50
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-10-08T17:31:45Z"
lastCommitAt: "2026-07-19T06:13:22Z"
lastReleaseAt: "2023-10-13T19:42:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 91
undervaluedScore: 36
maintainers: ["renovate[bot]", "Minituff"]
openGraphImageUrl: "https://opengraph.githubassets.com/e57513bbc87fb7ab6c0c4f0e4f9d1574bfcbd6bb2ee0e97fe994e39cb8e81e10/Minituff/nautical-backup"
fundingLinks: ["GITHUB:https://github.com/Minituff"]
---

A simple Docker bind mount (volume) backup tool.

---

<br>




</div>

### Documentation
Full documentation is available at [https://minituff.github.io/nautical-backup](https://minituff.github.io/nautical-backup)

### Quick Start

Docker Compose
```yaml
services:
  nautical-backup:
    image: minituff/nautical-backup:2 
    container_name: nautical-backup
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /config:/config
      - /source:/app/source:ro
      - /destination:/app/destination
    environment: # Optional variables
      - TZ=America/Los_Angeles
      - CRON_SCHEDULE=0 4 * * *
      - SKIP_CONTAINERS=example1,example2,example3
```
Docker CLI
```bash
docker run -d \
  --name nautical-backup \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /config:/config \
  -v /source:/app/source:ro \
  -v /destination:/app/destination \
  -e TZ="America/Los_Angeles" \
  -e CRON_SCHEDULE="0 4 * * *" \
  -e SKIP_CONTAINERS="example1,example2,example3" \
  minituff/nautical-backup:2  
```
