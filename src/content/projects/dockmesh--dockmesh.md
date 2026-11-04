---
repo: "Dockmesh/dockmesh"
name: "dockmesh"
description: "Self-hosted Docker fleet manager in a single binary: Compose stacks across hosts with agents, backups, reverse proxy, roles and SSO."
readmeQualityOk: true
url: "https://github.com/Dockmesh/dockmesh"
homepage: "https://dockmesh.dev"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [66, 26]
topics: ["backup", "container-management", "docker", "docker-compose", "docker-management", "fleet-management", "golang", "homelab", "multi-host", "portainer-alternative"]
stars: 17
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T15:07:45Z"
lastCommitAt: "2026-11-04T12:54:50Z"
lastReleaseAt: "2026-04-22T11:45:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["BlinkMSP"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b465894275cbcf940a1fecbcbc9f7cd587f72d8435e029d4fe7253f07e5e74b/Dockmesh/dockmesh"
discussionCount: 1
---

Manage Docker Compose stacks on all your hosts from one web UI.<br>
  One binary, outbound-only agents, free and open source.

## What it is

Dockmesh is a web UI for Docker hosts that run Compose stacks. The server is a single Go binary with the UI
built in; every other host runs a small agent that connects out to the server, so remote hosts need no open port.
Stacks stay plain `compose.yaml` files on disk — you can still edit them, version them with git or run
`docker compose` by hand.

It is built for homelabs and small teams with a handful to a few dozen hosts. It does not manage Kubernetes.

## Features

- **Stacks** — deploy, update and roll back compose stacks; git sources with auto-deploy; templates; move a stack to another host
- **Hosts** — one view across all hosts; agents over mTLS with outbound connections only; drain a host; agent upgrades from the UI
- **Updates** — see which images have a newer version, update one or many, roll back to the previous image
- **Backups** — scheduled, age-encrypted backups of volumes, stacks and Dockmesh itself to local disk, SMB, SFTP, WebDAV or S3; read back and verified after every run; restore from the UI
- **Reverse proxy** —…
