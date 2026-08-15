---
repo: "shr3jn/fastlane-plugin-huawei_appgallery_connect"
name: "fastlane-plugin-huawei_appgallery_connect"
description: "Fastlane plugin to upload android apps to Huawei AppGallery Connect"
readmeQualityOk: true
url: "https://github.com/shr3jn/fastlane-plugin-huawei_appgallery_connect"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 93
forks: 32
openIssues: 0
closedIssues: 56
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2019-12-14T12:58:35Z"
lastCommitAt: "2026-08-15T04:03:25Z"
lastReleaseAt: "2025-08-01T15:43:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 33
maintainers: ["shr3jn"]
openGraphImageUrl: "https://opengraph.githubassets.com/58afb3f8456c122873eb3935d5754ea383f998e0f2fbd04a3c555df6cc36474e/shr3jn/fastlane-plugin-huawei_appgallery_connect"
discussionCount: 2
---

# huawei_appgallery_connect plugin

## Getting Started

This project is a [_fastlane_](https://github.com/fastlane/fastlane) plugin. To get started with `fastlane-plugin-huawei_appgallery_connect`, add it to your project by running:

```bash
fastlane add_plugin huawei_appgallery_connect
```

## About huawei_appgallery_connect

### Uploading icons and screenshots

Visual assets can be uploaded independently of an app package with the
`huawei_appgallery_connect_upload_assets` action. Pass one or more files (or
directories) and the language used by the asset metadata:

```ruby
huawei_appgallery_connect_upload_assets(
  client_id: ENV['HUAWEI_CLIENT_ID'],
  client_secret: ENV['HUAWEI_CLIENT_SECRET'],
  app_id: ENV['HUAWEI_APP_ID'],
  asset_paths: ['fastlane/assets/icon.png', 'fastlane/assets/screenshots'],
  lang: 'en-US'
)
```

The action uses Huawei's Publishing API OBS upload flow and supports the
formats accepted by Huawei (PNG/JPG screenshots and icons, plus video/PDF
assets). `file_type` can be supplied when Huawei assigns a different file
type for an asset in your account.

Huawei AppGallery Connect Plugin can be used to upload Android application on the Huawei App Gallery…
