---
repo: "envoyproxy/envoy-website"
name: "envoy-website"
description: "Envoy Proxy website"
readmeQualityOk: true
url: "https://github.com/envoyproxy/envoy-website"
homepage: "https://envoyproxy.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [21]
topics: ["envoy", "website", "cncf"]
stars: 48
forks: 187
openIssues: 10
closedIssues: 50
watchers: 20
contributors: 88
recentReleases: 0
createdAt: "2017-08-29T18:18:34Z"
lastCommitAt: "2026-10-25T08:40:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 62
maintainers: ["update-envoy[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1925d85a803e1307f2816270f0b2c40257086d725c91f96d2ec744e765760e6a/envoyproxy/envoy-website"
---

# Envoy website

This is the repo for the [Envoy website](https://www.envoyproxy.io).

The website is built with bazel using Pelican and Sphinx.

The site is deployed to Netlify.

Archived release docs are served from the GCS archive bucket via a Netlify edge function
([`netlify/edge-functions/docs-archive.ts`](https://github.com/envoyproxy/envoy-website/blob/HEAD/netlify/edge-functions/docs-archive.ts)). The
`Sync Envoy` workflow reconciles archive metadata by backfilling missing per-version sidecars,
rebuilding the manifest from the archive bucket listing, publishing an immutable
`sha256-*.json` manifest and mutable `versions.json` to the meta bucket, and repinning the
manifest in `MODULE.bazel`. Netlify then builds from the sha256-verified
`envoy_archive_manifest` pin.

The workflow requires the `GCS_ARCHIVE_META_KEY` repository secret and the
`GCS_ARCHIVE_BUCKET` and `GCS_ARCHIVE_META_BUCKET` repository variables. Golden tests for the
reconciler can be run offline with `bazel test //tools/archive/...`.

The edge function injects the shared docs banner assets (`/theme/css/docs-banner.css`,
`/theme/js/docs-banner.js`) into all docs HTML pages, including `latest` and archived…
