---
repo: "julian-siebert/buffy"
name: "buffy"
description: "Build and publish Protocol Buffer libraries for Go, Java, Kotlin, Rust, Python, JavaScript and TypeScript from a single set of .proto files."
readmeQualityOk: true
url: "https://github.com/julian-siebert/buffy"
homepage: "https://books.julian-siebert.de/buffy"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["grpc", "protobuf", "protobuf-compiler", "protocol-buffer", "protocol-buffer-compiler", "protocol-buffers", "code-generation", "go", "golang", "java"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-04-14T19:03:47Z"
lastCommitAt: "2026-08-01T06:14:22Z"
lastReleaseAt: "2026-05-29T08:39:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 50
maintainers: ["julian-siebert", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1210793561/a749827d-8715-4ab1-aa9e-52d2679c8c7d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061716Z&X-Amz-Expires=300&X-Amz-Signature=27a622af5f5bab6c89e30d1af8590109f1c0317bdeaeb8deea6f0b43ec7907f1&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMzNiwibmJmIjoxNzg1NTY1MDM2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.psLfHDH5HNW07ArfTLfdSz3ufgehfX7zpVPiL_nptms"
discussionCount: 0
---

</p>

<h1 align="center">buffy</h1>

  <em>A cute Protobuf manager (in alpha)</em>
</p>

  </a>
  </a>
  </a>
</p>

---

Buffy builds and publishes Protocol Buffer schemas across multiple language ecosystems from a single configuration file. Define your schema once, ship it to crates.io, Maven Central, npm, and Go modules - without juggling five build systems.

## Supported targets

| Language   | Variants                | Destination                              |
|------------|-------------------------|------------------------------------------|
| Go         | `git`                   | Git remote (Go modules use Git tags)     |
| Java       | `maven_central`, `git`  | Sonatype Central Portal                  |
| Kotlin     | `maven_central`, `git`  | Sonatype Central Portal                  |
| Rust       | `crate`, `git`          | crates.io or another Cargo registry      |
| JavaScript | `npm`, `git`            | npmjs.org or any npm-compatible registry |
| TypeScript | `npm`, `git`            | npmjs.org or any npm-compatible registry |
| Python     | `pypi`, `git`           | pypi.org                                 |

## Installation

```sh
curl -sSL…
