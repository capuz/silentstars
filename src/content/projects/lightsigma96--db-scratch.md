---
repo: "lightsigma96/db_scratch"
name: "db_scratch"
description: "A SQL Database Created from Scratch in C++ along with TUI library from scratch"
readmeQualityOk: true
url: "https://github.com/lightsigma96/db_scratch"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["cpp", "databases"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-08T13:52:22Z"
lastCommitAt: "2026-11-03T19:06:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 47
maintainers: ["lightsigma96"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c041d137856f469f4f5893b3f7c4241d73f3027466aea9858bad8db0cda2087/lightsigma96/db_scratch"
---

A single-threaded relational database written in C++ to explore database internals from storage to query execution.

Database Implements:

- The database implements buffer pool manager for maintaining pages from db file into memory.
- It also supports heap scan and index scan (B+ Tree).
- It has lexer and parser for parsing SQL queries and checking grammar.
- A query planner creating a plan for execution and executor executing the plan in a volcano iterator style.

It supports basic operations such as:
- Creating schemas
- Creating tables
- Inserting rows

Supported data types:
- INT
- STRING
- FLOAT

The next goal is to support more SQL quires (like `JOINS` etc) and make this durable and robust

---

## Build and Run (Local)

Build the project using CMake:

    cmake -S . -B build
    cmake --build build

Run the database:

    ./build/db_scratch

---

## Using Docker

A Dockerfile is provided to build and run the project inside a container.

### Build the image

    docker build -t db_scratch .

### Run the container (interactive)

    docker run -it db_scratch

Inside the container:

    ./build/db_scratch

---

## Notes

- The Docker image includes build tools and is intended…
