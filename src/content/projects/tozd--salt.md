---
repo: "tozd/salt"
name: "salt"
description: "Base states for configuring servers via Salt. Read-only mirror of https://gitlab.com/tozd/salt"
readmeQualityOk: true
url: "https://github.com/tozd/salt"
language: "Salt"
languages: ["Salt", "Shell"]
languagePcts: [60, 38]
topics: ["saltstack", "salt", "salt-states"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2014-12-14T13:50:53Z"
lastCommitAt: "2026-10-26T21:01:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 55
maintainers: ["mitar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb1e156fc0e58cfe23f33937e39c8fe8101597183fb80ac3b352075f0455e0d/tozd/salt"
fundingLinks: ["GITHUB:https://github.com/plast8", "GITHUB:https://github.com/mitar"]
---

# Salt states

Reusable [Salt](https://docs.saltproject.io/en/latest/contents.html) states, used as a submodule by the
repositories which deploy the actual servers.

Currently we support Ubuntu Server 22.04 or newer installed on the server.

Install `salt-ssh` using `venv`:

```bash
# Create Python3 venv.
$ python3 -m venv ~/.venv/salt
$ source ~/.venv/salt/bin/activate

# Install salt and all dependencies.
$ pip3 install -r requirements.txt

# Check version of salt-ssh, a fork from salt-ssh 3007.9 (Chlorine).
$ salt-ssh --version
salt-ssh 3007.9+10.g758e85ef2c (Chlorine)
```

Some states have a README of their own:

- [`backup`](https://github.com/tozd/salt/blob/HEAD/backup/README.md)
