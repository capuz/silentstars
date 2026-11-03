---
repo: "CycloneDX/cyclonedx-javascript-library"
name: "cyclonedx-javascript-library"
description: "Functionality and DataModels of OWASP CycloneDX for JavaScript (Node.js or WebBrowser) written in TypeScript."
readmeQualityOk: true
url: "https://github.com/CycloneDX/cyclonedx-javascript-library"
homepage: "https://cyclonedx.org/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 41]
topics: ["bom", "cyclonedx", "library", "sbom", "node", "web", "json", "xml", "bill-of-materials", "mbom"]
stars: 25
forks: 16
openIssues: 17
closedIssues: 97
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2022-02-04T18:20:43Z"
lastCommitAt: "2026-11-03T11:16:08Z"
lastReleaseAt: "2022-07-26T16:31:28Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 69
maintainers: ["jkowalleck", "dependabot[bot]", "CAOShurong"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/455652613/f6f11b83-d51e-461c-9854-4757decd6cc5"
fundingLinks: ["CUSTOM:https://owasp.org/donate/?reponame=www-project-cyclonedx&title=OWASP+CycloneDX"]
discussionCount: 1
---

# CycloneDX JavaScript Library

----

OWASP [CycloneDX][link_website] is a full‑stack Bill of Materials (BOM) and system‑transparency standard
that provides deep visibility into software, services, hardware, and AI components, enabling advanced supply‑chain security and cyber‑risk reduction.

This package provides functionality of _CycloneDX_ for _JavaScript_ (_Node.js_ or _WebBrowsers_),
written in _TypeScript_ and compiled for the target.

> [!NOTE]  
> This package is a software library not intended for standalone use.  
> For a list of tools and plugins for generating Software Bill of Materials (SBOM), check out the [meta-package](https://github.com/CycloneDX/cyclonedx-node-module?tab=readme-ov-file#readme).

## Responsibilities

* Provide a general purpose _JavaScript_-implementation of [_CycloneDX_][link_website] for _Node.js_ and _WebBrowsers_.
* Provide typing for said implementation, so developers and dev-tools can rely on it.
* Provide data models to work with _CycloneDX_.
* Provide JSON- and XML-normalizers, that...
  * supports all shipped data models.
  * respects any injected [_CycloneDX_ Specification][CycloneDX-spec] and generates valid output according to it.
  *…
