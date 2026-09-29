---
repo: "SokolskyNikita/pdf-to-markdown-cli"
name: "pdf-to-markdown-cli"
description: "Convert PDF files (and other documents) to Markdown using the Marker API via a convenient CLI tool."
readmeQualityOk: true
url: "https://github.com/SokolskyNikita/pdf-to-markdown-cli"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-02-06T05:43:49Z"
lastCommitAt: "2026-09-29T08:11:03Z"
lastReleaseAt: "2026-09-29T07:55:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 43
maintainers: ["SokolskyNikita", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0c29f557a5ed8d63ff7f5715b61fbb949fd42561e169d0adcadf110f9aa8af1/SokolskyNikita/pdf-to-markdown-cli"
---

<h1 align="center">pdf-to-md</h1>

  <strong>Turn PDFs, scans, and Office documents into clean Markdown with one command, even 1,000-page books.</strong>
</p>

</p>

`pdf-to-md` is a command-line tool that converts documents to Markdown, HTML, or JSON with the [Datalab](https://www.datalab.to/) Convert API, the hosted version of the open-source [Marker](https://github.com/datalab-to/marker) engine. It handles the tedious parts for you: splitting big PDFs, uploading in parallel, retrying, stitching the results back together, and fixing page numbers and image links.

```console
$ pdf-to-md books/
✓ darwin.pdf → darwin.md (516 pages, $1.55)
✓ tolstoy.pdf → tolstoy.md (537 pages, $1.61)
✓ grimm.pdf → grimm.md (510 pages, $1.53)
Done in 4m37s: 3 converted · 1563 pages · $4.69
```

<sub>Output from a real run (file names shortened): three scanned 19th-century books in English, Russian, and German Fraktur.</sub>

## Why pdf-to-md

- **Built for big documents.** PDFs are split into page chunks that convert in parallel and are merged back into a single file. Page separators, anchors, and image links stay correct across chunks.
- **Safe to re-run.** Output names are deterministic…
