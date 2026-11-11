---
repo: "Abhinav-Prabhakar/AnnasArchiveMCP"
name: "AnnasArchiveMCP"
description: "Rust MCP server for book search and safe downloads 📦"
readmeQualityOk: true
url: "https://github.com/Abhinav-Prabhakar/AnnasArchiveMCP"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["books", "mcp", "annas-archive"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-05-10T15:10:15Z"
lastCommitAt: "2026-11-11T11:20:36Z"
lastReleaseAt: "2026-11-11T09:32:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Abhinav-Prabhakar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4298eb38fe865a248d30703df2d8250371a6c3fe30d0d55fe5b436fbdcb75d17/Abhinav-Prabhakar/AnnasArchiveMCP"
---

# AnnasArchiveMCP

A Rust MCP server for searching books through Anna's Archive via RapidAPI and downloading selected results safely to your machine.

## How to use

This section is a practical manual for getting AnnasArchiveMCP running and using it from an MCP client.

### 1. Build the server

Clone the repository and compile the binary:

```sh
git clone <your-repo-url>
cd AnnasArchiveMCP
cargo build --release
```

The compiled binary will be:

```sh
target/release/annas-archive-mcp
```

### 2. Get a RapidAPI key

AnnasArchiveMCP needs a RapidAPI key that has access to the Anna's Archive API.

Set it in your environment before starting the server:

```sh
export RAPIDAPI_KEY=your_api_key_here
```

You can also place it in a local `.env` file if that fits your setup better.

### 3. Configure optional defaults

You can run with only `RAPIDAPI_KEY`, but these optional variables are useful:

- `RAPIDAPI_HOST` — defaults to `annas-archive-api.p.rapidapi.com`
- `ANNAS_ARCHIVE_MCP_DOWNLOAD_DIR` — default folder for downloaded files
- `ANNAS_ARCHIVE_MCP_OPEN_AFTER_DOWNLOAD` — `true` or `false`
- `ANNAS_ARCHIVE_MCP_CREATE_SUBDIRS` — `true` or `false`
- `ANNAS_ARCHIVE_MCP_OVERWRITE_DEFAULT`…
