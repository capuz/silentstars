---
repo: "ymxfl/dom-pointer-mcp"
name: "dom-pointer-mcp"
description: "DOM Pointer MCP bridges the gap between browsers and AI coding tools. You no longer need to manually describe which DOM element you want to modify; just click on it in the browser, write down the notes for the expected operation, and your AI tool will automatically receive the complete element context—CSS, selectors, component information, etc.—to execute the code modification. Say goodbye to manual copy-pasting, screenshot annotations, and blind guessing of selectors."
originalDescription: "DOM Pointer MCP 弥合了浏览器与 AI 编码工具之间的鸿沟。你无需再手动描述想要修改哪个 DOM 元素，只需在浏览器中点击它，写下你期望操作的备注，你的 AI 工具便会自动接收完整的元素上下文——CSS、选择器、组件信息等——从而执行代码修改。告别手动复制粘贴、告别截图标注、告别盲猜选择器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ymxfl/dom-pointer-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-29T05:52:00Z"
lastCommitAt: "2026-07-12T06:21:09Z"
lastReleaseAt: "2026-05-30T13:51:08Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["ymxfl", "github-actions[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/efcf7a3764f915b34aad63fa22b73950dac9d90a12cfce5020ff0efb80783359/ymxfl/dom-pointer-mcp"
---

**Languages**: **简体中文** · [English](https://github.com/ymxfl/dom-pointer-mcp/blob/HEAD/README.en.md)

# 👆 DOM Pointer MCP

**Select DOM elements in the browser and use natural language to let AI coding tools directly modify the code!**

DOM Pointer MCP is a local tool consisting of a Chrome extension + MCP Server. After installation, you only need to:

1. **`Option+Click` to select an element in the browser**
2. **Write a sentence describing the changes you want**
3. **Press Send**—AI automatically gets the context and modifies the source code

**No need to manually call the MCP tool.** Through the `/pointed` command (Skill or slash command), AI automatically retrieves the context of the selected element and executes your written note, and users do not need to understand the underlying MCP protocol.

## ✨ Features

- 🎯 **`Option+Click` selection** — Hold `Option` (on Windows, it's `Alt`) and click any element; the trigger key can be changed to `Ctrl` or `Command` in the plugin settings.
- ⬆️ **Arrow key fine-tuning of selection** — After selection, use the arrow keys to move the selection box: `↑` for parent, `↓` for child, `←` `→` for siblings, easily select elements that are…
