---
repo: "kartverket/skiperator"
name: "skiperator"
description: "Making reliable and secure applications easy 🚀"
readmeQualityOk: true
url: "https://github.com/kartverket/skiperator"
homepage: "https://skip.kartverket.no"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["kubernetes", "kubernetes-operator", "platform", "platform-engineering", "public-sector"]
stars: 28
forks: 8
openIssues: 0
closedIssues: 7
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2022-05-03T18:27:00Z"
lastCommitAt: "2026-11-03T12:48:45Z"
lastReleaseAt: "2024-09-12T07:07:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 65
maintainers: ["dependabot[bot]", "octo-sts[bot]", "evenh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a451c7b5a25a3d36cb8aad7693e0d65d59d335f8ec58015c977a0273c56cc202/kartverket/skiperator"
---

# Skiperator

Skiperator is an operator intended to make the setup of applications simple from
the users' point of view. When using the operator an application developer can
set up all associated resources for an optimal deployment using a simple custom
resource called `Application`.

## Prerequisites

- The Dockerfile must build an image where the user ID is set to `150` as this UID
  is hard coded in Skiperator

## Application reference

Below you will find a list of all accepted input parameters to the `Application`
custom resource.

To see explanations and requirements for all inputs, see the documentation under [the API documentation](https://skip.kartverket.no/docs/applikasjon-utrulling/skiperator/api-docs#application).

```yaml
apiVersion: skiperator.kartverket.no/v1alpha1
kind: Application
metadata:
  name: teamname-frontend
  namespace: yournamespace
spec:
  # Required, everything beyond image and port is optional
  image: "kartverket/example"
  port: 8080
  
  priority: medium
  
  additionalPorts:
    - name: metrics-port
      port: 8181
      protocol: TCP
    - name: another-port
      port: 8282
      protocol: TCP
      
  command:
    - node
    - ./server.js…
