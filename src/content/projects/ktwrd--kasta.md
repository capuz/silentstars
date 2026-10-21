---
repo: "ktwrd/Kasta"
name: "Kasta"
description: "Open-Source File Uploader, Link Shortener, and Text Sharing Platform."
readmeQualityOk: true
url: "https://github.com/ktwrd/Kasta"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [67]
topics: ["asp-net", "csharp", "file-sharing", "file-upload", "htmx", "link-shortener", "s3", "filemanager", "self-hosted", "sharex-server"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-24T10:15:30Z"
lastCommitAt: "2026-10-21T08:49:33Z"
lastReleaseAt: "2026-02-08T14:16:14Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 59
maintainers: ["ktwrd", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb39b0ed98ef10523fe01dbfcdb8eaf2d4f4f60c00790fad30d49582fa92c8f6/ktwrd/Kasta"
---

# Kasta

 

A Simple self-hostable File Sharing Service written in C#. Supports displaying media (image, video, audio), [ShareX](https://github.com/ShareX/ShareX) config generation, [rustgrab](https://github.com/ktwrd/rustgrab) support, and stores files with pretty much any S3-compatible service.

## Features
- User Management
- User Registration
- 2FA
- Config Generator for [ShareX](https://github.com/ShareX/ShareX) and [rustgrab](https://github.com/ktwrd/rustgrab)
- Compatible with AWS S3 and S3-Compatible Services (like Cloudflare R2, MinIO, and Wasabi[^1])
- Web File Upload
- Audit Logging
- Per-user storage quota & file size limits
- Public & Private uploads
- Image Preview Generation (including image info like file type, compression, interlacing, and dimensions)
- Text File Preview
- Link Shortener

## Installing
It is recommended to use Docker to make updating very easy. The following docker compose file is the recommended setup, along with copying `config.example.xml` to `config.xml` and change the settings in there so it fits your needs.
```yml
services:
  db:
    image: postgres:18-alpine
    environment:
      POSTGRES_PASSWORD: changeme123
      POSTGRES_USER: kasta…
