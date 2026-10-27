---
repo: "KrazePlanet/KrazePlanetCTF"
name: "KrazePlanetCTF"
description: "Open-source web security training platform with 350+ challenges."
readmeQualityOk: true
url: "https://github.com/KrazePlanet/KrazePlanetCTF"
homepage: "https://labs.krazeplanet.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["bug-bounty", "bugbounty", "bugbountytips", "hacking", "infosec", "labs", "osint", "osint-resources", "osint-tool", "penetration-testing"]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2023-05-29T11:44:59Z"
lastCommitAt: "2026-10-27T09:16:46Z"
lastReleaseAt: "2026-08-26T08:32:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 69
maintainers: ["rix4uni"]
openGraphImageUrl: "https://opengraph.githubassets.com/344f3c7612cb9a415e4879acef077f2dc51f9fc09bd47186cf954417f320cda1/KrazePlanet/KrazePlanetCTF"
---

## KrazePlanetCTF

Open-source web security training platform with 350+ challenges.

## Setup
```console
curl -s "https://raw.githubusercontent.com/KrazePlanet/KrazePlanetCTF/refs/heads/main/setup.sh" | bash
```

## Update
```console
curl -s "https://raw.githubusercontent.com/KrazePlanet/KrazePlanetCTF/refs/heads/main/update.sh" | bash
```

### Demo

### Backups
```console
#Create zip
zip -r ../htdocs.zip .

#Extract
unzip htdocs.zip -d htdocs

find /mnt/d/Github/KrazePlanetCTF/ -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf -- {} +

#Back To Host
cp -af . /mnt/d/Github/KrazePlanetCTF/
```
