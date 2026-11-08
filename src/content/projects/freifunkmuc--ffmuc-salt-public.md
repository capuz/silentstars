---
repo: "freifunkMUC/ffmuc-salt-public"
name: "ffmuc-salt-public"
description: "Freifunk München Salt-Stack states"
readmeQualityOk: true
url: "https://github.com/freifunkMUC/ffmuc-salt-public"
language: "HTML"
languages: ["HTML", "Jinja", "Salt"]
languagePcts: [23, 21, 20]
topics: ["docker", "hacktoberfest", "saltstack", "ssh"]
stars: 32
forks: 13
openIssues: 9
closedIssues: 50
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2019-02-23T22:06:41Z"
lastCommitAt: "2026-11-08T10:40:32Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 59
maintainers: ["GoliathLabs", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4a138548ebe24e3c11ba46068b9d0a111d62eb4e85dba222b84f4a2beebc816/freifunkMUC/ffmuc-salt-public"
fundingLinks: ["GITHUB:https://github.com/freifunkMUC"]
---

# FFMUC-SALT-PUBLIC Repo
This is the salt repo for Freifunk Munich

## Dependencies
This repo makes heavy use of Netbox based ext-pillar information especially config_contexts, services and ip information

Netbox is a hard dependency at *render* time: `_modules/site_prefixes.py`,
`_modules/extra_dns_entries.py` and `_modules/cfssl_certs.py` are called from
Jinja while states are being rendered. They fail closed - if Netbox cannot be
reached the render aborts and the highstate goes red, rather than quietly
producing a config with no prefixes or no DNS records.

## Sample config_context
```
{
    "docker": {
        "cfssl": {
            "container_dir": "/srv/docker/cfssl",
            "credentials": {
                "db_password": "password"
            },
            "mounts": [
                "/srv/docker/postgresql-cfssl/data",
                "/srv/docker/cfssl/data",
                "/srv/docker/postgresql-cfssl/data"
            ]
        },
        "openldap": {
            "container_dir": "/srv/docker/openldap",
            "credentials": {
                "admin_user": "password",
                "readonly_user": "password"
            },
            "mounts": […
