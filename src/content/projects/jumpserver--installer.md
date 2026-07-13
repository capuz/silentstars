---
repo: "jumpserver/installer"
name: "installer"
description: "Installer is a tool for managing the installation of JumpServer, enabling users to conveniently install, deploy, update, and manage JumpServer."
originalDescription: "Installer is a tool for managing the installation of JumpServer, enabling users to conveniently install, deploy, update, and manage JumpServer."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jumpserver/installer"
homepage: "http://www.jumpserver.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker-compose", "release", "install", "quickstart"]
stars: 132
forks: 84
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 22
recentReleases: 0
createdAt: "2020-10-13T11:22:30Z"
lastCommitAt: "2026-07-13T06:38:08Z"
lastReleaseAt: "2021-04-14T03:47:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["ibuler", "fit2bot", "Aaron3S"]
openGraphImageUrl: "https://opengraph.githubassets.com/5759d39ed0880425ba30c9e99e9dbe86a945251c7b9875630eba9c630ea4724b/jumpserver/installer"
---

# JumpServer Installer

JumpServer Installer is used to install and manage JumpServer.

## Environment Dependencies
  - Linux x86_64
  - Kernel greater than 4.0

## Installation Deployment

```bash
# Install, the version is specified in static.env
$ ./jmsctl.sh install
```

## Management Commands

```
# Start
$ ./jmsctl.sh start

# Restart
$ ./jmsctl.sh restart

# Stop, excluding the database
$ ./jmsctl.sh stop

# Stop all
$ ./jmsctl.sh down

# Backup database
$ ./jmsctl.sh backup_db

# View logs
$ ./jmsctl.sh tail

```

## Configuration File Description

The configuration files will be placed in /opt/jumpserver/config

```
[root@localhost config]# tree .
.
├── config.txt       # Main configuration file
├── mysql
│   └── my.cnf       # mysql configuration file
|── mariadb
|   └── mariadb.cnf  # mariadb configuration file
├── nginx            # nginx configuration file
│   ├── cert
│   │   ├── server.crt
│   │   └── server.key
│   ├── lb_http_server.conf
│   └── lb_ssh_server.conf
├── README.md
└── redis
    └── redis.conf  # redis configuration file

6 directories, 11 files
```

### config.txt Description

The config.txt file is an environment variable configuration file that will…
