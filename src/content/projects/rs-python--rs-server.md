---
repo: "RS-PYTHON/rs-server"
name: "rs-server"
description: "This repository contains rs-server components. The rs-server provides SpatioTemporal Asset Catalog (STAC) services and external data access (from CADIP, LTA, AUXIP, PRIP stations). A fine access control is also provided."
readmeQualityOk: true
url: "https://github.com/RS-PYTHON/rs-server"
homepage: "https://home.rs-python.eu/rs-documentation/rs-server/docs/doc/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["copernicus", "reference-system", "server", "stac", "rs-server", "software"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2023-10-09T14:34:44Z"
lastCommitAt: "2026-08-28T14:23:51Z"
lastReleaseAt: "2024-06-21T13:06:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 69
maintainers: ["alinbutu", "vprivat-ads", "ecombelles-csgroup"]
openGraphImageUrl: "https://opengraph.githubassets.com/74938b98016f3798a88ba90ee98779c5ff9a963ae1997950fef332c35730bd26/RS-PYTHON/rs-server"
---

---

Quick links
===========

-   Deployed services: <https://dev-rspy.esa-copernicus.eu/docs>

-   Online documentation: <https://home.rs-python.eu/rs-documentation/rs-server/docs/doc/>

-   SonarQube reports:
    <https://sonarqube.ops-csc.com/dashboard?id=RS-PYTHON_rs-server_AYw0m7ixvQv-JMsowILQ&branch=develop>

Overview
========

RS server is a toolbox that allows users to retrieve external data used
by Copernicus processing chains, store them in internal S3 buckets and
catalog them.

Its goal is to be used by the Copernicus processing chains to perform
their works.

The toolbox exposes REST endpoints enabling users to :

-   search for external data

-   download external data into a S3 bucket

-   catalog data

-   search for data in the catalog

All these functionalities are reserve to authorized users only. The
permissions are technical and/or functional.

Installing the rs-server
========================

### Local mode

Refer to [the rs-demo documentation](https://github.com/RS-PYTHON/rs-demo?tab=readme-ov-file#run-on-local-mode).

### Cluster mode

Refer to [the rs-helm documentation](https://github.com/RS-PYTHON/rs-helm?tab=readme-ov-file#usage).

Using the rs-server…
