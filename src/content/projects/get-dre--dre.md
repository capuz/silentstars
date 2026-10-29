---
repo: "get-dre/dre"
name: "dre"
description: "Reports as code: SQL and YAML in git, built into Excel, CSV, fixed-width, PDF or HTML files and delivered to email, SFTP, S3, Databricks or Slack, plus headline messages to Slack, Teams and Google Chat. The dbt-style workflow, for reporting."
readmeQualityOk: true
url: "https://github.com/get-dre/dre"
homepage: "https://getdre.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["cli", "csv", "data-engineering", "databricks", "dbt", "duckdb", "excel", "fixed-width", "postgres", "report-automation"]
stars: 8
forks: 3
openIssues: 31
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-25T02:12:08Z"
lastCommitAt: "2026-10-29T21:23:33Z"
lastReleaseAt: "2026-09-28T14:12:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 61
maintainers: ["allenhori", "dependabot[bot]", "nijanthan-dev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1386591789/f50984c1-a5d1-405b-93ee-9375145e1c32"
---

# DRE

**DRE**, the **Declarative Reporting Engine**, is open-source reports as code. You keep each report
as `.sql` and YAML files in git; DRE runs the SQL against your databases (each tab of a workbook can
come from a different one, and tables can be declared as dbt-style sources), writes the result as
csv, delimited, fixed-width, parquet or xlsx (including multi-sheet workbooks, number formats,
formulas and totals rows, and branded Excel templates), or as html or pdf documents from an HTML
template (one per row if needed, such as a statement for every member, optionally
password-protected), and delivers the file wherever it needs to go, zipped if you like: email,
SFTP/FTP, S3, GCS, Azure Blob, Databricks Volumes or Slack. A report can also send a
headline [message](https://github.com/get-dre/dre/blob/HEAD/docs/messages.md) built from its results, to Slack or email (Microsoft Teams and
Google Chat are in preview). It runs on whatever scheduler you already have: cron, Airflow, Dagster, Databricks Jobs.

If you know dbt, you already know DRE: a project of SQL and YAML, Jinja and macros, `ref()`,
`source()`, folder config, tags, selectors, profiles and targets. dbt builds your…
