---
repo: "mmis1000/ssh-gateway"
name: "ssh-gateway"
description: "a proxy to create reverse tunnel, port forward, authication and domain in one command"
readmeQualityOk: true
url: "https://github.com/mmis1000/ssh-gateway"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 5
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-12-30T13:06:04Z"
lastCommitAt: "2026-10-22T08:52:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 67
maintainers: ["mmis1000"]
openGraphImageUrl: "https://opengraph.githubassets.com/a599347637889fe19171872a5bf53d7633d3c936e7de611480d9ad4bfc04a331/mmis1000/ssh-gateway"
---

# SSH Gateway

A proxy to create reverse tunnel, port forward, authentication and domain in one command

~~basically a ngrok clone~~

Besides port forward, this also supports serving a static directory through a HTTP domain (powered by sftp),
essentially a static HTTP server without a HTTP server.

All without a dedicated client on your computer (only a script that uses `openssh-server` and `ssh`).

## Supports

1. mac: yes
2. Linux: yes
3. Windows: use WSL instead (I don't know how to write a proper PowerShell or cmd file)

## Setup

See [docs/index.html](https://github.com/mmis1000/ssh-gateway/blob/HEAD/docs/index.html) for a step by step guide: DNS, TLS, nginx, firewall and a systemd service.

1. Forward a whole domain or subdomain and its subdomain to your app
2. Properly config the config.json
3. Start the server

SSH host keys are generated on the first start and kept with the rest of the data in `saveDir`:

```
save/
  version                  storage format version
  host_keys/               ssh_host_{rsa,ecdsa,ed25519}_key(.pub)
  users/<id>/
    user.json              id, domain and password
    client_key(.pub)       key the client script logs in with…
