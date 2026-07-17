---
repo: "dweekly/ftr"
name: "ftr"
description: "Fast TraceRoute: massively parallel CLI & Rust library for network observation"
readmeQualityOk: true
url: "https://github.com/dweekly/ftr"
homepage: "http://ftr.networkweather.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["async", "cli", "networking", "rust", "traceroute"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-02T22:05:58Z"
lastCommitAt: "2026-07-17T05:59:44Z"
lastReleaseAt: "2025-08-15T04:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["dweekly"]
openGraphImageUrl: "https://opengraph.githubassets.com/9babf1e66f2d2e1901b8ef32e8bf4bb52a262519943d51076ba8be150cf1bc65/dweekly/ftr"
---

# ftr (Fast TraceRoute)

A fast, parallel traceroute implementation with automatic ASN lookup. Available as both a command-line tool and a Rust library.

## Features

- **High-Performance** - Parallel probing and smart caching for faster results
- **Library API** - Full-featured async Rust library with structured error handling
- **ASN Enrichment** - Automatic AS number and organization lookup with caching
- **ISP Detection** - Identifies your ISP and classifies network segments
- **Cross-Platform** - Works on Linux, macOS, Windows, FreeBSD, and OpenBSD
- **Multiple Protocols** - ICMP and UDP support with automatic fallback
- **JSON Output** - Structured output for programmatic use
- **Minimal Dependencies** - Efficient design with focus on performance

## Quick Start

### As a CLI Tool

```bash
# Basic usage
ftr google.com

# With custom options
ftr --json --max-hops 20 google.com
```

### As a Library

```rust
use ftr::{Ftr, TracerouteConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create an Ftr instance
    let ftr = Ftr::new();
    
    // Simple trace
    let result = ftr.trace("google.com").await?;
    println!("Found {} hops",…
