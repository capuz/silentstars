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
openIssues: 16
closedIssues: 36
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-04-30T06:29:04Z"
lastCommitAt: "2026-11-10T11:37:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 67
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5980e66b8b8ca1fdd708bb9484c0babcd267699c4078c81a09b3a3fc70796757/jon77p/infrastructure"
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
