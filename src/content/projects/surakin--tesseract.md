---
repo: "surakin/tesseract"
name: "tesseract"
description: "A full featured native desktop Matrix Client"
readmeQualityOk: true
url: "https://github.com/surakin/tesseract"
homepage: "https://surakin.github.io/tesseract/"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["chat", "desktop-app", "matrix", "native"]
stars: 50
forks: 7
openIssues: 23
closedIssues: 29
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-18T07:52:11Z"
lastCommitAt: "2026-10-24T08:21:31Z"
lastReleaseAt: "2026-06-25T08:08:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 36
maintainers: ["surakin"]
openGraphImageUrl: "https://opengraph.githubassets.com/6582d724dd7c44b0b7d55257f62502970b595077859f4855e9c52f62a4c14f52/surakin/tesseract"
fundingLinks: ["GITHUB:https://github.com/surakin", "KO_FI:https://ko-fi.com/surakus"]
discussionCount: 1
---

# Tesseract

> The native desktop Matrix client you always wanted.

(If you don't know what Matrix is - not THE matrix, unfortunately, no one can be told what that is - go [here](https://matrix.org/) before reading forward)

A full featured desktop multiplatform (Linux, Windows, Mac) Matrix client built on the [Matrix Rust SDK](https://github.com/matrix-org/matrix-rust-sdk)

> ⚠️ Tesseract only works with homeservers running **Sliding Sync** — login will fail if the server does not support it. The preferred login method is via the **Matrix Authentication Service (MAS)** / OAuth2; homeservers without MAS can fall back to plain username/password login for existing accounts. Legacy account registration is not supported.

---

## Installing

Grab whichever fits your system. Every release, with all the installers attached, lives on the [GitHub Releases page](https://github.com/surakin/tesseract/releases/latest); the [website](https://surakin.github.io/tesseract/) has the same links as buttons.

### Linux

**Flatpak** (updates through GNOME Software / KDE Discover once installed). Tesseract is served from its own repo rather than Flathub, but one command sets everything up, including…
