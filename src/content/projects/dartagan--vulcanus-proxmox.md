---
repo: "DArtagan/vulcanus-proxmox"
name: "vulcanus-proxmox"
description: "Starting with Proxmox & Ansible and building out from there"
readmeQualityOk: true
url: "https://github.com/DArtagan/vulcanus-proxmox"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-07-17T19:27:39Z"
lastCommitAt: "2026-11-07T22:48:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 74
maintainers: ["DArtagan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57d38f7d53a731e737660d577319f4b391a9e491b30c2253953e1d8dd2f1752/DArtagan/vulcanus-proxmox"
---

# vulcanus-proxmox
Starting with Proxmox &amp; Ansible and building out from there

# Required environment variables
DOMAIN=example.com
PUBLIC_KEY=ssh-ed25519 asdfasdfasdfasdfasdf willam@example.com
PROXMOX_API_USER=proxmox_api_user@pam
PROXMOX_API_PASSWORD=password

## Principles

* Data files are snapshotted by ZFS and replicated offsite to mini-nas; application state is backed up with restic. See [docs/backups.md](https://github.com/DArtagan/vulcanus-proxmox/blob/HEAD/docs/backups.md).
* VMs and such are backed up by Proxmox Backup Server, with retention controlled in Proxmox.  We keep a minimal number of ZFS snapshots of those locations (just enough to rule out short term error).

## Ad-hoc Kubernetes

Use [k9s](https://k9scli.io/), it's amazing for peering at kubernetes cluster resources.  The logs can be a bit finicky though, so still use `kubectl logs` as necessary.

Useful line for ad-hoc operations (where `beets-import-27836809-c6wsg` is a current pod, `beets-debug` is a replica pod you will make from it, `beets-import` is the container name in that pod to attach to):

```
kubectl debug -n apps -it --copy-to=beets-debug --container=beets-import beets-import-27836809-c6wsg…
