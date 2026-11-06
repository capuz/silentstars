---
repo: "nexryai/google-drive-s3"
name: "google-drive-s3"
description: "Use Cloudflare Workers to turn your Google Drive into S3 object storage at no extra cost !"
readmeQualityOk: true
url: "https://github.com/nexryai/google-drive-s3"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cloudflare-workers", "cloudflareworkers", "google-drive", "googledrive", "object-storage", "objectstorage", "s3"]
stars: 16
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-07T14:54:05Z"
lastCommitAt: "2026-11-06T13:20:07Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 58
undervaluedScore: 30
maintainers: ["nexryai"]
openGraphImageUrl: "https://opengraph.githubassets.com/f20385afa5b0bfa6ebb5702d25baf302917cd51360d9e79e47cde3547b6dff2a/nexryai/google-drive-s3"
---

# google-drive-s3

I.R.I.S. (Integrated Reliable Interop Storage)

Use Cloudflare Workers to turn your Google Drive into S3 object storage at no extra cost.

## About

This is a Workers script that converts the Google Drive API into an S3-compatible API. Turn your Google Drive into object storage at no extra cost!

### Does it work with the free Workers plan?

Signature verification uses the native Web Crypto API, and exceeding the 10ms CPU time limit is not normal usage. It also leverages JavaScript streams to handle large files.
However, this means that features such as hash verification are not implemented. This is because the memory limitations of Workers make it impossible to expand the entire uploaded file into memory.

### Does this violate the Google Terms of Service?

We believe that it does not violate the Terms of Service as long as you do not upload illegal content such as CSAM.
For the sake of your Google account, we strongly recommend using this in an environment where only you can upload.

## How to Deploy

### 1. Prepare a Google Drive API Refresh Token

You will need to use rclone to obtain your Google API credentials and a Google Drive API refresh token.
Follow…
