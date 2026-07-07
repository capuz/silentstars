---
repo: "O-X-L/ansible-opnsense"
name: "ansible-opnsense"
description: "Ansible Collection to manage OPNsense firewalls using their API"
readmeQualityOk: true
url: "https://github.com/O-X-L/ansible-opnsense"
homepage: "https://ansible-opnsense.oxl.app"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ansible-collection", "ansible-modules", "automation", "firewall-management", "iac", "infrastructure-as-code", "opnsense", "opnsense-firewall", "ansible", "firewall"]
stars: 473
forks: 85
openIssues: 3
closedIssues: 163
watchers: 9
contributors: 29
recentReleases: 0
createdAt: "2022-08-24T13:51:31Z"
lastCommitAt: "2026-07-07T06:37:31Z"
lastReleaseAt: "2023-12-26T16:52:06Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 83
undervaluedScore: 34
maintainers: ["superstes", "MaximeWewer", "hurleyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/55dea4cfad193b83a4bf94ab1a6bfb047db248a7529164172209a71724446fdf/O-X-L/ansible-opnsense"
discussionCount: 32
---

# Ansible Collection to manage OPNsense Firewalls

----

**Functional Tests**: - (no resources)

----

## Requirements

The [httpx python module](https://www.python-httpx.org/) is used for API communications!

```bash
python3 -m pip install --upgrade httpx
```

Then - install the collection itself:

```bash
# latest version:
ansible-galaxy collection install git+https://github.com/O-X-L/ansible-opnsense.git

# stable/tested version:
ansible-galaxy collection install git+https://github.com/O-X-L/ansible-opnsense.git,26.1.11
## OR
ansible-galaxy collection install oxlorg.opnsense
```

----

## Usage

See: [Docs](https://ansible-opnsense.oxl.app)

If you DO NOT want to use Ansible - [this fork](https://github.com/O-X-L/opnsense-api-client) provides you with a raw Python3 interface.

----

## Support the project(s)

Support the Open-Source projects that make these modules possible:

* [Donate to OPNsense](https://opnsense.org/donate/) or [Buy the Business-Edition](https://shop.opnsense.com/product-categorie/software_and_licenses/)
* [Contact the ansible-collection maintainer for support](mailto://contact+opnsense@oxl.at)

----

## Contribute

Feel free to contribute to this project…
