---
repo: "xnorpx/keeppeek"
name: "keeppeek"
description: "Keep Peek NVR"
readmeQualityOk: true
url: "https://github.com/xnorpx/keeppeek"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["cctv", "ip-camera", "local-first", "network-video-recorder", "nvr", "onvif", "rtsp", "rust", "video-surveillance", "webrtc"]
stars: 5
forks: 0
openIssues: 41
closedIssues: 37
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-10T20:41:07Z"
lastCommitAt: "2026-08-30T00:43:01Z"
lastReleaseAt: "2026-08-29T16:42:39Z"
status: "newborn"
tags: ["hidden_gem", "funded", "under_pressure"]
healthScore: 89
undervaluedScore: 49
maintainers: ["xnorpx", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ec2d819fad5ddc94fcd7c5f67b15c1fc5c919990126bf2b52642d4fb9a76ad/xnorpx/keeppeek"
fundingLinks: ["KO_FI:https://ko-fi.com/xnorpx"]
discussionCount: 2
---

</div>

> **Status:** KeepPeek is currently a proof of concept (POC) and is not yet production-ready.

KeepPeek is a local-first network video recorder (NVR) and Media Gateway for IP cameras. The
focused Rust service records camera streams as MP4, serves the Svelte browser interface, and lets
independent viewers, inference services, and integrations consume or publish media and events.

## Documentation

The [KeepPeek Book](https://xnorpx.github.io/keeppeek/) is the primary documentation.
The public protocol is
documented separately in the [`api/` directory](https://github.com/xnorpx/keeppeek/blob/HEAD/api/README.md).
The [evidence export lifecycle](https://github.com/xnorpx/keeppeek/blob/HEAD/docs/evidence-exports.md) documents durable history, duplicate
handling, deadlines, retention, authorization, and download integrity.
The [recording integrity guide](https://github.com/xnorpx/keeppeek/blob/HEAD/docs/recording-integrity.md) documents coverage, retention,
gap evidence, pagination, metrics, and alert inputs.

## License

Copyright (C) 2026 Marcus Asteborg.

KeepPeek is licensed under the [GNU Affero General Public License version…
