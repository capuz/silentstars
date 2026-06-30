---
repo: "doubleopen-io/dos"
name: "dos"
description: "The Double Open Server (DOS) companion for ORT."
url: "https://github.com/doubleopen-io/dos"
homepage: "https://api.doubleopen.io/docs/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 18
forks: 2
openIssues: 12
closedIssues: 389
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2023-03-06T11:42:33Z"
lastCommitAt: "2026-06-30T06:52:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 67
maintainers: ["renovate[bot]", "lamppu"]
openGraphImageUrl: "https://opengraph.githubassets.com/471523b5f9bf7606f721c6348710d17703e93d169038119ee94a9f7dbc474fc2/doubleopen-io/dos"
---

</p>

<h3 align="center">Double Open Server</h3>

  Scanner server and curation frontend for open source license compliance.
</p>

# About the Project

Double Open Server (DOS) is a server application that scans the source code of open source
components for license findings, stores the scan results for use in license compliance pipelines and
provides a graphical interface for manually curating the license findings. DOS is currently in early
development.

DOS utilizes [ScanCode Toolkit] for scanning the files and is designed to work with
[OSS Review Toolkit] as a part of its pipeline.

# Setting up the development environment

To run this project you will need Node.js, npm and Docker installed.

1.  Clone the repository

    ```shell
    git clone https://github.com/doubleopen-project/dos.git
    ```

2.  Go to project root `cd dos` and install dependencies with `npm i`

3.  Set needed environment variables.

    Create a .env file in the project root, and set the following environment variables in the file:

    ```shell
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
    ```

    See…
