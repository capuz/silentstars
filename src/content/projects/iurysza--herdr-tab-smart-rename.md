---
repo: "iurysza/herdr-tab-smart-rename"
name: "herdr-tab-smart-rename"
description: "Generates context-aware workspace and tab names for Herdr."
readmeQualityOk: true
url: "https://github.com/iurysza/herdr-tab-smart-rename"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai", "bun", "herdr", "herdr-plugin", "terminal"]
stars: 77
forks: 24
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 8
recentReleases: 8
createdAt: "2026-07-13T18:43:12Z"
lastCommitAt: "2026-09-29T10:04:31Z"
lastReleaseAt: "2026-09-28T12:15:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["iurysza", "dependabot[bot]", "jsonMartin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4184cdcde2dc0122dfd19791be9ba2a599ec7390b523d5df7f01e5099e0e4a5f/iurysza/herdr-tab-smart-rename"
---

# Smart Rename

Name your Herdr tabs and agent panes after their current task.

An agent reviewing authentication can show `Review Auth Changes`. A test run can show `Run Tests`. Smart Rename updates these labels in the background so you can find the right tab without opening it.

- Give agents separate pane labels, even when they share a tab.
- Keep names you set yourself until you explicitly reset or rename them.
- Name known commands without an AI call. Use a model to interpret other tasks.
- Reuse connected Pi or OpenCode providers, or supply an OpenAI-compatible API key.

## Demo

https://github.com/user-attachments/assets/0c9d1ff9-58c5-4b87-a505-74fcb62e29b1

## Install on macOS or Linux

You need Herdr 0.7.0+ and Bun 1.2.23+ installed. Pi and OpenCode are optional.

Run this from a Herdr terminal:

```sh
curl -fsSL https://github.com/iurysza/herdr-tab-smart-rename/releases/latest/download/install.sh | sh
```

The installer installs the plugin and opens setup. Choose a model, confirm, and background naming starts.

For Windows, use the [Herdr installation commands](https://github.com/iurysza/herdr-tab-smart-rename/blob/HEAD/docs/install.md#windows). For an existing…
