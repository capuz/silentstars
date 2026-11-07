---
repo: "DataZooDE/duckdb-gdrive"
name: "duckdb-gdrive"
description: "Query Google Drive files directly from DuckDB via a gdrive:// filesystem"
readmeQualityOk: true
url: "https://github.com/DataZooDE/duckdb-gdrive"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [68, 24]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-07-26T16:04:20Z"
lastCommitAt: "2026-11-07T09:30:23Z"
lastReleaseAt: "2026-10-20T04:25:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 49
maintainers: ["jrosskopf"]
openGraphImageUrl: "https://opengraph.githubassets.com/0948c649e1e8ed9b50ea802bb6d4a6c36af7db1386e23b745c264d4cdb1dbe4d/DataZooDE/duckdb-gdrive"
---

**Google Drive in SQL.** Query the Parquet drops, CSV exports and Sheets your
team keeps in Drive directly from DuckDB, and write results back where people
already look. There's no download step and no copy to keep in sync.

```sql
SELECT * FROM 'gdrive://Finance/2026/actuals.parquet';                              -- files
SELECT * FROM read_csv('https://docs.google.com/spreadsheets/d/1x2y3z/edit');       -- a Sheet, by its address
SELECT name, modified_by, web_url FROM read_gdrive_files('gdrive://Finance/**');    -- Drive's metadata
COPY results TO 'gdrive://Finance/forecast.parquet' (FORMAT parquet);               -- and back
```

| | read | write |
|---|---|---|
| **Files** in My Drive and Shared Drives | `read_parquet`, `read_csv`, `read_json`, `glob`, `ATTACH`, DuckLake: anything on a `gdrive://` path or a Drive address | `COPY … TO 'gdrive://…'`, streamed |
| **Sheets and Docs** | the same readers: exported as CSV / text | — |
| **Drive's metadata** | `read_gdrive_files`, `search_gdrive`, `gdrive_versions`, `gdrive_changes`, `gdrive_permissions`, `gdrive_drives` | — |

One install, one secret -- `CREATE SECRET (TYPE gdrive);` reuses your `gcloud`
login. Built for DuckDB…
