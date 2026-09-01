---
repo: "ecmwf/fdb"
name: "fdb"
description: "Fdb is a domain-specific object store for meteorological objects"
readmeQualityOk: true
url: "https://github.com/ecmwf/fdb"
homepage: "https://sites.ecmwf.int/docs/fdb"
language: "C++"
languages: ["C++"]
languagePcts: [65]
topics: ["fdb", "mars"]
stars: 43
forks: 16
openIssues: 12
closedIssues: 10
watchers: 12
contributors: 72
recentReleases: 0
createdAt: "2019-10-11T09:20:44Z"
lastCommitAt: "2026-09-01T08:46:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 53
maintainers: ["tbkr", "mcakircali", "danovaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b8ab01eb2ec1945f08a3e6afa26e65405c56f492d474fc1fbda61faa84be3e/ecmwf/fdb"
---

> \[!IMPORTANT\]
> This software is **Graduated** and subject to ECMWF's guidelines on [Software Maturity](https://github.com/ecmwf/codex/raw/refs/heads/main/Project%20Maturity).

# FDB

FDB (Fields DataBase) is a domain-specific object store developed at
ECMWF for storing, indexing and retrieving GRIB data. Each GRIB message
is stored as a field and indexed trough semantic metadata (i.e. physical
variables such as temperature, pressure, \...). A set of fields can be
retrieved specifying a request using a specific language developed for
accessing [MARS]() Archive

FDB consists of several artefacts:

## libfdb.so

In-process database with C++ API

## fdb-tools

Commandline tools to interact with FDB trough CLI
[tools](https://github.com/ecmwf/fdb/blob/HEAD/docs/fdb/cli_tools/index.rst)

## z3fdb

A python-zarr v3 store implementation that provides a virtual zarr store
from FDB.

### Requirements

Runtime dependencies:

eccodes
:   <http://github.com/ecmwf/eccodes>

eckit
:   <http://github.com/ecmwf/eckit>

metkit
:   <http://github.com/ecmwf/metkit>

Build dependencies:

CMake
:   For use and installation see <http://www.cmake.org/>

ecbuild
:   ECMWF library of CMake macros ()…
