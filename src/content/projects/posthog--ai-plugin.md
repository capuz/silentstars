---
repo: "PostHog/ai-plugin"
name: "ai-plugin"
description: "Official PostHog plugin for Claude Code, Cursor, Gemini, Codex and other AI coding tools"
readmeQualityOk: true
url: "https://github.com/PostHog/ai-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["claude-code-plugin", "cursor-plugin", "gemini-cli-extension", "codex-plugin"]
stars: 81
forks: 15
openIssues: 10
closedIssues: 6
watchers: 0
contributors: 36
recentReleases: 0
createdAt: "2026-02-18T21:38:03Z"
lastCommitAt: "2026-09-10T08:22:36Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 30
maintainers: ["releaser-ai-plugin[bot]", "skoob13", "andrewm4894"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b604529a09db26005fe34620a5c117c8ab9667d3c9ae4ad9845296f6a644708/PostHog/ai-plugin"
---

# PostHog AI plugin

Official PostHog plugin for AI clients. Access PostHog products directly from your AI coding tool.

## Installation

### Claude Code

1. Install the plugin:
    ```bash
    claude plugin install posthog
    ```

    Or install from this repo as a marketplace:
    ```bash
    claude plugin marketplace add PostHog/ai-plugin
    claude plugin install posthog@posthog
    ```

2. Authenticate via OAuth:
    ```bash
    # Just enter Claude Code anywhere
    claude
    # Then, use the /mcp command within Claude, select plugin:posthog:posthog, and press Enter
    /mcp
    ```
    Then follow the browser prompts to log into PostHog.

3. (Optional) Send Claude Code sessions to PostHog LLM Analytics.

    Add to `~/.claude/settings.json` (global) or `.claude/settings.local.json` (per-project):
    ```json
    {
      "env": {
        "POSTHOG_LLMA_CC_ENABLED": "true",
        "POSTHOG_API_KEY": "phc_...",
        "POSTHOG_HOST": "https://eu.i.posthog.com"
      }
    }
    ```

    Both `POSTHOG_LLMA_CC_ENABLED=true` and `POSTHOG_API_KEY` are required. Sessions are sent when Claude Code exits. Set `POSTHOG_LLMA_PRIVACY_MODE=true` to redact prompt/output content. Add…
