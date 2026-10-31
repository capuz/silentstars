---
repo: "Creatiwity/siren"
name: "siren"
description: "Siren API to serve INSEE v3 data"
readmeQualityOk: true
url: "https://github.com/Creatiwity/siren"
homepage: "https://creatiwity.net/realisations/api-siren/23"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["siren", "siren-api", "docker-image", "sirene", "api", "insee", "rust"]
stars: 23
forks: 3
openIssues: 1
closedIssues: 8
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2019-10-11T09:36:54Z"
lastCommitAt: "2026-10-11T21:59:00Z"
lastReleaseAt: "2022-05-02T16:25:31Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 51
maintainers: ["julien1619", "cleming"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad5d58b4c259cb8e802c268f10bd53f7c18166e38cb599d2408fab6f047763e/Creatiwity/siren"
discussionCount: 1
---

# SIREN API

REST API for serving INSEE files v3 with full-text search and geographic search capabilities.

## Getting started

To have a working copy of this project, follow the instructions.

### Installation

1. **Setup Rust**: Install [Rust](https://www.rust-lang.org) (version 1.70+ recommended)

2. **Environment variables**: Define your environment variables as defined in `.env.sample`. You can either manually define these environment variables or use a `.env` file.

3. **PostgreSQL database**: Setup PostgreSQL with required extensions (macOS commands):

```bash
brew install postgresql
createuser --pwprompt sirene # set password to sirenepw for instance
createdb --owner=sirene sirene

# Connect to database and enable required extensions
psql -U sirene -d sirene
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;
\q
```

4. **Required PostgreSQL extensions**:
   - `postgis` (for geographic search)
   - `pg_trgm` (for full-text search with trigram similarity)
   - `unaccent` (for accent-insensitive search, via immutable wrapper)

5. **Optional**: For development, you may want to install:
```bash
brew install…
