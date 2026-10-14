---
repo: "konflux-ci/mobster"
name: "mobster"
description: "Red Hat's tooling for managing SBOM documents"
readmeQualityOk: true
url: "https://github.com/konflux-ci/mobster"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 24
openIssues: 8
closedIssues: 2
watchers: 0
contributors: 71
recentReleases: 0
createdAt: "2025-04-25T11:55:13Z"
lastCommitAt: "2026-10-14T08:57:12Z"
lastReleaseAt: "2026-04-21T15:18:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 81
undervaluedScore: 82
maintainers: ["BorekZnovustvoritel", "sanialisar", "ezopezo"]
openGraphImageUrl: "https://opengraph.githubassets.com/92487fb12517ebac196132b14f2fedd6b746eea3095c89b4bc3f56a0db3605a5/konflux-ci/mobster"
---

# Mobster

The Mobster project is a Python-based tool and ecosystem to
work with SBOM (Software Bill of Materials) documents. Its goal is to provide
unified interface for generating, manipulating and consuming SBOM documents
in various formats.

The tools is designed to cover a whole lifecycle of SBOM documents.
The major stages are:

- **Generation**: Generate SBOMs document from various sources (Syft, Hermeto, etc.)
- **Augmentation**: Augment SBOM documents with additional information that are not
  present in the phase of generation. This phase is usually done in the
  release phase where we know more information about the software.
- **Validation**: Validate a quality of the SBOM document in different stages
  of the lifecycle. The validation is done by the [Product Security team
  guidelines](https://github.com/RedHatProductSecurity/security-data-guidelines/tree/main).
- **Distribution**: Distribute the SBOM document to various set of locations (e.g. Trusted
  Profile Analyzer, container registry, etc.)

## Getting started

To use the Mobster tool, you need to install it first. There are multiple ways to install
the tool:

### Using pip

```bash
pip install mobster
mobster…
