---
repo: "shibudb-org/shibudb-server"
name: "shibudb-server"
description: "ShibuDB Database Server"
readmeQualityOk: true
url: "https://github.com/shibudb-org/shibudb-server"
language: "C++"
languages: ["C++", "Go"]
languagePcts: [49, 40]
stars: 121
forks: 15
openIssues: 9
closedIssues: 10
watchers: 7
contributors: 8
recentReleases: 2
createdAt: "2025-05-11T15:37:43Z"
lastCommitAt: "2026-08-04T06:10:52Z"
lastReleaseAt: "2026-07-04T08:53:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 36
maintainers: ["prabhat3697", "raman20", "melroy-tellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6a7ab0f063613e25c75d6459af7ec2c1747beedf3d52bea0c0d27d031aa051d/shibudb-org/shibudb-server"
discussionCount: 0
---

# ShibuDb

ShibuDb is a lightweight database system with vector search capabilities powered by FAISS. It provides high-performance storage and retrieval with support for both traditional key-value operations and advanced vector similarity search.

## ✨ Key Features

- **🔍 Vector Search**: Advanced similarity search using FAISS
- **🏷️ Metadata Filtering**: Pre-filter vector search by indexed metadata fields on Flat spaces (`--where` filters)
- **🗄️ Multi-Space Architecture**: Organize data into separate spaces
- **🔐 Role-Based Access Control**: Secure authentication and authorization
- **⚡ High Performance**: Optimized storage with B-tree indexing
- **🌐 Cross-Platform**: Linux (AMD64/ARM64) and macOS (AMD64/ARM64)
- **📊 Dynamic Connection Management**: Runtime connection limit updates
- **🛡️ Data Durability**: Write-Ahead Logging for crash recovery

## 🚀 Quick Start

### Installation

```bash
# From source
git clone https://github.com/shibudb-org/shibudb-server.git
cd shibudb-server

# Start the local server on port 4444.
# This dev script bootstraps an admin user as admin:admin (see scripts/start-local-server.sh).
make start-local-server
```

### Connect and Use

```bash
#…
