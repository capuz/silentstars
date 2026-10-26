---
repo: "belov38/sms-ru"
name: "sms-ru"
description: "sms.ru npm package"
originalDescription: "sms.ru npm package"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/belov38/sms-ru"
homepage: "https://www.npmjs.com/package/@belov.ai/sms-ru"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-01-21T00:22:07Z"
lastCommitAt: "2026-10-26T20:59:28Z"
lastReleaseAt: "2026-10-26T20:59:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["belov38"]
openGraphImageUrl: "https://opengraph.githubassets.com/28778844a71ada71e69f370bf50ccc728059b6664cefbb761105164268034438/belov38/sms-ru"
---

# sms-ru

A library for sending SMS through the [sms.ru](https://sms.ru) service using the native Node.js fetch API.

## Requirements

- Node.js >= 22

## Installation

```bash
npm install @belov.ai/sms-ru
```

## Usage

### In code

```typescript
import { SMSRuClient, SMSError, SMSCostLimitError } from '@belov.ai/sms-ru';

// Create a client with an API key (default request timeout is 30 seconds)
const client = new SMSRuClient('your-api-key', { timeoutMs: 30000 });

try {
  // Send to multiple recipients (up to 100 numbers per request)
  const result = await client.sendSMS({
    phones: ['79001234567', '79007654321'],
    message: 'Hello World',
    options: {
      test: true, // Test mode
      from: 'Company', // Sender name
      translit: true, // Transliteration
      limit: 10, // Maximum cost in rubles
    },
  });

  // The request may complete, but some numbers may be rejected
  for (const [phone, info] of Object.entries(result.sms)) {
    if (info.status === 'OK') {
      console.log(`${phone}: sent, id ${info.sms_id}`);
    } else {
      console.error(`${phone}: error ${info.status_code} ${info.status_text}`);
    }
  }…
