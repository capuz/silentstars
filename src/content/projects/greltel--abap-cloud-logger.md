---
repo: "greltel/abap-cloud-logger"
name: "abap-cloud-logger"
description: "ABAP Cloud-ready Logger"
readmeQualityOk: true
url: "https://github.com/greltel/abap-cloud-logger"
language: "ABAP"
languages: ["ABAP"]
languagePcts: [100]
topics: ["abap", "abap-development", "abap-oo", "abapgit", "sap", "abap-test-cockpit", "abaplint", "abap-cloud"]
stars: 26
forks: 8
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-16T10:22:51Z"
lastCommitAt: "2026-09-16T08:47:05Z"
lastReleaseAt: "2026-04-26T20:32:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["greltel", "dependabot[bot]", "larshp"]
openGraphImageUrl: "https://opengraph.githubassets.com/06a1b077db8419020e57ab862e4e54d71b60ee1214dfaf5968fef5d91d540391/greltel/abap-cloud-logger"
---

# ABAP Cloud Logger

A fluent, unit-tested logging library for **ABAP for Cloud Development** (SAP S/4HANA Cloud,
SAP BTP ABAP Environment, S/4HANA on-premise with ABAP Cloud). It wraps the released
Application Log API (`cl_bali_log`) and adds the things you end up writing yourself every
time: chaining, an in-memory copy of the log, conversions to BAPIRET2 and RAP messages,
sticky context, a stopwatch, and a trail of the problems the logger itself swallowed.

```abap
DATA(logger) = zcl_cloud_logger=>get_instance( object    = 'ZMYAPP'
                                               subobject = 'IMPORT' ).

logger->set_context( |Order { order_id }|
  )->log_string_add( `Validation started`
  )->log_bapiret2_table_add( bapiret2_t   = bapi_return
                             min_severity = zif_cloud_logger=>c_message_type-warning
  )->log_exception_add( import_error
  )->clear_context(
  )->save_application_log( ).
```

## Contents

1. [Why not `cl_bali_log` directly?](#why-not-cl_bali_log-directly)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Quick start](#quick-start)
5. [Usage](#usage)
6. [API overview](#api-overview)
7. [Errors](#errors)
8.…
