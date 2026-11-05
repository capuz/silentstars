---
repo: "tuna-os/gtk-office-suite"
name: "gtk-office-suite"
description: "Pure Rust GTK4 office suite: Tables (spreadsheet), Decks (presentations), Letters (word processor)"
readmeQualityOk: true
url: "https://github.com/tuna-os/gtk-office-suite"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["docx", "flatpak", "gnome", "gtk4", "libadwaita", "odf", "office-suite", "pptx", "rust", "xlsx"]
stars: 16
forks: 5
openIssues: 143
closedIssues: 648
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-06-22T14:33:45Z"
lastCommitAt: "2026-11-05T14:04:58Z"
lastReleaseAt: "2026-07-27T08:11:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 47
maintainers: ["hanthor", "renovate[bot]", "thatguywob"]
openGraphImageUrl: "https://opengraph.githubassets.com/f83496c35e5ec943dbc88bfca8daf83cb54b17069c2e1348f3c97178216fc7c6/tuna-os/gtk-office-suite"
---

# GTK Office Suite

> [!WARNING]
> **Pre-alpha. Not usable for real work yet.** Do not use Letters, Tables
> or Decks as a replacement for LibreOffice, OnlyOffice, Google Docs or
> Microsoft Office. Documents you open may look wrong on screen, and
> formatting that *is* preserved in the saved file is often **not drawn**
> in the editor. Keep using your existing office suite, and only open
> copies of files you care about. See [Project status](#project-status).

Three GNOME-native office applications written in Rust with GTK4 and
libadwaita, shipped as Flatpaks:

| App | What it is | Reads | Writes |
|---|---|---|---|
| **Letters** | Word processor | DOCX, ODT, Markdown, TXT | DOCX, ODT, Markdown, HTML, PDF, TXT |
| **Tables** | Spreadsheet | XLSX, XLS, ODS, CSV, TSV | XLSX, PDF |
| **Decks** | Presentations | PPTX, ODP | PPTX, ODP, PDF |

CSV and TSV are import-only in Tables, on purpose: saving a spreadsheet
over an imported `.csv` would write XLSX bytes to a file everything else
reads as text, so Save As offers `.xlsx` instead.

They are not a LibreOffice port. Each app has its own document model in a
GTK-free `*-core` crate, and compatibility with other office software is…
