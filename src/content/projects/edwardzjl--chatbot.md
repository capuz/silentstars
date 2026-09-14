---
repo: "edwardzjl/chatbot"
name: "chatbot"
description: "A simple, multi-user, multi-conversation, web-based chatbot."
readmeQualityOk: true
url: "https://github.com/edwardzjl/chatbot"
homepage: "https://chatbot.agi.zjuici.com"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [46, 45]
stars: 11
forks: 3
openIssues: 0
closedIssues: 48
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-07T15:15:26Z"
lastCommitAt: "2026-09-14T09:12:24Z"
lastReleaseAt: "2023-09-04T16:15:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 77
maintainers: ["dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1af87afc0126c1b41bf7ebdd4ac23979e88ff151c9b3ccb0b57a7035df749f36/edwardzjl/chatbot"
---

# Chatbot

**Chatbot** is a toy project that I built to ~~waste my time~~ escape the stress of work. It is a Single-page application (SPA) that lets you chat with an LLM agent named **Rei** (for now).

In this project, I'm trying to reproduce some key features of popular LLM-based chatbots like [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/) and [Le Chat](https://chat.mistral.ai/chat).

A demo is available at <https://chatbot.agi.zjuici.com/>, which connects to a self-hosted LLM service. However, please note that this is just for demonstration purposes — it’s not production-ready and may go down at any time for any reason.

Also, I’m still quite new to web development (HTML, CSS, JavaScript, React, etc.), so the code in the `web` directory (or even the entire project :worried:) might not be the most aesthetically pleasing. If that's the case, feel free to open an issue or submit a pull request to help me improve things. :wink:

## Key Features

I’ve already implemented some key features for the agent — although many (if not all) are still quite rough around the edges.

### Tool Usage

**Rei** can use external tools to be more helpful. Currently, two tools are…
