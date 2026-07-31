---
repo: "terror/val"
name: "val"
description: "An arbitrary precision calculator language"
readmeQualityOk: true
url: "https://github.com/terror/val"
homepage: "https://terror.github.io/val/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 105
forks: 3
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-04-11T20:59:09Z"
lastCommitAt: "2026-07-31T06:29:27Z"
lastReleaseAt: "2025-04-19T18:27:33Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 49
maintainers: ["terror", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/964820196/1e78390a-c142-45fa-88fa-07f42502a4a6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063212Z&X-Amz-Expires=300&X-Amz-Signature=aee21a71012fe81277a0c23928a826441ac7daca5de171c4437dbf8e8c0fff66&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgzMiwibmJmIjoxNzg1NDc5NTMyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.8xSJgT1JnSJmWK-DjpSSrSaZWIHfeF3SiACxC6lQfDI"
---

## val

**val** (e**val**) is a simple arbitrary precision calculator language built
on top of [**chumsky**](https://github.com/zesterer/chumsky) and
[**ariadne**](https://github.com/zesterer/ariadne).

## Installation

`val` should run on any system, including Linux, MacOS, and the BSDs.

The easiest way to install it is by using [cargo](https://doc.rust-lang.org/cargo/index.html),
the Rust package manager:

```bash
cargo install val
```

Otherwise, see below for the complete package list:

#### Cross-platform

<table>
  <thead>
    <tr>
      <th>Package Manager</th>
      <th>Package</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href=https://www.rust-lang.org>Cargo</a></td>
      <td><a href=https://crates.io/crates/val>val</a></td>
      <td><code>cargo install val</code></td>
    </tr>
    <tr>
      <td><a href=https://brew.sh>Homebrew</a></td>
      <td><a href=https://github.com/terror/homebrew-tap>terror/tap/val</a></td>
      <td><code>brew install terror/tap/val</code></td>
    </tr>
  </tbody>
</table>

### Pre-built binaries

Pre-built binaries for Linux, MacOS, and Windows can be found on [the releases…
