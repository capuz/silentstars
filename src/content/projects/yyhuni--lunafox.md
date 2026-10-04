---
repo: "yyhuni/lunafox"
name: "lunafox"
description: "lunafox test "
readmeQualityOk: true
url: "https://github.com/yyhuni/lunafox"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 37]
stars: 29
forks: 4
openIssues: 11
closedIssues: 21
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-29T14:29:20Z"
lastCommitAt: "2026-10-04T10:02:07Z"
lastReleaseAt: "2026-09-15T18:59:46Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 44
maintainers: ["yyhuni", "lunafox-public-release-publisher[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/788170baba42ba70f690de8026a4943565d19097398945f1eb4739b081495a32/yyhuni/lunafox"
---

# LunaFox Deployment

> **GENERATED / READ-ONLY PROJECTION**

[简体中文](https://github.com/yyhuni/lunafox/blob/HEAD/README.zh-CN.md)

## Install

Install Docker with Linux container support and Docker Compose 2.24.0 or newer.

### Option 1: Repository

```console
git clone https://github.com/yyhuni/lunafox.git
cd lunafox
./install.sh
```

### Option 2: Release archive

Download `lunafox-<version>.zip`, then run:

```console
unzip lunafox-<version>.zip -d lunafox-<version>
cd lunafox-<version>
./install.sh
```

### Option 3: Direct Docker Compose

From a checkout or extracted archive, run:

```console
docker compose up -d
```

## Public endpoint and image acceleration

For a deployment that should be reachable from another machine, set the public
host and HTTPS port during installation:

```console
./install.sh --public-host luna.example.com --public-port 8443
```

`--public-host` and `--public-port` persist `PUBLIC_HOST` and `PUBLIC_PORT`,
and `PUBLIC_URL` is derived from them. See the
[public deployment guide](https://github.com/yyhuni/lunafox/blob/HEAD/docs/public-deployment.md) for image sources,
verification, and fallback behavior.

## Login and initial credentials

After a fresh…
