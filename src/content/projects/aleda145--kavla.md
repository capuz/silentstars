---
repo: "aleda145/kavla"
name: "kavla"
description: "Infinte canvas for data"
readmeQualityOk: true
url: "https://github.com/aleda145/kavla"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [61, 36]
stars: 8
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-08-29T20:27:04Z"
lastCommitAt: "2026-09-23T08:46:38Z"
lastReleaseAt: "2026-09-19T09:49:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 52
maintainers: ["aleda145"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e72a89ab64d2dfad6a5fb6f4dccf0df3d7694adbde04e7f092211b58e43196b/aleda145/kavla"
---

# Kavla

Kavla is an infinite canvas for exploratory analysis. It's all about embracing the analytical mess. Paste a picture, draw some shapes, write some SQL, make a chart. Compared to a notebook, in Kavla you can easily branch your analysis and keep the dead ends around.

For a better understanding on what you can do, check out [kavla.dev](https://kavla.dev). There you can also try the web version.

It's built with tldraw and duckdb. It can connect to a few databases, see list below.

All SQL compute runs in the shipped backend. Upload or drop CSV, Parquet, JSON, or NDJSON files to add tables to the document’s built-in `uploaded_files` database and place their sources on the canvas. Uploaded files travel with the `.kavla` document; deleting a source shape keeps its table available in Sources. Older documents are migrated when opened and saved in the new format on save.

## Running

See the release page on github or go to https://kavla.dev/download

### Desktop App

Simply install the desktop app as you would normally on your system. Double click works on debian! (I dont have a Mac so I don't know if that works. Please let me know in an issue!)

### CLI

Download the CLI from the…
