---
repo: "rdlabo-dev/capacitor-codescanner"
name: "capacitor-codescanner"
description: "Capacitor Plugin for Code Scanner"
readmeQualityOk: true
url: "https://github.com/rdlabo-dev/capacitor-codescanner"
language: "Kotlin"
languages: ["Kotlin", "Swift"]
languagePcts: [64, 31]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-01-14T06:14:06Z"
lastCommitAt: "2026-08-19T04:09:24Z"
lastReleaseAt: "2025-09-08T07:28:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 54
maintainers: ["rdlabo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1890c6c10646c9372c17057baa87ad9fe40703803bdca2e93e1580f3243d59/rdlabo-dev/capacitor-codescanner"
fundingLinks: ["GITHUB:https://github.com/rdlabo"]
---

# @rdlabo/capacitor-codescanner

Barcode scanner for Capacitor that opens a native modal.

Unlike camera-preview based scanners, this plugin runs the camera inside a modal. You do not need to manage the camera view in your web assets. The plugin supports multiple barcode types and continuous multi-scan mode.

**Full documentation:** [https://docs.rdlabo.dev/projects/capacitor-codescanner](https://docs.rdlabo.dev/projects/capacitor-codescanner)

**Documentation:** [Read the full documentation](https://docs.rdlabo.dev/projects/capacitor-codescanner)

## Install

```bash
npm install @rdlabo/capacitor-codescanner
npx cap sync
```

## Usage

See [CodeScanner](https://github.com/rdlabo-dev/capacitor-codescanner/blob/HEAD/docs/code-scanner.md) to present the modal and receive scanned codes.

Register a listener before calling `present`. The listener receives each scanned code.

```ts
import { CodeScanner } from '@rdlabo/capacitor-codescanner';

const scanQRCode = async () => {
  await CodeScanner.addListener('CodeScannerCatchEvent', (event) => {
    console.log('Scanned code:', event.code);
  });

  await CodeScanner.present({
    detectionWidth: 0.6,
    detectionHeight: 0.15,…
