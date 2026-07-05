---
repo: "ct6502/apple2ts"
name: "apple2ts"
description: "Apple II Emulator in TypeScript"
readmeQualityOk: true
url: "https://github.com/ct6502/apple2ts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 101
forks: 24
openIssues: 9
closedIssues: 116
watchers: 11
contributors: 8
recentReleases: 0
createdAt: "2021-12-30T05:34:24Z"
lastCommitAt: "2026-07-05T20:54:21Z"
lastReleaseAt: "2025-05-07T04:35:48Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 47
maintainers: ["boredsenseless", "ct6502", "anomixer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a926eeaf18d64325a2ed11d2f30fd8bda0c43050921586456338beb8f4b63b7c/ct6502/apple2ts"
discussionCount: 2
---

# Apple2TS - Apple II Emulator in Typescript

Created by Chris Torrence (chris&lt;at&gt;ct6502&lt;dot&gt;org), with significant contributions from Michael Morrison (codebythepound&lt;at&gt;gmail&lt;dot&gt;com). Thanks also to the Apple II community for feedback, bug reports, and feature requests.

This project was originally create using [Create React App](https://github.com/facebook/create-react-app) and was then migrated to [vite](https://vitejs.dev/guide/) following [these steps](https://darekkay.com/blog/create-react-app-to-vite/).

---

## AI Agent Integration

**[AI Agent Integration Guide](https://github.com/ct6502/apple2ts/blob/HEAD/src/ui/mcp/README.md)**

Apple2TS includes an integrated AI Agent capable of interacting with the emulator (inspecting CPU registers, viewing screen text, reading/writing memory, managing breakpoints, etc.). It supports:
- Anthropic Claude
- OpenAI ChatGPT
- DeepSeek AI
- Google Gemini
- **Ollama (Local)** (with tool-calling models like `ornith:9b`, `qwen2.5-coder`, etc.)

Refer to the guide above for detailed setup, including environment configurations for local Ollama.

---

## Development

Be sure to install `node.js` and `npm` on your…
