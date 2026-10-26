---
repo: "Meapri/hermes-google-antigravity-plugin"
name: "hermes-google-antigravity-plugin"
description: "Google Antigravity OAuth provider plugin for Hermes Agent"
readmeQualityOk: true
url: "https://github.com/Meapri/hermes-google-antigravity-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T09:39:11Z"
lastCommitAt: "2026-10-26T18:05:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 12
maintainers: ["Meapri"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9cbf41fc8ce349d43e6f2a6410f44ff168e5f2abb98a20de8f818979296cd85/Meapri/hermes-google-antigravity-plugin"
---

# Native Google Antigravity model provider for Hermes

This provider sends **native Gemini JSON over Google Cloud Code PA**, using Google
OAuth. There is no OpenAI-compatible HTTP endpoint, proxy, or server. Hermes'
installed `agent.gemini_native_adapter.GeminiNativeClient` owns message/tool
conversion, thought signatures, streaming, usage accounting, continuation tokens,
and response objects. Completion-shaped Python objects are internal Hermes ABI,
not an OpenAI wire protocol.

## Requirements and installation

Requires a recent Hermes with `ProviderProfile.create_client`, provider-owned
`auth_handler` / `refresh_credential`, `hermes_cli.auth_oauth_pkce_plugin`, and
`GeminiNativeClient`. These interfaces are described in the
[official provider plugin documentation](https://hermes-agent.nousresearch.com/docs/developer-guide/model-provider-plugin).
No Hermes core edits are required.

From this repository root, install **only** the model-provider directory into the
profile you intend to use:

```sh
HOME_DIR="${HERMES_HOME:-$HOME/.hermes}"
mkdir -p "$HOME_DIR/plugins/model-providers/google-antigravity"
cp…
