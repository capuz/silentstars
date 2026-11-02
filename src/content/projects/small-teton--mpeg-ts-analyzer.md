---
repo: "small-teton/mpeg-ts-analyzer"
name: "mpeg-ts-analyzer"
description: "Analyze MPEG-TS and M2TS streams from the command line, with PSI, timestamps, bitrate, PCR jitter, compliance checks, dumps, and JSON output."
readmeQualityOk: true
url: "https://github.com/small-teton/mpeg-ts-analyzer"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [69, 31]
topics: ["transport-stream", "mpeg", "mpegts", "mpeg-ts", "mpeg2ts", "golang", "go", "parser", "analyzer", "timestamps"]
stars: 39
forks: 4
openIssues: 12
closedIssues: 30
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2016-08-02T13:06:38Z"
lastCommitAt: "2026-11-02T15:17:28Z"
lastReleaseAt: "2026-10-20T11:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 91
undervaluedScore: 59
maintainers: ["small-teton", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e64c019521abbf84b6297f990bb8ad480c65bfb7fdb195b0a5c45f88c93ab123/small-teton/mpeg-ts-analyzer"
---

# mpeg-ts-analyzer

mpeg-ts-analyzer is an MPEG-2 Transport Stream analyzer (ISO/IEC 13818-1).

It parses TS packets and checks whether the stream conforms to the following requirements defined in the specification:

- **Max PCR interval** should be no greater than 100 ms (ISO/IEC 13818-1, Section 2.7.2); intervals are not measured across a PCR that carries `discontinuity_indicator`, and a PCR wraparound is measured as a normal interval (see [OPTIONS.md](https://github.com/small-teton/mpeg-ts-analyzer/blob/HEAD/OPTIONS.md#timing-compliance-verdicts-and---fail-on-error))
- **PCR-PTS/DTS max gap** (decode delay) should be no greater than 1000 ms; DTS is used when both timestamps are present, otherwise PTS is used
- **PTS/DTS anomalies** — timestamps going backward, 33-bit wraparound, large forward jumps (splicing/ad insertion), or DTS later than PTS — are detected and reported (always on; silent when the stream is healthy)

In addition, it can dump various MPEG-2 TS internal structures for stream investigation:

- TS header and payload
- Adaptation field (including PCR)
- PSI tables (PAT/PMT) with CRC32 validation, assembled across every section of the table
- PAT/PMT version…
