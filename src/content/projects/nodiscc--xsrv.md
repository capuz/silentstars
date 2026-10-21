---
repo: "nodiscc/xsrv"
name: "xsrv"
description: "[mirror] Install and manage self-hosted services/applications, on your own server(s) - ansible collection and utilities"
readmeQualityOk: true
url: "https://github.com/nodiscc/xsrv"
homepage: "https://xsrv.readthedocs.io"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [88]
topics: ["self-hosted", "ansible", "nextcloud", "shaarli", "mumble", "tt-rss", "server", "samba", "ldap", "gitea"]
stars: 410
forks: 33
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 2
recentReleases: 0
createdAt: "2016-09-03T20:11:00Z"
lastCommitAt: "2026-10-21T21:14:56Z"
lastReleaseAt: "2022-03-17T20:49:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 35
maintainers: ["nodiscc"]
openGraphImageUrl: "https://opengraph.githubassets.com/487336f0167c12a95da538d4cea6c9a63acd6300e81342b30e07a7cbc26fe814/nodiscc/xsrv"
---

# xsrv

```
  ╻ ╻┏━┓┏━┓╻ ╻
░░╺╋╸┗━┓┣┳┛┃┏┛
  ╹ ╹┗━┛╹┗╸┗┛ 
```

**Install, manage and run self-hosted network services and applications on your own server(s).**

This project provides:

- [ansible](https://en.wikipedia.org/wiki/Ansible_%28software%29) [roles](#roles) for automated installation/configuration of various network services, applications and management tools (sharing, communication, collaboration systems, file storage, multimedia, office/organization, development, automation, infrastructure...)
- an optional [command-line tool](https://github.com/nodiscc/xsrv/blob/HEAD/docs/usage.md) for common operations, configuration, deployment and maintenance of your servers
- a template to [get started with a single server](https://github.com/nodiscc/xsrv/blob/HEAD/docs/installation.md) in a few minutes

## Roles

- [apache](https://github.com/nodiscc/xsrv/blob/HEAD/roles/apache) - web server/reverse proxy + PHP-FPM interpreter
- [backup](https://github.com/nodiscc/xsrv/blob/HEAD/roles/backup) - remote/local backup service (rsnapshot)
- [common](https://github.com/nodiscc/xsrv/blob/HEAD/roles/common) - base setup for Debian-based servers
-…
