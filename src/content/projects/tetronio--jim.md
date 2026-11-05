---
repo: "TetronIO/JIM"
name: "JIM"
description: "Modern identity lifecycle management - air-gapped ready, container-native, no cloud dependencies"
readmeQualityOk: true
url: "https://github.com/TetronIO/JIM"
homepage: "https://junctional.io"
language: "C#"
languages: ["C#"]
languagePcts: [76]
topics: ["account-management", "group-management", "idam", "identity", "iga", "ilm", "sync", "synchronisation", "synchronization", "synchronization-service"]
stars: 6
forks: 0
openIssues: 125
closedIssues: 683
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-02-19T13:21:44Z"
lastCommitAt: "2026-11-05T07:49:00Z"
lastReleaseAt: "2026-04-07T19:13:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 79
maintainers: ["JayVDZ", "dependabot[bot]", "jim-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a132a9f1bb5e32d7a819fa4e5ef9f3d893be4ba91fe14a523ce66da447cde8c/TetronIO/JIM"
discussionCount: 7
---

# Junctional Identity Manager (JIM)

JIM is a modern Identity Management system designed for organisations with complex identity synchronisation requirements. It is self-hosted, container-deployable, and works in both connected and air-gapped networks. Features include:

- Hub-and-spoke architecture using a central metaverse for identity correlation
- Bidirectional synchronisation of Users, Groups, and custom object types
- [Attribute Priority](https://docs.junctional.io/concepts/attribute-priority/): deterministic precedence when multiple systems contribute the same attribute
- Extensible Metaverse schema: create your own Object Types and Attributes, with SCIM 2.0 and LDAP Standard Mappings on the built-ins
- Multi-directory LDAP support: AD DS, OpenLDAP, 389 Directory Server, and RFC 4512-compliant ones
- Built-in scheduler that supports parallel operations
- Validated at 500,000-user scale (with tens of thousands of groups of up to 495,000 members)
- Transform data using expressions with extensive built-in functions for common identity operations
- Built-in LDAP, File, SQL (Microsoft SQL Server, Oracle Database) and SCIM 2.0 Client connectors, plus a [SCIM 2.0 Service Provider…
