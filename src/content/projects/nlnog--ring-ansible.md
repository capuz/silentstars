---
repo: "NLNOG/ring-ansible"
name: "ring-ansible"
description: "RING Ansible playbooks & friends"
readmeQualityOk: true
url: "https://github.com/NLNOG/ring-ansible"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 29
forks: 141
openIssues: 12
closedIssues: 14
watchers: 12
contributors: 152
recentReleases: 0
createdAt: "2014-12-27T11:07:51Z"
lastCommitAt: "2026-09-22T08:45:56Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 62
maintainers: ["rodecker", "arjenz", "knutasyed"]
openGraphImageUrl: "https://opengraph.githubassets.com/31cb6190b2df791802ceee80c4b2a9e2d50fe31b92ac9eca48e6d5e7bd35418c/NLNOG/ring-ansible"
---

# ring-ansible

Ansible configuration for the [NLNOG RING](https://ring.nlnog.net/): the nodes (`*.ring.nlnog.net`)
and the infrastructure machines (`*.infra.ring.nlnog.net`) that run the RING's own services.

Nodes configure themselves: each host runs `ansible-pull` against this repository on a
schedule (see the `ansible` role), so a merged commit on `master` rolls out by itself. The
playbooks are also runnable by hand from a checkout when you need to push a change now.

## Layout

| Path                        | What it is                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `playbook.yml`              | The main playbook — all roles for all hosts, run by `ansible-pull`                          |
| `provision.yml`             | First-boot provisioning of a brand-new machine (checks, vault password, base roles, reboot) |
| `provision-ring-user.yml`   | Create a single RING user account on a node                                                 |
| `provision-vault-pass.yml`  | (Re)distribute `/root/.vaultpw` to a node…
