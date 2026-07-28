---
repo: "kubev2v/migration-planner"
name: "migration-planner"
description: "Plan migrations to OpenShift Virtualization"
readmeQualityOk: true
url: "https://github.com/kubev2v/migration-planner"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 10
forks: 23
openIssues: 2
closedIssues: 5
watchers: 4
contributors: 35
recentReleases: 6
createdAt: "2024-07-22T06:58:39Z"
lastCommitAt: "2026-07-28T14:54:40Z"
lastReleaseAt: "2026-06-11T12:10:30Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 86
maintainers: ["migration-planner-sync[bot]", "nirarg", "AvielSegev"]
openGraphImageUrl: "https://opengraph.githubassets.com/54b672e3df0f41ac3694d39591f2550f993a3b88b1e3c282d684d147cb384b8d/kubev2v/migration-planner"
---

# Migration assessment
This project is focused to provide an service to run manage the assessments reports
which could provide a insights into VMware infrastructre and provide a suggestions to
migration to OpenShift Virtualization.

The project provide a service and an agent version 2. The service stores and previews assessments reports
as well as it can generate the Agent, which OVA image that can be imported to VMware environment.

The agent is responsible to collect the anonymous data from VMware environment.

## The data that are collected

```
Datastores:
 - free capacity
 - total capacity
 - type
Hosts:
 - number
 - status
Networks:
 - type
 - vlan ID
Clusters:
 - number
Datacenters:
 - number
General:
 - vCenter ID
VMs:
  - number
  - cpu cores
  - memory
  - disk count
  - disk size
  - operating system
  - status
  - properties to test if VM is migratable
```

## Architecture

### Flow chart

## Contributing to the project
Detailed documentation for developing and contributing to OpenShift Migration Advisor can be found in our [contribution guide](https://github.com/kubev2v/migration-planner/blob/HEAD/CONTRIBUTING.md).
