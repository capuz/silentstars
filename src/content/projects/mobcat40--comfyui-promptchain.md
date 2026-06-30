---
repo: "mobcat40/ComfyUI-PromptChain"
name: "ComfyUI-PromptChain"
description: "A visual prompt engineering toolkit for ComfyUI. Chain prompts together, see what fires, lock what works."
url: "https://github.com/mobcat40/ComfyUI-PromptChain"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [42, 37]
topics: ["ai-art", "comfy-ui", "comfyui", "comfyui-custom-nodes", "generative-ai", "prompt-engineering", "randomization", "stable-diffusion", "wildcards", "workflow-automation"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-25T00:10:01Z"
lastCommitAt: "2026-06-30T06:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["mobcat40"]
openGraphImageUrl: "https://opengraph.githubassets.com/81dbb23e8b3196ffce18ac4e74e3366919d7bddec3a2ca2cb8a76c488e23b6f2/mobcat40/ComfyUI-PromptChain"
---

<h1 align="left"><img src="docs/spacer.webp" width="10" alt=""><img src="docs/wordmark.webp" alt="ComfyUI-PromptChain" height="43"></h1>

</p>

> ⚠️ **Beta.** This is an early public release; things may change and break. Feedback welcome.

A prompt-authoring and image-iteration suite for [ComfyUI](https://github.com/comfyanonymous/ComfyUI). PromptChain turns the raw prompt box into a model-aware, structured workflow, then carries that structure through posing, generating, viewing, editing, and upscaling.

## Prompt authoring

- **Prompt Chain node**: a real code editor on the node with syntax highlighting, comments, multi-line editing, and a collapsible output panel showing the compiled positive/negative prompt, a live server console, and this node's gallery.
- **Chain modes**: link multiple Prompt Chain nodes and pick how their text merges, shown live in the toolbar. **Combine** all, **Randomize** one at random, **Switch** to a chosen branch, or **Iterate** through options across queued runs.
- **Wildcards**: inline `::Label::a|b` option sets that randomize, cycle, or switch, plus `__file__` wildcards whose per-token badge sets the mode inline.
- **Autocomplete**: booru tag…
