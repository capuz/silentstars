---
repo: "sktelecom/bomlens"
name: "bomlens"
description: "BomLens — a local-first SBOM generator & open-source risk assessor (CycloneDX). Produce an SBOM, an open-source notice, and a security/license risk report from source code, containers, binaries, firmware, or an SBOM you received. CLI or web UI, no SaaS."
readmeQualityOk: true
url: "https://github.com/sktelecom/bomlens"
homepage: "https://sktelecom.github.io/bomlens/"
language: "Shell"
languages: ["Shell", "TypeScript"]
languagePcts: [52, 27]
topics: ["cdxgen", "cyclonedx", "devsecops", "docker", "firmware-analysis", "license-compliance", "open-source-security", "sbom", "sbom-generator", "sca"]
stars: 23
forks: 2
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T07:24:44Z"
lastCommitAt: "2026-10-17T07:58:12Z"
lastReleaseAt: "2026-06-25T03:33:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["haksungjang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fdc83907892acda0acf465b24da8b617948403145af25096cd36a12182ab039/sktelecom/bomlens"
discussionCount: 0
---

> **BomLens** is a local-first [SBOM](https://sktelecom.github.io/bomlens/concepts/what-is-sbom/) generator and open-source risk assessor. It produces a CycloneDX SBOM, an open-source notice, and a security and license risk report for a single project in seconds — from source code, a container, a binary, firmware, an SBOM you received, or a HuggingFace AI model. CLI or browser UI, no SaaS.

Try it without installing anything: the [live demo](https://sktelecom.github.io/bomlens/demo/) holds one finished scan of each kind — a Spring Boot project from source, a container image (1,393 components), a Raspberry Pi OS device image as firmware, an AI model as a CycloneDX ML-BOM checked against the G7 minimum elements, and a supplier SBOM checked against the format requirements. Read-only, nothing to install, nothing uploaded. To run your own scans, download the installer for [Windows](https://github.com/sktelecom/bomlens/releases/latest/download/BomLens-Setup.exe) or [macOS](https://github.com/sktelecom/bomlens/releases/latest/download/BomLens-Setup.dmg), or go straight to the [CLI](#cli-advanced).

## What it does

One Docker image, two jobs. It **generates**: scan your source code, a…
