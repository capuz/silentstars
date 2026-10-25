---
repo: "mhzawadi/docker-stash"
name: "docker-stash"
description: "A stash of docker compose and stacks"
readmeQualityOk: true
url: "https://github.com/mhzawadi/docker-stash"
language: "BitBake"
languages: ["BitBake", "PHP"]
languagePcts: [53, 41]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-02-27T08:16:26Z"
lastCommitAt: "2026-10-25T09:00:33Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 34
maintainers: ["mhzawadi"]
openGraphImageUrl: "https://opengraph.githubassets.com/23e3f87ad2c1850a76a4932d3661279861059351d17c18fba6c61956f3598748/mhzawadi/docker-stash"
fundingLinks: ["KO_FI:https://ko-fi.com/mhzawadi"]
---

# docker-stash
A stash of docker compose and stacks

This repo has 2 types of compose, the first is standalone docker-compose.
The second is a stack to run on docker swarm, all the stacks have a line you can use to run them.

## Nginx

In the nginx folder is the config that will allow you to run all the stacks,
the nginx config does SSL/TLS off loading so the connection to service's is over HTTP.

### Conventions

All the files have had custom config removed, all domains are `mydomain.com`.

please update any files you use with your own passwords and other settings.

### Using NFS

I have used NFS for some of my own services, below is an example you can use to setup.

```
volumes:
  authelia:
    driver: local
    driver_opts:
      type: 'nfs'
      o: "addr=192.168.1.1,rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"
      device: ':/location/on/the/nfs/server/authelia'
```
