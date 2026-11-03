---
repo: "videlais/online-ink-editor"
name: "online-ink-editor"
description: "An online editor for testing ink code without needing to download any tools"
readmeQualityOk: true
url: "https://github.com/videlais/online-ink-editor"
homepage: "https://videlais.github.io/online-ink-editor/"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [78, 20]
topics: ["editor", "ink"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-13T01:57:06Z"
lastCommitAt: "2026-11-03T19:05:51Z"
lastReleaseAt: "2026-06-29T00:40:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 60
maintainers: ["videlais", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/046be4621fd071ba8feaca77d25a8cf9634bec7bd1ecea991220a69660a496c8/videlais/online-ink-editor"
---

# Online ink Editor

A web-based editor for creating and testing the narrative scripting language [ink](https://github.com/inkle/ink). This editor provides a split-pane interface with real-time compilation and preview similar to the desktop tool [Inky](https://www.inklestudios.com/ink/) but as a web-based interface.

It can be accessed [directly on GitHub Pages](https://github.com/inkle/ink).

## License

See LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Testing

Use Node.js 24.15+ or 26+, matching the CI matrix. JSDOM 30 supports Node.js
`^22.22.2 || ^24.15.0 || >=26.0.0`; Vitest 5 supports
`^22.12.0 || ^24.0.0 || >=26.0.0`. Node.js 25 is not supported.

```sh
npm ci
npm run test:coverage
npm run test:e2e
npm run build
```

Install Chromium with `npx playwright install chromium` before the first E2E run.
For the interactive test runner, use `npm run test:ui` and open the authenticated
URL printed by Vitest. In Vitest 5, opening `/__vitest__/` without authenticating
first is not sufficient.

Keep `vitest`, `@vitest/coverage-v8`, and `@vitest/ui` at the same resolved version:
the companion packages require an…
