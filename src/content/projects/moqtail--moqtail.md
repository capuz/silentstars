---
repo: "moqtail/moqtail"
name: "moqtail"
description: "Draft 16-compliant MOQ Transport (MOQT) protocol libraries for publisher, subscriber and relay components, featuring real-time, live and on-demand demo applications using the LOC and CMSF formats."
readmeQualityOk: true
url: "https://github.com/moqtail/moqtail"
homepage: "http://player.moqtail.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 49]
topics: ["moq", "streaming", "media", "real-time", "moqt", "vod"]
stars: 79
forks: 19
openIssues: 45
closedIssues: 79
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2025-06-24T05:54:25Z"
lastCommitAt: "2026-07-21T06:10:27Z"
lastReleaseAt: "2025-09-30T13:06:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["zafergurel", "acbegen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b58c0159d9da4ca5a69be21e36be5608a163470f8564c5dc8d2f65dd7659c07/moqtail/moqtail"
discussionCount: 0
---

<br>
	<br>
	</a>
	</a>
	</a>
	</a>
	<br>
	<br>
	Draft 16 MOQ Transport (MOQT) libraries and relay components.<br>
	Rust and TypeScript tooling for publishers, subscribers, demos and relay deployments.
</p>

# MOQtail

MOQtail is a draft 16-compliant MOQT toolkit for building publisher, subscriber, and relay applications. The repository includes Rust and TypeScript libraries, reference clients, and a relay that can be run locally or pulled as a container image from GHCR. The relay and Rust client support both WebTransport (`https://`) and raw QUIC (`moqt://`) on the same port.

> [!IMPORTANT]
> **To cite MOQtail in your academic research and elsewhere, please use:**
>
> **Zafer Gurel, Deniz Ugur and Ali C. Begen, "MOQtail: open-source, IETF-compliant MOQT protocol libraries," in _Proc. ACM Multimedia Systems Conf. (MMSys)_, Hong Kong, Hong Kong, Apr. 2026 ([DOI: 10.1145/3793853.3799817](https://doi.org/10.1145/3793853.3799817))**

## Components

### moqtail-ts

The TypeScript library targets browser and WebTransport-based MoQ applications.

Highlights:

- Type-safe application APIs
- WebTransport integration
- Client-side development workflow with the demo app

Library…
