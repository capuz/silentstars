---
repo: "jiayx/d2r-mobile-build"
name: "d2r-mobile-build"
description: "Reusable GitHub Actions source builds for jhaizhou-ops/d2r-mobile. Bring your own prepared game archive."
readmeQualityOk: true
url: "https://github.com/jiayx/d2r-mobile-build"
homepage: "https://github.com/jiayx/d2r-mobile-build/releases/latest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 225
forks: 92
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T09:31:24Z"
lastCommitAt: "2026-10-15T08:32:12Z"
lastReleaseAt: "2026-10-15T00:13:51Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 36
maintainers: ["jiayx"]
openGraphImageUrl: "https://opengraph.githubassets.com/7957f3a394ac65bff5d47d95602f868172327dd3974d1c24f1f083794afb5e47/jiayx/d2r-mobile-build"
---

# d2r-mobile build workflow

[English](https://github.com/jiayx/d2r-mobile-build/blob/HEAD/README.md) | [简体中文](https://github.com/jiayx/d2r-mobile-build/blob/HEAD/README.zh-CN.md)

Build iOS and macOS apps from [d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) source with GitHub Actions. Each run defaults to the latest official upstream Release and publishes to your private repository.

## Configure and build

1. Click [Use this template](https://github.com/jiayx/d2r-mobile-build/generate) and create a **Private** repository.
2. In **Actions**, select **Build IPA** (iOS) or **Build macOS**, click **Run workflow**, and paste the JSON for your platform into **`prepared_input`**:

   **Build IPA (iOS)**

   ```json
   {
     "url": "https://drive.google.com/file/d/1bjroriGTb2UwD48Pz1bGWZEJ5QDpAqbd/view",
     "sha256": "c3f45f4880a5738a69b09ee91881e5efc68cdc0cd2bc510be1147904834c2f38"
   }
   ```

   **Build macOS**

   ```json
   {
     "url": "https://drive.google.com/file/d/1t7u-eYg876z6681pqgHP5n0JDbwypzs7/view",
     "sha256": "d961071ea06bffb12be37f4e79b2933186e59d2f1ead884e74b2ec9471b7a67f"
   }
   ```

   The prepared packages in this configuration are provided by…
