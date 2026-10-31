---
repo: "godot-fun/gai"
name: "gai"
description: "A lightweight AI agent and skill workflow framework built with Godot."
readmeQualityOk: true
url: "https://github.com/godot-fun/gai"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [77]
topics: ["agent", "ai", "cli", "framework", "gdscript", "godot", "python", "skills"]
stars: 197
forks: 19
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-15T02:48:51Z"
lastCommitAt: "2026-10-31T09:53:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 20
maintainers: ["jaysunxiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/3068463ca2e6ad8d598cf43dcfd31da30838b2b8879e1dcda06777d1c460f36f/godot-fun/gai"
---

# GAI

**An all-in-one AI workspace for Godot game development: build and verify code with a desktop agent, then connect audio, image, and video tools through visual workflows.**

GAI brings together a coding agent, reusable skills, command-line tools, and a lightweight Godot framework in one repository. Ask the agent to inspect a project, edit files, run commands, and execute tests—or connect processing nodes visually to build repeatable asset pipelines.

## Desktop Coding Agent

Complete the full loop from request to verification in a native Godot desktop interface:

- Stream responses, command output, and file changes in real time
- Use built-in `read`, `write`, `edit`, `delete`, `list_dir`, `glob`, `grep`, `bash`, `web_search`, and `web_fetch` tools
- Run a model loop that calls tools, feeds their results back to the model, and repeats until it stops asking for tools or you end the run
- Run multiple independent sessions and switch between them while agents are working
- Preserve conversation history and pin frequently used sessions
- Create workspace checkpoints before changes, with support for reverting conversations and files
- Connect to OpenAI-compatible APIs with…
