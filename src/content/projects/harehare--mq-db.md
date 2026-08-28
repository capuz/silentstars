---
repo: "harehare/mq-db"
name: "mq-db"
description: "Markdown-specialized embedded database with interval-indexed block storage and hierarchical query support."
readmeQualityOk: true
url: "https://github.com/harehare/mq-db"
homepage: "https://db.mqlang.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["database", "markdown", "mqlang", "md", "sql", "ratatui", "rust"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-30T13:05:40Z"
lastCommitAt: "2026-08-28T15:36:16Z"
lastReleaseAt: "2026-08-04T14:28:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["harehare"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1254350256/cb7b9a72-591a-4003-a72e-674c536a5f5f"
fundingLinks: ["GITHUB:https://github.com/harehare"]
---

<h1>mq-db</h1>

**Markdown-specialized embedded database with interval-indexed block storage and hierarchical query support.**

</div>

`mq-db` treats Markdown documents as **structured, hierarchical databases** rather than plain text. It parses Markdown into a flat block list with an **interval index** (Nested Set / Pre-Post Order), enabling O(1) section hierarchy queries. Documents can be queried with **SQL** or **[mq](https://github.com/harehare/mq)** and persisted to a compact custom page-file format.

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'primaryColor':'#f2ebdb','primaryTextColor':'#2a2420','primaryBorderColor':'#b3402c','lineColor':'#b3402c','secondaryColor':'#e3c3b7','tertiaryColor':'#faf6ef','background':'#faf6ef','fontFamily':'JetBrains Mono, monospace'}}}%%
flowchart TD
    A["Markdown File(s)"] -->|"CST Parser (mq-markdown)"| B["Block Tree\n(heading · paragraph · code · list …)"]
    B -->|"Interval Index + Secondary Indexes"| C["Flat Block Vector\n(pre/post integers)"]
    C --> D["BitmapIndex\n(block_type)"]
    C --> E["BTreeIndex\n(pre / post)"]
    C --> F["HashIndex\n(content / lang / depth)"]
    C --> G["Zone Maps\n(per-document stats)"]
    C…
