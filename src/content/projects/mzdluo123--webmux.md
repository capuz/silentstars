---
repo: "mzdluo123/webmux"
name: "webmux"
description: "A terminal that keeps running in the browser: a single Go binary, sessions survive disconnects, works on mobile, and is built for remotely driving CLI agents like Claude Code and Codex"
originalDescription: "在浏览器里持续运行的终端：单个 Go 二进制，断线不丢会话，适配手机，为远程遥控 Claude Code、Codex 等 CLI agent 而生"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mzdluo123/webmux"
homepage: "https://webmux.rainbit.net"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 29]
stars: 14
forks: 3
openIssues: 5
closedIssues: 80
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-10-13T17:02:40Z"
lastCommitAt: "2026-11-03T12:48:35Z"
lastReleaseAt: "2026-10-21T03:17:31Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["mzdluo123", "pullfrog[bot]", "myot233"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d40de948dc9c928d72f08e912cf433bafba203b91fd6555565657bd32b4bccd/mzdluo123/webmux"
---

**A terminal that keeps running in the browser — built for remotely driving CLI agents like Claude Code and Codex**

[Three-step overview](#三步看懂) · [Interface overview](#界面一览) · [Features](#功能) · [Quick start](#快速开始) · [Docs](#文档) · [Get help](#获取帮助) · [Contributing](https://github.com/mzdluo123/webmux/blob/HEAD/CONTRIBUTING.md)

---

### Let an agent keep running on your server, and take over from any device at any time.

You ask Claude Code at your desk to refactor a module, then you have to leave. You close the laptop and the agent keeps working. On the subway your phone lights up: it has stopped to ask you a question, and one reply lets it continue. At the office you open the browser, and the diff of the changes is already sitting beside the terminal. Review it, then keep working in the same terminal. **The whole way it is one process, and not a single line of output is lost.**

WebMux is built for exactly this: a single binary of about 15 MB that keeps terminal sessions on the server side, while the browser, phone, and local terminals just attach to them.

### Three steps to understand it

### Why you'll love it

The full design philosophy and feature list are in the [Project…
