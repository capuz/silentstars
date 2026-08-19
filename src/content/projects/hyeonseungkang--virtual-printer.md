---
repo: "hyeonseungkang/virtual-printer"
name: "virtual-printer"
description: "A Node.js module that makes Virtual IPP Printer"
readmeQualityOk: true
url: "https://github.com/hyeonseungkang/virtual-printer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-25T13:13:12Z"
lastCommitAt: "2026-08-19T04:09:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 51
maintainers: ["hyeonseungkang"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1890c6c10646c9372c17057baa87ad9fe40703803bdca2e93e1580f3243d59/hyeonseungkang/virtual-printer"
---

# 🖨 virtual-printer
A Node.js module that makes Virtual IPP Printer.

## Usage

```typescript
import { Printer, HandledJob, FastifyRequest } from 'virtual-printer';

const printer = new Printer({ //default options
  serverUrl: new URL('http://0.0.0.0:3000'),
  printerUriSupported: new URL('ipp://0.0.0.0:3000'),
  name: 'Printer',
  description: 'IPP Printer created by NodeJS',
  location: '0.0.0.0',
  moreInfo: new URL('ipp://0.0.0.0:3000'),
  format: ['application/pdf'],
  bonjour: true,
})

printer.on('server-opened', (error) => {
  console.error(error);
});

printer.on('data', (handledJob: HandledJob, data: Buffer, request: FastifyRequest) => {
  console.log(handledJob, request.url);
  writeFileSync(resolve('output/', handledJob.createdAt + '.ps'), data);
});
```

## API

### Class: Printer

#### `new Printer(PrinterOptions)`

The Printer object can be initialized with an object containing:
- `serverUrl: URL|string`
  - For fastify listing host and port.
  - If `serverUrl` is `string`, listen on socket.
- `bonjour: boolean`
  - `true` will publish printer server to bonjour network using `@homebridge/ciao`.
- `name: string` 
  - Name of the printer. (default: `Printer` )
  -…
