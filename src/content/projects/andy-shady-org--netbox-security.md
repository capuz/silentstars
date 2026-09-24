---
repo: "andy-shady-org/netbox-security"
name: "netbox-security"
description: "A Netbox plugin covering various security and NAT related models"
readmeQualityOk: true
url: "https://github.com/andy-shady-org/netbox-security"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 56
forks: 4
openIssues: 0
closedIssues: 26
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-25T11:35:31Z"
lastCommitAt: "2026-09-24T08:41:59Z"
lastReleaseAt: "2025-05-14T12:30:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 43
maintainers: ["andy-shady-org"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb034afbc478e83912532d09e22e528826355dc0bbb9ff378953e25202282901/andy-shady-org/netbox-security"
---

# NetBox Security Plugin
[Netbox](https://github.com/netbox-community/netbox) plugin for Security and NAT related objects documentation.

</div>

## Features

This plugin provides following Models:

* CustomPrefix
* Addresses
* Address Sets
* Address Lists
* Security Zones
* Security Zone Policies
* NAT Pools
* NAT Pool Members
* NAT Rule-sets
* NAT Rules
* Firewall Filters
* Firewall Filter Rules
* Firewall Policers

## Compatibility

| NetBox Version | NetBox Security Version |
|----------------|-------------------------|
| NetBox 4.2     | \>= 1.0.2               |
| NetBox 4.3     | \>= 1.1.0               |
| NetBox 4.4     | \>= 1.3.0               |
| NetBox 4.5     | \>= 1.4.0               |
| NetBox 4.6     | \>= 1.5.0               |
| NetBox 4.7     | \>= 1.6.0               |

## Installation

The plugin is available as a Python package in pypi and can be installed with pip  

```
pip install netbox-security
```
Enable the plugin in /opt/netbox/netbox/netbox/configuration.py:
```
PLUGINS = ['netbox_security']
```
Restart NetBox and add `netbox-security` to your local_requirements.txt

Perform database migrations:
```bash
cd /opt/netbox
source venv/bin/activate
python…
