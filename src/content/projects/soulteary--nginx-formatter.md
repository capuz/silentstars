---
repo: "soulteary/nginx-formatter"
name: "nginx-formatter"
description: "Small and easy-to-use Nginx configuration formatting tool (CLI & GUI), support Docker, x86, ARM, macOS..."
readmeQualityOk: true
url: "https://github.com/soulteary/nginx-formatter"
homepage: "https://soulteary.com/2023/05/20/code-writing-practice-supported-by-ai-quickly-implement-nginx-configuration-formatting-tool.html"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["docker", "nginx", "nginx-conf", "nginx-configuration", "nginx-docker", "nginx-formatter"]
stars: 65
forks: 6
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2023-04-18T13:36:30Z"
lastCommitAt: "2026-08-09T04:48:00Z"
lastReleaseAt: "2026-08-09T04:31:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["soulteary", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/000e92193ab56d5c786596e9247990e4ec1a858589db7f73ccc6901ece65a17a/soulteary/nginx-formatter"
---

# Nginx Formatter

</p>

Nginx configuration formatter ~10MB size, support CLI, WebUI, x86, ARM, Linux, macOS.

> **What's new in v2.0.0**
>
> - Rewrote the formatting engine with a native Go AST-based nginx parser, replacing the previous `goja` / `beautifier.js` runtime. No JavaScript runtime dependency anymore, faster and lighter.
> - Switched the WebUI to the [Fiber](https://github.com/gofiber/fiber) web framework.
> - Upgraded to Go 1.26 with root-scoped filesystem access for safer directory traversal.
> - Various bug fixes: preserve backslash escapes in bare words, tolerate directives missing a trailing semicolon before `}` or EOF, and smarter `return` directive normalization.

## Download

Download the binaries for your system and architecture from the [releases page](https://github.com/soulteary/nginx-formatter/releases).

If you use docker, you can use the following command ([DockerHub](https://hub.docker.com/r/soulteary/nginx-formatter)):

```bash
docker pull soulteary/nginx-formatter:latest
docker pull soulteary/nginx-formatter:v2.0.0
```

### Homebrew

On macOS / Linux you can install it via [Homebrew](https://github.com/soulteary/homebrew-tap):

```bash
brew tap…
