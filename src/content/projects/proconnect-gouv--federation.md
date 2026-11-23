---
repo: "proconnect-gouv/federation"
name: "federation"
description: "🏛️ Identification des professionnels du privé et du public"
readmeQualityOk: true
url: "https://github.com/proconnect-gouv/federation"
homepage: "https://www.proconnect.gouv.fr/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
stars: 10
forks: 7
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2025-04-16T14:59:04Z"
lastCommitAt: "2026-11-23T10:04:51Z"
lastReleaseAt: "2025-07-02T13:14:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 82
maintainers: ["dependabot[bot]", "gdarquie", "rdubigny"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd275c9a7ced51f20beb52eb7e2a5775302a3c642c6f22bbc50c6ffe1e9c762a/proconnect-gouv/federation"
---

# ProConnect - Fédération

ProConnect, l'accès pour les pros, validé par l'État

[Plus d'information](https://www.proconnect.gouv.fr).

## Overview

This repository contains 3 main folders:

- docker: the custom docker environment called "docker stack"
- back: the Node.js source code
- quality: the end-to-end tests

## Installation Guide

This guide provides steps to run the ProConnect Fédération within a custom docker environment called "docker stack".

## Prerequisites

- Node.js (v22) installed (we suggest the usage of [nvm](https://github.com/nvm-sh/nvm)) — npm ships with Node.js, no separate install needed
- Docker (>= v20.04) and Docker Compose (>= v2.0) installed ([doc](https://docs.docker.com/engine/install/))

### Under OS X

```bash
brew install bash
brew install coreutils
```

Install the latest version of bash.
Install coreutils gives you access to the timeout function.

## Setup the working environment

Now we will set up the working environment for the docker-stack.

- Add the following lines to your `~/.bashrc`:
