---
repo: "jheroorehj/prompt-polish"
name: "prompt-polish"
description: "This Claude Code mod (prompt-polish) rewrites your prompt with prompt engineering before you send it, following the official prompting guide for your session’s model. A mod is a Claude Code plugin with a hooks module."
originalDescription: "This Claude Code mod (prompt-polish) rewrites your prompt with prompt engineering before you send it, following the official prompting guide for your session’s model. A mod is a Claude Code plugin with a hooks module."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/jheroorehj/prompt-polish"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["anthropic", "claude", "claude-code", "claude-code-mod", "claude-code-mods", "claude-code-plugin", "mods", "prompt-engineering"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T16:05:08Z"
lastCommitAt: "2026-10-29T21:25:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 1
maintainers: ["jheroorehj"]
openGraphImageUrl: "https://opengraph.githubassets.com/abb6d96b543b27a302b340b41a3b01c318a8727437399c4fee2d0eb207fc17a7/jheroorehj/prompt-polish"
---

A Claude Code mod that instantly applies prompt engineering to prompts you write inside Claude Code.</b>

  using the official prompting guide for the session's model.</i>

```
/plugin marketplace add jheroorehj/prompt-polish
/plugin install prompt-polish@prompt-polish
```

There are two ways to use the rewrite.

- **Enter with `AUTO ON`**: When you write a prompt and press Enter, the prompt is first rewritten by a separate model call, and the result is shown in Claude Code's question box, asking you to choose among `Apply Polish` · `Keep Original` · `Retry Polish`. Choosing an option sends that prompt immediately, so you don't need to press Enter again, and no "prompt blocked by hook" record is left in the conversation.
- **`Prompt Polish` button (or `/p_polish <프롬프트>`)**: The window shows the original (`Original Prompt`) and the rewritten result (`Polished Prompt`). Pressing `Apply Polish` replaces the input box contents with the rewritten result. Press Enter to send it yourself.

The figure above shows the step of checking and applying the result in the terminal window. This step is the same flow as rewriting with the `Prompt Polish` button. Since the figure was made, `AUTO ON`…
