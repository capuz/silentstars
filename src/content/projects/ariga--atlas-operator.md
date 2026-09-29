---
repo: "ariga/atlas-operator"
name: "atlas-operator"
description: "Atlas Kubernetes Operator"
readmeQualityOk: true
url: "https://github.com/ariga/atlas-operator"
homepage: "https://atlasgo.io/integrations/kubernetes/operator"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["databases", "kubernetes", "kubernetes-operator", "migrations"]
stars: 152
forks: 27
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2023-04-19T10:04:05Z"
lastCommitAt: "2026-09-29T08:10:17Z"
lastReleaseAt: "2023-08-19T07:45:52Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 42
maintainers: ["giautm", "luantranminh", "noamcattan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eef3579af10a127206c06c33640d9ceac1644028514eefa22efd8b0258e7763/ariga/atlas-operator"
---

# The Atlas Kubernetes Operator

Manage your database with Kubernetes using [Atlas](https://atlasgo.io).

### What is Atlas? 

[Atlas](https://atlasgo.io) is a popular open-source schema management tool.
It is designed to help software engineers, DBAs and DevOps practitioners manage their database schemas. 
Users can use the [Atlas DDL](https://atlasgo.io/atlas-schema/sql-resources) (data-definition language)
or [plain SQL](https://atlasgo.io/declarative/apply#sql-schema) to describe the desired database 
schema and use the command-line tool to plan and apply the migrations to their systems.

### What is the Atlas Kubernetes Operator?

Like many other stateful resources, reconciling the desired state of a database with its actual state
can be a complex task that requires a lot of domain knowledge. [Kubernetes Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
were introduced to the Kubernetes ecosystem to help users manage complex stateful resources by codifying 
this domain knowledge into a Kubernetes controller.

The Atlas Kubernetes Operator is a Kubernetes controller that uses [Atlas](https://atlasgo.io) to manage
the schema of your database. The Atlas…
