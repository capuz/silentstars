---
repo: "NETWAYS/ansible-role-redis-cluster"
name: "ansible-role-redis-cluster"
description: "An Ansible role to create a Redis Cluster"
url: "https://github.com/NETWAYS/ansible-role-redis-cluster"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [100]
topics: ["ansible", "redis"]
stars: 11
forks: 6
openIssues: 5
closedIssues: 7
watchers: 3
contributors: 26
recentReleases: 0
createdAt: "2022-09-20T12:59:56Z"
lastCommitAt: "2026-07-02T06:33:53Z"
lastReleaseAt: "2023-06-20T13:21:15Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 40
maintainers: ["martialblog", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb1e8f4b0bdd715f89bf71063b749be1467cf8742f41aa78a20c6b3ac3e692dc/NETWAYS/ansible-role-redis-cluster"
---

# ansible-role-redis-cluster

This role will install one to  x redis instances on one to x hosts as either standalone or cluster.

SELinux will be managed if it is enabled.

The current version is tested on rocky 8.

You can use the [ca role](https://github.com/NETWAYS/ansible-role-ca), if you want to create a local CA and use its certificates.

## Requirements ##

* policycoreutils-python-utils if SELinux is enabled.

## Variables ##

* `redis_manage_dnf_module`: Should the corresponding dnf module enabled? (default: `true`)
* `redis_version`: Redis version to be installed (default: `6`)
* `redis_kernel_virtual_memory`: If you want to disable the kernel virtual memory, set the value to 1 (default: `undefined, the system default will be used`)
* `redis_transparent_hugepages_value`: Manage THP, available values are `always`, `madvise` or `never` (default: `undefined, the system default will be used`)
* `redis_systemd_directory`: Directory for redis systemd service (default: `/usr/lib/systemd/system`)
* `redis_config_directory`: Directory for redis configuration file (default: `/etc/redis`)
* `redis_user_name`: User as runner of redis service and owner of redis files\directories…
