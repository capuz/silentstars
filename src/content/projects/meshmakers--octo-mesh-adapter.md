---
repo: "meshmakers/octo-mesh-adapter"
name: "octo-mesh-adapter"
description: "Adapter that manages and executes mesh piplines"
readmeQualityOk: true
url: "https://github.com/meshmakers/octo-mesh-adapter"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-03-24T13:54:05Z"
lastCommitAt: "2026-09-16T08:46:46Z"
lastReleaseAt: "2024-04-09T04:03:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 64
maintainers: ["mmgerald", "mesh-mro", "mmmartinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c58f054eecc4f06ea22a20cfdc023b5cd339f06ae167db968d31122d5f8c91e/meshmakers/octo-mesh-adapter"
---

# Octo Mesh Adapter

An ETL (Extract-Transform-Load) pipeline execution engine that manages and executes mesh pipelines. Built on .NET 10.0 with a flexible, node-based architecture for creating data processing workflows.

## Features

- **Data Extraction**: Retrieve entities from MongoDB, execute queries, enrich data from external sources
- **Data Transformation**: Map values, process documents (Excel, PDF with OCR), integrate AI services
- **Data Loading**: Persist changes to MongoDB, store time-series data in CrateDB, send email notifications
- **Event-Driven Triggers**: HTTP endpoints, entity watchers, command bus, email reception

## Quick Start

### Prerequisites

- .NET 10.0 SDK
- MongoDB
- CrateDB (optional, for time-series data)

### Build

```bash
# Build the solution
dotnet build

# Build in Release mode
dotnet build -c Release

# Build in DebugL mode (uses local NuGet packages from ../nuget)
dotnet build -c DebugL
```

### Run

```bash
dotnet run --project src/MeshAdapter/MeshAdapter.csproj
```

## Project Structure

```
octo-mesh-adapter/
├── src/
│   ├── MeshAdapter/           # Main executable service
│   ├── MeshAdapter.Sdk/       # SDK with pipeline nodes and…
