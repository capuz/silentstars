---
repo: "spannm/jackcess"
name: "jackcess"
description: "A pure Java library for reading / writing Microsoft Access databases"
readmeQualityOk: true
url: "https://github.com/spannm/jackcess"
homepage: "https://javadoc.io/doc/io.github.spannm/jackcess"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["access", "microsoft", "msaccess", "accdb", "database", "java", "jdbc", "mdb", "pure-java"]
stars: 25
forks: 4
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 7
recentReleases: 3
createdAt: "2024-02-12T11:04:13Z"
lastCommitAt: "2026-10-03T22:00:00Z"
lastReleaseAt: "2026-09-13T10:54:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 72
maintainers: ["spannm", "congjun-yang"]
openGraphImageUrl: "https://opengraph.githubassets.com/56078275564594f4649376917f11fea96a5f4cf80d8fda9411758b1a96f19dce/spannm/jackcess"
discussionCount: 2
---

**Jackcess** is an open-source Java library for reading from and writing to Microsoft Access databases (`.mdb` and `.accdb`).

Unlike JDBC-based solutions, Jackcess provides a direct, low-level API to manipulate Access files without the overhead of a database engine. It is the library powering [UCanAccess](https://github.com/spannm/ucanaccess).

Jackcess is not an application. There is no GUI. It's a library, intended for other developers to build Java applications.

## ✨ Key Features

* **Pure Java**: 100% Java implementation. No native dependencies, no DLLs, no MS Access installation required.

* **Wide Version Support**: Supports Access versions 2000, 2003, 2007, 2010, 2013, 2016, and 2019.

* **Read & Write**: Create tables, insert rows, update data, and read complex schemas directly from the file.

* **Schema Manipulation**: Programmatically create or modify table structures, indexes, and relationships.

## 🛠 Tech Stack & Dependencies

* **Java Version**: 8 or higher (LTS versions like Java 17 and 21 are fully supported and tested).

* **Optional Dependency**:
  * [Apache POI](https://poi.apache.org/) — only needed for compound OLE attachment data; everything else has zero…
