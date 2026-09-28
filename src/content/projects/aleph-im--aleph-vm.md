---
repo: "aleph-im/aleph-vm"
name: "aleph-vm"
description: "Aleph.im VM execution engine"
readmeQualityOk: true
url: "https://github.com/aleph-im/aleph-vm"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [52, 41]
topics: ["firecracker", "python", "aleph-im", "qemu"]
stars: 57
forks: 22
openIssues: 91
closedIssues: 63
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2021-04-13T14:00:45Z"
lastCommitAt: "2026-09-28T10:06:23Z"
lastReleaseAt: "2022-05-19T16:02:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 49
maintainers: ["odesenfans", "cpascariello", "RezaRahemtola"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6d7b8b94a80523729eee9ed5194b82dd5cb71467aca9753780ed2b28d5b831/aleph-im/aleph-vm"
---

# Aleph-VM

The Aleph-VM project allows you to run programs on [Aleph Cloud](https://aleph.cloud/).

Aleph-VM is optimized to run programs on demand in a "function-as-as-service",
as a response to HTTP requests.

Programs can be written in any language as long as they can run a web server.
They benefit from running in their own, customizable Linux virtual environment.

Writing programs in Python using ASGI compatible frameworks (
[FastAPI](https://github.com/tiangolo/fastapi), 
[Django](https://docs.djangoproject.com/en/3.0/topics/async/),
...) allows developers to use advanced functionalities not yet available for other languages.

# Production install for Aleph-VM
## Installation from packages

Head over to the  official user doc [https://docs.aleph.cloud/nodes/compute/introduction/](https://docs.aleph.cloud/nodes/compute/introduction/) on how to run an Aleph Cloud Compute Resource
Node

## 2. Install Aleph-VM from source

This method is not recommended, except for development and testing.
Read the installation document for the various components and the developer documentation. 

1. Install the…
