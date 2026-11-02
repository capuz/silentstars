---
repo: "danielroe/errx"
name: "errx"
description: "Zero dependency library to capture and parse stack traces in Node, Bun, Deno and more."
readmeQualityOk: true
url: "https://github.com/danielroe/errx"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["error", "stack-trace"]
stars: 97
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2024-07-04T10:39:49Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-09-16T15:27:03Z"
status: "thriving"
tags: ["funded"]
healthScore: 77
undervaluedScore: 42
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b53b5765f6eb9ced8665473ae3b93295c8fc1cd64812004d297d5b005a2d5/danielroe/errx"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# errx

> Zero dependency library to capture and parse stack traces in Node, Bun, Deno and more.

## Usage

Install package:

```sh
# npm
npm install errx

# pnpm
pnpm install errx
```

```js
import { captureRawStackTrace, captureStackTrace, parseError, parseRawStackTrace } from 'errx'

// returns raw string stack trace
captureRawStackTrace()
// returns parsed stack trace
captureStackTrace()
// parses the stack of an existing error (empty array if it has none)
parseError(error)
// parses a stack trace string
parseRawStackTrace(error.stack)

console.log(captureStackTrace())
// [{
//   function: undefined,
//   source: 'file:///code/danielroe/errx/playground/index.js',
//   line: 5,
//   column: 13
// }]
```

### `ParsedTrace`

```ts
interface ParsedTrace {
  column?: number
  function?: string
  line?: number
  source: string
  isAsync?: boolean
  isConstructor?: boolean
  isEval?: boolean
  isNative?: boolean
  raw?: string
}
```

`function` holds the bare function name; V8's `async` and `new` prefixes are surfaced as `isAsync` and `isConstructor` instead. Frames with no resolvable location (`at Array.map (<anonymous>)`, `at moduleEvaluation (native)`) are kept, with `isNative`…
