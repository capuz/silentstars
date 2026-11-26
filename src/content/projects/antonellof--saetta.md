---
repo: "antonellof/saetta"
name: "saetta"
description: "A fully native local coding agent in C, combining an inference engine and agent harness in a single runtime. A complete port of Pi, built for Apple Silicon (M1+ with 32 GB RAM or more), supporting Qwen3.8, Inkling 2 Mini, and a growing range of open coding models."
readmeQualityOk: true
url: "https://github.com/antonellof/saetta"
homepage: "https://saetta.dev"
language: "C"
languages: ["C"]
languagePcts: [81]
topics: ["apple-silicon", "c", "coding-agents", "inference", "llm", "local-llm", "metal", "mlx", "openai-api", "qwen"]
stars: 20
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-19T15:13:32Z"
lastCommitAt: "2026-11-26T15:22:59Z"
lastReleaseAt: "2026-11-21T17:40:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 45
maintainers: ["antonellof"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b63257ac732f9b84468b3d4a51aebac1a65118215e4b236c34465a6d9c1639/antonellof/saetta"
---

Saetta Code is the agent inside the `saetta` binary, a 2.3 MB program. It has pi's tools, sessions, skills, MCP servers and terminal UI, and the model runs in the same process, so nothing goes over HTTP between the two. The engine is written in C and hand-written Metal for agent work: long prompts that share a prefix (20K to 200K tokens), short answers and tool calls. It runs on any Apple Silicon Mac with 32 GB of memory or more and picks the model that fits.

## Start

```sh
curl -fsSL https://saetta.dev/install.sh | sh    # into ~/.local/bin
cd ~/src/my-project
saetta start code
```

On the first run `saetta start code` shows the model that fits this Mac, downloads it after you confirm (resumable, hash-checked, into `~/Models`) and opens the agent on it. By memory it picks `coder` (Qwen3.8-Flash-Next, 76 GB) with 96 GB or more, `27b-turbo` (a Qwen3.8-27B fine-tune, 20 GB, converted from its GGUF: about 40 GB free disk while it runs) with 36 GB, and `27b-4bit` (16 GB) with 32 GB.

To run another model, download its pack and name it:
