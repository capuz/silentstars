---
repo: "toralf/tor-relays"
name: "tor-relays"
description: "A stack to maintain Tor nodes."
url: "https://github.com/toralf/tor-relays"
homepage: "https://zwiebeltoralf.de/torserver.html"
language: "Shell"
languages: ["Shell", "Jinja"]
languagePcts: [79, 21]
topics: ["ansible-roles", "snowflake", "tor"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-06T09:47:58Z"
lastCommitAt: "2026-07-01T07:04:27Z"
lastReleaseAt: "2024-05-09T09:07:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 78
maintainers: ["toralf"]
openGraphImageUrl: "https://opengraph.githubassets.com/642399b0e5561d98d400be1dbb4eb33a57292a57464c1a2b8ed2b168619ffc9b/toralf/tor-relays"
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

   Take a look into [examples](./examples/) for an Ansible inventory leveraging the Hetzner cloud API.

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

The deployment is made by _Ansible_.
The Ansible role expects a `seed_address` value to change the ipv6 address at a Hetzner system
to a reliable randomized one (at IONOS a proposed one is displayed, but not set).
For Tor relays the DDoS solution of [torutils](https://github.com/toralf/torutils) is used.
For Snowflake and NGinx instances a lightweight version of…
