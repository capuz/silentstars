---
repo: "spatie/laravelpackage.training"
name: "laravelpackage.training"
description: "The source code of https://laravelpackage.training"
readmeQualityOk: true
url: "https://github.com/spatie/laravelpackage.training"
homepage: "https://laravelpackage.training"
language: "PHP"
languages: ["PHP", "Blade"]
languagePcts: [42, 40]
stars: 13
forks: 1
openIssues: 0
closedIssues: 47
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2020-05-12T10:42:38Z"
lastCommitAt: "2026-10-04T10:01:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 55
maintainers: ["freekmurze", "Avicennasis"]
openGraphImageUrl: "https://opengraph.githubassets.com/0353e273eeedbd6ce5f39aeccff518e78d3475df119086834a6049aa65df3ef3/spatie/laravelpackage.training"
---

# laravelpackage.training

The source code of https://laravelpackage.training

## Deployment

This site runs on [Laravel Cloud](https://cloud.laravel.com). Every push to `main` is deployed automatically.

The static files in `public` are served from a public Laravel Cloud bucket, so requests for them never wake the app. The build command ends with `php artisan upload-assets-to-bucket`, which uploads them under a versioned prefix with a long `Cache-Control` header and points `asset()` and `mix()` to that prefix. The bucket is configured with the `ASSETS_BUCKET`, `ASSETS_BUCKET_ENDPOINT`, `ASSETS_BUCKET_URL`, `ASSETS_BUCKET_ACCESS_KEY_ID` and `ASSETS_BUCKET_SECRET_ACCESS_KEY` environment variables. Without them, the app serves its own assets.
