---
repo: "vinikjkkj/wa-spec"
name: "wa-spec"
description: "Daily-extracted WhatsApp Web protocol bindings."
readmeQualityOk: true
url: "https://github.com/vinikjkkj/wa-spec"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T01:51:20Z"
lastCommitAt: "2026-09-04T08:09:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]", "vinikjkkj"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa73223a2d36b7beac4ccad715562e3538745d069ddc7f3a273d6cccf01748c/vinikjkkj/wa-spec"
fundingLinks: ["GITHUB:https://github.com/vinikjkkj"]
---

# wa-spec

Daily-extracted WhatsApp Web protocol bindings.

Eight independent packages, one shared fetcher:

- [`@vinikjkkj/wa-fetcher`](https://github.com/vinikjkkj/wa-spec/blob/HEAD/packages/fetcher) — puts the release's JS on disk
  and writes a manifest. That's all it does — extraction lives in the
  consumers. By default it pulls the upstream bundle archive for the current
  revision (~1,600 files / ~17k `WA*` modules), which includes
  lazily-loaded chunks the SPA never requests; the old headless-browser scrape
  (~580 files / ~14.4k modules) remains available via `--source scrape` and
  backs the revision lookup if the plain HTML read fails. The archive endpoint
  comes from the `WA_ARCHIVE_URL` environment variable, not from this tree.
- [`@vinikjkkj/wa-mex`](https://github.com/vinikjkkj/wa-spec/blob/HEAD/packages/mex) — Mex GraphQL persist IDs, variable
  shapes, and response shapes. Publishes `index.json` (IR) + `index.js` (CJS) +
  `index.d.ts` (TS types).
- [`@vinikjkkj/wa-proto`](https://github.com/vinikjkkj/wa-spec/blob/HEAD/packages/proto) — Protobuf message definitions.
  Publishes `WAProto.proto` (SDL) + `dist/index.{js,d.ts}` (pbjs/pbts compiled).
-…
