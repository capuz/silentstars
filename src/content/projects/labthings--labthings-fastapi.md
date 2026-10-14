---
repo: "labthings/labthings-fastapi"
name: "labthings-fastapi"
description: "An implementation of a LabThings server using fastapi"
readmeQualityOk: true
url: "https://github.com/labthings/labthings-fastapi"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 9
forks: 3
openIssues: 64
closedIssues: 98
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2023-03-22T15:47:48Z"
lastCommitAt: "2026-10-14T08:58:48Z"
lastReleaseAt: "2025-07-07T12:11:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["rwb27", "bprobert97", "julianstirling"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eafcb749906e844a3d9a30d72b418a5a0b5bf521d86a80509d16607a295ea9b/labthings/labthings-fastapi"
---

# labthings-fastapi

A FastAPI based library to implement a [Web of Things] interface for laboratory hardware using Python. This is a ground-up rewrite of [python-labthings], based on FastAPI and Pydantic. It is the underlying framework for v3 of the [OpenFlexure Microscope software].

Documentation, including install instructions, is available on [readthedocs].

## Installation

See [readthedocs] for installation instructions that are automatically tested. You can install this package with `pip install labthings-fastapi`.

### Installation Notes

`labthings-fastapi` supports **Python 3.10, 3.11, 3.12, and 3.13**. The upper limit is strictly capped at 3.13 due to current `pydantic-core` dependencies.

> **Note: Windows Installations on devices with ARM processors**
>
> Installing on Windows devices with ARM processors requires Visual Studio with the **"Desktop development with C++"** workload enabled. This is necessary because `pydantic` relies on Rust, which in turn requires C++ build tools to compile.
>
> *If you are using a centrally managed machine, you will need administrator privileges to install these system-level dependencies.*

For instructions on how to set up a…
