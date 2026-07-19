---
repo: "boatkit-io/n2k"
name: "n2k"
description: "Golang NMEA 2000 parsing library"
readmeQualityOk: true
url: "https://github.com/boatkit-io/n2k"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 8
forks: 4
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-11-13T23:56:41Z"
lastCommitAt: "2026-07-19T06:14:20Z"
lastReleaseAt: "2024-07-24T03:14:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 66
maintainers: ["deregtd", "inquestruss", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f669d21d6b7860494c940666f30c16ff77ff02f96afe111b1036c148856d0d03/boatkit-io/n2k"
---

# boatkit-io/n2k

`boatkit-io/n2k` is a Go library for reading, decoding, encoding, and writing
NMEA 2000 traffic. It provides:

- Endpoint implementations for CAN transports and captured logs.
- A decode/encode service that turns CAN frames into typed PGN structs.
- Generated public PGN types in `pkg/pgn`, based on CANboat data.
- A higher-level `pkg/node` API for standard NMEA 2000 node behavior such as
  address claiming, request handling, heartbeats, and observed-device tracking.

NMEA 2000 is a proprietary marine networking standard. This project relies on
the public reverse-engineering work in
[canboat](https://github.com/canboat/canboat) for PGN definitions.

## Packages

### `pkg/pgn`

Generated public PGN structs, constants, and enum values. Application code uses
these types when subscribing to decoded traffic or publishing messages.

### `pkg/endpoint`

Transport boundary for CAN frames. Endpoints implement:

```go
type Endpoint interface {
    Run(ctx context.Context) error
    Close() error
    SetOutput(MessageHandler)
    WriteFrame(can.Frame)
}
```

Current endpoint packages include SocketCAN, USB CAN, raw replay, and N2K file
support.

### `pkg/n2k`

The public…
