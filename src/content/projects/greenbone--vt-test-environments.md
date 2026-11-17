---
repo: "greenbone/vt-test-environments"
name: "vt-test-environments"
description: "Environments for VT testing"
readmeQualityOk: true
url: "https://github.com/greenbone/vt-test-environments"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [85]
topics: ["base", "dockerfile", "techops", "tooling"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 32
recentReleases: 0
createdAt: "2022-05-16T12:32:45Z"
lastCommitAt: "2026-11-17T14:33:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["dependabot[bot]", "Copilot", "amy-gb"]
openGraphImageUrl: "https://opengraph.githubassets.com/419fae35f88158a79298d8aaca10bea4c64ae6ecc73b2c90617bb04ad961f9bc/greenbone/vt-test-environments"
---

# vt-test-environments

This repository holds environments for VT testing. Do _not_ use them in production!

Each image comes with a pre-installed SSH server and a demo account (both name and password are "demo"). This unified behavior of different operating systems and applications enables a VT developer to deploy a clean test environment within seconds.

For questions regarding this repository, please consult the [Greenbone Community Forum](https://forum.greenbone.net/).

## General usage

Run `docker run --rm -d -p 2222:22 --name target ghcr.io/greenbone/vt-test-environments/mageia:8`. The container is then running, SSH is exposed on port 2222 on the local machine and is ready to be scanned:

```
# ssh demo@localhost -p 2222
Password: 
[demo@fff64423955b ~]$ cat /etc/os-release 
NAME="Mageia"
VERSION="8"
[...]
```

However, please use `docker exec -it target bash` (Or `docker exec -it target ash` for `Alpine Linux`) preferably to interact with the container, because SSH might not be possible e.g. for very old images with no matching key exchange algorithm or requires removing the fingerprint of previously used containers from your known hosts file.

When done, the container can…
