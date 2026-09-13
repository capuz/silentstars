---
repo: "toralf/tor-relays"
name: "tor-relays"
description: "A stack to maintain Tor nodes."
readmeQualityOk: true
url: "https://github.com/toralf/tor-relays"
homepage: "https://zwiebeltoralf.de/torserver.html"
language: "Shell"
languages: ["Shell", "Jinja"]
languagePcts: [61, 39]
topics: ["ansible-roles", "snowflake", "tor"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-06T09:47:58Z"
lastCommitAt: "2026-09-13T08:15:59Z"
lastReleaseAt: "2024-05-09T09:07:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 78
maintainers: ["toralf"]
openGraphImageUrl: "https://opengraph.githubassets.com/b415a1f78cec6aebc61b66cbc91456fd8e1659f944a808e10771ac987f620420/toralf/tor-relays"
---

## Quick start

Setup a new Tor private bridge (i.e. with the hostname _my_bridge_):

1. clone this repo

   ```bash
   git clone https://github.com/toralf/tor-relays.git
   cd ./tor-relays
   ```

1. run

   ```bash
   bash ./bin/base.sh
   ansible-playbook playbooks/ca.yaml -e @secrets/local.yaml --tags ca
   ```

   to create seeds, local dirs (e.g. _~/tmp_ and _./secrets_() and a self-signed Root CA.

1. add your bridge to the Ansible inventory:

   ```yaml
   ---
   tor:
     hosts:
       my_bridge:
   ```

   Take a look into [examples](https://github.com/toralf/tor-relays/blob/HEAD/examples/) for an Ansible inventory leveraging the Hetzner cloud API.

1. deploy it

   ```bash
   ./site-setup.yaml --limit my_bridge
   ```

1. inspect it:

   ```bash
   grep "my_bridge" ~/tmp/tor-relays/*
   ls ~/tmp/tor-relays/**/my_bridge*
   ```

1. enjoy it

## Details

The configuration is made by _Ansible_.
The creation of a relay has to be made before.
For Hetzner there're appropriate scripts in _./bin_.
The Ansible role uses `seed_address` to change the IPv6 address at a Hetzner system
to a pseudo-randomized one. At IONOS a proposed IPv6 one is printed out, but not set.
For Tor…
