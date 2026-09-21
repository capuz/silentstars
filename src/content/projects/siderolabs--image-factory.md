---
repo: "siderolabs/image-factory"
name: "image-factory"
description: "A service to generate Talos boot assets"
readmeQualityOk: true
url: "https://github.com/siderolabs/image-factory"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 197
forks: 59
openIssues: 10
closedIssues: 167
watchers: 6
contributors: 33
recentReleases: 0
createdAt: "2023-08-07T14:05:45Z"
lastCommitAt: "2026-09-18T09:33:54Z"
lastReleaseAt: "2024-04-17T13:24:12Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 96
undervaluedScore: 43
maintainers: ["shanduur", "rsmitty", "smira"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9b89a72d4d4d84b48a0d176bc4b0d53319deb6146d350631e49520efeb36732/siderolabs/image-factory"
discussionCount: 34
---

# Image Factory

The Image Factory provides a way to download Talos Linux artifacts.
Artifacts can be generated with customizations defined by a "schematic".
A schematic can be applied to any of the versions of Talos Linux offered by the Image Factory to produce a "model".

The following assets are provided:

* ISO
* kernel, initramfs, and kernel command line
* UKI
* disk images in various formats (e.g. AWS, GCP, VMware, etc.)
* `installer` container images

The supported frontends are:

* HTTP
* PXE
* Container Registry

The official Image Factory is available at [https://factory.talos.dev](https://factory.talos.dev).

## LLM Usage

The file is maintained at [`internal/frontend/http/templates/llms.txt`](https://github.com/siderolabs/image-factory/blob/HEAD/internal/frontend/http/templates/llms.txt) and was generated with the assistance of AI Agent.
Running instances expose the rendered reference at `/llms.txt` and the canonical OpenAPI 3.1 contract at `/openapi.yaml`; both routes are public.

## Documentation

* [API reference](https://github.com/siderolabs/image-factory/blob/HEAD/docs/api.md)
*…
