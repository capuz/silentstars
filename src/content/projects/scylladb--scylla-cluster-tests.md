---
repo: "scylladb/scylla-cluster-tests"
name: "scylla-cluster-tests"
description: "Tests for Scylla Clusters"
readmeQualityOk: true
url: "https://github.com/scylladb/scylla-cluster-tests"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["cql", "scylladb", "test-automation", "testing-framework", "cassandra"]
stars: 72
forks: 114
openIssues: 153
closedIssues: 2024
watchers: 19
contributors: 80
recentReleases: 0
createdAt: "2015-12-29T23:03:42Z"
lastCommitAt: "2026-10-04T10:02:13Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 57
maintainers: ["fruch", "juliayakovlev", "vponomaryov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3072231467810af53a73644cee3365e340a37e22e7f5a5dbf642cc1a9baf0510/scylladb/scylla-cluster-tests"
discussionCount: 4
---

# SCT - Scylla Cluster Tests

SCT tests are designed to test Scylla database on physical/virtual servers under high read/write load.
Currently, the tests are run using built in unittest
These tests automatically create:

* Scylla clusters - Run Scylla database
* Loader machines - used to run load generators like cassandra-stress
* Monitoring server - uses official Scylla Monitoring [repo](https://github.com/scylladb/scylla-monitoring) to monitor Scylla clusters and Loaders

## Quickstart

#### Option 1 - Config AWS using OKTA (preferred option)

https://scylladb.atlassian.net/wiki/spaces/RND/pages/386138322/AWS+Setup+and+Okta+Integration+for+Scylla+Cluster+Tests

#### Option 2 - Config AWS using AWS credentials
```bash
# install aws cli
sudo apt install awscli # Debian/Ubuntu
sudo dnf install awscli # Redhat/Fedora
# or follow amazon instructions to get it: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# Ask your AWS account admin to create a user and access key for AWS) and then configure AWS

> aws configure
AWS Access Key ID [****************7S5A]:
AWS Secret Access Key [****************5NcH]:
Default region name [us-east-1]:
Default output…
