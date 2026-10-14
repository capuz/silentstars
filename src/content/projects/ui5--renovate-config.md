---
repo: "UI5/renovate-config"
name: "renovate-config"
description: "With the UI5 Renovate Preset Config its such as easy to update your UI5 project automatically when a new UI5 version is released."
readmeQualityOk: true
url: "https://github.com/UI5/renovate-config"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["openui5", "renovate", "ui5", "renovate-config"]
stars: 12
forks: 0
openIssues: 2
closedIssues: 6
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2025-04-01T07:23:39Z"
lastCommitAt: "2026-10-14T08:58:15Z"
lastReleaseAt: "2026-03-04T08:08:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 62
maintainers: ["dependabot[bot]", "RandomByte", "flovogt"]
openGraphImageUrl: "https://opengraph.githubassets.com/f96e08c811d64eea27ac3d2865f409a0bc7ab2f7b10d781c2cb45f0a14e2e1f2/UI5/renovate-config"
---

# UI5 Renovate Preset Config

> A Renovate preset to keep your UI5 application up-to-date.

- [UI5 Renovate Preset Config](#ui5-renovate-config)
	- [Features](#features)
	- [Usage](#usage)
	- [Usage in TypeScript Projects](#usage-in-typescript-projects)
	- [Sample](#sample)
	- [Further Information](#further-information)
	- [Support, Feedback, Contributing](#support-feedback-contributing)
	- [Security / Disclosure](#security--disclosure)
	- [Code of Conduct](#code-of-conduct)
	- [Licensing](#licensing)

## Features

Automatically creates pull requests to your UI5 project whenever a new UI5 version is released.

Information on the currently used UI5 version is updated in the following files:
- ui5.yaml files
- HTML files
- `manifest.json` and `CommonDataModel.json` files

The UI5 Renovate Preset Config takes into account whether your project uses [OpenUI5](https://sdk.openui5.org/) or [SAPUI5](https://ui5.sap.com/).

## Usage

1. Set up [Renovate](https://docs.renovatebot.com/getting-started/installing-onboarding/) for your repository.
2. Create a new file called `renovate.json` at the root level of your project.
3. Add the following content:

```json
{
	"$schema":…
