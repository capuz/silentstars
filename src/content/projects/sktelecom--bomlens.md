---
repo: "sktelecom/bomlens"
name: "bomlens"
description: "BomLens — a local-first SBOM generator & open-source risk assessor (CycloneDX). Produce an SBOM, an open-source notice, and a security/license risk report from source code, containers, binaries, firmware, or an SBOM you received. CLI or web UI, no SaaS."
readmeQualityOk: true
url: "https://github.com/sktelecom/bomlens"
homepage: "https://sktelecom.github.io/bomlens/"
language: "Shell"
languages: ["Shell", "TypeScript"]
languagePcts: [44, 34]
topics: ["cdxgen", "cyclonedx", "devsecops", "docker", "firmware-analysis", "license-compliance", "open-source-security", "sbom", "sbom-generator", "sca"]
stars: 10
forks: 1
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-02-14T07:24:44Z"
lastCommitAt: "2026-07-23T06:15:40Z"
lastReleaseAt: "2026-06-25T03:33:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["haksungjang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b361478ebcc16ce70474d9cd007cb055e9d0d08a833cca58adccba142614121/sktelecom/bomlens"
---

</p>

<h1 align="center">BomLens</h1>

> **BomLens** is a local-first [SBOM](https://sktelecom.github.io/bomlens/concepts/what-is-sbom/) generator and open-source risk assessor. It produces a CycloneDX SBOM, an open-source notice, and a security and license risk report for a single project in seconds — from source code, a container, a binary, firmware, an SBOM you received, or a HuggingFace AI model. CLI or browser UI, no SaaS.

</p>

## What it does

One Docker image, two jobs. It **generates**: scan your source code, a container image, or a binary and get a CycloneDX SBOM, an open-source notice, and a security report. It also **assesses open-source risk** in what you receive — a supplier's finished SBOM (`--analyze`) or a firmware binary — reporting licenses and known vulnerabilities with Critical-7d / High-30d remediation deadlines. Every scan emits the risk report by default. Originally built by SK Telecom for supply-chain security, now open source.

Languages: Java, Python, Node.js, Ruby, PHP, Rust, Go, .NET, Swift, C/C++ (Conan/vcpkg, or `--identify-vendored` when there is no package manager). Inputs: a source folder, a GitHub URL, a ZIP archive, a Docker image, a binary or…
