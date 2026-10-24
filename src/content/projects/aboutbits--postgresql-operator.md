---
repo: "aboutbits/postgresql-operator"
name: "postgresql-operator"
description: "A Kubernetes Operator for declarative PostgreSQL database management."
readmeQualityOk: true
url: "https://github.com/aboutbits/postgresql-operator"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 15
forks: 2
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2025-12-15T09:06:07Z"
lastCommitAt: "2026-10-24T00:15:57Z"
lastReleaseAt: "2026-02-03T15:14:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 46
maintainers: ["ThoSap", "aboutbits-tech", "fredordercloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8819bad859e4096cab9f66b670694144a8642c910138560ec7b96e533abc689/aboutbits/postgresql-operator"
---

# AboutBits PostgreSQL Operator

AboutBits PostgreSQL Operator is a Kubernetes operator that helps you manage PostgreSQL databases, schemas, roles (users), and privileges in a declarative way using Custom Resource Definitions (CRDs).

## Compatibility

| Component      | Supported Versions |
|----------------|--------------------|
| **PostgreSQL** | 15, 16, 17, 18     |
| **Kubernetes** | 1.29+              |

> **Note:** Kubernetes 1.29+ is required due to the use of CRD CEL validations (GA in 1.29, Beta in 1.25).

The admin role used by the operator does not need to be a superuser.  
Managed services such as AWS RDS, Amazon Aurora, Google Cloud SQL, and Azure Database for PostgreSQL are supported.  
See [Admin privileges](https://github.com/aboutbits/postgresql-operator/blob/HEAD/docs/cluster-connection.md#admin-privileges).

## Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                            Kubernetes Cluster                            │
│  ┌────────────────────────┐   ┌────────────────────────────────────────┐ │
│  │ PostgreSQL             │   │          PostgreSQL Operator           │ │
│  │ Operator CRDs…
