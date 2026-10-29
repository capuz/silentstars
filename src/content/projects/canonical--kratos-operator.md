---
repo: "canonical/kratos-operator"
name: "kratos-operator"
description: "A Charmed Operator for running Ory Kratos on Kubernetes"
readmeQualityOk: true
url: "https://github.com/canonical/kratos-operator"
homepage: "https://github.com/canonical/kratos-operator"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["identity-platform", "charm", "kratos", "python"]
stars: 16
forks: 8
openIssues: 12
closedIssues: 51
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2022-09-26T19:04:12Z"
lastCommitAt: "2026-10-29T21:24:09Z"
lastReleaseAt: "2023-02-15T15:02:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 72
maintainers: ["canonical-iam", "renovate[bot]", "nsklikas"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd5e3c48d2b94b2ff721c51acaffe522cd65e165e47bdfc2ef0123ca76cced07/canonical/kratos-operator"
---

# Charmed Ory Kratos

## Description

This repository hosts the Kubernetes Python Operator for Ory Kratos - an
API-first identity and user management system. For more details,
visit <https://www.ory.sh/docs/kratos/ory-kratos-intro>.

## Usage

The Kratos Operator may be deployed using the Juju command line as follows:

```shell
juju deploy postgresql-k8s --channel 14/stable --trust --config 'plugin_pg_trgm_enable=True' --config 'plugin_btree_gin_enable=True'
juju deploy kratos
juju integrate kratos postgresql-k8s
```

### Interacting with Kratos API

Below are two examples of the API.
Visit [Ory](https://www.ory.sh/docs/kratos/reference/api) to see full API
specification.

#### Create Identity

```shell
curl <kratos-service-ip>:4434/identities \
--request POST -sL \
--header "Content-Type: application/json" \
--data '{
  "schema_id": "default",
  "traits": {
    "email": "test@example.org"
  }
}'
```

#### Get Identities

```shell
curl <kratos-service-ip>:4434/admin/identities
```

You should be able to see the identity created earlier.

## Integrations

### PostgreSQL

This charm requires an integration
with…
