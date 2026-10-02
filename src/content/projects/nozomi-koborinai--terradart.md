---
repo: "nozomi-koborinai/terradart"
name: "terradart"
description: "🎯 Type-safe IaC for Dart."
readmeQualityOk: true
url: "https://github.com/nozomi-koborinai/terradart"
homepage: "https://terradart.dev"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["dart", "flutter", "gcp", "infrastructure-as-code", "terraform", "appwrite", "cloudflare", "aws"]
stars: 46
forks: 1
openIssues: 4
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-09T06:49:06Z"
lastCommitAt: "2026-10-02T10:00:29Z"
lastReleaseAt: "2026-05-19T02:05:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["nozomi-koborinai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1233622388/e82f7839-2399-457c-b71a-d3d49838c2e9"
fundingLinks: ["GITHUB:https://github.com/nozomi-koborinai"]
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="branding/png/logo-horizontal-dark-1024.png">
  </picture>
</p>

# TerraDart

> **Type-safe IaC for Dart.**
>
> Write your infrastructure and your app in one typed Dart codebase. TerraDart synthesizes Terraform JSON for Google Cloud, AWS, Cloudflare and Appwrite, and hands the values your app needs — topic names, IDs, URLs — to it as typed Dart instead of copied strings. Keep the `terraform apply` you already run.

**Alpha** — no SemVer until v1.0.0, but breaking changes land only on **minor** bumps. Pin `^0.32.x`, read [`MIGRATING.md`](https://github.com/nozomi-koborinai/terradart/blob/HEAD/MIGRATING.md) before minor bumps, and see [status on terradart.dev](https://terradart.dev/docs/status/).

---

## Quickstart

```yaml
# pubspec.yaml
name: my_app
environment:
  sdk: ^3.10.0
dependencies:
  terradart_core: ^0.32.x
  terradart_google: ^0.32.x  # or terradart_aws / terradart_cloudflare / terradart_appwrite
```

A `Stack` is one Terraform root module, written as a Dart class. This one runs an API on Cloud Run that publishes to a Pub/Sub topic, and tells the app which topic that is:

```dart
// docs:pitch:start
//…
