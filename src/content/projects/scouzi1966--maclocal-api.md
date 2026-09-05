---
repo: "scouzi1966/maclocal-api"
name: "maclocal-api"
description: "'afm' command cli: macOS server and single prompt mode that exposes Apple's Foundation and MLX Models and other APIs running on your Mac through a single aggregated OpenAI-compatible API endpoint. Supports Apple Vision and single command (non-server) inference with piping as well . Now with Web Browser and  local AI API aggregator"
readmeQualityOk: true
url: "https://github.com/scouzi1966/maclocal-api"
language: "Swift"
languages: ["Swift", "Python", "Shell"]
languagePcts: [45, 28, 23]
topics: ["ai", "apple-foundation-models", "apple-intelligence", "local-llm", "macos-app", "macos-swift", "openai-api", "apple-silicon", "finetuning-llms", "localai"]
stars: 337
forks: 17
openIssues: 13
closedIssues: 83
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2025-08-08T01:20:14Z"
lastCommitAt: "2026-09-05T07:48:34Z"
lastReleaseAt: "2025-08-26T03:04:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 37
maintainers: ["scouzi1966"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1034175804/83a5e84c-42c5-4ad2-9019-765d99ec196a"
discussionCount: 0
---

# AFM — local AI infrastructure for Apple Silicon

[Website](https://maclocal.ai) · [Documentation](https://maclocal.ai/docs) · [GitHub releases](https://github.com/scouzi1966/maclocal-api/releases)

> [!IMPORTANT]
> **AFM is moving to a two-layer architecture built on AFMKit.**
>
> [AFMKit](https://github.com/scouzi1966/AFMKit) is the reusable Swift foundation
> for building native AI apps and agents on Apple platforms. It owns the shared
> model contracts and provider runtimes for Apple Foundation Models, MLX, and
> DwarfStar, including generation, streaming, tool calling, structured output,
> and multimodal services.
>
> **maclocal-api remains the complete AFM product**: the `afm` CLI, local
> OpenAI-compatible server, WebUI, packaging, and operational tooling. It now
> consumes one exact-versioned AFMKit dependency instead of carrying parallel
> provider implementations. This separation lets apps and agents embed AFMKit
> directly while server users continue to install and run AFM as before.
>
> The migration is being delivered incrementally. Existing AFM commands and API
> compatibility remain the product contract while provider ownership moves into
> AFMKit and maclocal-api…
