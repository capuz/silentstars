---
repo: "EvotecIT/UltimateHtmlViewer"
name: "UltimateHtmlViewer"
description: "SPFx web part for hosting HTML dashboards in modern SharePoint pages, with deep-link navigation, inline rendering, security controls, and deployment automation."
readmeQualityOk: true
url: "https://github.com/EvotecIT/UltimateHtmlViewer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 22
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-01-15T20:15:02Z"
lastCommitAt: "2026-09-02T08:03:46Z"
lastReleaseAt: "2026-05-07T15:50:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 48
maintainers: ["PrzemyslawKlys", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1135227103/65e52077-f41c-4058-905a-a92e349e22d2"
fundingLinks: ["GITHUB:https://github.com/PrzemyslawKlys", "CUSTOM:https://paypal.me/PrzemyslawKlys"]
---

# UniversalHtmlViewer (UHV) 🚀

SPFx web part for hosting HTML experiences in modern SharePoint pages, with deep-link navigation, inline rendering, security controls, and deployment automation.

Security notes and current dependency-alert disposition: `SECURITY.md`  
SPFx security-uplift spike runbook: `docs/SPFx-Security-Uplift-Spike.md`

## 📦 Platform and Compatibility

- SPFx runtime target: `1.22.2` packages in `spfx/UniversalHtmlViewer/package.json`.
- SharePoint package version (`.sppkg`): `1.0.32.34` in `spfx/UniversalHtmlViewer/config/package-solution.json`.
- Web part manifest version: `1.0.34` in `spfx/UniversalHtmlViewer/src/webparts/universalHtmlViewer/UniversalHtmlViewerWebPart.manifest.json`.
- Node for CI/build: `22.x` (see GitHub workflows and package engine constraint).

## 🔄 CI/CD Workflows

- `spfx-tests.yml`: cross-platform lint + unit tests + bundle validation on push/PR.
- `release-sppkg.yml`: ship bundle/package build, release artifact generation, and optional GitHub Release creation on `v*` tags or manual dispatch.
- Release packaging outputs are versioned as `release/universal-html-viewer-<manifest-version>.sppkg` in CI artifacts.

## ✨ What UHV Solves…
