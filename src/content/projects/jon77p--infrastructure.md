---
repo: "jon77p/infrastructure"
name: "infrastructure"
description: "A collection of docker-compose files to setup my current homelab infrastructure, powered by several Raspberry Pi’s and the Cloud!"
readmeQualityOk: true
url: "https://github.com/jon77p/infrastructure"
homepage: "https://thepi.cloud"
language: "Jinja"
languages: ["Jinja", "TypeScript"]
languagePcts: [55, 33]
topics: ["homelab", "docker", "docker-compose", "infrastructure", "infrastructure-as-code", "cloudflare", "cloudflared", "traefik", "kubernetes", "k3s"]
stars: 14
forks: 0
openIssues: 13
closedIssues: 37
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-04-30T06:29:04Z"
lastCommitAt: "2026-09-19T02:47:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 68
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d18c0b619fda94e43b3364f30ddd7c68fc1043a3032e1cbad1d583594c04836d/jon77p/infrastructure"
discussionCount: 0
---

# Infrastructure

## Getting Started: [Minimal Setup]

1. `docker swarm init` on manager node
2. `docker swarm join` with correct join token on all other nodes
3. `docker network create --scope swarm --driver overlay web` on manager node
4. `docker stack deploy -c cloudflared/docker-compose.yml picluster`
5. `docker stack deploy -c traefik/docker-compose.yml picluster`
6. `docker stack deploy -c cloudflare-companion/docker-compose.yml picluster`

## Locally Applying kustomizations

1. Export environment variables to current shell
2. Run `envsubst < <(kubectl kustomize *path-to-kustomization-dir*) | kubectl apply -f -`

## Decrypting SOPS secrets for kubectl

1. `sops --decrypt *path-to-.sops.yaml* | kubectl apply -f -`

## Credits

Portions cloned from [k8s-at-home/template-cluster-k3s](https://github.com/k8s-at-home/template-cluster-k3s)
