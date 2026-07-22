---
repo: "domcloud/bridge"
name: "bridge"
description: "The core script runner to control any server which has Virtualmin and Phusion Passenger boot together."
readmeQualityOk: true
url: "https://github.com/domcloud/bridge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 6
forks: 17
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2021-08-17T06:01:06Z"
lastCommitAt: "2026-07-22T06:13:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 57
maintainers: ["willnode", "mosesman831"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b114399e1f0910dd0983ee4e1d450b5c158c544607a5ed086b0070b09f1802a/domcloud/bridge"
---

# DOM Cloud Bridge

The core script runner to control any server which has [Virtualmin](https://www.virtualmin.com/) and [Phusion Passenger](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) boot together. 

This service is used to control a server booted with DOM Cloud Instance. It's actually installed for each DOM Cloud servers.

## Architecture details

To understand DOM Cloud servers architecture, read it on [DOM Cloud docs](https://domcloud.co/docs/features/).

To setup a VM from stratch and set up this service in that VM, see [Container](https://github.com/domcloud/container/) which contains a link to pre-made OS image.

## Environment Variables

All environment variables are saved to `.env` file. Please note "Portal" below means my.domcloud.co.

| KEY | DESCRIPTION |
|---|---|
| `SECRET` | The secret keys to communicate to portal |
| `SSL_WILDCARDS` | A comma separated lists of domains available for wildcard SSL sharing |
| `NGINX_FREE_DOMAIN` | Which domain need to be added banner |
| `ALLOW_IP` | IPs to allow API communication |
| `FILESTASH_URL` | Base URL for filestash endpoint |

When adding a self-hosted instance to DOM Cloud portal, you'll want to…
