---
repo: "vulogov/blackInkhaven"
name: "blackInkhaven"
description: "Inkhaven is a standalone terminal application for writing books and long-form technical documentation. It pairs a full-screen Typst editor with a local semantic index, an AI writing assistant, versioned snapshots, and a backup pipeline — so the entire writing workflow lives inside one binary, without leaving the terminal."
url: "https://github.com/vulogov/blackInkhaven"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [58, 39]
topics: ["authoring", "book", "tui", "typst"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-18T19:31:27Z"
lastCommitAt: "2026-06-25T01:29:19Z"
lastReleaseAt: "2026-05-22T05:49:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["vladimir-ciroos"]
openGraphImageUrl: "https://opengraph.githubassets.com/205482138d77646b82d1ca2306543d468dbe59a543fbeaf1123290a0b67c7682/vulogov/blackInkhaven"
---

# Inkhaven (blackInkhaven)

**Inkhaven** is a standalone terminal application for writing books and
long-form technical documentation. It pairs a full-screen Typst editor with
a local semantic index, an AI writing assistant, versioned snapshots, and a
backup pipeline — so the entire writing workflow lives inside one binary,
without leaving the terminal.

Your manuscript is organised as a hierarchy of `.typ` files
(Book → Chapter → Subchapter → Paragraph), with first-class
**image** (`.png` / `.jpg` / …), **HJSON data** (`.hjson`), and
**Bund script** (`.bund`) leaves alongside paragraphs. Inkhaven
stores metadata in a local DuckDB database, indexes every text
node for full-text and semantic search, keeps versioned
snapshots, embeds the [Bund](Documentation/Bund/README.md)
scripting language for hooks + custom rules, and streams answers
from your chosen LLM provider — six are bundled (**Gemini**,
**Claude**, **OpenAI**, **DeepSeek**, **Grok**, **Ollama**) and any
model [genai](https://github.com/jeremychone/rust-genai) routes is
one HJSON line away.

## Latest release · 1.4.1 — Chat with your book

Read the full notes:…
