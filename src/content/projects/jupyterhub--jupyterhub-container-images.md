---
repo: "jupyterhub/jupyterhub-container-images"
name: "jupyterhub-container-images"
description: "Container images for JupyterHub"
readmeQualityOk: true
url: "https://github.com/jupyterhub/jupyterhub-container-images"
homepage: "https://quay.io/repository/jupyterhub/jupyterhub?tab=tags"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [83]
topics: ["jupyter", "jupyterhub"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 31
recentReleases: 0
createdAt: "2024-11-24T23:17:24Z"
lastCommitAt: "2026-10-28T09:57:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 86
maintainers: ["manics", "jupyterhub-bot", "minrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/7710216dbd2597886194f8adb94db189d3ca3dad17845701d749a6dcc001f558/jupyterhub/jupyterhub-container-images"
---

# JupyterHub Container Images

Definitions and workflows for publishing JupyterHub container images.

## How this works

All pushes to `main` (and any designated backport branches) are built and published.
Pushes to `main` are assumed to always be the latest, so images are always tagged with

- `MAJOR.MINOR.PATCH-BUILDNUMBER`
- `MAJOR.MINOR.PATCH`
- `MAJOR.MINOR`
- `MAJOR`
- `latest`

where `MAJOR.MINOR.PATCH` is the JupyterHub version.

## Publishing backports

Backports are published in their own branches.
For example, see https://github.com/jupyterhub/jupyterhub-container-images/compare/main..4.x

## Images

The following images are published by this repository:

- [jupyterhub/jupyterhub](https://quay.io/repository/jupyterhub/jupyterhub?tab=tags)
- [jupyterhub/jupyterhub-demo](https://quay.io/repository/jupyterhub/jupyterhub-demo?tab=tags)
- [jupyterhub/singleuser](https://quay.io/repository/jupyterhub/singleuser?tab=tags)

## Using these images

The Hub images run jupyterhub in the `/srv/jupyterhub` directory.
If you place your `jupyterhub_config.py` there,
either by mounting `/srv/jupyterhub` as a volume, or adding

```dockerfile
COPY jupyterhub_config.py…
