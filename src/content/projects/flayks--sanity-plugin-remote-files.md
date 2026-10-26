---
repo: "flayks/sanity-plugin-remote-files"
name: "sanity-plugin-remote-files"
description: "Upload, browse and reference files stored outside of Sanity Studio."
readmeQualityOk: true
url: "https://github.com/flayks/sanity-plugin-remote-files"
homepage: "https://www.npmjs.com/package/sanity-plugin-remote-files"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["cloudflare-r2", "remote-filesystem", "sanity", "sanity-plugin", "sanity-studio", "uploads"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-07T12:19:00Z"
lastCommitAt: "2026-10-26T09:17:05Z"
lastReleaseAt: "2026-10-26T09:17:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 31
maintainers: ["flayks", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/48b6b2906284f159fb76aaa51d450d9a68c51c7cd207ca8ff340579ca478ab0b/flayks/sanity-plugin-remote-files"
fundingLinks: ["GITHUB:https://github.com/flayks", "KO_FI:https://ko-fi.com/flayks", "BUY_ME_A_COFFEE:https://buymeacoffee.com/flayks"]
---

🌐  Remote Files Plugin for Sanity  🌐
  Upload, browse and reference files stored outside of Sanity Studio.<br/>
  Useful for large videos, audio files, archives, PDFs or any file you want to keep in R2, S3 or another storage backend.

## Features

- **Remote files tool**: Browse, search, upload and manage your remote file library.
- **`remoteFile` field type**: Upload or select remote files directly from document fields.
- **Playable previews**: Play audio and video straight from the field, without opening the details dialog.
- **File details dialog**: Preview files, edit internal titles, inspect metadata and see which documents use a file.
- **Cloudflare R2 provider**: Worker-backed upload/delete flow with an interactive setup command.
- **S3-compatible provider**: Express API template for S3 or S3-compatible storage.
- **Flexible providers**: Use the bundled R2/S3 providers or add your own.
- **Backend-only secrets**: Provider credentials stay in your Worker/API, not in Sanity documents.

## Installation

```sh
# npm
npm i sanity-plugin-remote-files

# yarn
yarn add sanity-plugin-remote-files

# pnpm
pnpm add sanity-plugin-remote-files

# bun
bun add sanity-plugin-remote-files…
