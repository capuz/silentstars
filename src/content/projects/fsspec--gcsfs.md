---
repo: "fsspec/gcsfs"
name: "gcsfs"
description: "Pythonic file-system interface for Google Cloud Storage"
readmeQualityOk: true
url: "https://github.com/fsspec/gcsfs"
homepage: "http://gcsfs.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["hacktoberfest"]
stars: 395
forks: 179
openIssues: 86
closedIssues: 278
watchers: 9
contributors: 119
recentReleases: 2
createdAt: "2017-01-11T19:13:20Z"
lastCommitAt: "2026-08-11T04:48:22Z"
lastReleaseAt: "2026-07-06T06:11:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 42
maintainers: ["zhixiangli", "Yonghui-Lee", "ankitaluthra1"]
openGraphImageUrl: "https://opengraph.githubassets.com/a09dc72d974cf656d48599f45daf2407c1a5054038d3410188adcf50990da3fd/fsspec/gcsfs"
discussionCount: 2
---

# gcsfs

[|Build Status|](https://github.com/fsspec/gcsfs/actions)
[|Docs|](https://gcsfs.readthedocs.io/en/latest/?badge=latest)

**GCSFS** is a Python library that provides a familiar, file-system-like interface to [Google Cloud Storage (GCS)](https://docs.cloud.google.com/storage/docs/introduction). Built on top of [fsspec](https://github.com/fsspec), it allows you to interact with cloud buckets as if they were local directories, making it a favorite for data scientists and engineers.

-----

## Getting Started

### Installation

Install via pip or conda:

```bash
# Using pip
pip install gcsfs

# OR using conda
conda install -c conda-forge gcsfs
```

### Basic Usage

```python
import gcsfs

# Initialize the filesystem
fs = gcsfs.GCSFileSystem(project='my-google-project')

# List files in a bucket
files = fs.ls('my-bucket')

# Read a file directly into a string/bytes
with fs.open('my-bucket/data.txt', 'rb') as f:
    content = f.read()
```

-----

## Specialized Bucket Support

GCSFS now automatically supports advanced Google Cloud Storage features through its `ExtendedFileSystem` implementation.

### 1\. Hierarchical Namespace (HNS)

Hierarchical Namespace (HNS) replaces the…
