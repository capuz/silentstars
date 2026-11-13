---
repo: "EnigmaCurry/d.rymcg.tech"
name: "d.rymcg.tech"
description: "A collection of self-hosted docker-compose projects with Traefik reverse proxy, integrated auth, and administrative Makefiles for easy maintainance"
readmeQualityOk: true
url: "https://github.com/EnigmaCurry/d.rymcg.tech"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [60, 24]
topics: ["docker-compose", "docker", "traefik", "self-hosted"]
stars: 67
forks: 8
openIssues: 27
closedIssues: 262
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-04-03T21:08:38Z"
lastCommitAt: "2026-11-13T18:23:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 50
maintainers: ["EnigmaCurry", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/49de4ed03502b324b2ebbc2fe86e1ee7f7ae982712edc589013baae978a16ada/EnigmaCurry/d.rymcg.tech"
discussionCount: 4
---

# d.rymcg.tech

d.rymcg.tech is a collection of open-source Docker Compose projects
and command line tools to manage your remote Docker services from your
workstation.

## Features

 * Docker can be deployed anywhere, e.g.:
 
   * A public server in the cloud (DigitalOcean droplet, AWS EC2, etc.)
   * A public server running at home via direct port forwarding from your
     internet router.
   * A private server (at home or in the cloud) that requires a VPN to connect
     (WireGuard).
   * A public server (at home and/or roaming), without direct port
     forwarding, but accessible with the help of a public (cloud)
     sentry VPN (WireGuard).
   * A [Tor hidden service](https://github.com/EnigmaCurry/d.rymcg.tech/blob/HEAD/tor#readme) — expose any Traefik service
     as a `.onion` address with zero reconfiguration.

 * d.rymcg.tech has a clean separation for the roles of workstation
   and server:
   
   * All source files and CLI tools live on your workstation. All
     administration is performed on your workstation. You should never
     need to directly SSH into the server's shell. A workstation may
     control several servers.
   * The server's only job is to build and…
