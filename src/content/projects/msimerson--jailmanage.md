---
repo: "msimerson/jailmanage"
name: "jailmanage"
description: "Manage FreeBSD jails"
readmeQualityOk: true
url: "https://github.com/msimerson/jailmanage"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["freebsd", "jail", "manage-freebsd-jails"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2015-10-04T21:27:16Z"
lastCommitAt: "2026-10-21T21:15:36Z"
lastReleaseAt: "2023-10-11T21:53:25Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 65
undervaluedScore: 38
maintainers: ["msimerson", "tuffnatty"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca0df881b32cd78806842fd430ea250e07f82ad1f561bc730ab3ccecd98d9f1c/msimerson/jailmanage"
fundingLinks: ["GITHUB:https://github.com/msimerson"]
discussionCount: 0
---

# jailmanage

Manage FreeBSD jails

## Install

```sh
fetch -o /usr/local/bin/jailmanage https://raw.githubusercontent.com/msimerson/jailmanage/master/jailmanage.sh
chmod 755 /usr/local/bin/jailmanage
```

## Upgrade

```sh
jailmanage selfupgrade
```

## Usage

```sh
$ jailmanage
   usage: jailmanage [ jailname ]

 jailname has several special jail names:

 all         - consecutively log into each jail
 audit       - run 'pkg audit' in each jail
 vulnerable  - drop into each jail with vulnerable packages
 versions    - report versions of each jail
 update      - run freebsd-update in each jail
 clean       - purge pkg and freebsd-update caches
 send        - ship a jail between hosts
 mergemaster - run mergemaster in each jail
 selfupgrade - upgrade jailmanage script
```

### Enter each jail

```sh
jailmanage all
```

### Report OS version of each jail

```sh
➜ jailmanage versions
v: 2026-06-10

host.****.net       15.1-RELEASE
--------------      ---------------
dns                 15.1-RELEASE
postfix             15.0-RELEASE-p10  ⚠️
influxdb            15.0-RELEASE-p10  ⚠️
grafana             15.0-RELEASE-p10  ⚠️
unifi               15.0-RELEASE-p10  ⚠️
```

### Upgrade…
