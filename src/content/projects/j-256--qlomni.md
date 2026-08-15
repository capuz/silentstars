---
repo: "j-256/qlomni"
name: "qlomni"
description: "macOS QuickLook Preview Extension for text files macOS doesn't preview"
readmeQualityOk: true
url: "https://github.com/j-256/qlomni"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [56, 31]
topics: ["macos", "macos-utility", "quicklook", "quicklook-extension"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-05-13T07:54:19Z"
lastCommitAt: "2026-08-15T03:41:46Z"
lastReleaseAt: "2026-07-20T01:24:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 44
maintainers: ["j-256", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac90965f146dee6f1f7027b9f83a24a1fd12cf07884b7d9004751e546fddcd5b/j-256/qlomni"
---

# QLOmni

A macOS QuickLook Preview Extension that previews the text files macOS itself doesn't.

## What it fixes

Press space on a `.txt` file and macOS shows you the contents. Press space on a few common file types and you get a generic icon and "Document – 4 bytes" instead. The most common cases:

- **Extensionless executables** (e.g. `myscript`, a shell script saved without `.sh`) – tagged `public.unix-executable`, which has no QuickLook handler.
- **Files tagged directly as `public.data`** – extensionless non-executables (a notes file named `shopping-list`) and dot-prefix-only filenames with no further dot (`.gitignore`, `.bashrc`, `.htaccess`, `.vimrc`). Launch Services has nothing to fingerprint, so it tags them with the system's most generic UTI; no other handler claims it.
- **Files with extensions macOS doesn't recognize** – including AI-agent staples `.md`, `.jsonl`, and `.output`, plus `.jsonc`, `.har`, `.tsx`, `.editorconfig`, `.tf`, `.graphql`, common config formats, and source files for languages whose extensions aren't bundled with macOS (Rust, Go, Kotlin, etc.). See [SUPPORTED.md](https://github.com/j-256/qlomni/blob/HEAD/SUPPORTED.md) for the full list.
-…
