---
repo: "Vortalitys/PrivHunterAI-detects-access-vulnerabilities"
name: "PrivHunterAI-detects-access-vulnerabilities"
description: "A tool that detects unauthorized access vulnerabilities through passive proxies, leveraging mainstream AI systems such as Kimi, DeepSeek, GPT, and others."
readmeQualityOk: true
url: "https://github.com/Vortalitys/PrivHunterAI-detects-access-vulnerabilities"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [60, 40]
topics: ["access-control", "ai-driven-security", "ai-security", "ai-vulnerability-detection", "authorization-bypass", "authz-testing", "deepseek", "gpt", "kimi", "llm-security"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-15T16:22:56Z"
lastCommitAt: "2026-07-25T06:02:01Z"
lastReleaseAt: "2025-12-15T16:23:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/225ac8553056f389b974a862404e89b4e2c5a8f9418113e345cccc2f17aeafe5/Vortalitys/PrivHunterAI-detects-access-vulnerabilities"
---

# PrivHunterAI   
A tool that detects unauthorized access vulnerabilities through passive proxying, leveraging mainstream AI engines such as Kimi, DeepSeek, GPT, and others. Its core detection capabilities are built upon the open APIs of these AI engines, supporting data transmission and interaction via the HTTPS protocol.

## Workflow

## Instructions for Use
1. Download the source code or Releases;
2. Edit the `config.json` file in the root directory to configure the `AI` and corresponding `apiKeys` (only one configuration is required); (AI values can be set to qianwen, kimi, hunyuan, gpt, glm, or deepseek);
3. Configure `headers2` (headers for Request B); optionally configure `suffixes` and `allowedRespHeaders` (interface suffix whitelist, e.g., .js);
4. Execute `go build` to compile the project, then run the binary file (if you downloaded Releases, you can run the binary file directly);
5. After the first program launch, install the certificate to resolve HTTPS traffic. The certificate is automatically generated upon initial startup and located at ~/.mitmproxy/mitmproxy-ca-cert.pem (Windows path: %USERPROFILE%\\.mitmproxy\mitmproxy-ca-cert.pem). For installation steps, refer…
