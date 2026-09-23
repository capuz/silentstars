---
repo: "cap-js/openapi"
name: "openapi"
description: "CAP Library for OpenAPI"
readmeQualityOk: true
url: "https://github.com/cap-js/openapi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 12
openIssues: 2
closedIssues: 34
watchers: 7
contributors: 28
recentReleases: 0
createdAt: "2024-01-08T07:32:46Z"
lastCommitAt: "2026-09-23T08:46:58Z"
lastReleaseAt: "2024-12-13T06:35:03Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 76
maintainers: ["daogrady", "dependabot[bot]", "tim-sh"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7d1471ee48b53d57bbb0a0ac74f5210f0ac5e6da85a0d0d4a9f42d49b1924dd/cap-js/openapi"
---

# OpenAPI

## About this project

The `@cap-js/openapi` is a package that provides support for OpenAPI document compilation.

### Table of Contents

- [OpenAPI](#openapi)
  - [About this project](#about-this-project)
    - [Table of Contents](#table-of-contents)
  - [Requirements and Setup](#requirements-and-setup)
    - [Installation](#installation)
    - [Usage](#usage)
      - [Customizing OpenAPI Output](#customizing-openapi-output)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Licensing](#licensing)

## Requirements and Setup

### Installation

```sh
$ npm install @cap-js/openapi
```

### Usage

```js
const cds = require('@sap/cds')
const { compile } = require('@cap-js/openapi')
```

```js
const csn = await cds.load(cds.env.folders.srv)
const openapiDocument = compile(csn)
```

#### Customizing OpenAPI Output

You can synchronously hook into the compilation process using the `after:compile.to.openapi` event to modify the generated OpenAPI document:

```js
cds.on('after:compile.to.openapi', ({ csn, options, result }) => {
  // Add custom vendor extensions
  result['x-api-id'] = 'my-api-id'

  // Enhance the info section
  result.info.contact =…
