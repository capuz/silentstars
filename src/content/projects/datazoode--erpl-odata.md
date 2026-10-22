---
repo: "DataZooDE/erpl-odata"
name: "erpl-odata"
description: "ERPL is a DuckDB extension to connect to API based ecosystems via standard interfaces like OData, GraphQL and REST. This works e.g. for SAP ERP, SAP Ariba, SAP C4C, Microsoft Dynamics and many more."
readmeQualityOk: true
url: "https://github.com/DataZooDE/erpl-odata"
homepage: "https://erpl.io"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["api", "duckdb", "duckdb-extension", "dynamics-365", "fiori", "odata", "rest", "datasphere", "sap-odata", "duckdb-community"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 134
watchers: 2
contributors: 19
recentReleases: 7
createdAt: "2024-06-02T16:16:16Z"
lastCommitAt: "2026-10-22T08:51:32Z"
lastReleaseAt: "2026-09-24T06:44:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["jrosskopf"]
openGraphImageUrl: "https://opengraph.githubassets.com/24748cd7e20b260aedcc802bd4067664c349243793a12957d1759ad9a9b23a53/DataZooDE/erpl-odata"
---

> **Formerly `erpl_web`.** This extension was renamed to `erpl_odata`; all functions, secrets and settings are unchanged. On the community repository the old `erpl_web` name is an alias that installs and loads `erpl_odata`, so existing scripts keep working; from `http://get.erpl.io`, `LOAD erpl_web` fails with a message pointing here. Update your scripts to `INSTALL erpl_odata FROM community; LOAD erpl_odata;`.

# ERPL-OData — DuckDB HTTP + OData + Delta Sharing + SAP + Microsoft 365 Extension

ERPL-OData is a production-grade DuckDB extension that lets you call HTTP/REST APIs, query OData v2/v4 services, read Delta Sharing tables, work with SAP Datasphere and SAP Analytics Cloud, and query Microsoft 365 services (Graph API, Entra ID, Business Central, Dataverse) directly from SQL. It brings secure OAuth2, DuckDB Secrets integration, predicate pushdown, robust tracing, and smart caching into a single, easy-to-use package.

- SEO topics: DuckDB HTTP client, DuckDB REST, DuckDB OData v2/v4, DuckDB Delta Sharing, DuckDB Delta Lake, Databricks Delta, DuckDB SAP Datasphere, DuckDB SAP Analytics Cloud, DuckDB Microsoft 365, DuckDB Microsoft Graph API, DuckDB Entra ID, DuckDB Business…
