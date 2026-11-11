---
repo: "n8n-io/nod"
name: "nod"
description: "Open source personal agent with its own computer. It chases invoices, preps your calls and cancels trials on real websites, and asks before it acts. Runs on your machine with the model you choose. By n8n."
readmeQualityOk: true
url: "https://github.com/n8n-io/nod"
homepage: "https://nod.n8n.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agents", "ai-agent", "ai-assistant", "anthropic", "automation", "browser-automation", "computer-use", "electron", "llm", "local-first"]
stars: 359
forks: 46
openIssues: 4
closedIssues: 3
watchers: 4
contributors: 33
recentReleases: 3
createdAt: "2026-09-25T13:46:42Z"
lastCommitAt: "2026-11-11T19:36:45Z"
lastReleaseAt: "2026-11-11T07:30:27Z"
status: "newborn"
tags: []
healthScore: 88
undervaluedScore: 28
maintainers: ["aalises", "johancutych", "frstavares"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1387586059/fd23eec7-45b4-49b7-90f8-9987697d5716"
discussionCount: 5
---

It runs on your machine with the model you choose, and asks before it acts for you.

  It learns about you only from your own messages, never from the pages or emails it reads.<br />

- **Runs on your computer or server.** Files, memory, and saved logins stay there. Your model provider gets what each task needs.
- **Uses the model you choose.** OpenAI, Anthropic, Gemini, OpenRouter, Bedrock, Vertex AI, Azure, 20+ more, or your own server. Or sign in with ChatGPT Plus or Pro.
- **Follows your rules.** The server checks each app action, and each website step that can change something, against your request and rules. Anything they don't cover waits for your yes.
- **Keeps secrets out of the model.** Vault enters passwords, codes, and cards privately on the website.
- **Shows what it did.** Every action and sign-in is in Usage, with costs and a monthly limit on API models.

```mermaid
flowchart TB
  you(["You<br/>app · Telegram · WhatsApp"]):::pink
  server["Nod server<br/>Pi runtime · trust check<br/>Vault · memory · schedules"]:::pink
  you --> server
  server --> workspace["Linux workspace<br/>sandbox container"]
  server --> browser["Chromium<br/>browser container"]
  server -->…
