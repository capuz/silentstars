---
repo: "noumena-labs/Sipp"
name: "Sipp"
description: "AI inference, packed simply. A blazing-fast, zero-dependency WebGPU runtime to run GGUF models directly in the browser. Features a symmetric API for seamless local execution and cloud provider routing. Built with Rust & C++."
readmeQualityOk: true
url: "https://github.com/noumena-labs/Sipp"
homepage: "https://www.sipp.sh"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 25]
topics: ["ai", "cpp", "gguf", "llm", "local-ai", "rust", "wasm", "webgpu", "inference", "llamacpp"]
stars: 122
forks: 17
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-03-25T16:46:05Z"
lastCommitAt: "2026-09-19T02:48:04Z"
lastReleaseAt: "2026-08-05T05:08:54Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 39
maintainers: ["Constannnnnt", "jjhartmann", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/684132613a134e484f0dc128344871e46a3575bd2e987d05ac2d1938e1a1d72b/noumena-labs/Sipp"
discussionCount: 1
---

</p>

  <ul style="list-style: none;">
    <summary>
      <h1>Sipp</h1>
    </summary>
  </ul>
</div>

  <strong>Serious AI infrastructure. Packaged simply.</strong>
</p>

---

</p>

  <br />
  <br />
</div>

> [!WARNING]
> Sipp is under active development. Breaking changes are expected as we optimize the runtime layers. It might not be suitable for mission-critical production environments yet. If you find issues, bugs, or missing features, please open a GitHub issue.

### [Read the documentation →](https://github.com/noumena-labs/Sipp/blob/HEAD/docs/en/README.md)
### [中文文档 →](https://github.com/noumena-labs/Sipp/blob/HEAD/docs/zh/README.md)

## What is Sipp?

Sipp is an all-in-one, high-performance AI framework for building web, desktop, and edge applications. It ships as a cohesive SDK with a unified, symmetric API for local, provider, and cloud gateway inference.

At its core is **Sipp Engine**, a blazing-fast runtime built to run anywhere: in the browser, on the desktop, or on bare-metal cloud infrastructure, that delivers low startup times and a minimal memory footprint.

```javascript
import { Endpoint, SippClient } from '@sipphq/sipp';

const blender = new SippClient();…
