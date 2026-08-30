---
repo: "righettod/toolbox-jwt"
name: "toolbox-jwt"
description: "Docker toolbox with different scripts having for the objective to perform different kinds of attacks against JWT tokens."
readmeQualityOk: true
url: "https://github.com/righettod/toolbox-jwt"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [54, 27]
topics: ["jwt", "pentesting", "docker"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-06T16:16:01Z"
lastCommitAt: "2026-08-30T00:45:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["righettod", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2063af960ddf538c9a479ed9d9d05473a43f85d42516552703b1786f0f1e8de/righettod/toolbox-jwt"
---

# 💻 JWT toolbox

## 🎯 Description

The goal of this image is to provide a ready-to-use toolbox with different scripts having for the objective to perform different kinds of attacks against [JWT](https://jwt.io/) tokens.

💡 Indeed, some existing scripts require specific runtime/package/etc. so the goal is to have a quick ready-to-use sandbox to execute them to obtain crafted JWT token.

## 📦 Build

Use the following set of command to build the docker image of the toolbox:

```bash
git clone https://github.com/righettod/toolbox-jwt.git
cd toolbox-jwt
docker build . -t righettod/toolbox-jwt
```

💡 The image is build every week and pushed to the GitHub image repository. You can retrieve it with the following command:

`docker pull ghcr.io/righettod/toolbox-jwt:main`

## 👨‍💻 Usage

Use the following command to create a container of the toolbox:

```bash
docker run --rm -it ghcr.io/righettod/toolbox-jwt:main /bin/zsh
# From here, use one of the provided script...
```

## 💡 Offline brute force operation against a HMAC secret

To perform an offline brute force operation against a HMAC secret, use one of these [JohnTheRipper packages](https://github.com/openwall/john-packages).

💻…
