---
repo: "rich-automation/lotto-module"
name: "lotto-module"
description: "module for lotto"
originalDescription: "module for lotto"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/rich-automation/lotto-module"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-04-10T12:41:38Z"
lastCommitAt: "2026-11-01T10:45:50Z"
lastReleaseAt: "2025-04-11T13:05:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 55
maintainers: ["bang9", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f28cc59ebc894ba14ed46ca12986ad876eac7d74ba153add1a29d9c1ba081094/rich-automation/lotto-module"
---

# @rich-automation/lotto

`@rich-automation/lotto` provides an interface that can automatically purchase lottery tickets in a JS environment using a headless browser.

## Installation

```bash
# npm
npm install @rich-automation/lotto

# pnpm
pnpm add @rich-automation/lotto
```

## Prerequisites

1. It internally uses Playwright or Puppeteer, so Chromium must be installed in advance. ([link](https://github.com/rich-automation/lotto-module/blob/main/package.json#L53-L54))
2. Purchases are made on the [동행복권](https://dhlottery.co.kr/common.do?method=main) site. Deposit charging is not available there, so you must add funds to your account in advance.
3. Agree to the responsible purchase pledge (https://www.dhlottery.co.kr/hpns/sdnsCamPainView). Agreement is required every year.

## Usage

### Basic Setup

```js
import { LottoService } from '@rich-automation/lotto';
import { chromium } from 'playwright';
import puppeteer from 'puppeteer';

// Start with playwright; all features available
const lottoService = new LottoService({
  controller: chromium // puppeteer
});

// Start with puppeteer; all features available
const lottoService = new LottoService({
  controller: puppeteer
});

//…
