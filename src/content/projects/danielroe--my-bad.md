---
repo: "danielroe/my-bad"
name: "my-bad"
description: "Beautiful dev-server error pages that live update. ✨"
readmeQualityOk: true
url: "https://github.com/danielroe/my-bad"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 110
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-03T15:44:15Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-09-22T14:19:57Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 78
undervaluedScore: 27
maintainers: ["danielroe", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/my-bad"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# my-bad

> Beautiful dev-server error pages rendered to HTML, ANSI or JSON and live updated over SSE. ✨

`my-bad` turns an error into a plain JSON error report with sourcemapped frames, snippets, causes, component trace and request context.

You can then use `my-bad` to render that report as a full HTML page, a shadow-DOM overlay for an existing page, or ANSI for the terminal. A small SSE channel keeps browser-based pages live, meaning errors can be updated, the page can reload when the error is fixed, and additional warnings and server logs are surfaced as they occur.

The same report, rendered to the terminal with `renderAnsi`:

## Install

```sh
npm install my-bad
```

## Usage

```ts
import { createReport, fsLoader, renderAnsi, renderPage } from 'my-bad'
import { nuxtPreset } from 'my-bad/presets'

const report = await createReport(error, {
  cwd: process.cwd(),
  loaders: [
    fsLoader()
  ],
  presets: [
    nuxtPreset({
      versions: { nuxt: '4.0.0' }
    })
  ],
  context: { event },
})

console.error(renderAnsi(report))

if (req.headers.accept?.includes('text/html')) {
  res.end(renderPage(report, {
    cwd: process.cwd(),
    channel: '/__my-bad'
  }))
}
else {…
