---
repo: "openstack-k8s-operators/install_yamls"
name: "install_yamls"
description: "k8s yaml generator/installer for Cloud Native OpenStack"
readmeQualityOk: true
url: "https://github.com/openstack-k8s-operators/install_yamls"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [58, 29]
stars: 33
forks: 120
openIssues: 4
closedIssues: 4
watchers: 10
contributors: 95
recentReleases: 0
createdAt: "2022-05-04T12:57:43Z"
lastCommitAt: "2026-09-28T10:06:08Z"
lastReleaseAt: "2023-07-27T11:24:27Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 86
undervaluedScore: 61
maintainers: ["openshift-merge-bot[bot]", "abays", "slagle"]
openGraphImageUrl: "https://opengraph.githubassets.com/df76511c867044a28de51912588baf61cf56355d9777eee4199aa20994213bb7/openstack-k8s-operators/install_yamls"
---

# k8s yaml generator/installer for Cloud Native OpenStack

The main purpose is to provide scripts to automate installing OpenStack in your *pre-installed* OpenShift environment.

Aside from generating Yaml and running *oc* commands to apply them to your cluster nothing in this repo should modify the local machine, require sudo, or make any changes to the local machine.

Helper scripts to automate installing CRC and required tools with versions used in openstack-k8s-operators can be found in [devsetup](https://github.com/openstack-k8s-operators/install_yamls/blob/HEAD/devsetup/README.md).
These scripts/playbook require sudo permissions.

**Note**
The `install_yamls` project expects several dependencies on the host machine.
Without them the deployment will fail and you will have install them first.
In general terms, all tools required by Openshift are also required by `install_yamls`.
Most importanly, the `kubectl` must be present on the system.

## Secrets Management

All passwords and encryption keys are **dynamically generated** on first use
and cached in `.secrets.env` (gitignored). No hardcoded secrets are used.

| Command | Description |
|---|---|
| `make secrets` | Generate…
