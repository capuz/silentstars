---
repo: "c3lang/c3-web"
name: "c3-web"
description: "The website for C3"
url: "https://github.com/c3lang/c3-web"
homepage: "https://c3-lang.org/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [68, 32]
topics: ["c3"]
stars: 120
forks: 85
openIssues: 30
closedIssues: 49
watchers: 5
contributors: 70
recentReleases: 0
createdAt: "2024-01-07T14:40:27Z"
lastCommitAt: "2026-06-24T06:39:23Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 92
undervaluedScore: 50
maintainers: ["github-actions[bot]", "lerno", "ManuLinares"]
openGraphImageUrl: "https://opengraph.githubassets.com/6724f9e2869ffb236a5c913052117f40a88029c2e114512c2ab5338207a6e9ea/c3lang/c3-web"
discussionCount: 2
---

# C3 Documentation Site (MkDocs)

This documentation site for the C3 Programming Language is built using [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidfunk.github.io/mkdocs-material/).

<h3 align="center"><a href="https://c3-lang.org">[Go to the website]</a></h3>

## Editing

Modify the files in the `docs/` folder.

## Search

Search is provided by the [Material for MkDocs search plugin](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/).

You can tune search relevance per page via frontmatter:

```yaml
---
# Rank this page higher in results (use low values, e.g. 1.5–2.0)
search:
  boost: 2

# Or remove a page from the index entirely
search:
  exclude: true
---
```

To exclude a specific section, add `{ data-search-exclude }` after the heading (requires `attr_list`, which is already enabled):

```markdown
## This section is indexed

## This section is not { data-search-exclude }
```

## Setup

### 1. Using `uv`
```bash
uv run mkdocs serve
```

### 2. Manual Setup (pip)
If you prefer using standard `pip`:

```bash
# Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies from…
