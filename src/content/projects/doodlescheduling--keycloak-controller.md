---
repo: "DoodleScheduling/keycloak-controller"
name: "keycloak-controller"
description: "Keycloak realm reconciliation for kubernetes"
url: "https://github.com/DoodleScheduling/keycloak-controller"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["keycloak", "realm", "kubernetes-controller"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 14
watchers: 4
contributors: 54
recentReleases: 0
createdAt: "2021-11-05T15:14:41Z"
lastCommitAt: "2026-06-27T00:46:38Z"
lastReleaseAt: "2023-04-04T09:16:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 62
maintainers: ["renovate[bot]", "raffis", "chris-sanders"]
openGraphImageUrl: "https://opengraph.githubassets.com/347a8795b4925ffb09061c15d3263cdd74a2afaaa6ab938ad0c047e1db7f0334/DoodleScheduling/keycloak-controller"
---

# Keycloak realm controller for kubernetes

Keycloak realm management for kubernetes. Compared to the [keycloak-operator](https://github.com/keycloak/keycloak-operator) this controller actually reconciles the entire realm. The keycloak-operator basically only creates the realm and syncs top level changes.

This controller supports KeycloakRealm, KeycloakClient and KeycloakUser.
This controller runs great in combination with the official keycloak operator which deploys keycloak while this controller can manage the realm.

Under the hood the controller is a wrapper around the awesome [keycloak-config-cli](https://github.com/adorsys/keycloak-config-cli)
which implements the entire realm update using the Keycloak REST API.

## Requirements

A running keycloak is a requirement. This controllers does not manage or deploy keycloak itself.
Also it is required to create a secret which contains the credentials for a user with enough permissions to manage realms.

Example:
```yaml
apiVersion: v1
data:
  password: YWRtaW4=
  username: YWRtaW4=
kind: Secret
metadata:
  name: keycloak-admin
```

## Example KeycloakRealm

The realm is the entire representation of the realm and is reconciled…
