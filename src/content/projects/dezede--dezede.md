---
repo: "dezede/dezede"
name: "dezede"
description: "Dezède, a musicology project focused on performances."
readmeQualityOk: true
url: "https://github.com/dezede/dezede"
homepage: "https://dezede.org"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["musicology"]
stars: 19
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2013-03-28T21:22:39Z"
lastCommitAt: "2026-11-10T11:38:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 66
maintainers: ["BertrandBordage", "CecileHauchemaille"]
openGraphImageUrl: "https://opengraph.githubassets.com/15901647b2c13fa3d15d76826c9eeca92f2c0e6a0a5f01b4394eddd0eb90878c/dezede/dezede"
---

# Dezède

This site is available publicly at the URL: https://dezede.org

## Common to all installations

Preferred OS: Debian (latest stable release)

- Install Docker
- Add this in a new `/etc/docker/daemon.json` file, otherwise users with an IPv6
  will not get their IP forwarded to Django, due to a Docker limitation:

  ```json
  {
    "ip6tables": true,
    "experimental": true
  }
  ```
- Restart Docker with `systemctl restart docker`
- Limit the journalctl log size (it can take several GB after months) by editing `/etc/systemd/journalctl.conf` and set:

  ```
  [Journal]
  SystemMaxUse=250M
  ```
  then restart it with `systemctl restart systemd-journald`
- `sysctl -w vm.overcommit_memory=1 >> /etc/sysctl.conf` (see https://github.com/redis/docker-library-redis/issues/298#issuecomment-1749170920)
- `git submodule init`
- `git submodule update`

## Local development

- Follow “Common to all installations” above
- In the root project folder, run `docker compose up --build`
- Visit `http://dezede.localhost` on your browser.

## Production deployment

- Log as root to the server via SSH
- Follow “Common to all installations” above
- Clone the repository in `/srv/dezede`
-…
