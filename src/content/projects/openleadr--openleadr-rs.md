---
repo: "OpenLEADR/openleadr-rs"
name: "openleadr-rs"
description: "OpenADR 3.0 VTN and VEN implementation in Rust"
readmeQualityOk: true
url: "https://github.com/OpenLEADR/openleadr-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["openadr", "rust-library", "energy", "lf-energy"]
stars: 105
forks: 30
openIssues: 20
closedIssues: 61
watchers: 10
contributors: 22
recentReleases: 0
createdAt: "2024-10-01T13:50:22Z"
lastCommitAt: "2026-10-30T10:09:10Z"
lastReleaseAt: "2026-03-10T13:32:01Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 46
maintainers: ["stefanvi", "dependabot[bot]", "joaoag"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c1e0da9781dc3f8235517939f9d3a33be828d338b2e8829f1394c8fe8762edb/OpenLEADR/openleadr-rs"
discussionCount: 5
---

# OpenADR 3.1 in Rust

OpenADR is a protocol for automated demand-response in electricity grids, like dynamic pricing or load shedding. The [OpenADR alliance](https://www.openadr.org/) is responsible for the standard, which can be [downloaded](https://www.openadr.org/specification) free of charge.

This repository contains an **OpenADR 3.1 client (VEN)** library and a **server (VTN)** implementation, both written in Rust.

From OpenLEADR version 0.2, we support OpenADR 3.1. Previous versions implement the OpenADR 3.0 standard.
Please note that OpenADR 3.1 is not backwards compatible with OpenADR 3.0.
At the moment, we don't plan to offer upgrade instructions as we don't expect a need for that.
Feel free to reach out if this assumption seems wrong.

Thanks to our sponsors [ElaadNL](https://elaad.nl/en/) and [Tweede Golf](https://tweedegolf.nl/en)
for making this work possible!

## Interoperability
The code in this repository is written in Rust. Nevertheless, you can easily combine the server, i.e., VTN implementation with a client, i.e., VEN written in any language you prefer, such as Python, Node.js, or Java. This because the VTN is a stand-alone binary and the interactions with…
