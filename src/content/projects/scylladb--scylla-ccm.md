---
repo: "scylladb/scylla-ccm"
name: "scylla-ccm"
description: "Cassandra Cluster Manager, modified for Scylla"
url: "https://github.com/scylladb/scylla-ccm"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 23
forks: 76
openIssues: 0
closedIssues: 103
watchers: 11
contributors: 112
recentReleases: 0
createdAt: "2015-06-11T11:29:10Z"
lastCommitAt: "2026-06-24T06:39:29Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 59
maintainers: ["Copilot", "fruch", "Lorak-mmk"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d8742baaf6c4d5b3adc5d0fe0b5d540c67b44cf26b5b847cb2a5fc38abea0f7/scylladb/scylla-ccm"
---

CCM (Cassandra Cluster Manager) - Scylla Fork
====================================================

CCM is a script/library to create, launch and remove an Apache Cassandra or ScyllaDB cluster on
localhost. This is ScyllaDB's fork with enhanced support for Scylla, including:

- **Relocatable packages** - Download and use pre-built Scylla packages from S3
- **Docker support** - Run Scylla clusters using Docker images
- **Unified packages** - Simplified installation with all-in-one packages

The goal of ccm is to make it easy to create, manage and destroy a
small Scylla cluster on a local box for testing purposes.

Quick Start
-----------

### Creating a 3-node Scylla cluster (using relocatable packages):
```bash
# Create cluster with a released version
$ ccm create my_cluster --scylla -n 3 -v release:2024.2 -s

# Check cluster status
$ ccm status
Cluster: 'my_cluster'
-----------------
node1: UP
node2: UP
node3: UP
```

The nodes will be available at 127.0.0.1, 127.0.0.2 and 127.0.0.3.

### Creating a cluster with an unstable/nightly build:
```bash
# Using a specific build timestamp (from S3)
$ ccm create nightly_cluster --scylla -n 3 -v unstable/master:2024-12-20T10:30:00Z -s

#…
