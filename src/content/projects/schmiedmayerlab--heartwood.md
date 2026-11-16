---
repo: "SchmiedmayerLab/heartwood"
name: "heartwood"
description: "Compliance-first coding harness for working with sensitive biomedical research data."
readmeQualityOk: true
url: "https://github.com/SchmiedmayerLab/heartwood"
homepage: "https://schmiedmayerlab.github.io/heartwood/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-agents", "biomedical-research", "python", "regulatory-compliance"]
stars: 12
forks: 3
openIssues: 50
closedIssues: 40
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-07T23:25:10Z"
lastCommitAt: "2026-11-16T04:29:58Z"
lastReleaseAt: "2026-07-23T03:44:40Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 83
undervaluedScore: 38
maintainers: ["PSchmiedmayer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b84908a067298c213bfa707bae2860a54ed925ce3db20b4992469b55ac6977c/SchmiedmayerLab/heartwood"
fundingLinks: ["CUSTOM:https://github.com/SchmiedmayerLab"]
---

Heartwood is an open-source research agent system for biomedical research environments.
A researcher describes work on a project folder in ordinary language, and an OpenHands agent proposes commands and file changes.
The Heartwood gateway decides which proposals wait for the researcher, records every request, decision and result, and keeps a hash-chained audit history that can be exported and signed.

## Research Sessions

## Operator Deployment

```mermaid
flowchart TB
    subgraph Interfaces
        direction LR
        CLI["Terminal"]
        Web["Browser"]
        Notebook["Notebook"]
    end
    subgraph Host["Gateway host"]
        direction LR
        Manifest["Deployment manifest"]
        Gateway["Heartwood gateway<br/>review, policy, records"]
        State["Protected project state"]
    end
    subgraph Sandbox["OpenShell sandbox"]
        direction LR
        Worker["OpenHands worker"]
        Inputs["Read-only inputs and Skills"]
    end
    subgraph Platform["Platform services"]
        direction LR
        Model["Model endpoint"]
        Service["Outside service"]
        Records["Records service and signer"]
    end
    Interfaces --> Gateway
    Manifest -->…
