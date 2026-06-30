---
repo: "vsxd/afilmory-vercel"
name: "afilmory-vercel"
description: "Vercel-native. High-performance. Modern. A refined photography gallery."
url: "https://github.com/vsxd/afilmory-vercel"
homepage: "https://afilmory-vercel.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2025-11-22T13:56:42Z"
lastCommitAt: "2026-06-30T06:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 60
maintainers: ["vsxd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae524aa8f0640c580ccae217ffea389bb17106690ff5e29f9be870e4a1186e3e/vsxd/afilmory-vercel"
---

# Afilmory Vercel

English | [简体中文](./README.zh-CN.md)

</p>

  <strong>A fork of Afilmory optimized for S3-compatible photo storage and static deployment on Vercel</strong>
</p>

</p>

  </a>
</p>

---

## 📖 About This Project

This repository is a customized fork of [Afilmory](https://github.com/Afilmory/afilmory), focused on S3-compatible photo storage and static site deployment. Photos stay in S3 or a compatible object store; the build produces a static web app, generated thumbnails, RSS, sitemap, Open Graph assets, and a JSON photo manifest.

### Differences from the upstream project

- ✅ **S3-first static deployment** - the default site configuration only uses S3-compatible storage for source photos.
- ✅ **Vercel-ready build** - `vercel.json` runs `scripts/build-static.sh` and outputs `apps/web/dist`.
- ✅ **Manifest-driven runtime** - the browser reads generated JSON data instead of calling a database or backend service.
- ✅ **Optional remote metadata cache** - `REPO_URL` and `REPO_TOKEN` can persist generated manifest/thumbnails between CI builds.
- ✅ **One-click deployment** - the Vercel deploy button is ready for the required S3 environment variables.

###…
