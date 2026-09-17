---
repo: "Sarrius/pi-multi-account"
name: "pi-multi-account"
description: "Automatic multi-account failover & rotation for Pi Agent across Anthropic (Claude), OpenAI/ChatGPT Codex, and Qwen/Alibaba."
readmeQualityOk: true
url: "https://github.com/Sarrius/pi-multi-account"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 22
forks: 18
openIssues: 7
closedIssues: 17
watchers: 0
contributors: 9
recentReleases: 7
createdAt: "2026-06-10T05:18:11Z"
lastCommitAt: "2026-09-17T08:51:26Z"
lastReleaseAt: "2026-08-16T09:51:11Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 57
maintainers: ["Vatalion", "Sarrius", "Gabrielgvl"]
openGraphImageUrl: "https://opengraph.githubassets.com/33358f45c1e236d2fea6e7bdf438e7700a06f4422fd8d6385b97408b2c6c10f0/Sarrius/pi-multi-account"
discussionCount: 0
---

# pi-multi-account

Automatic multi-account failover & rotation for [Pi Agent](https://pi.dev/), across **Anthropic (Claude)**, **OpenAI / ChatGPT Codex**, **Kimi For Coding**, **Cursor**, **Qwen / Alibaba**, and **Ollama**.

When the account you are using hits a quota or rate limit, `pi-multi-account` transparently switches to the next authenticated account/model and (optionally) resumes the interrupted task — so a long agent run does not die just because one account ran out of budget.

## What it does

- **Auto-discovers** every authenticated account from `~/.pi/agent/auth.json` (Anthropic Claude Pro/Max, OpenAI/ChatGPT Codex, Kimi For Coding, Cursor, Qwen/Alibaba, and Ollama) and builds the failover rotation dynamically — no manual config editing.
- **Grows the rotation on login.** Run `/login`, choose **Use a subscription**, then select a numbered slot such as `anthropic-account-3` or `openai-codex-account-5`. The next discovery sweep adds it to the rotation automatically.
- **Auto-discovers new Codex models per account.** At session start (and on `reload` / `rediscover`) it reads OpenAI's authenticated model catalog, mirrors each account's actually available models onto its…
