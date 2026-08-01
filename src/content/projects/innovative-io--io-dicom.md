---
repo: "innovative-io/io-dicom"
name: "io-dicom"
description: "Innovative IO Golang DICOM library"
readmeQualityOk: true
url: "https://github.com/innovative-io/io-dicom"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 12
forks: 12
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 8
createdAt: "2022-06-02T17:11:00Z"
lastCommitAt: "2026-08-01T06:12:41Z"
lastReleaseAt: "2026-06-03T00:41:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 89
maintainers: ["JustSomeHack"]
openGraphImageUrl: "https://opengraph.githubassets.com/22496be245a389626edd939c9380da2078c3fdf0615badc78e8850dc328ac344/innovative-io/io-dicom"
---

# io-dicom

Innovative IO DICOM Golang Library

## Compatibility

- Go 1.26+
- No `cgo` required. The repository contains no C source code.
- Pure-Go SQLite driver (`modernc.org/sqlite`).

## Project Structure

- `cmd/`: executable entrypoints
  - `cmd/io-dicom/`: main CLI client/server utility
  - `cmd/compare/`: DICOM metadata comparison utility
  - `cmd/utilities/`: helper binary for utility workflows
- `media/`: DICOM object model, parsing, encoding, and pixel pipeline orchestration
- `network/`: DICOM network protocol data units and association primitives, including optional raw encoded PDU capture callbacks at the transport boundary that expose exact inbound wire bytes and exact outbound serialized bytes
- `services/`: SCU/SCP high-level service APIs, including plumbing for session-level raw PDU observers
- `dimse/`: DIMSE command handlers (C-ECHO, C-FIND, C-GET, C-MOVE, C-STORE, N-service response helpers)
- `dictionary/`: DICOM tags, SOP classes, transfer syntaxes, coding schemes
- `codecs/jpeg/`: JPEG codec implementation and pure-Go fallback behavior
- `codecs/jpeg2000/`: JPEG2000 codec interface and pure-Go fallback behavior
- `transcoder/`: RLE…
