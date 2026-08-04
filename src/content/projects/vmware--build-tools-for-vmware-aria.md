---
repo: "vmware/build-tools-for-vmware-aria"
name: "build-tools-for-vmware-aria"
description: "Build Tools for VMware Aria provides development and release management tools for implementing automation solutions based on the VMware Aria Suite and VMware Cloud Director. The solution enables Virtual Infrastructure Administrators and Automation Developers to use standard DevOps practices for managing and deploying content."
readmeQualityOk: true
url: "https://github.com/vmware/build-tools-for-vmware-aria"
homepage: "https://vmware.github.io/build-tools-for-vmware-aria/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [64, 26]
topics: ["vmware-aria-automation", "vmware-aria-orchestrator", "vmware-cloud-director", "vmware-aria-automation-orchestrator", "vmware-vrealize-automation", "vro", "devops", "vra", "automation", "devops-tools"]
stars: 61
forks: 34
openIssues: 21
closedIssues: 212
watchers: 22
contributors: 63
recentReleases: 0
createdAt: "2022-12-01T13:53:53Z"
lastCommitAt: "2026-08-04T06:11:37Z"
lastReleaseAt: "2023-07-05T11:34:34Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 97
undervaluedScore: 56
maintainers: ["VenelinBakalov", "dependabot[bot]", "valentinasparuhov-pixel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/573005243/3e45fd96-810e-4a18-aec7-8bb767ecc402?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061326Z&X-Amz-Expires=300&X-Amz-Signature=6cbb51e07d78eb2a4e11fda69d53357edc9f4a9d54248661d9c894801f59dc1a&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMwNiwibmJmIjoxNzg1ODI0MDA2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0._Dk9xTju1prF1dCEFWlZIeoKlSiwuEnkkw4CrBGsgBc"
discussionCount: 28
---

# Build Tools for VMware Aria
This repository contains the source code for the Build Tools for VMware Aria, formally known as vRealize Build Tools.
Build Tools for VMware Aria provides advanced development and release management tools for implementing automation solutions for VMware Cloud Foundation 9 components (VCF Automation, VCF Operations Orchestrator, VCF Operations, VCF Operations for Logs). The solution enables Virtual Infrastructure Administrators and Automation Developers to use standard DevOps practices for managing and deploying content.

## Documentation
- [Installation and Operations Documents](https://github.com/vmware/build-tools-for-vmware-aria/blob/HEAD/docs/archive/doc/markdown)
- [Workstation Setup Guide](https://github.com/vmware/build-tools-for-vmware-aria/blob/HEAD/docs/archive/doc/markdown/setup-workstation.md)

## How to build
1. Update ~/.m2/settings.xml with:
    ```xml
    <profiles>
        <profile>
            <id>packaging</id>
            <properties>
                <keystoreGroupId>com.vmware.pscoe.build</keystoreGroupId>
                <keystoreArtifactId>keystore.example</keystoreArtifactId>…
