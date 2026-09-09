---
repo: "ministryofjustice/CFO-DataManagementSystem"
name: "CFO-DataManagementSystem"
description: "Creating Future Opportunities application for ingesting and processing external data ready for use with CATS"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/CFO-DataManagementSystem"
language: "C#"
languages: ["C#", "TSQL"]
languagePcts: [65, 32]
stars: 7
forks: 4
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-10-29T09:31:00Z"
lastCommitAt: "2026-09-09T08:20:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["samgibsonmoj", "carlsixsmith-moj", "ryankearsley-moj"]
openGraphImageUrl: "https://opengraph.githubassets.com/85b4089f9f5ec24f866aafe4ae5e13132fd5f95fbaafa5811cab38e733e729d0/ministryofjustice/CFO-DataManagementSystem"
---

HMPPS CFO DMS
=============
## Overview
HMPPS Creating Future Opportunities (CFO) - Data Management System (DMS). It is intended for internal use only and is used to process PNOMIS and NDelius offender data to supply CATS (Case Assessment and Tracking System - also used by HMPPS CFO) with accurate offender movements and updates.

## Architecture
CFO DMS is built as a distributed microservices architecture. Data flows through the following pipeline:

**File Ingestion → Parsing/Cleaning → Staging → Import → Running Picture → Blocking/Matching → Clustering → Data Consumption**

### Pipeline Applications
1. **File Ingestion** - [**FileSync**](https://github.com/ministryofjustice/CFO-DataManagementSystem/blob/HEAD/src/FileSync) monitors MinIO/S3/FileSystem storage and syncs incoming files
2. **Parsing/Cleaning** - [**Offloc.Parser**](https://github.com/ministryofjustice/CFO-DataManagementSystem/blob/HEAD/src/Offloc.Parser), [**Offloc.Cleaner**](https://github.com/ministryofjustice/CFO-DataManagementSystem/blob/HEAD/src/Offloc.Cleaner), [**Delius.Parser**](https://github.com/ministryofjustice/CFO-DataManagementSystem/blob/HEAD/src/Delius.Parser) transform raw p-NOMIS and nDelius files…
