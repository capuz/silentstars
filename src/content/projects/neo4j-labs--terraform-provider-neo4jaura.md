---
repo: "neo4j-labs/terraform-provider-neo4jaura"
name: "terraform-provider-neo4jaura"
description: "A terraform provider for use with Neo4j Aura API "
readmeQualityOk: true
url: "https://github.com/neo4j-labs/terraform-provider-neo4jaura"
homepage: "https://registry.terraform.io/providers/neo4j-labs/neo4jaura/latest"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 8
forks: 5
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2025-10-15T10:31:20Z"
lastCommitAt: "2026-10-06T10:42:53Z"
lastReleaseAt: "2026-08-21T10:41:50Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 81
undervaluedScore: 53
maintainers: ["LackOfMorals", "venikkin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c237b708c22479f908152751b823827803ba50792c5d62ef10817f14f945017a/neo4j-labs/terraform-provider-neo4jaura"
---

# Neo4j Aura Terraform Provider

Available as a Neo4j Labs Project ( See Disclaimer further down this README )  Neo4j Aura Terraform Provider enables a declarative, infrastructure-as-code (IaC) approach to infrastructure.  This codifies the interaction with Aura's management API for the provisioning and management of AuraDB infrastructure. Specifically Neo4j Aura Terraform provider allows for:- 

* Obtaining information about a project ( tenant )
* Create, modify, pause, resume, delete, and import operations for AuraDB instances
* Take and restore AuraDB snapshots
* Creating an Aura instance from a snapshot
* Import existing snapshots into Terraform state
* Configuration validation for CDC enrichment mode, vector optimisation, and graph analytics plugin

__Neo4j Aura Terraform Provider is a Neo4j Labs Project.  Please read the Disclaimer at the bottom of this page before use.__

## Using from the Terraform Provider Registry

To use directly from the [Terraform Provider Registry](https://registry.terraform.io/providers/neo4j-labs/neo4jaura/latest), copy and paste this code into your Terraform configuration, adjusting the configuration options to meet your requirements.  

```hcl…
