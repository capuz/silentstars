---
repo: "jthabet/tab-backup"
name: "tab-backup"
description: "A browser extension to import and export opened tabs in a JSON file."
readmeQualityOk: true
url: "https://github.com/jthabet/tab-backup"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [56, 40]
topics: ["firefox", "firefox-addon", "firefox-extension", "firefox-webextension"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-01-13T00:26:14Z"
lastCommitAt: "2026-10-21T21:14:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["jthabet"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f7e106a8b545dbae8c741312943d3f9af342f1f46b0caa6510e3c19f7bb0080/jthabet/tab-backup"
---

# Tab Backup

A Firefox extension for backing up the tabs in the current window to a file
(JSON, Markdown, plain text or HTML bookmarks) and restoring tabs from a
previous backup.

[Install Tab Backup from Firefox Add-ons](https://addons.mozilla.org/en-GB/firefox/addon/tab-backup/)

## Requirements

- Node.js 22 or later
- [pnpm](https://pnpm.io/installation) 12
- Firefox or Firefox Developer Edition

## Install dependencies

```sh
pnpm install --frozen-lockfile
```

## Test in Firefox

Firefox must load the compiled extension from `dist`. The files in `src`
import CSS that webpack compiles with Tailwind, so they cannot be loaded
directly.

### Manual testing

This workflow works with any local Firefox installation:

1. Build the extension:

   ```sh
   pnpm build
   ```

2. Open `about:debugging` in Firefox.
3. Select **This Firefox**.
4. Select **Load Temporary Add-on**.
5. Choose `dist/manifest.json` from this repository.

The temporary extension remains installed until it is removed or Firefox is
restarted. After changing the source, run `pnpm build` again and select
**Reload** next to Tab Backup on the `about:debugging` page.

### Watch mode

To rebuild `dist` whenever a…
