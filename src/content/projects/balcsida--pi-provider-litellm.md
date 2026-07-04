---
repo: "balcsida/pi-provider-litellm"
name: "pi-provider-litellm"
description: "LiteLLM proxy provider extension for Pi"
url: "https://github.com/balcsida/pi-provider-litellm"
homepage: "https://pi.dev/packages/pi-provider-litellm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["litellm", "pi-agent", "pi-extension"]
stars: 15
forks: 11
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-28T07:41:30Z"
lastCommitAt: "2026-07-04T19:19:15Z"
lastReleaseAt: "2026-06-10T08:48:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 68
maintainers: ["balcsida", "dependabot[bot]", "cemoody"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1223305175/1ecb14e3-c10f-4256-807e-a168842512a1"
---

# pi-provider-litellm

LiteLLM proxy provider extension for [Pi](https://pi.dev).

Discovers models from a self-hosted LiteLLM proxy and registers them under the `litellm` provider. Supports `/login litellm`, `/litellm-refresh`, LiteLLM MCP tools, LiteLLM Skills Gateway prompt injection, and Google ADC token auth. Tries `/model/info` first (admin endpoint with rich metadata), falls back to `/v1/models` (OpenAI-compatible) on 401/403/404, then tries `/health` plus per-endpoint `/model/info` for older LiteLLM proxies.

## Install

```bash
pi install npm:pi-provider-litellm
```

Pi fetches the package from npm and registers it. Add `-l` to install into project settings (`.pi/settings.json`) instead of global.

To try it without installing (one-off, current run only):

```bash
pi -e npm:pi-provider-litellm
```

<details>
<summary>Alternative: install from source</summary>

```bash
git clone https://github.com/balcsida/pi-provider-litellm.git ~/.pi/agent/extensions/pi-provider-litellm
cd ~/.pi/agent/extensions/pi-provider-litellm
npm ci
npm run clean && npm run build
```

</details>

## Configure

### Option A — interactive login

Inside pi:

```
/login litellm
```

You can also run…
