---
repo: "CUBRID/cubrid"
name: "cubrid"
description: "CUBRID is a comprehensive open source relational database management system highly optimized for Web Applications."
readmeQualityOk: true
url: "https://github.com/CUBRID/cubrid"
homepage: "http://www.cubrid.org"
language: "C"
languages: ["C"]
languagePcts: [75]
topics: ["rdbms", "dbms", "sql", "database", "cubrid", "oltp"]
stars: 291
forks: 143
openIssues: 0
closedIssues: 0
watchers: 30
contributors: 77
recentReleases: 0
createdAt: "2016-02-19T10:25:32Z"
lastCommitAt: "2026-09-17T08:52:11Z"
lastReleaseAt: "2021-01-21T02:34:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 40
maintainers: ["tw-kang", "kwangsoochae", "cubrid-submodule-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa0f7010707ebd9e36f3db4c2aba583a6d5761ac1079e22429346fa8fddfa95/CUBRID/cubrid"
---

#  CUBRID Database Management System

CUBRID is a DBMS supported by an active community of open source developers 
and provides better performance and features necessary for Web services.

Below you will see the brief list of sections to guide you to easily get started.

## Download CUBRID

- http://www.cubrid.org/downloads
- http://ftp.cubrid.org

## Getting Started

Follow tutorials at: 
- http://cubrid.org/getting_started

## Build from Source

### Build Requirements

- A modern C++ compiler capable of C++ 17 is required:
  - GCC 8.3 or newer (devtoolset-8 is recommended)
  - Visual Studio 2017 version 15.0 or newer
- A Java Developer Kit (JDK) 1.8 or newer required
- CMake 3.21 or newer
- For more information about 3rdparty libraries, see [3rdparty/README.md](https://github.com/CUBRID/cubrid/blob/HEAD/3rdparty/README.md)

### How to Install the Build Requirements

  Please refer to the following link:

- [install_build_requirements.md](https://github.com/CUBRID/cubrid/blob/HEAD/docs/install_build_requirements.md)

### How to Build CUBRID

On Linux:
```
./build.sh
```
To see usage, run `./build.sh -h`

On Windows:
```
.\win\build.bat /out ${OUTPUT_DIR} dist
```
To see usage,…
