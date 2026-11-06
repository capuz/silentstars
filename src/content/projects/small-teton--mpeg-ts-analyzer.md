---
repo: "small-teton/mpeg-ts-analyzer"
name: "mpeg-ts-analyzer"
description: "Analyze MPEG-TS and M2TS streams from the command line, with PSI, timestamps, bitrate, PCR jitter, compliance checks, dumps, and JSON output."
readmeQualityOk: true
url: "https://github.com/small-teton/mpeg-ts-analyzer"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [69, 30]
topics: ["transport-stream", "mpeg", "mpegts", "mpeg-ts", "mpeg2ts", "golang", "go", "parser", "analyzer", "timestamps"]
stars: 39
forks: 5
openIssues: 10
closedIssues: 36
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2016-08-02T13:06:38Z"
lastCommitAt: "2026-11-06T02:44:46Z"
lastReleaseAt: "2026-10-20T11:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 92
undervaluedScore: 60
maintainers: ["small-teton", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28071febbebc6f4f83036e12beba0d811ce36d7ce8ac931ae4e88cae496268cc/small-teton/mpeg-ts-analyzer"
---

# mpeg-ts-analyzer

mpeg-ts-analyzer is an MPEG-2 Transport Stream analyzer (ISO/IEC 13818-1) for
188-byte TS and 192-byte M2TS files. It checks transport-layer timing and gives
a direct pass/fail answer, and it decodes every packet down to its fields and
bits.

## What it checks

- **Max PCR interval**: no greater than 100 ms (ISO/IEC 13818-1, 2.7.2).
- **PCR → PTS/DTS gap** (decode delay): no greater than 1000 ms.
- **PTS/DTS anomalies**: timestamps going backward, wraparound, large forward
  jumps, or DTS later than PTS.
- **Continuity counters** of every PID, and the **PAT/PMT layout** of the range,
  including tables split into sections and version changes.

Results are text for people, or JSON with a published schema for CI and other
programs. See [CLI usage](https://github.com/small-teton/mpeg-ts-analyzer/blob/HEAD/docs/cli/usage.md).

## Desktop GUI

The desktop GUI runs the CLI and shows one analysis in four linked views:
Overview, Timeline, Bitrate and Packets.

Select any decoded field of a packet to see its bytes and its exact bits, even
when a field such as the 13-bit PID spans two bytes:

See the [GUI…
